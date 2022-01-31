import React from "react";
import {Link} from 'wouter'
import { useSelector } from "react-redux";
import * as timeago from "timeago.js";

function Post({ petitions }) {
  const { userInfo } = useSelector((state) => state.login);
  return (
    <div>
      {petitions.map((e, index) => {
        return (
          <div className="card mt-4" key={index}>
            <div className="card-body">
              <div className="card-title">
                <h3 className=" text-capitalize ">
                  <Link href={`/petition/${e._id}`} className="text-dark text-decoration-none post_link">
                  {e.title}
                  </Link>
                </h3>
              </div>

              <div className="card-text">
                <p className="fs-5 text-truncate">{e.description}</p>
              </div>

              <div>
                <h5 className="fs-6">
                  Created by:{" "}
                  <span className=" badge bg-dark">{e.user.userName}</span>{" "}
                  <span>{timeago.format(e.createdAt)}</span>
                </h5>

                <div className="d-grid">
                  {userInfo._id === e.user.id ? (
                    <div>
                      <button className="btn btn-sm btn-primary btn mr-4">
                        <strong>Edit</strong>
                      </button>
                      <button className="btn btn-sm btn-danger btn_red btn " style={{ marginLeft:"0.6rem"}}>
                        <strong>Delete</strong>
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-danger btn_red btn">
                      <strong>Sign this petition</strong>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="card-footer d-flex justify-content-between">
              <h5 className="rubik">
                {e.supporters.length} <span className="redColor">
                  <Link href={`/petition/supporters/${e._id}`} className="text-decoration-none redColor">
                  Supporters
                  </Link>
                </span>
              </h5>

              <div>
                <h5 className="ml-4 rubik">
                  {e.supporters.length === e.expectedVote ? (
                    "Victory"
                  ) : (
                    <>
                      Needs {e.expectedVote - e.supporters.length} more signatures
                    </>
                  )}
                </h5>
              </div>

              <h5 className="rubik">
                <span>
                  <i className="fa fa-folder" aria-hidden="true"></i> Category:{" "}
                </span>
                <a href="" className="redColor">
                  {e.category}
                </a>
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
