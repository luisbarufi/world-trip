import { extendTheme } from '@chakra-ui/react'

const colors = {
  gray: {
    700: '#47585b',
    500: '#999999',
    400: 'rgba(153, 153, 153, 0.5)',
    300: '#dadada',
    100: '#f5f8fa'
  },
  yellow: {
    400: '#ffba08',
    300: 'rgba(255, 186, 8, 0.5)',
  }
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins',
}

const styles = {
  global: {
    body: {
      bg: 'gray.100',
      color: 'gray.700',
    }
  }
}

export const theme = extendTheme({ colors, styles, fonts })
