import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #4323d4;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #ebe8e8;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #4a3996;
  color: #0c0b0b;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 2s ease-out;

  &:hover, &:focus{
    background-color: #88b4f1;
    color:#fffff;
  }
  `;
