import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'EL GHEMARY Farah',
  title: 'Arsteminist',
  description: 'STEM & Art : Personal Blog',
  lang: 'en',
  themes: {
    dark: 'github-dark',
    light: 'github-light'
  }
} satisfies Config
