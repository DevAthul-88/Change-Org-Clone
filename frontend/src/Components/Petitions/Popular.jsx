import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petitionPopular } from "../../Redux/Post/action";
import Post from "../Post/Post";
import Loader from "../Loader";

function Popular() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(petitionPopular());
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : data == null ? (
        <h1 className="text-center rubik fw-bold">Nothing found</h1>
      ) : data.message ? (
        <h1 className="display-5  fs-bold rubik">{data.message}</h1>
      ) : Object.values(data)[0].length < 1 ? (
        <h1 className="text-center rubik fw-bold">Nothing found</h1>
      ) : (
        <Post petitions={data} />
      )}
    </div>
  );
}

export default Popular;
