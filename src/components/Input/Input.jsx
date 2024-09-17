import { InputContainer } from './Input_style';

const Input = ({value}) => {
    return (
        <InputContainer>
            <input value={value}/>
        </InputContainer>
    );
}

export default Input;