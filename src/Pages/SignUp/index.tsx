/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineMail, AiFillLock } from 'react-icons/ai';

import Input from '../../components/input/index';
import Button from '../../components/button';

import signInIMG from '../../assets/signin.svg';

import { Container, FormContainer, Left, Right } from './styles';


const SignUp: React.FC = () =>
    (
        <Container>
            <Left>
                <img src={signInIMG} />
            </Left>
            <Right>
                <FormContainer>
                    <h1><span>Psy</span>Help</h1>
                    <h2>Cadastro</h2>
                    
                    <Input icon={AiOutlineMail} type="text" name="E-mail" />
                    <Input icon={AiFillLock} type="password" name="Password" />

                    <Button>
                        Entrar
                    </Button>
                    <Link to="/">Já é cadastrado? Faça Login</Link>
                </FormContainer>
            </Right>
        </Container>
    )

export default SignUp;