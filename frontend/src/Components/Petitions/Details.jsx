import React, { useEffect } from "react";
import { Link } from "wouter";
import { useSelector, useDispatch } from "react-redux";
import { commentAction, removeComment } from "../../Redux/Comment/action";
import * as timeago from "timeago.js";
import Loader from "../Loader";
import { useState } from "react";

function Details({ data, loading, userInfo }) {
  const { loader, messages, errors } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [exists, setExists] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (data) {
      const checkExists = data.supporters.some((e) => e.id == userInfo._id);
      setExists(checkExists);
      const commentAdd = data.supporters.filter((e) => e.id == userInfo._id);
      setComment(commentAdd[0]);
      
    }
  }, [data]);

  const handleRemove = (id) => {
    dispatch(removeComment(id));
  };

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
    dispatch(commentAction(messageObj));
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
                        {!exists ? (
                          <form onSubmit={onSubmit}>
                            <h1 className="fs-2">{userInfo.userName}</h1>
                            <textarea
                              className="form-control mt-3"
                              cols={20}
                              rows={5}
                              name="comment"
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
                          <div>
                            {comment !== null ? (
                              <div className="card mt-4">
                                <div className="card-body">
                                  <div className="card-title rubik">
                                    <Link
                                      href={`/profile/${comment._id}`}
                                      className="text-dark text-decoration-none"
                                    >
                                      {comment.user}
                                    </Link>
                                  </div>
                                  <h6 className="card-subtitle mb-2 text-muted">
                                    {timeago.format(comment.createdAt)}
                                  </h6>
                                  <p>{comment.message}</p>
                                </div>
                                <div className="card footer">
                                  <button className="btn btn-danger btn-sm">
                                    <strong
                                      className="rubik"
                                      onClick={() => handleRemove(data._id)}
                                    >
                                      Remove Sign
                                    </strong>
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <loader />
                            )}
                          </div>
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
