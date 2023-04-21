import React from "react";
import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
    width: 300px;
    background-color: lightgreen;
    overflow: auto;
    margin: 0 auto;
`;

const Link = styled.a`
    float: right;
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 24px;
`;

class Bar extends Component {
    render() {
        return(
            <Nav>
                <Link href="#">
                    0
                </Link>
            </Nav>
        )
    }
}

export default Bar;