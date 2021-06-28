import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useField } from "@unform/core";

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';
import { useCallback } from 'react';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}
  

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) =>{
    const [ isFocused, setIsFocused ] = useState(false);
    const [ isField, setIsField ] = useState(false);

    const { fieldName, registerField } = useField(name);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputBlur = useCallback(() =>{
        setIsFocused(false);
        if(inputRef.current?.value){
            setIsField(!!inputRef.current?.value)
        }
    },[])

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    },[fieldName, registerField])
    
    return(
        <Container isField={isField} isFocused={isFocused}>
        { Icon && <Icon size={50} /> }

            <input 
            onFocus={()=>setIsFocused(true)}
            onBlur={handleInputBlur}
            ref={inputRef} 
            {...rest} 
            placeholder={name}
            />

        </Container>
    )
}
   


export default Input;