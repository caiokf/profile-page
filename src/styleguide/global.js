import { createGlobalStyle } from 'styled-components'
import typography from './typography'

export default createGlobalStyle`
  body {
    margin: 0;
    ${typography.regular};
  }
`
