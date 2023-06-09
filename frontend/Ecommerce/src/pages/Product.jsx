import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../components/responsive";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px",flexDirection:"column"})}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
  font-weight: 200px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`;
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;

`;

const Button = styled.button `
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#f8f4f4;
}
`;

export default function Product() {
  const location = useLocation();
  const id=location.pathname.split('/')[2]
  const [product,setProduct] = useState({});

  useEffect(()=>{
    const getProduct = async ()=.{
      try{
        const res= axios.
      }
    }
  })
  return (
    <Container>
      <Navbar></Navbar>
      <Announcement></Announcement>
      <Wrapper>
        <ImgContainer>
          <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OFgIOrzeq0ZiI1-LbttfKAHaJ4%26pid%3DApi&f=1://i.ibb.co/56qMxwr/jean.jpg"></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>Denim JumpSuit</Title>
          <Desc>Nice one go and purchase it as soon as possible.</Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption> Xs</FilterSizeOption>
                <FilterSizeOption> S</FilterSizeOption>
                <FilterSizeOption> M</FilterSizeOption>
                <FilterSizeOption> L</FilterSizeOption>
                <FilterSizeOption> XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                    <Add/>
            
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
}
