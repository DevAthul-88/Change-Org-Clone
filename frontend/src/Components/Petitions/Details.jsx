import React, { useEffect } from "react";
import { Link } from "wouter";
import { useSelector, useDispatch } from "react-redux";
import { commentAction, removeComment } from "../../Redux/Comment/action";
import * as timeago from "timeago.js";
import Loader from "../Loader";
import { useState } from "react";
import cat from "../../data/category";

function Details({ data, loading, userInfo }) {
  const { loader, messages, errors } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [exists, setExists] = useState(false);
  const [check, setCheck] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (data && userInfo) {
      const checkExists = data.supporters.some((e) => e._id == userInfo._id);
      setExists(checkExists);
      const commentAdd = data.supporters.filter((e) => e._id == userInfo._id);
      setComment(commentAdd[0]);
      if (data.user.id == userInfo._id) {
        setCheck(true);
      }
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

  const filter = (id) => {
    const name = cat.filter((e) => e.key === id);
    return name[0].name;
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
                {data.completed ? (
                  <div className="alert alert-success">
                    <div className="alert-heading fs-5">Well done!</div>
                    <p className="mt-2 fs-5">
                      Author of this petition has declared this petition was
                      victorious
                    </p>
                  </div>
                ) : null}
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
                      <Link
                        href={`/category/${data.category}`}
                        className="redColor text-capitalize"
                      >
                        {filter(data.category)}
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
                    {check ? (
                      <div>
                        {data.completed ? (
                          <div className="alert alert-success" role="alert">
                            <h4 className="alert-heading">Well done!</h4>
                            <p>
                              This petition made change with{" "}
                              {data.supporters.length} supporters!
                            </p>
                            <hr />
                            <p className="mb-0">
                              Author of this petition has declared this petition
                              was victorious
                            </p>
                          </div>
                        ) : null}
                      </div>
                    ) : (
                     <>
                     {userInfo == undefined ? null : (
                        <div>
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
                                      <button className={`btn btn-danger btn-sm ${data.completed ? 'disabled' : ''}`}>
                                        {data.completed ? (
                                          <strong>You can't remove sign after declaring victory</strong>
                                        ) : (
                                          <strong
                                            className="rubik"
                                            onClick={() =>
                                              handleRemove(data._id)
                                            }
                                          >
                                            Remove Sign
                                          </strong>
                                        )}
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <Loader />
                                )}
                              </div>
                            )}
                          </div>
                        ) : null}
                      </div>
                     )}
                     </>
                    )}
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
