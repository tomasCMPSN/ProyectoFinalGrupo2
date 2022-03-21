import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";




export const NavLinks=styled(LinkScroll)`
color: #ffff;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
padding: 0 1rem;
height: 100%;

&.active{
    border-bottom: 3px solid #ffff;
}


`


