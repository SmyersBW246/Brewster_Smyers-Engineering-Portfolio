export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
export const email = 'brewstersmyers@outlook.com';
export const linkedin = 'https://www.linkedin.com/in/brewstersmyers/';
