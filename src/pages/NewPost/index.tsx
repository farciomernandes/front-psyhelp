import React, { useCallback } from 'react';
import { Form } from "@unform/web";

import { Container, Content, Items, FormContainer } from './styles';

import Button from '../../components/button';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Input from '../../components/input';

import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';


interface ICreatePost{
    text: string;
    title: string;
    category:string;
    
  }


const NewPost: React.FC = () =>{
    const { user } = useContext(AuthContext);
    const history = useHistory();


    useEffect(()=>{
        if(!user.crp){
            window.alert("Somente psicologos podem realizar postagens");
            history.push("/dashboard")
        }
    },[user, history])


    const handleSubmit = useCallback(async(data: ICreatePost): Promise<void>=>{
        try{

            await api.post(`/posts/${user.id}`, {
                email: data.text,
                password: data.title,
                name: data.category,
            });

            history.push('/dashboard')

        }catch(err){

            window.alert("Erro, tente novamente!")
        }


    },[history, user.id])

    return(
        <Container>
            <Menu />
            <Content>
            <Header
                    photo="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png" 
                    name={user.name}
                 />                
            <Items>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <h1><span>Psy</span>Help</h1>
                    <h2>Nova Publicação</h2>
                    
                    <Input type="text" name="title" />
                    <Input type="text" name="category" />
                    <Input type="text" name="text" />

                    <Button type="submit">
                        Entrar
                    </Button>
                </Form>
                </FormContainer>
            </Items>

            </Content>
        </Container>
    )
}
   
export default NewPost;