import { Outlet, useNavigate } from "react-router-dom"

const Paths = () => {
  const navigate = useNavigate()
  return (
    <div className="container mt-4">
      <h1>
        Online IT Courses to Become a Qualified IT Person 
      </h1>

      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div>
        <button
          className="btn btn-success w-50"
          onClick={() => navigate("/paths/startIT")}
        >
          Start IT
        </button>
        <button
          className="btn btn-warning w-50"
          onClick={() => navigate("fagskole")}
        >
          Fagskole
        </button>
      </div>

      <Outlet />
    </div>
  )
}

export default Paths
