import React from 'react'
import { useRecoilValue } from 'recoil'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import StyleStore from '../Context/Style'

const GlobalStyle = createGlobalStyle`

  body {
	background: ${({ theme }) => theme.global.background};
	color: ${({ theme }) => theme.global.text};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const StyleProvider = ({ children }) => {
  const theme = useRecoilValue(StyleStore)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default StyleProvider
