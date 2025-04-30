import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate()

  const getPeople = () => {
   fetch("https://reqres.in/api/users?page=1", {
     headers: {
       "Accept": "application/json",
       "x-api-key": "reqres-free-v1"
     }
   })
     .then((res) => {
       if (!res.ok) {
         throw new Error(`HTTP error! status: ${res.status}`);
       }
       return res.json();
     })
     .then((data) => setPeople(data.data))
     .catch((err) => console.error("Fetch error:", err));
 };

// const getPeople = async () => {
//    try {
//      const res = await axios.get("https://reqres.in/api/users");
//      setPeople(res.data.data);
//    } catch (err) {
//      console.error("Axios error:", err);
//    }
//  };
 
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
            >
              <img className="rounded" src={avatar} alt="img" onClick={()=> navigate(`/people/${id}`)} />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
