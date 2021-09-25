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
  useEffect(() => {
    fetch("./fakeData/devDataFake.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

    const addMember = (developer) => {
        console.log(developer.id);
    let newMember = [...addedMembers, developer];
    setAddedMembers(newMember);
  };



  return (
    <div>
      <Header></Header>
      <div id="main-part">
        <Row>
          <Col md={9}>
            <div className="row g-5 p-5 ms-5">
              {developers.map((developer) => (
                <Developer
                  key={developer.id}
                  developer={developer}
                  addMember={addMember}
                />
              ))}
            </div>
          </Col>
          <Col md={3} className='team'>
            <Team addedMember={addedMembers} />
          </Col>
        </Row>
          </div>
          <Footer></Footer>
    </div>
  );
};

export default HomePage;
