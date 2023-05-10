import { CollectionsBookmark } from "@mui/icons-material";
import styled from "styled-components"
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "./responsive";
const Container = styled.div`
display:flex;
padding:25px;
justify-content:space-between;
${mobile({padding:"0px",flexDirection:"column"})}

`
export default function Categories() {
  return (
    <Container>
        {categories.map(item=>(
           <CategoryItem item={item} key={item.id}/> 
        ))}
    </Container>
  )
}
