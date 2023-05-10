import styled from "styled-components"

const Container=styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14;
font-weight:bolder;
`

export default function Announcement() {
  return (
    <Container>
        Super Deal! Free Shipping On Orders Over $50
    </Container>
  )
}
