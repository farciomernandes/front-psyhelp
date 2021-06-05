/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import { GoLocation } from 'react-icons/go';

import { Container, Button, User, Content, Locale } from './styles';

interface ICardProps{
    name: string;
    speciality: string;
    photo: string;
}

const Card: React.FC<ICardProps> = ({name, speciality, photo }: ICardProps ) =>
    (
        <Container>
        <Content>
            <User>
                <img src={photo} alt="Photo of user!" />
                <h2>{name}</h2>
                <p>{speciality}</p>
            </User>

            <Button>
                Contatar
            </Button>

            <Locale>
                <GoLocation /> <p>Recife, PB</p>
            </Locale>

        </Content>

        
        </Container>
    )


export default Card;