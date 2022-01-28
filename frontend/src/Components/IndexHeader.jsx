import React from "react";
import {Link} from 'wouter'

function IndexHeader() {
  return (
    <div className="text-center mt-sm-5" id="indexHeader_text">
      <h1 className="rubik fw-bolder  display-5" >The world’s platform for change</h1>
      <h4 className="mt-3">
        <span className="redColor">477,402,866 </span>
        people taking action
      </h4>
     <Link href='/start-a-petition'>
     <a className="btn btn-danger btn_red btn-lg mt-4">
        <strong>Start Petition</strong>
      </a>
     </Link>
    </div>
  );
}

export default IndexHeader;
