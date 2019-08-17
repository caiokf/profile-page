import colors from './colors'
import dimensions from './dimensions'
import media from './media'

const regular = `
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.codGray};
`
export default {
  jumbo: regular + `
    font-size: 36px;
    line-height: 60px;
    font-weight: 700;
    color: ${colors.yankeesBlue};
  `,

  header: regular + `
    font-size: 22px;
    line-height: 24px;
    font-weight: 600;
    color: ${colors.yankeesBlue};
    text-transform: uppercase;
    padding-bottom: ${dimensions.sm};
    margin-bottom: ${dimensions.sm};
  `,

  regular,

  label: regular + `
    font-size: 14px;
    opacity: .8;
    line-height: 18px;
    font-weight: 400;
    color: ${colors.dustyGray};
  `,

  small: regular + `
    font-size: 14px;
    line-height: 18px;
    margin: 5px 0px;
    font-weight: 400;
  `,
}
