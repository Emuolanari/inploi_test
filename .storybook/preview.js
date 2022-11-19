import tailwindCss from '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'
const storybookStyles = document.createElement('style')
storybookStyles.innerHTML = tailwindCss
document.body.appendChild(storybookStyles)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}