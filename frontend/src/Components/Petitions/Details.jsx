import React, { useEffect } from "react";
import { Link } from "wouter";
import { useSelector, useDispatch } from "react-redux";
import { commentAction } from "../../Redux/Comment/action";
import * as timeago from "timeago.js";
import Loader from "../Loader";
import { useState } from "react";

function Details({ data, loading, userInfo }) {
  const { loader, messages, errors } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [exists, setExists] = useState(false);

  useEffect(() => {
    if (data) {
      if (data.supporters[0].id.indexOf(userInfo._id) !== -1) {
        setExists(true);
      }
    }
  }, []);

  const [message, setMessage] = useState("");

  const onChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const messageObj = {
      message: message,
      id: data._id,
    };
    dispatch(commentAction(messageObj))
  };

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
              {messages ? (
                <div className="alert alert-success">{messages}</div>
              ) : null}
              {errors ? (
                <div className="alert alert-danger">{errors}</div>
              ) : null}

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
                          <form onSubmit={onSubmit}>
                            <textarea
                              className="form-control mt-3"
                              cols={20}
                              rows={5}
                              name="message"
                              value={message}
                              onChange={onChange}
                              placeholder="I am signing because....."
                              required
                            ></textarea>
                            <button
                              type="submit"
                              className="btn mt-4 btn_red btn-danger"
                              disabled={loading}
                            >
                              {loader ? (
                                <strong>Loading</strong>
                              ) : (
                                <strong>Sign this petition</strong>
                              )}
                            </button>
                          </form>
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
