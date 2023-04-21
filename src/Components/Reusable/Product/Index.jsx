import React from "react";
import styled from "styled-components";
import Counter from "../Counter/Index";

const imgProduct = 'https://cdn0-production-images-kly.akamaized.net/naZOfuzIFeA5pk5E4GkGB0g8PbU=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093628/original/008903900_1585930368-burrito-chicken-delicious-dinner-461198.jpg';

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Images = styled.img`
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;
    font-size: 22px;
`;

const Description = styled.p`
    font-size: small;
`;

class Product extends React.Component {
    render() {
        return(
            <div>
                <CardContainer>
                    <Images src={imgProduct} alt="img" />
                    <Heading>Tittle Card</Heading>
                    <Price>$19.99</Price>
                    <Description>LOREM IPSUM CUYUYYYY MAU APALAGI SI LU HAH INI CUMA SEKEDAR LOREM IPSUM</Description>
                    <Counter />
                </CardContainer>
            </div>
        )
    }
}

export default Product;