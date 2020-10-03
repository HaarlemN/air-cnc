import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 70px 20px 0 20px;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  border: 1px solid #999;
  padding: 0 20px;
  font-size: 16px;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 2px;
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
