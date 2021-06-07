import React from 'react';

import { MdDashboard } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BsFlag } from 'react-icons/bs';
import { RiReplyFill } from 'react-icons/ri';

import { Container, Items, Item, Content, LinkButton } from './styles';


const Menu: React.FC = () =>
    (
        <Container>
            <Content>
                <div>
                    <h1><span>Psy</span>Help</h1>  
                </div>
                <Items>
                <Item>
                    <MdDashboard /> 
                    <LinkButton to="/dashboard">Dashboard</LinkButton>
                </Item>
                <Item>
                    <HiOutlineClipboardList />
                    <LinkButton to="/posts">Fórum</LinkButton>
                </Item>
                <Item>
                    <BsPeopleFill />
                    <LinkButton to="/psicologos">Psicólogos</LinkButton>
                </Item>
                <Item>
                    <BsFlag />
                    <LinkButton to="/apoio">Apoio</LinkButton>
                </Item>
            </Items>

            </Content>
            
           
            <div>
            <Item>
                <RiReplyFill />    
                <LinkButton to="/">Sair</LinkButton>
            </Item>
            </div>
           
        
        </Container>
    )


export default Menu;