import styled from 'styled-components';


import {mobile} from '../components/responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/XsdmR2c/1.png");
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
 ${mobile({width:"75%"})}

`;
const Form = styled.div`
  display: flex;
  flex-direction:column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom:10px;

`;
const Link =styled.a`
display:flex;
margin:10px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
margin-bottom:10px;
`;

export default function Login() {
  return (
    <Container>
         <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          
          <Input placeholder="username" />
         
          <Input placeholder="password" />
          
        </Form>
      
        <Button>LOGIN</Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD??</Link>
        <Link>CREATE AN ACCOUNT</Link>
      </Wrapper>
    </Container>
  )
}
