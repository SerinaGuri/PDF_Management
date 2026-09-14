// src/routes/admin/+page.server.js
import { getAllPdfs, pool } from '$lib/server/db.js';
import { redirect, fail } from '@sveltejs/kit';
import { del } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';
 
export async function load({ locals }) {
  if (!locals.user) {
    throw redirect(303, '/login');
  }
  if (locals.user.role !== 'admin') {
    throw redirect(303, '/dashboard');
  }
 
  const pdfs = await getAllPdfs();
  return { pdfs, user: locals.user };
}
 
export const actions = {
  delete: async ({ request, locals }) => {
    if (!locals.user || locals.user.role !== 'admin') {
      throw redirect(303, '/login');
    }
 
    const data = await request.formData();
    const pdfId = data.get('id');
 
    const [rows] = await pool.query('SELECT * FROM pdfs WHERE id = ?', [pdfId]);
    if (rows.length === 0) {
      return fail(404, { error: 'PDF nicht gefunden' });
    }
 
    await del(rows[0].filepath, { token: BLOB_READ_WRITE_TOKEN });
    await pool.query('DELETE FROM pdfs WHERE id = ?', [pdfId]);
 
    return { success: true };
  }
};