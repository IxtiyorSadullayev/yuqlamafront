import React from "react";

const StatsCard = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Statistika</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span>Umumiy talabalar</span>
            <strong>30</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between text-success">
            <span>Kelganlar</span>
            <strong>25</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between text-danger">
            <span>Kelmaganlar</span>
            <strong>5</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StatsCard;
