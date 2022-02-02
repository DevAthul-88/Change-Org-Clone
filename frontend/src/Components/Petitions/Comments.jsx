import React from "react";
import Loader from "../Loader";
import {Link} from 'wouter'
import * as timeago from "timeago.js";

function Comments({ loading, data }) {
  return (
    <div>
      <h1 className="fs-4 rubik">Reasons for signing</h1>
      <p className="fs-5">
        See why other supporters are signing, why this petition is important to
        them, and share your reason for signing (this will mean a lot to the
        starter of the petition).
      </p>

      {loading ? (
        <Loader />
      ) : (
        <div>
          {data.supporters.map((e, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link href={`/profile/${e.id}`} className="text-dark text-decoration-none">
                    {e.user}
                    </Link>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {timeago.format(e.createdAt)}
                  </h6>
                  {e.message}
                </div>
              
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comments;
