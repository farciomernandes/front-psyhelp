/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import { GoLocation } from 'react-icons/go';

import { Container, Button, User, Locale, CommentField, Info, Buttons } from './styles';

interface ICommentProps{
    name: string;
    photo: string;
    city: string;
    uf: string;

}

const Comment: React.FC<ICommentProps> = ({name, city, uf, photo }: ICommentProps ) =>
    (
        <Container>
            <User>
                <section>
                    <img src={photo} alt="Photo of user!" />
                </section>
                <Info>
                    <section>
                        <h2>{name}</h2>
                    </section>
                    <Locale>
                        <GoLocation /> <p>Recife, PB</p>
                     </Locale>                
                </Info>
            </User>

            <CommentField>
                <p>Mussum Ipsum, cacilds vidis litro abertis. 
                    Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. 
                    Detraxit consequat et quo num tendi nada. Posuere libero varius. 
                    ullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. 
                    Diuretics paradis num copo é motivis de denguis. </p>
            </CommentField>

            <Buttons>
            <Button> Ver Comentários </Button>
            <Button> Comentar </Button>


            </Buttons>
            
        </Container>
    )


export default Comment;