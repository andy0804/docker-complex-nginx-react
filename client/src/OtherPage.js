import React from "react";
import { Link } from "react-router-dom";
const OtherPage = () => {
  return (
    <div>
      <h3>In the other page</h3>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default OtherPage;
