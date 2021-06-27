import React from 'react';

import { Container, Content, Items } from './styles';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Post from '../../components/post';



const Posts: React.FC = () =>
    (
        <Container>
            <Menu />
            <Content>
                <Header photo="https://www.cursofieldelideranca.com.br/wp-content/uploads/2017/09/AugustusNicodemus.jpg" name="Augustos Nicodemus" />
                
            <Items>
            <Post city="Aurora" name="Paul Washer" uf="CE" photo="https://pbs.twimg.com/profile_images/1349812968721174530/hnQayduM.jpg"  />
            <Post city="Aurora" name="Paul Washer" uf="CE" photo="https://pbs.twimg.com/profile_images/1349812968721174530/hnQayduM.jpg"  />
            <Post city="Aurora" name="Paul Washer" uf="CE" photo="https://pbs.twimg.com/profile_images/1349812968721174530/hnQayduM.jpg"  />
            <Post city="Aurora" name="Paul Washer" uf="CE" photo="https://pbs.twimg.com/profile_images/1349812968721174530/hnQayduM.jpg"  />

            </Items>

            </Content>
        </Container>
    )


export default Posts;