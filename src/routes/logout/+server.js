import { redirect } from '@sveltejs/kit';
 
export async function GET({ cookies }) {
  // Session-Cookie löschen
  cookies.delete('session_user_id', { path: '/' });
  // Zurück zur Login-Seite
  throw redirect(303, '/login');
}