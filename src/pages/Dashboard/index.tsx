import React, { useState } from 'react';

import { Container, Content, Items } from './styles';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Card from '../../components/card';
import { useEffect } from 'react';
import api from '../../services/api';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


interface PsicologoProps{
    name: string;
    email: string;
    speciality: string;
    uf: string;
    city: string;
    description: string;
    phone: number;
}


const Dashboard: React.FC = () =>{
    const [psicologos, setPsicolgoos ] = useState([{} as PsicologoProps]);

    const { user } = useContext(AuthContext);

    useEffect(()=>{
        async function loadingPsicologos() {
            const response = await api.get('/psicologo');

            setPsicolgoos(response.data);
        }

        loadingPsicologos();
    },[])

    return(
        <Container>
            <Menu />
            <Content>
                <Header
                    photo="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png" 
                    name={user.name}
                 />
                
            <Items>
                {psicologos.map((psicologo)=>(
                    <Card 
                    photo="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png" 
                    name={psicologo.name}
                    speciality={psicologo.speciality}
                    city={psicologo.city} 
                    uf={psicologo.uf} 
                    phone={psicologo.phone}
                    />
                ))}
            
            </Items>
        
            </Content>
        </Container>
    )
}
    


export default Dashboard;