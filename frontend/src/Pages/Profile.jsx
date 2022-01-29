import React,{useState} from "react";
import { Link } from "wouter";
import { useSelector } from "react-redux";
import Signed from '../Components/Petitions/Signed'
import Started from "../Components/Petitions/Started";

function Profile({ id }) {
  const state = useSelector((state) => state.login);
  const [route, setRoute] = useState("started");

  function setKey(key) {
    setRoute(key);
  }

  const Main = () => {
    if (route == "started") {
      return <Signed />;
    } 
    else {
      return <Started />;
    }
  };

  return (
    <div className="container">
      <div className="mt-5">
        <div className="text-center">
          <h1 className="text-capitalize display-2 fw-bold rubik">
            {state.userInfo.userName}
          </h1>
          <Link href={`/profile/edit/${id}`}>
            <a className="btn mt-4 btn-outline-dark">
              <strong>Edit Profile</strong>
            </a>
          </Link>

          <div style={{ background: "#fff", borderBottom: "1px solid #c7c7c7" }}>
        <div className="container mt-5">
          <ul className="nav justify-content-center mt-5">
            <li className="nav-item">
              <a
                href="#started"
                className={
                  route === "started"
                    ? "nav-link tab-link active"
                    : "nav-link tab-link"
                }
                onClick={() => setKey("started")}
              >
                Started(0)
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#signed"
                className={
                  route === "signed"
                    ? "nav-link tab-link active"
                    : "nav-link tab-link"
                }
                onClick={() => setKey("signed")}
              >
                Signed(0)
              </a>
            </li>
            
           
          </ul>
        </div>
      </div>
      <div className="container mt-5">
      <Main />
      </div>


        </div>
      </div>
    </div>
  );
}

export default Profile;
