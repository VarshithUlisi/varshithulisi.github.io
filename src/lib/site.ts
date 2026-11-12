export const name = 'Varshith Sai Ulisi';
export const description = 'The portfolio of Varshith Sai Ulisi: technology and product development, finance, research, diplomacy, community initiatives, and writing.';
export const contact = 'ulisivarshithsai@gmail.com';
export const path = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const absolute = (p = '', site: URL | undefined) => new URL(path(p), site || 'https://example.com').href;
export const dateLabel = (d: Date) => d.toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});

export const linkedin = 'https://www.linkedin.com/in/varshithulisi/';
