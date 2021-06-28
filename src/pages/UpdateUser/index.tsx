/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from "@unform/web";


import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { BiUserCircle  } from 'react-icons/bi';
import { FaCity } from 'react-icons/fa';


import Input from '../../components/input/index';
import Button from '../../components/button';


import { Container, FormContainer } from './styles';
import api from '../../services/api';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';

interface IUpdateUser{
    email: string;
    password: string;
    name: string;
    uf: string;
}

const UpdateUser: React.FC = () => {

    const { user, setUser } = useContext(AuthContext);
    const history = useHistory();

    useEffect(()=>{
        console.log('SACA SÓ: ' + user.id);
        if(user.crp){
            history.push("/update/psicologo");
        }
    },[history, user.crp, user.id])
    


    const handleSubmit = async(data: IUpdateUser)=>{
        console.log(data);

        try {
            api.put(`/user/${user.id}`, {
                email: data.email,
                password: data.password,
                name: data.name,
                uf: data.uf,
            });
            setUser()
            history.push("/dashboard");
        } catch (error) {
            window.alert("Erro, tenta novamente!")
        }
    }

    return(
        <Container>
                <FormContainer>
                <Form onSubmit={handleSubmit}
                initialData={{
                    email: user.email,
                    password: user.password,
                    name: user.name,
                    uf: user.uf,
                }}>
                <h1><span>Psy</span>Help</h1>
                <h2>Atualizar Dados</h2>
                
                <Input icon={AiOutlineMail} type="text" name="email" />
                <Input icon={AiFillLock} type="password" name="password" />
                <Input icon={BiUserCircle} type="text" name="name" />
                <Input icon={FaCity} type="text" name="uf" />


                <Button type="submit">
                    Atualizar
                </Button>
            </Form>
                <Link to="/">Ir para o Dashboard</Link>
                    
                </FormContainer>
         
        </Container>
    )

}
   
export default UpdateUser;