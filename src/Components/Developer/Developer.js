import React from "react";
import "./Developer.css";
const Developer = (props) => {
  

  const { name, profession, age, technology, img, salary } = props.developer;
  return (
    <>{/* make a single cart for developer */}
      <div className="col-md-4 developer text-white ">
        <div className="card " style={{ width: "420px" }}>
          <div className="row g-0  bg-dark">
            <div className="col-md-5 bg-dark img-div">
              <img src={img} class="img-fluid rounded-start" alt="..." />
              <a
                href="https://github.com/sabbir1054"
                className="text-decoration-none"
              >
                <p className="fs-5 ms-3 text-white text-decoration-none">
                  Github link: <i className="fab fa-github"></i>
                </p>
              </a>
            </div>
            <div className="col-md-7">
              <div className="card-body bg-dark">
                <h5 className="card-title">{profession}</h5>
                <h6 className="card-text">Name: {name}</h6>
                <p className="card-text ">
                  <small className="me-3">Age: {age} </small>
                  <small>Technology: {technology} </small>
                </p>

                <h5 className="text-success">Payment: {salary}</h5>
                <button
                  onClick={() => props.addMember(props.developer)}
                  className="btn btn-success py-1"
                >
                  <i className="fas fa-user-plus me-2 "></i>
                  Add to team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developer;
