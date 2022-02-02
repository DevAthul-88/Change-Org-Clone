import React, { useEffect } from "react";
import { Link } from "wouter";
import * as timeago from "timeago.js";
import Loader from "../Loader";
import { useState } from "react";

function Details({ data, loading, userInfo }) {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    if (data) {
      if (data.supporters[0].id.indexOf(userInfo._id) !== -1) {
        setExists(true);
      }
    }
  }, []);

  return (
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
                <h1 className="rubik display-5 fw-bold mb-2">{data.title}</h1>

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
                    <span className=" fs-6  redColor fw-bold">
                      Started this petition: {timeago.format(data.createdAt)}
                    </span>
                  </div>

                  <div>
                    <h6>
                      Category:{" "}
                      <Link href="#" className="redColor text-capitalize">
                        {data.category}
                      </Link>
                    </h6>
                  </div>
                </div>
                <hr />
                <p className="fs-5 mt-4">{data.description}</p>
              </div>
              <div className="col ">
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
                  <hr />
                  <div className="mt-4">
                    {Object.keys(userInfo).length !== 0 ? (
                      <div>
                        <h1 className="fs-2">{userInfo.userName}</h1>
                        {!exists ? (
                          <div>
                            <textarea
                              className="form-control mt-3"
                              cols={20}
                              rows={5}
                              name="message"
                              placeholder="I am signing because....."
                            ></textarea>
                            <button className="btn mt-4 btn_red btn-danger">
                              <strong>Sign this petition</strong>
                            </button>
                          </div>
                        ) : (
                          <h1 className="mt-4 fs-4 text-info">
                            You already voted for this petition
                          </h1>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Details;
