import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}
  

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) =>
    (
        <Container>
        { Icon && <Icon size={50} /> }

            <input {...rest} placeholder={name}/>
        </Container>
    )


export default Input;