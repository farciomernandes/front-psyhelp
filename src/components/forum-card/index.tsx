/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { Container, LinkOption } from './styles';

interface ICardProps{
    category: string;
    text: string;
    redirect: string;
}

const ForumCard: React.FC<ICardProps> = ({category, text, redirect }: ICardProps ) =>{
    

    const { handleSearch } = useContext(AuthContext);

    
    return(
        <Container onClick={()=>handleSearch(category)}>
            <LinkOption to={redirect}>
                <h3>{category}</h3>
                <p>{text}</p>
            </LinkOption>
        </Container>
    )
}
    


export default ForumCard;