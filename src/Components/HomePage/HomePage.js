import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Developer from "../Developer/Developer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Team from "../Team/Team";
import "./HomePage.css";
const HomePage = () => {
  const [developers, setDevelopers] = useState([]);
  const [addedMembers, setAddedMembers] = useState([]);
  // Data load form public folder
  useEffect(() => {
    fetch("./fakeData/devDataFake.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
  //make member array by remove duplicates data
  const addMember = (developer) => {
    let newMember = [...addedMembers, developer];
    setAddedMembers(removeDuplicates(newMember));
  };

  const removeDuplicates = (data) => {
    let unique = data.reduce((dev1, dev2) => {
      if (dev1.indexOf(dev2) < 0) dev1.push(dev2);
      return dev1;
    }, []);
    return unique;
  };

  return (
    <div>
      <Header></Header>
      {/* website main part */}
      <div id="main-part">
        <Row>
          <Col md={10}>
            <div className="row g-3 py-3 ms-3">
              {developers.map((developer) => (
                <Developer
                  key={developer.id}
                  developer={developer}
                  addMember={addMember}
                />
              ))}
            </div>
          </Col>
          <Col md={2} className="team">
            <Team addedMember={addedMembers} />
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
