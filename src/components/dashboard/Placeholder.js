import React from "react";
import "./placeholder.css";
const Placeholder = ({ count }) => {
  const placeholderHTML = [];
  for (let i = 0; i < count; i++) {
    placeholderHTML.push(renderPlaceholder());
  }
  return placeholderHTML;
};
const renderPlaceholder = () => (
  <div className="box-placeholder">
    <div className="p-4">
      <span className="category text link"></span>
      <h4 className="text line"></h4>
      <h4 className="text"></h4>
    </div>
    <hr />
    <div className="image">
      <div className="embed-responsive embed-responsive-16by9"></div>
    </div>
    <hr />
    <div className="excerpt p-4">
      <div className="text line"></div>
      <div className="text line"></div>
      <div className="text"></div>
    </div>
  </div>
);
export default Placeholder;
