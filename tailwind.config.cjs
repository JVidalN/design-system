/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    fontSize: {
      xs: ['12px', { fontWeight: '400', lineHeight: '18.75px', }],
      sm: ['14px', { fontWeight: '400', lineHeight: '22px', }],
      sm2: ['14px', { fontWeight: '500', lineHeight: '22px', }],
      base: ['14px', { fontWeight: '400', lineHeight: '16px', }],
      lg: ['16px', { fontWeight: '500', lineHeight: '28px', }],
      xl: ['24px', { fontWeight: '500', lineHeight: '22px', }],
    },
    colors: {
      transparent: 'transparent',
      brand: {
        primary: {
          darkest: '#0068AB',
          dark: '#0077B3',
          dark01: '#008ACF',
          dark02: '#0068AB',
          light: '#EDF8FD',
        },
        secondary: {
          darkest: '#002C50',
          dark: '#0C395D',
          light: '#C7E1EE',
        },
        background: {
          DEFAULT: '#F8F8F8',
        }
      },
      neutral: {
        dark: {
          base: '#303133',
          dark01: '#595A5C',
          dark02: '#979899',
          dark03: '#E0E0E0',
          dark04: '#B6B6B6',
        },
        light: {
          base: '#FFFFFF',
          light01: '#FAFAFA',
          light02: '#F5F5F5',
          light03: '#F1F1F1',
        },
      },
      alert: {
        success: {
          darkest: '#347A12',
          dark: '#52C41A',
          medium: '#B7EB8F',
          light: '#F6FFED',
        },
        info: {
          darkest: '#01588C',
          dark: '#1890FF',
          medium: '#91D5FF',
          light: '#E6F7FF',
        },
        danger: {
          darkest: '#B82121',
          dark: '#FF4D4F',
          medium: '#FFCCC7',
          light: '#FFF1F0',
        },
        warning: {
          darkest: '#E5A100',
          dark: '#FAAD14',
          medium: '#FFE58F',
          light: '#FFFBE6',
        },
      },
      extra: {
        orange: '#F19529',
        error: '#D32F2F',
        logo: '#3FB9BC',
      },
      menu: {
        background: '#0C395D',
        exit: '#002C50',
        line: '#1F5B8A',
        item: {
          selected: '#07253D'
        },
        text: {
          selected: '#C7E1EE',
          disabled: '#C7E1EE 49%',
        },
      },
    },
    fontFamily: {
      roboto: 'Roboto, sans-serif',
      markpro: 'Mark Pro, sans-serif',
    }
  },
  plugins: [],
}
