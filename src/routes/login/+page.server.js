// src/routes/login/+page.server.js
import { findUser } from '$lib/server/db.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    // User in der DB suchen
    const user = await findUser(username, password);

    if (!user) {
      // Login fehlgeschlagen -> Fehlermeldung zurück an die Seite
      return fail(400, { error: 'Falscher Username oder Passwort' });
    }

    // Session-Cookie setzen (speichert nur die User-ID)
    cookies.set('session_user_id', user.id, {
      path: '/',
      httpOnly: true,   // Cookie nicht per JavaScript auslesbar (Sicherheit)
      maxAge: 60 * 60 * 24 // 1 Tag gültig
    });

    // Je nach Rolle weiterleiten
    if (user.role === 'admin') {
      throw redirect(303, '/admin');
    } else {
      throw redirect(303, '/dashboard');
    }
  }
};