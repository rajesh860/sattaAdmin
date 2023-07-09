import React, { useState } from "react";
import "./styles.scss";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ previous, next, change }) => {
  return (
    <>
      <div id="app" className="paginationContainer">
        <div className="center-div">
          <div onClick={() => previous()} className="leftPagination">
            <FaAngleLeft />
          </div>
          <div className="boxPagination">
            <h3 className="pageNumber">{change}</h3>
          </div>
          <div onClick={() => next()} className="rightPagination">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
