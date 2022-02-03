import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petitionStarted } from "../../Redux/Post/action";
import Loader from "../../Components/Loader";
import Post from "../Post/Post";

function Started() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.post);


  useEffect(() => {
    dispatch(petitionStarted());
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) :  data == null? (
        <h1>Nothing found</h1>
      ) : data.message ? (
        <h1 className='display-5  fs-bold rubik'>{data.message}</h1>
      ) : (
         Object.values(data)[0] == null ? <h1>Nothing found</h1> : <Post petitions={data.data} />
      )}
    </div>
  );
}

export default Started;
