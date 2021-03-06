import React from "react";
import "./Team.css";

const Team = (props) => {
  const { addedMember } = props;
  //developers payment count
  let totalPayment = 0;
  for (const member of addedMember) {
    totalPayment = parseFloat(totalPayment) + parseFloat(member.salary);
  }

  return (
    <div className="text-white">
      <h2 className="text-center">
        <i className="fas fa-users"></i>
      </h2>
      <h3>
        Added Developer:
        <span className="text-warning">{addedMember.length}</span>
      </h3>
      <h5>
        Total Payment:
        <span className="text-warning"> {totalPayment.toFixed(2)}</span>
      </h5>
      <h5 className="text-center">
        <u>Selected Developers Name </u>
      </h5>
      {addedMember.map((member) => (
        <h6>{member.name} </h6>
      ))}
    </div>
  );
};

export default Team;
