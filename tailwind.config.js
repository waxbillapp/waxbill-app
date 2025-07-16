/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',        // ← your page files
    './components/**/*.{js,ts,jsx,tsx}',   // ← if/when you add a components/ folder
    './styles/**/*.{css}',                 // ← global CSS files
  ],
  theme: {
    extend: {
      colors: {
        background:      'var(--color-background)',
        surface:         'var(--color-surface)',
        primary:         'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'accent-blue':   'var(--color-accent-blue)',
        'accent-orange': 'var(--color-accent-orange)',
        success:         'var(--color-success)',
        error:           'var(--color-error)',
        text:            'var(--color-text)',
        muted:           'var(--color-muted)',
      },
      fontFamily: {
        sans: ['var(--font-base)'],
      },
      fontSize: {
        xs:   'var(--font-size-xs)',
        sm:   'var(--font-size-sm)',
        base: 'var(--font-size-md)',
        lg:   'var(--font-size-lg)',
        xl:   'var(--font-size-xl)',
      },
    },
  },
  plugins: [],
}
