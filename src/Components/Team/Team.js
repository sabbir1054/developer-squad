import React from "react";
import "./Team.css";

const Team = (props) => {
  const { addedMember } = props;

    let totalPayment = 0;
    for (const member of addedMember) {
            totalPayment = parseFloat(totalPayment) + parseFloat(member.salary);
        
    }

    
  return (
    <div className="text-white">
      <h2 className="text-center">
        <i class="fas fa-users"></i>
      </h2>
      <h1>
        Added Developer:
        <span className="text-warning">{addedMember.length}</span>
      </h1>
      <h3>
        Total Payment:
        <span className="text-warning">{totalPayment.toFixed(2)}</span>
      </h3>
      <h2 className="text-center">
        <u>Members Name </u>
      </h2>
      {addedMember.map((member) => (
        <h4>{member.name} </h4>
      ))}
    </div>
  );
};

export default Team;
