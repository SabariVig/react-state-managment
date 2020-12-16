import { AppProps } from 'next/app'
import React from 'react'
import StyleProvider from '../lib/Components/Style'

function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  )
}

export default App
