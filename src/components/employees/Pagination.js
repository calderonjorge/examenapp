import React, { useState } from "react";
import Pagination from "react-js-pagination";

const PaginatedContent = ({ employees }) => {



  return (
    <div>
      {
        employees.map(employ =>
          <li key={employ.id}>{employ.name}</li>
        )
      }
    </div>
  )

}

export default PaginatedContent;