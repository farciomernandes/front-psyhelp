/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import { Container } from './styles';

interface ICardProps{
    category: string;
    text: string;
}

const ForumCard: React.FC<ICardProps> = ({category, text }: ICardProps ) =>
    (
        <Container>
            <h3>{category}</h3>
            <p>{text}</p>
        </Container>
    )


export default ForumCard;