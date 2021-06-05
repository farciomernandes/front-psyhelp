import React from 'react';

import { Container, Content, Items } from './styles';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Card from '../../components/card';


const Dashboard: React.FC = () =>
    (
        <Container>
            <Menu />
            <Content>
                <Header photo="https://www.cursofieldelideranca.com.br/wp-content/uploads/2017/09/AugustusNicodemus.jpg" name="Augustos Nicodemus" />
                
            <Items>
            <Card photo="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
                name="Neymar"
                speciality="Cair no Campo"
            />
            <Card photo="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
                name="Neymar"
                speciality="Cair no Campo"
            />
            <Card photo="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
                name="Neymar"
                speciality="Cair no Campo"
            />
             <Card photo="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
                name="Neymar"
                speciality="Cair no Campo"
            />
             <Card photo="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
                name="Neymar"
                speciality="Cair no Campo"
            />
             <Card photo="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
                name="Neymar"
                speciality="Cair no Campo"
            />
             <Card photo="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
                name="Neymar"
                speciality="Cair no Campo"
            />
             <Card photo="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
                name="Neymar"
                speciality="Cair no Campo"
            />
             <Card photo="https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
                name="Neymar"
                speciality="Cair no Campo"
            />
            
            
            </Items>
        
            </Content>
        </Container>
    )


export default Dashboard;