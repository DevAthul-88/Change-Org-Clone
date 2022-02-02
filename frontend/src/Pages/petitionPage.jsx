import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petitionById } from "../Redux/Single/action";
import Loader from "../Components/Loader";
import { Link } from "wouter";
import * as timeago from "timeago.js";

function PetitionPage({ id }) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.details);
  const { userInfo } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(petitionById(id));
  }, []);

  return (
    <div className="container mt-5">
      <div>
        {data == null || data == undefined ? (
          <h1>Nothing found</h1>
        ) : (
          <div>
            {loading ? (
              <Loader />
            ) : (
              <div className="row">
                <div className=" col-8">
                  <h1 className="rubik display-5 fw-bold">{data.title}</h1>

                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="badge bg-dark">
                        <Link
                          href={`/profile/${data.user.id}`}
                          className=" text-white text-decoration-none"
                        >
                          {data.user.userName}
                        </Link>
                      </div>
                    </div>
                    <div>
                      <span className=" fs-5  redColor fw-bold">
                        Started this petition: {timeago.format(data.createdAt)}
                      </span>
                    </div>

                    <div>
                      <h5>
                        Category:{" "}
                        <Link href="#" className="redColor text-capitalize">
                          {data.category}
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <hr />
                  <p className="fs-5 mt-4">{data.description}</p>
                </div>
                <div className="col">
                  <h1 className="fs-4">
                    Signature Goal: {data.supporters.length} of{" "}
                    {data.expectedVote}
                  </h1>
                  <div>
                    <div className="progress mt-4">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                        role="progressbar"
                        style={{
                          width: `${Math.floor(
                            (data.supporters.length / data.expectedVote) * 100
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <div className="mt-4">
                      <h1 className="fs-2">{userInfo.userName}</h1>

                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="I am signing because....."
                      ></textarea>
                      <button className="btn mt-4 btn_red btn-danger">
                        <strong>Sign this petition</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PetitionPage;
