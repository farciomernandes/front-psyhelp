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
                    <MdDashboard /> <p>Dashboard</p>
                </Item>
                <Item>
                    <HiOutlineClipboardList />
                    <p>Fórum</p>
                </Item>
                <Item>
                    <BsPeopleFill />
                    <p>Psicólogos</p>
                </Item>
                <Item>
                    <BsFlag />
                    <p>Apoio</p>
                </Item>
            </Items>

            </Content>
            
           
            <div>
            <Item>
                <RiReplyFill />    <LinkButton to="/">Sair</LinkButton>
            </Item>
            </div>
           
        
        </Container>
    )


export default Menu;