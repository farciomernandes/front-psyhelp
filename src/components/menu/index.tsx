import React from 'react';

import { MdDashboard } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BsFlag } from 'react-icons/bs';
import { RiReplyFill } from 'react-icons/ri';

import { Container, Items, Item, Content, LinkButton } from './styles';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useCallback } from 'react';
 

const Menu: React.FC = () =>{

    const { logout } = useContext(AuthContext);

    const handleLogout = useCallback(()=>{
        logout()
    },[logout])

    return(
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
                    <LinkButton to="/forum">Fórum</LinkButton>
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
            <Item onClick={handleLogout}>
                <RiReplyFill />    
                <LinkButton to="/">Sair</LinkButton>
            </Item>
            </div>
           
        
        </Container>
    )
}
    


export default Menu;