/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from "@unform/web";


import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { BiUserCircle, BiBookAlt  } from 'react-icons/bi';
import { FaCity } from 'react-icons/fa';
import { IoMaleFemaleSharp }from 'react-icons/io5';
import { GrBaby, GrDocument } from 'react-icons/gr';
import { RiBookletLine, RiWhatsappLine } from 'react-icons/ri';
import { BsHouse } from 'react-icons/bs';


import Input from '../../components/input/index';
import Button from '../../components/button';


import { Container, FormContainer, Speciality } from './styles';
import api from '../../services/api';

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

const SignUpPsicologo: React.FC = () => {

    const history = useHistory();

    const handleSubmit = async(data: ICreatePsicologo)=>{
        console.log(data);

        try {
            api.post("/psicologo", {
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

            history.push("/dashboard");
        } catch (error) {
            window.alert("Erro, tenta novamente!")
        }
    }

    return(
        <Container>
                <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <h1><span>Psy</span>Help</h1>
                    <h2>Cadastro Psicólogo</h2>
                    <div>
                    <section>
                    <Input icon={AiOutlineMail} type="text" name="email" />
                    <Input icon={AiFillLock} type="password" name="password" />
                    <Input icon={BiUserCircle} type="text" name="name" />
                    <Input icon={FaCity} type="text" name="uf" />
                    <Input icon={IoMaleFemaleSharp} type="text" name="sex" />
                    
                    </section>

                    <section>
                    <Input icon={GrBaby} type="number" name="year" />
                    <Input icon={GrDocument} type="number" name="crp" />
                    <Input icon={RiWhatsappLine} type="number" name="phone" />
                    <Input icon={BsHouse} type="text" name="city" />
                    <Input icon={RiBookletLine} type="text" name="description" />
                    </section>

                    </div>
                    
                    <Speciality>
                    <Input icon={BiBookAlt} type="text" name="speciality" />

                    </Speciality>

                    <Button type="submit">
                        Entrar
                    </Button>
                </Form>
                <Link to="/">Ir para Login</Link>
                    
                </FormContainer>
         
        </Container>
    )

}
   
export default SignUpPsicologo;