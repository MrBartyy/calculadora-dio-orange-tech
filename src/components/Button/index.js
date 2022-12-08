import {ButtonContainer} from './styles'

const Button = ({label, onClick, variant= "inside"}) => {
    return (
      <ButtonContainer onClick={onClick} variant={variant}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  