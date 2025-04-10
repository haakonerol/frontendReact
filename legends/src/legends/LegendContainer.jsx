import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";

import LegendCard from "./LegendCard";

const LegendContainer = () => {
  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." />
      <Container className="text-center">
        <Row xs={1} sm={2} md={3} lg={4}>
          {data.map((legend) => (
            <LegendCard legend={legend} key={legend.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
