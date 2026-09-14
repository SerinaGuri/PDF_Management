// src/routes/dashboard/+page.server.js
import { getPdfsByUser, pool } from '$lib/server/db.js';
import { redirect, fail } from '@sveltejs/kit';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';

export async function load({ locals }) {
  if (!locals.user) {
    throw redirect(303, '/login');
  }
  if (locals.user.role === 'admin') {
    throw redirect(303, '/admin');
  }

  const pdfs = await getPdfsByUser(locals.user.id);
  return { pdfs, user: locals.user };
}

export const actions = {
  upload: async ({ request, locals }) => {
    if (!locals.user) {
      throw redirect(303, '/login');
    }

    const data = await request.formData();
    const file = data.get('pdf');

    if (!file || file.size === 0) {
      return fail(400, { error: 'Bitte eine Datei auswählen' });
    }
    if (file.type !== 'application/pdf') {
      return fail(400, { error: 'Nur PDF-Dateien sind erlaubt' });
    }

    const uniqueName = `${Date.now()}_${file.name}`;

    // Token jetzt explizit übergeben
    const blob = await put(uniqueName, file, {
      access: 'public',
      token: BLOB_READ_WRITE_TOKEN
    });

    await pool.query(
      'INSERT INTO pdfs (filename, filepath, owner_id) VALUES (?, ?, ?)',
      [file.name, blob.url, locals.user.id]
    );

    return { success: true };
  }
};