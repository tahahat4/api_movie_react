import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const Paginations = ({getPageMovie , maxpage}) => {

  const handlePageClick = (data)=>{
    getPageMovie(data.selected+1)
    
  }

  let pageCount = maxpage





  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed = {2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      pageClassName={"page-item"}
      containerClassName={"pagination justify-content-center p-3 "}
      previousLinkClassName={"page-link"}
      nextLinkClassName={'page-link'}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Paginations;
