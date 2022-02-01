import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { petitionByDate } from "../Redux/Post/action";
import IndexHeader from "../Components/IndexHeader";
import Tags from "../Components/Tags";
import Post from "../Components/Post/Post";
import Loader from "../Components/Loader";

function Index() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(petitionByDate());
  }, []);

  return (
    <div className="container">
      <div id="indexHeader">
        <IndexHeader />
      </div>
      <div className="row">
        <div className="col-md-9">
          {loading ? (
            <Loader />
          ) : !data || data == undefined ? (
            <h1>Nothing found</h1>
          ) : data.message ? (
            <h1 className=" display-5  fs-bold rubik">{data.message}</h1>
          ) : (
            <Post petitions={data.data} />
          )}
        </div>
        <div className="col">
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default Index;
