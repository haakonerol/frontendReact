import React from "react";

const Fagskole = () => {
  return (
    <div className="mt-4 text-center">
      <h1 className="display-6 text-warning">Fagskole</h1>
      <p>
        Introduction to Programming and IT Development gives you 30 credits and
        qualifies you to apply for internships in companies. You can further
        study Development of Single Page Applications for Web Frontend, which
        also gives 30 credits and opens up opportunities for work as a frontend
        developer.
      </p>
      <img
        src="https://clarusway.com/wp-content/uploads/elementor/thumbs/v1-Fullstack-developer-pqnf31gbxlt9gholzgwtsxya1abhwiwulezoqna3wo.jpg"
        alt=""
      />
      <div>
        <button className="btn btn-outline-success mt-4">Learn More</button>
      </div>
    </div>
  );
};

export default Fagskole;
