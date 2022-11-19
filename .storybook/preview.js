import tailwindCss from '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
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