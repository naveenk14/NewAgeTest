import React from "react";
import "./Pagination.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const startItem =
    (currentPage - 1) * itemsPerPage + (totalItems === 0 ? 0 : 1);
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow = 5; 
  let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  if (endPage - startPage < pagesToShow - 1) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className="pagination justify-content-between"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div
        className="pagination-left p-1 px-3 align-content-center"
        style={{ color: "rgba(24, 30, 37, 1)" }}
      >
        {startItem} to {endItem} out of {totalItems}
      </div>
      <div className="pagination-right p-1 px-3">
        <button
          className=""
          style={{ border: "none", background: "transparent" }}
          onClick={handlePrevPage}
        >
          <KeyboardArrowLeftIcon
            sx={{ color: "rgba(24, 30, 37, 1)", opacity: "0.5 " }}
          />
        </button>

        {startPage > 1 && (
          <button className="btn" onClick={() => goToPage(1)}>
            1
          </button>
        )}
        {startPage > 2 && <span className="ellipsis">...</span>}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <button
            key={page}
            className={`btn ${currentPage === page ? "current-page" : ""}`}
            style={{ color: "rgba(24, 30, 37, 1)", fontSize: "14px" }}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}
        {endPage < totalPages - 1 && <span className="ellipsis">...</span>}
        {endPage < totalPages && (
          <button
            className="btn "
            style={{ fontSize: "14px" }}
            onClick={() => goToPage(totalPages)}
          >
            {totalPages}
          </button>
        )}

        <button
          className=""
          style={{ border: "none", background: "transparent" }}
          onClick={handleNextPage}
        >
          <KeyboardArrowRightIcon
            sx={{ color: "rgba(24, 30, 37, 1)", opacity: "0.5 " }}
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
