// src/lib/content.ts
// Читает JSON-файлы из /content/pages/ без Tina GraphQL (локальный режим)
import { readFileSync } from 'fs';
import { join } from 'path';

function read<T>(name: string): T {
  const p = join(process.cwd(), 'content', 'pages', `${name}.json`);
  return JSON.parse(readFileSync(p, 'utf-8')) as T;
}

export const getHomepage  = () => read<any>('homepage');
export const getSettings  = () => read<any>('settings');
export const getPartners  = () => read<any>('partners');
