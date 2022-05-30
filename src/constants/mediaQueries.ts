//emotion.sh/docs/media-queries

export const BREAKPOINTS = [1024, 1280, 1440];

export const MEDIA_QUERIES = BREAKPOINTS.map((bp) => `@media (min-width: ${bp}px)`);
