import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";
import LegendCard from "./LegendCard";
import { useState } from "react";

const LegendContainer = () => {

   const [search, setSearch] = useState("")

   const handleSearch = (e)=>{
      setSearch(e.target.value)
   }
   const filteredData = data.filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()))


  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." onChange={handleSearch} className="mb-3"/>
      <Container className="text-center">
        <Row xs={1} sm={2} md={3} lg={4}>
          {filteredData.map((legend) => (
            <LegendCard legend={legend} key={legend.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
