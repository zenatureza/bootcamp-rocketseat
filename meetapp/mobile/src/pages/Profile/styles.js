import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Title = styled.Text`
  color: ${colors.textColor};
  align-self: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background: ${colors.btnSaveProfileColor};
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: ${colors.btnPrimaryColor};
`;
