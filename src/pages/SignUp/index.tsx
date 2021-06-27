/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from "@unform/web";
import api from '../../services/api';



import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FaCity } from 'react-icons/fa';
import { IoMaleFemaleSharp }from 'react-icons/io5';
import { GrBaby } from 'react-icons/gr';

import Input from '../../components/input/index';
import Button from '../../components/button';

import signInIMG from '../../assets/signin.svg';

import { Container, FormContainer, Left, Right } from './styles';
import { useCallback } from 'react';

interface ICreateUser{
  email: string;
  password: string;
  name:string;
  year: number,
  uf: string;
  sex: string;
}

const SignUp: React.FC = () => {
    
    const history = useHistory();

    const handleSubmit = useCallback(async(data: ICreateUser): Promise<void>=>{
        try{

            await api.post('/user', {
                email: data.email,
                password: data.password,
                name: data.name,
                year: data.year,
                sex: data.sex,
                uf: data.uf
            });

            history.push('/dashboard')

        }catch(err){

            window.alert("Erro, tente novamente!")
        }


    },[history])

    return(
        <Container>
            <Left>
                <img src={signInIMG} />
            </Left>
            <Right>
                <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <h1><span>Psy</span>Help</h1>
                    <h2>Cadastro Paciente</h2>
                    
                    <Input icon={AiOutlineMail} type="text" name="email" />
                    <Input icon={AiFillLock} type="password" name="password" />
                    <Input icon={BiUserCircle} type="text" name="name" />
                    <Input icon={FaCity} type="text" name="uf" />
                    <Input icon={IoMaleFemaleSharp} type="text" name="sex" />
                    <Input icon={GrBaby} type="number" name="year" />


                    <Button type="submit">
                        Entrar
                    </Button>
                </Form>
                    
                    <Link to="/">Ir para Login</Link>
                </FormContainer>
            </Right>
        </Container>
    )

}
   
export default SignUp;