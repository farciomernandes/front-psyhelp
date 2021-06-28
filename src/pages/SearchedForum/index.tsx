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
}



const SearchedForum: React.FC= () =>{
    const [ posts, setPosts ]= useState([{} as IPostsProps] );

    const { user, search } = useContext(AuthContext);

    useEffect(()=>{
       async function loadingPosts(){
        const response = await api.get(`/posts/${search}`);
        setPosts(response.data);
        }

        loadingPosts();
    },[search])

    return(
        <Container>
            <Menu />
            <Content>
                <Header 
                photo="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png" 
                name={user.name} />
                    
            <Items>
                <section>
                <h3>Essas são todas as postagens da categoria {search}</h3>
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
    


export default SearchedForum;