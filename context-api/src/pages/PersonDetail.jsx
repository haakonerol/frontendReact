import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const PersonDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(false);

  const getPerson = () => {
   // setLoading(true);
   fetch(`https://reqres.in/api/users/${id}`, {
     headers: {
       Accept: "application/json",
       "x-api-key": "reqres-free-v1",
     },
   })
     .then((res) => {
       if (!res.ok) {
         setError(true);
         throw new Error(`HTTP error! status: ${res.status}`);
       }
       return res.json();
     })
     .then((data) => {
       setPerson(data.data);
      //  setLoading(false);
     })
     .catch((err) => {
       console.error("Fetch error:", err);
      //  setLoading(false);
     });
 };

  useEffect(() => {
    getPerson()
  }, [id]);

  if (error) {
    return <h1>Page Not Found</h1>;
  } else if (!person) {
    return (
      <div className="text-center">
        <h2>Data is Fetching</h2>
      </div>
    );
  } else {
    return (
      <Container className="text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <Image
          className="w-50 rounded shadow-lg"
          src={person?.avatar}
          alt="img"
        />
        <h4>{person.email}</h4>

        <Container>
          <Button
            onClick={() => navigate("/")}
            variant="success"
            className="me-2"
          >
            Go Home
          </Button>
          <Button onClick={() => navigate(-1)} variant="warning">
            Go Back
          </Button>
        </Container>
      </Container>
    );
  }
};

export default PersonDetail;
