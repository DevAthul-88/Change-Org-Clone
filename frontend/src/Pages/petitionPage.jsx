import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petitionById } from "../Redux/Post/action";
import Loader from "../Components/Loader";

function PetitionPage({ id }) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(petitionById(id));
  }, []);
  return (
    <div className="container mt-5">
      {!data ? (
        <h1></h1>
      ) : (
        <div>{loading ? <Loader /> : <div>
          <h1 className="rubik display-5 fw-bold">{data.title}</h1>
          <p>{data.description}</p>
        </div>
          
        }</div>
      )}
    </div>
  );
}

export default PetitionPage;
