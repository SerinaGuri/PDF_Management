import { pool } from '$lib/server/db.js';
import { fail, redirect } from '@sveltejs/kit';
 
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');
 
    // Grundlegende Validierung
    if (!username || !password) {
      return fail(400, { error: 'Bitte Username und Passwort ausfüllen' });
    }
    if (password.length < 4) {
      return fail(400, { error: 'Passwort muss mindestens 4 Zeichen lang sein' });
    }
 
    // Prüfen, ob der Username schon existiert
    const [existing] = await pool.query(
      'SELECT id FROM users WHERE username = ?',
      [username]
    );
    if (existing.length > 0) {
      return fail(400, { error: 'Dieser Username ist bereits vergeben' });
    }
 
    // Neuen User anlegen (Rolle standardmäßig "user")
    await pool.query(
      'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
      [username, password, 'user']
    );
 
    // Nach erfolgreicher Registrierung zur Login-Seite weiterleiten
    throw redirect(303, '/login');
  }
};