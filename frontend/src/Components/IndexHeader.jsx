import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import axios from "axios";
import Loader from "../Components/Loader";

function IndexHeader() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let isRequestCancelled = false;
    async function getCount() {
      try {
        const data = await axios.get("/api/user/count");
        if (!isRequestCancelled) {
          setCount(data.data.count);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getCount();
    return () => {
      isRequestCancelled = true;
    };
  }, []);
  return (
    <div className="text-center mt-sm-5" id="indexHeader_text">
      <div>
        <h1 className="rubik fw-bolder  display-5">
          The world’s platform for change
        </h1>
        <h4 className="mt-3">
          <span className="redColor">{count} </span>
          people taking action
        </h4>
        <Link href="/start-a-petition">
          <a className="btn btn-danger btn_red btn-lg mt-4">
            <strong>Start Petition</strong>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default IndexHeader;
