import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    global: {
      background: string
      text: string
    }
  }
}
