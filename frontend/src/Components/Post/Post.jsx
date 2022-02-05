import React,{useState , useEffect} from "react";
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
                  <Link href={`/p/${e._id}`} className="text-dark text-decoration-none post_link rubik">
                  {e.title}
                  </Link>
                </h3>
              </div>

              <div className="card-text">
                <p className="fs-6 text-truncate">{e.description}</p>
              </div>

              <div>
                <h5 className="fs-6">
                  Created by:{" "}
                  <span className=" badge bg-dark">{e.user.userName}</span>{" "}
                  <span>{timeago.format(e.createdAt)}</span>
                </h5>

                <div className="d-grid">
                  {userInfo._id === e.user._id ? (
                    <div>
                     
                    </div>
                  ) : <>
                  {e.supporters.length !== e.expectedVote ? (
                    <Link href={`/p/${e._id}`} >
                    <a className="btn btn-danger btn_red">
                    <strong>Sign this petition</strong>
                    </a>
                   </Link>
                  ) : null}
                  </>}
                </div>
              </div>
            </div>

            <div className="card-footer d-flex justify-content-between">
              <h5 className="rubik">
                {e.supporters.length} <span className="redColor">
                  <Link href={`/s/supporters/${e._id}`} className="text-decoration-none redColor">
                  Supporters
                  </Link>
                </span>
              </h5>

              <div>
                <h5 className="ml-4 rubik">
                  {e.completed ? (
                    <h5 className="rubik fw-bold">Victory</h5>
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
