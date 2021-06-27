import React from 'react';

import { Container, Content, Items } from './styles';
import Header from '../../components/header';
import Menu from '../../components/menu';
import ForumCard from '../../components/forum-card';


const Forum: React.FC = () =>
    (
        <Container>
            <Menu />
            <Content>
                <Header photo="https://www.cursofieldelideranca.com.br/wp-content/uploads/2017/09/AugustusNicodemus.jpg" name="Augustos Nicodemus" />
                
            <Items>

                <ForumCard category={"Depressão"} text={"Clique aqui e veja as últimas postagens da categoria depressão no fórum do Psyhelp!"} />
                <ForumCard category={"Ansiedade"} text={"Clique aqui e veja as últimas postagens da categoria ansiedade no fórum do Psyhelp!"} />
                <ForumCard category={"Esquizofrenia"} text={"Clique aqui e veja as últimas postagens da categoria esquizofrenia no fórum do Psyhelp!"} />
                <ForumCard category={"Estresse"} text={"Clique aqui e veja as últimas postagens da categoria estresse no fórum do Psyhelp!"} />

            </Items>
        
            </Content>
        </Container>
    )


export default Forum;