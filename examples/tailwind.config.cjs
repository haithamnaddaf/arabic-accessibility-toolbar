module.exports = {
  content: ['./examples/**/*.{ts,tsx}', './accessibility-toolbar/assets/**/*.tsx'],
  theme: { extend: { colors: {
    background: 'hsl(var(--background) / <alpha-value>)',
    foreground: 'hsl(var(--foreground) / <alpha-value>)',
    card: 'hsl(var(--card) / <alpha-value>)',
    popover: 'hsl(var(--popover) / <alpha-value>)',
    muted: 'hsl(var(--muted) / <alpha-value>)',
    'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
    border: 'hsl(var(--border) / <alpha-value>)',
    primary: 'hsl(var(--primary) / <alpha-value>)',
    'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
    ring: 'hsl(var(--ring) / <alpha-value>)',
  } } },
};
