import { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function LegendCard({legend}) {
  const [show, setShow] = useState(false);

  function handleToggle(){
   setShow(!show)
  }

  return (
    <Col>
      <Card onClick={handleToggle}>
        {!show ? (
          <Card.Img variant="top" src={legend.img}  />
        ) : (
          <Card.Body >
            <Card.Title>{legend.name}</Card.Title>
            <Card.Text as="div">
              <ul>
                {legend.statistics.map((item,i) => (
                  <li className="h6 text-start" key={i}>{item}</li>
                ))}
              </ul>
              <span>{legend.official_career}</span>
            </Card.Text>
          </Card.Body>
        )}
      </Card>
    </Col>
  );
}

export default LegendCard;
