import { Link, useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-3xl text-amber-500">
      <div>This Page is not Available</div>
      <p>
        <Link to={navigate("/")}>Return to Home</Link>
      </p>
    </div>
  );
}

export default NotFound