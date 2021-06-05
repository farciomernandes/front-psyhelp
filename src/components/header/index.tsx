/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';


import { Container, Content } from './styles';

interface IUserProps{
    name: string;
    photo: string;
}

const Header: React.FC<IUserProps> = ({name, photo }: IUserProps ) =>
    (
        <Container>
            <Content>
                <section>
                    <img src={photo} alt="User" />
                </section>
                <section>
                    <h2>{name}</h2>
                    <p>Welcome</p>
                </section>
            </Content>
        </Container>
    )


export default Header;