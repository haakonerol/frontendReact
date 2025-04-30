import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PersonDetail = () => {
  const [person, setPerson] = useState([]);
  const navigate = useNavigate()
  const {id} = useParams()

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`, {
      headers: {
        Accept: "application/json",
        "x-api-key": "reqres-free-v1",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setPerson(data.data))
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="container text-center mt-4">
      <img className="rounded" src={person.avatar} alt="img" />
      <h6>
        {person.first_name} {person.last_name}
      </h6>
      <p>{person.email}</p>
      <div>
         <button className="btn btn-primary" onClick={()=> navigate(-1)}>Back</button>
         <button className="btn btn-success ms-1" onClick={()=> navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default PersonDetail;
