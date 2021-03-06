import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 70px 20px 0 20px;

  background-color: #fff;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
`;

export const DatePicker = styled.View`
  border: 1px solid #999;
  padding: 0 20px;
  margin-bottom: 20px;
  border-radius: 2px;
  height: 44px;

  justify-content: center;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: #444;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  background: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const CancelButton = styled.TouchableOpacity`
  margin-top: 10px;
  height: 42px;
  background: #ccc;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
