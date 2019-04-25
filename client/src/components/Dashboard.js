import React from 'react';
import { Link } from 'react-router-dom';

// No need for class based component (using functional component)
const Dashboard = () => {
  return (
    <div>
      <h4>Dashboard</h4>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
