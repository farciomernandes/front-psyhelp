import React from 'react';

import { Container, Content, Items } from './styles';
import Header from '../../components/header';
import Menu from '../../components/menu';
import DetailComments from '../../components/detail-comments';




const Comment: React.FC = () =>
    (
        <Container>
            <Menu />
            <Content>
                <Header photo="https://www.cursofieldelideranca.com.br/wp-content/uploads/2017/09/AugustusNicodemus.jpg" name="Augustos Nicodemus" />
                
            <Items>
            <DetailComments city="Aurora" name="Paul Washer" uf="CE" photo="https://pbs.twimg.com/profile_images/1349812968721174530/hnQayduM.jpg"  />

            </Items>

            </Content>
        </Container>
    )


export default Comment;