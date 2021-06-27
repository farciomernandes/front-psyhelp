import React from 'react';

import { Container, Content, Items } from './styles';
import Header from '../../components/header';
import Menu from '../../components/menu';
import ForumCard from '../../components/forum-card';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const Forum: React.FC = () =>{
    const { user } = useContext(AuthContext);


    return (
        <Container>
            <Menu />
            <Content>
            <Header
                    photo="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png" 
                    name={user.name}
                 />                
            <Items>

                <ForumCard 
                category={"DEPRESSAO"} 
                text={"Clique aqui e veja as últimas postagens da categoria depressão no fórum do Psyhelp!"} 
                redirect="/search"
                />
                
                <ForumCard 
                category={"ANSIEDADE"} 
                text={"Clique aqui e veja as últimas postagens da categoria ansiedade no fórum do Psyhelp!"} 
                redirect="/search"
                />
                
                <ForumCard 
                category={"ESQUIZOFRENIA"} 
                text={"Clique aqui e veja as últimas postagens da categoria esquizofrenia no fórum do Psyhelp!"} 
                redirect="/search"
                />
                <ForumCard 
                category={"ESTRESSE"} 
                text={"Clique aqui e veja as últimas postagens da categoria estresse no fórum do Psyhelp!"} 
                redirect="/search"
                />

            </Items>
        
            </Content>
        </Container>
    )

}
   

export default Forum;