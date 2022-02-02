import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petitionById } from "../Redux/Single/action";
import Details from "../Components/Petitions/Details";
import Comment from "../Components/Petitions/Comments";

function PetitionPage({ id }) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.details);
  const { userInfo } = useSelector((state) => state.login);

  const [route, setRoute] = useState("details");

  function setKey(key) {
    setRoute(key);
  }

  const Main = () => {
    if (route == "details") {
      return <Details loading={loading} userInfo={userInfo} data={data} />;
    } else if(route == "comment") {
      return <Comment loading={loading} data={data}/>;
    }
  };

  useEffect(() => {
    dispatch(petitionById(id));
  }, []);

  return (
    <div style={{ background: "#f6f4f6", minHeight: "100vh" }}>
      <div style={{ background: "#fff", borderBottom: "1px solid #c7c7c7" }}>
        <div className="container mt-4">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a
                href="#details"
                className={
                  route === "details"
                    ? "nav-link tab-link active"
                    : "nav-link tab-link"
                }
                onClick={() => setKey("details")}
              >
               Petitions Details
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#comment"
                className={
                  route === "comment"
                    ? "nav-link tab-link active"
                    : "nav-link tab-link"
                }
                onClick={() => setKey("comment")}
              >
                Comments
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-5">
        <Main />
      </div>
    </div>
  );
}

export default PetitionPage;
