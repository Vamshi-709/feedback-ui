import React from "react";
import { Link } from "react-router-dom";
import Card from "../share/Card";

function Aboutpage() {
  return (
    <Card>
      <div className="about">
        <h1>This is a feedback app</h1>
        <p> leave your  feedback here</p>
        <p>Version : 1.2.9.</p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
}
export default Aboutpage;
