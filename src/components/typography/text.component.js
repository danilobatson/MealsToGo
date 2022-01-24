import styled from 'styled-components/native'
import {Text} from 'react-native'

const defaultTextStyle = (theme) => `
fontFamily: ${theme.fonts.body};
fontWeight: ${theme.fontWeights.regular}
color: ${theme.colors.text.primary}
flexWrap: wrap;
marginTop: 0px
marginBottom: 0px
`
const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const TextContent = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

TextContent.defaultProps = {
  variant: "body",
};
