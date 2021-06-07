/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import { GoLocation } from 'react-icons/go';

import { Container, Button, Buttons, CommentaryContainer,  LoggedUser, CommentText, Item, CommentedField, User, Locale, PostField, Info, AllComments } from './styles';

interface ICommentProps{
    name: string;
    photo: string;
    city: string;
    uf: string;
}

interface ICommentPostProps{
    photo: string;
    name: string;
    text: string;
    key: number;
}

const Comments: ICommentPostProps[] = [
    {
        key: 1,
        name: 'Marcio',
        photo:"https://3.bp.blogspot.com/-GY39CgvLR6E/UNuqSoxayVI/AAAAAAAAM68/NtygDlxF4-s/s1600/Donquixote+Doflamingo.png",
        text: "Muito Legal!"
    },
    {
        key: 2,
        name: 'Fernando Fernandes',
        photo:"https://3.bp.blogspot.com/-GY39CgvLR6E/UNuqSoxayVI/AAAAAAAAM68/NtygDlxF4-s/s1600/Donquixote+Doflamingo.png",
        text: "Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Sapien in monti palavris qui num significa nadis i pareci latim. "
    },
    {
        key: 3,
        name: 'Lucas Macêdo',
        photo:"https://3.bp.blogspot.com/-GY39CgvLR6E/UNuqSoxayVI/AAAAAAAAM68/NtygDlxF4-s/s1600/Donquixote+Doflamingo.png",
        text: "Não gostei!"
    },
    
]

const DetailComments: React.FC<ICommentProps> = ({name, city, uf, photo }: ICommentProps ) =>
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

            <PostField>
                <p>Mussum Ipsum, cacilds vidis litro abertis. 
                    Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. 
                    Detraxit consequat et quo num tendi nada. Posuere libero varius. 
                    ullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. 
                    Diuretics paradis num copo é motivis de denguis. </p>
            </PostField>

            <AllComments>
            {Comments.map(comment=> 

            <Item key={comment.key}>
                <CommentedField>
                <img src={comment.photo} alt="Foto do comentarista" />
                    <h3>{comment.name}</h3>
                </CommentedField>
                <CommentText>
                    <p>{comment.text}</p>
                </CommentText>
            </Item>
            )}

            <LoggedUser>
                <CommentedField>
                <img src={photo} alt="Foto do comentarista" />
                    <h3>{name}</h3>
                </CommentedField>
                <CommentaryContainer>
                    <div>
                        <textarea placeholder="Escreva seu comentário"/>
                    </div>
                    <Buttons>
                        <Button>Voltar para o fórum</Button>
                        <Button>Comentar</Button>
                    </Buttons>
                    
                </CommentaryContainer>
            </LoggedUser>
            </AllComments>
            
        </Container>
    )


export default DetailComments;