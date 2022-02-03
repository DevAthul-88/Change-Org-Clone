import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { useSelector, useDispatch } from "react-redux";
import profileAction from "../Redux/Profile/action";
import Signed from "../Components/Petitions/Signed";
import Started from "../Components/Petitions/Started";
import Loading from "../Components/Loader";
function Profile({ id }) {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.login);
  const { loading, profile } = useSelector((state) => state.profile);
  const [route, setRoute] = useState("started");

  useEffect(() => {
    dispatch(profileAction(id));
  }, []);

  function setKey(key) {
    setRoute(key);
  }

  const Main = () => {
    if (route == "started") {
      return <Started />;
    } else {
      return <Signed />;
    }
  };

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : profile !== undefined ? (
        <div className="mt-5">
          {userInfo._id == profile._id ? (
            <div>
              <div className="text-center">
                <h1 className="text-capitalize display-2 fw-bold rubik">
                  {profile.userName}
                </h1>
                <Link href={`/me/edit`}>
                  <a className="btn mt-4 btn-outline-dark">
                    <strong>Edit Profile</strong>
                  </a>
                </Link>
              </div>

              <div
                style={{
                  background: "#fff",
                  borderBottom: "1px solid #c7c7c7",
                }}
              >
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
          ) : (
            <div className="text-center">
              <h1 className="text-capitalize display-2 fw-bold rubik">
              {profile.userName}
            </h1>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
