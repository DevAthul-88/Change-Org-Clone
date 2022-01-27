import React from "react";

function Post() {
  const petitions = [
    {
      title: "title",
      description:
        "Excepteur adipisicing id consequat exercitation non. Exercitation sit sint enim nisi sint non qui reprehenderit. Ullamco commodo eu duis ex aliquip est ullamco. Cillum consequat pariatur nostrud sint commodo. Mollit velit aliquip dolor laboris aliqua nulla id fugiat fugiat do proident culpa. Officia deserunt et est ut adipisicing magna tempor veniam irure. Laborum reprehenderit tempor nulla ex mollit ipsum sunt in.",
    },
    {
      title: "title",
      description: "description",
    },

    {
      title: "title",
      description: "description",
    },
    {
      title: "title",
      description: "description",
    },
    {
      title: "title",
      description: "description",
    },
    {
      title: "title",
      description: "description",
    },
  ];

  return (
    <div>
      <h1>Petitions</h1>

      {petitions.map((e, index) => {
        return (
          <div className="card mt-4">
            <div className="card-body">
              <div className="card-title">
                <h3 className=" text-capitalize">{e.title}</h3>
              </div>

              <div className="card-text">
                <p className="fs-5">{e.description}</p>
              </div>

              <div>
                <h5 className="fs-6">
                  Created by:{" "}
                  <span className=" badge bg-dark">Kazuma Kyiru</span>{" "}
                  <span>Nov 18, 5:31 PM</span>
                </h5>

                <div className="d-grid">
                  <button className="btn btn-danger btn_red btn">
                    <strong>Sign this petition</strong>
                  </button>
                </div>
              </div>
            </div>

            <div className="card-footer d-flex justify-content-between">
              <h6>
                <span className="redColor">1</span> Supports
              </h6>

              <h6 className="ml-4">Needs 5 supporters</h6>

              <h6>
                <span>
                  <i className="fa fa-folder" aria-hidden="true"></i> Category:{" "}
                </span>
                <a href="" className="redColor">
                  Human Rights
                </a>
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
