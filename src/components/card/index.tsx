/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import { GoLocation } from 'react-icons/go';

import { Container, Button, User, Content, Locale } from './styles';

interface ICardProps{
    name: string;
    speciality: string;
    city: string;
    uf: string;
    photo: string;
    phone: number;
}

const Card: React.FC<ICardProps> = ({name, speciality, photo, city, uf, phone }: ICardProps ) =>
    (
        <Container>
        <Content>
            <User>
                <img src={photo} alt="Photo of user!" />
                <h2>{name}</h2>
                <p>{speciality}</p>
            </User>

            <Button>
                <a href={`https://api.whatsapp.com/send?phone=55${phone}&text=dasd`}>
                    Contatar
                </a>
            </Button>

            <p>Ou {phone}</p>

            <Locale>
                <GoLocation /> <p>{city}, {uf}</p>
            </Locale>

        </Content>

        
        </Container>
    )


export default Card;