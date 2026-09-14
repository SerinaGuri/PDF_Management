// src/lib/server/db.js
import mysql from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from '$env/static/private';

export const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT
});

// Findet einen User anhand von Username + Passwort (für Login)
export async function findUser(username, password) {
  const [rows] = await pool.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password]
  );
  return rows[0]; // undefined, falls kein Match gefunden wurde
}

// Gibt alle PDFs eines bestimmten Users zurück (für Dashboard)
export async function getPdfsByUser(userId) {
  const [rows] = await pool.query(
    'SELECT * FROM pdfs WHERE owner_id = ?',
    [userId]
  );
  return rows;
}

// Gibt ALLE PDFs zurück, inkl. Besitzer-Username (für Admin-View)
export async function getAllPdfs() {
  const [rows] = await pool.query(`
    SELECT pdfs.*, users.username 
    FROM pdfs 
    JOIN users ON pdfs.owner_id = users.id
  `);
  return rows;
}