import { Search,ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";

const Container = styled.div`
  height: 60px;
 ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  ${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`
  flex: 1;
  display:flex;
align-items:center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
 ${mobile({display:"none"})}

`;
const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center; 
margin-left:25px;
padding:5px;
`
const Input =styled.input`
border:none;
${mobile({width:"50px"})}
`;
const Center = styled.div`
  flex: 1;
  text-align:center;
`;
const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"24"})}
`;
const Right = styled.div`
  flex: 1;
  display:flex;
  justify-content:flex-end;
  
 ${mobile({flex:"4",justifyContent:"center",fontSize:"10px"})}
 `;
  const MenuItem=styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
 ${mobile({fontSize:"12px",marginLeft:"10px"})}

  `;
export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
            <Input placeholder="Search"></Input>
                <Search style={{color:"gray",fontSize:16}}></Search>
          
            </SearchContainer>
        </Left>
        <Center><Logo>a._m_.5</Logo></Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
</Badge></MenuItem>
            </Right>
        `
      </Wrapper>
    </Container>
  );
}
