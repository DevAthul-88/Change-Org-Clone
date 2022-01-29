import React from 'react';
import IndexHeader from '../Components/IndexHeader'
import Tags from '../Components/Tags'
import Post from '../Components/Post/Post'


function Index() {
  return <div className="container">
      <div id="indexHeader">
          <IndexHeader />
      </div>
      <div className="row">
            <div className="col-md-9">
              <Post />
            </div>
            <div className="col">
              <Tags />
            </div>
          </div>
  </div>;
}

export default Index;
