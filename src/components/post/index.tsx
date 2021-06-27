/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import { Container, User, Locale, CommentField, Info } from './styles';

interface ICommentProps{
    category:string;
    text: string; 
    title: string; 
}



const Post: React.FC<ICommentProps> = ({category, text, title }: ICommentProps ) =>
    (
        <Container>
            <User>
                <section>
                </section>
                <Info>
                    <section>
                        <h2>{title}</h2>
                    </section>
                    <Locale>
                        <p>-{category}</p>
                     </Locale>                
                </Info>
            </User>

            <CommentField>
                <p>
                    {text}
                </p>
            </CommentField>
        </Container>
    )


export default Post;