import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const getPerson = () => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPerson();
  }, []);

  {  
    if (error) {
      return <NotFound />;
    } else {
      return (
        <div className="container text-center mt-4">
          <img className="rounded" src={person.avatar} alt="img" />
          <h6>
            {person.first_name} {person.last_name}
          </h6>
          <p>{person.email}</p>
          <div>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Back
            </button>
            <button
              className="btn btn-success ms-1"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </div>
        </div>
      );
    }
  }
};

export default PersonDetail;
