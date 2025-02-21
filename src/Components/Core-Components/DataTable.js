import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './DataTable.css';

const DataTable = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2); // Number of items per page

  // Sample data
  const data = [
    { shipmentId: 1, origin: 'Origin A', destination: 'Destination A', bookedOn: '2024-05-01', etdEta: '2024-05-10', status: 'In Transit', action: 'View' },
    { shipmentId: 2, origin: 'Origin B', destination: 'Destination B', bookedOn: '2024-05-02', etdEta: '2024-05-11', status: 'Delivered', action: 'View' },
    // Add more data as needed
  ];

  // Function to sort data based on configuration
  const sortedData = () => {
    if (!sortConfig) {
      return data;
    }

    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  };

  // Function to request sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Generate array of page numbers for pagination
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Determine the range of visible page numbers
  let startPage = currentPage <= 5 ? 1 : currentPage - 4;
  let endPage = Math.min(startPage + 9, totalPages);

  // Header style
  const headerStyle = {
    styleName: 'Medium/Medium 04',
    fontFamily: 'Roboto',
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '19px',
    letterSpacing: '0.01em',
    textAlign: 'center',
  };

  // Row style
  const rowStyle = {
    width: 'calc(100% - 4px)',
    height: '66px',
    borderBottom: '1px solid #000',
    justifyContent: 'space-between',
    padding: '12px 10px',
    margin: '0',
    listStyleType: 'none',
    display: 'flex',
  };

  // Table data style
  const tableDataStyle = {
    styleName: 'Regular/Regular05',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.01em',
    textAlign: 'center',
  };

  return (
    <div className='mt-5'>
      <ul className="table header-container" style={{ listStyleType: 'none', padding: '0' }}>
        <li style={rowStyle}>
          <div onClick={() => requestSort('shipmentId')} className="header-element" style={{ ...headerStyle, cursor: 'pointer' }}>
            Shipment ID{' '}
            {sortConfig && sortConfig.key === 'shipmentId' && (sortConfig.direction === 'ascending' ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>)}
          </div>
          {/* Add other header elements with appropriate classes */}
        </li>
      </ul>
      <ul className="table-data" style={{ listStyleType: 'none', padding: '0' }}>
        {/* Logic to slice data based on pagination */}
        {sortedData()
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((row, index) => (
            <li key={index} style={rowStyle}>
              <div style={{ ...tableDataStyle }}>{row.shipmentId}</div>
              <div style={{ ...tableDataStyle }}>{row.origin}</div>
              <div style={{ ...tableDataStyle }}>{row.destination}</div>
              <div style={{ ...tableDataStyle }}>{row.bookedOn}</div>
              <div style={{ ...tableDataStyle }}>{row.etdEta}</div>
              <div style={{ ...tableDataStyle }}>{row.status}</div>
              <div style={{ ...tableDataStyle }}>{row.action}</div>
            </li>
          ))}
      </ul>
      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          Page {currentPage} out of {totalPages}
        </div>
        <div>
          <button
            className="btn btn-link"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt;
          </button>
          {pageNumbers.slice(startPage - 1, endPage).map((number) => (
            <button
              key={number}
              className={`btn ${currentPage === number ? 'btn-primary' : 'btn-link'}`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}
          <button
            className="btn btn-link"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
