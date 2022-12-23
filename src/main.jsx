import React from 'react'
import ReactDOM from 'react-dom/client'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/bebas-neue"
import App from './App'
import './index.css'


const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#0d1b2a',
        color: "white"
      }
    }
  },
  colors: {
    main: '#0d1b2a'
  },
  fonts: {
    body: `'Bebas Neue'`
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
