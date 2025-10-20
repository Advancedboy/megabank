export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchUsers() {
  const res = await fetch(`${API_URL}/api/users`);
  return res.json();
}
