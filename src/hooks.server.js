// src/hooks.server.js
import { pool } from '$lib/server/db.js';

export async function handle({ event, resolve }) {
  // Prüfen ob ein Session-Cookie vorhanden ist
  const userId = event.cookies.get('session_user_id');

  if (userId) {
    // User anhand der ID aus der DB laden
    const [rows] = await pool.query('SELECT id, username, role FROM users WHERE id = ?', [userId]);
    if (rows.length > 0) {
      // User-Daten für alle Routen verfügbar machen (event.locals)
      event.locals.user = rows[0];
    }
  }

  return resolve(event);
}