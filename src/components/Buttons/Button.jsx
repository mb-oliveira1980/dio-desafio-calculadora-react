import { ButtonContainer } from './Button_style';

const Button = ({label, onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
  );
}

export default Button;