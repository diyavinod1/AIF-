/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // neutral gray
        input: "var(--color-input)", // pure white
        ring: "var(--color-ring)", // deep professional blue
        background: "var(--color-background)", // warm off-white
        foreground: "var(--color-foreground)", // rich near-black
        primary: {
          DEFAULT: "var(--color-primary)", // deep professional blue
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // sophisticated slate
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // clear red
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // light gray
          foreground: "var(--color-muted-foreground)", // balanced gray
        },
        accent: {
          DEFAULT: "var(--color-accent)", // success-oriented emerald
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // pure white
          foreground: "var(--color-popover-foreground)", // rich near-black
        },
        card: {
          DEFAULT: "var(--color-card)", // pure white
          foreground: "var(--color-card-foreground)", // rich near-black
        },
        success: {
          DEFAULT: "var(--color-success)", // vibrant green
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // professional amber
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // clear red
          foreground: "var(--color-error-foreground)", // white
        },
        surface: "var(--color-surface)", // pure white
        "text-primary": "var(--color-text-primary)", // rich near-black
        "text-secondary": "var(--color-text-secondary)", // balanced gray
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'floating': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 250ms ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        slideUp: {
          from: {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '90': '90',
        '100': '100',
        '200': '200',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
