import React, { Component } from 'react'
import { css } from 'styled-components'

const sizes = {
  tablet: 768,
  phone: 414,
}

const queries = {
  phone: `(max-width: ${sizes.phone}px)`,
  tablet: `(max-width: ${sizes.tablet}px) and (min-width: ${sizes.phone + 1}px)`,
  desktop: `(min-width: ${sizes.tablet + 1}px)`,
}

// Iterate through the sizes and create a media template
const media = {
  phone: (...args) => css`
    @media ${queries.phone} {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media ${queries.tablet} {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media ${queries.desktop} {
      ${css(...args)}
    }
  `,
}

export default media
