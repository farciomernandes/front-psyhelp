/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Button from '../../components/button';


import { Container, FormContainer } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Reportar: React.FC = () => {

    const { user, setUser } = useContext(AuthContext);

    return(
        <Container>
                <FormContainer>
                    
                <form action="mailto:psyhelproject@gmail.com@gmail.com"
                 method="get"
                 target="_blank"
                >
                <h1><span>Psy</span>Help</h1>
                <h2>Reportar um bug ou dar sugestão</h2>
                <input value={user.name} readOnly />
          
                 <input value={user.email}  readOnly />
          
                 <textarea name="Mensagem" placeholder="Sua Mensagem"/>

                <Button type="submit"  value="click">
                    Reportar
                </Button>
            </form> 
                </FormContainer>
         
        </Container>
   
    

   )

}
   
export default Reportar;