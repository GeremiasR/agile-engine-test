import { useState, useEffect } from "react";

export const Pagination = (props) => {

  const handleClick = (e, page=null) => {
    e.preventDefault();
    if(page){
        props.paginate(page);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {Number(props.page) - 1 > 0 && (
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={(e) => {
                handleClick(e, Number(props.page) - 1);
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        )}
        {Number(props.page) - 1 > 0 && (
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                handleClick(e, Number(props.page) - 1);
              }}
            >
              {Number(props.page) - 1}
            </a>
          </li>
        )}

        <li className="page-item active">
          <a
            className="page-link"
            href="#"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {props.page}
          </a>
        </li>

        {props.hasMore && (
            <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                handleClick(e, Number(props.page) + 1);
              }}
            >
              {Number(props.page) + 1}
            </a>
          </li>
        )}
        {props.hasMore && (
            <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={(e) => {
                handleClick(e, Number(props.page) + 1);
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
