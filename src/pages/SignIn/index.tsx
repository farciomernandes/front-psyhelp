/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from "@unform/web";



import { AiOutlineMail, AiFillLock } from 'react-icons/ai';


import Input from '../../components/input/index';
import Button from '../../components/button';

import { AuthContext } from '../../context/AuthContext';


import signInIMG from '../../assets/signin.svg';

import { Container, FormContainer, Left, Right } from './styles';
import { useContext } from 'react';


const SignIn: React.FC = () => {

    const { login } = useContext(AuthContext);

    const handleSubmit = async(data: { email: string; password: string; })=>{

        await login(data);
    
    }

    return(
        <Container>
            <Left>
                <img src={signInIMG} />
            </Left>
            <Right>
                <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <h1><span>Psy</span>Help</h1>
                    <h2>Login</h2>
                    
                    <Input icon={AiOutlineMail} type="text" name="email" />
                    <Input icon={AiFillLock} type="password" name="password" />

                    <Button type="submit">
                        Entrar
                    </Button>
                </Form>
                    
                    <Link to="/signup">Cadastre-se como paciente</Link>
                    <br/>
                    <Link to="/signup/psicologo"><span>Cadastre-se como psicologo</span></Link>

                </FormContainer>
            </Right>
        </Container>
    )

}
   
export default SignIn;