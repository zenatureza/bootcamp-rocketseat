import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  background-image: linear-gradient(
    180deg,
    ${colors.linearBgFirstColor},
    ${colors.linearBgSecondColor});
`;
