/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from "@unform/web";


import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { BiUserCircle, BiBookAlt  } from 'react-icons/bi';
import { FaCity } from 'react-icons/fa';
import { RiBookletLine, RiWhatsappLine } from 'react-icons/ri';
import { BsHouse } from 'react-icons/bs';
import { GiPowerButton } from 'react-icons/gi';


import Input from '../../components/input/index';
import Button from '../../components/button';


import { Container, FormContainer, DeleteAccount, BottonItens } from './styles';
import api from '../../services/api';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';

interface ICreatePsicologo{
    email: string;
    password: string;
    name: string;
    uf: string;
    year: number;
    sex: string;
    crp: string;
    phone: number;
    city: string;
    description: string;
    speciality: string;
}

const UpdatePsicologo: React.FC = (props) => {

    const { user, setUser } = useContext(AuthContext);
    const history = useHistory();

    useEffect(()=>{
        console.log('SACA SÓ: ' + user.id);
        if(!user.crp){
            history.push("/user/update");
        }
    },[history, user.crp, user.id])
    


    const handleSubmit = async(data: ICreatePsicologo)=>{
        console.log(data);

        try {
            api.put(`/psicologo/${user.id}`, {
                email: data.email,
                password: data.password,
                name: data.name,
                uf: data.uf,
                year: data.year,
                sex: data.sex,
                crp: data.crp,
                phone: data.phone,
                city: data.city,
                description: data.description,
                speciality: data.speciality

            });
            setUser()
            history.push("/dashboard");
        } catch (error) {
            window.alert("Erro, tenta novamente!")
        }
    }


    const handleDelete = async()=>{
        
        try{
    
            await api.delete(`/psicologo/${user.id}`); 
            setUser()
        }catch(err){
            window.alert("Erro ao deletar sua conta, tenta novamente!");
        }
    
    }


    return(
        <Container>
                <FormContainer>
                <Form onSubmit={handleSubmit}
                initialData={{
                    email: user.email,
                    password: user.password,
                    name: user.name,
                    uf: user.uf,
                    phone: user.phone,
                    city: user.city,
                    description: user.description,
                    speciality: user.speciality
                }}
                >
                    <h1><span>Psy</span>Help</h1>
                    <h2>Atualizar Dados</h2>
                    <div>
                    <section>
                    <Input icon={AiOutlineMail} type="text" name="email" />
                    <Input icon={AiFillLock} type="password" name="password" />
                    <Input icon={BiUserCircle} type="text" name="name" />
                    <Input icon={FaCity} type="text" name="uf" />
                    </section>

                    <section>
                    <Input icon={RiWhatsappLine} type="number" name="phone" />
                    <Input icon={BsHouse} type="text" name="city" />
                    <Input icon={RiBookletLine} type="text" name="description" />
                    <Input icon={BiBookAlt} type="text" name="speciality" />

                    </section>

                    </div>
                    

                    <Button type="submit">
                        Atualizar
                    </Button>
                </Form>
                <BottonItens>
                <Link to="/">Ir para o Dashboard</Link>
                <DeleteAccount onClick={handleDelete}>
                    <GiPowerButton /> Deletar minha conta
                </DeleteAccount>
                </BottonItens>

                    
                    
                </FormContainer>
         
        </Container>
    )

}
   
export default UpdatePsicologo;