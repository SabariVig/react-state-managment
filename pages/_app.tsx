import { AppProps } from 'next/app'
import React from 'react'
import { RecoilRoot } from 'recoil'
import StyleProvider from '../lib/Components/Style'


function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <StyleProvider>
        <Component {...pageProps} />
      </StyleProvider>
    </RecoilRoot>
  )
}

export default App
