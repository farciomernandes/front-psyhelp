import React from 'react';

import { Container, Content, Items } from './styles';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Post from '../../components/post';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import api from '../../services/api';
import { useState } from 'react';

interface IPostsProps{
    title: string;
    text: string;
    id: string;
    id_author: string;
    category: string;
    approved: number;
}


const Posts: React.FC = () =>{
    const [ posts, setPosts ]= useState([{} as IPostsProps] );

    const { user } = useContext(AuthContext);

    useEffect(()=>{
       async function loadingPosts(){
        const response = await api.get("/posts");
        setPosts(response.data);
        }

        loadingPosts()
    })

    return(
        <Container>
            <Menu />
            <Content>
                <Header 
                photo="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png" 
                name={user.name} />
                    
            <Items>
                <section>
                <p>Bem vindo a pagina principal, aqui você verá várias</p>
                <p> postagens de apoio e experiências de outros usuários!</p>
                <br/> <br/>
                </section>
            
            <section>
            <p>Consulte um dos psicólogos cadastrados</p>
            <p> na plataforma clicando no nome "Psicólogos" no menu a sua esquerda!</p>
            <br/> <br/>
            </section>
            

                {posts.map((post)=>(
                    <Post 
                        category={post.category}
                        text={post.text}
                        title={post.title}
                        key={post.id}
                    />

                ))}
           
            </Items>

            </Content>
        </Container>
    )
}
    


export default Posts;