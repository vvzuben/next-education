/** @type {import('tailwindcss').Config} */
import colors from './tailwind.config.colors.json'

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'h-[385px]',
    'h-[292px]',
    'bg-lavender-mist',
    'lg:grid-cols-1',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'md:grid-cols-1',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'xl:grid-cols-1',
    'xl:grid-cols-2',
    'xl:grid-cols-3',
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'max-lg:block',
  ],
  theme: {
    backgroundImage: {
      'decal-arrow-right': "url('/svg/decal-arrow-right.svg')",
      'decal-arrow-right-orange': "url('/svg/decal-arrow-right-orange.svg')",
      'decal-orange-circle': "url('/svg/decal-orange-circle.svg')",
      'decal-squiggly-lines': "url('/svg/decal-squiggly-lines.svg')",
      'decal-squiggly-lines-purple-left': "url('/svg/decal-squiggly-lines-purple-left.svg')",
      'decal-three-lines-lavender': "url('/svg/decal-three-lines-lavender.svg')",
      'decal-three-lines-royal-purple': "url('/svg/decal-three-lines-royal-purple.svg')",
      'decal-underline-orange-1': "url('/svg/decal-underline-orange-1.svg')",
      'list-checkmark': 'url("/png/check.png")',
      'list-time': 'url("/png/time.png")',
      'form-check': 'url("/svg/form-check.svg")',
      'list-map': 'url("/png/map.png")',
      'paper': "url('/webp/paper.webp')",
      'paper-flipped': "url('/webp/paper-flipped.webp')",
      'shape-rectangle': "url('/svg/shape-rectangle.svg')",
      'quote': "url('/svg/quote.svg')",
      'caret-down': "url('/svg/caret-down.svg')",
    },
    boxShadow: {
      'btn-primary': '0px 4px 0px rgba(0, 0, 0, 0.15)',
      'primary': '0px 22px 40px -7px rgba(25, 13, 26, 0.07)',
      'header': '0px 1px 0px 0px rgba(25, 13, 26, 0.13)',
      'modal': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    fontFamily: {
      'basis-grotesque-bold': ['var(--font-basis-grotesque-bold)'],
      'basis-grotesque-regular': ['var(--font-basis-grotesque-regular)'],
      'gta-light': ['var(--font-gt-alpina-standard-light)'],
      'gta-regular': ['var(--font-gt-alpina-standard-regular)'],
    },
    colors: { ...colors }
  }
}
