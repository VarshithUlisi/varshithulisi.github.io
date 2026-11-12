export const name = 'Varshith Sai Ulisi';
export const description = 'A personal record of building opportunity through education, entrepreneurship, technology, and community service.';
export const contact = 'ulisivarshithsai@gmail.com';
export const path = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const absolute = (p = '', site: URL | undefined) => new URL(path(p), site || 'https://example.com').href;
export const dateLabel = (d: Date) => d.toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});

export const linkedin = 'https://www.linkedin.com/in/varshithulisi/';
