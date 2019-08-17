import colors from './colors'

const regular = `
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 20px;
`
export default {
  regular,

  jumbo: regular + `
    font-size: 48px;
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
  `,

  subheader: regular + `
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: ${colors.yankeesBlue};
  `,

  label: regular + `
    font-size: 14px;
    opacity: .8;
    line-height: 18px;
    font-weight: 400;
    color: ${colors.dustyGray};
  `,

  small: regular + `
    font-size: 12px;
    line-height: 18px;
    margin: 5px 0px;
    font-weight: 400;
    color: ${colors.yankeesBlue};
  `,
}
