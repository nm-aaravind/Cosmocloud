import React, {useState, useEffect} from 'react'
const Pagination = ({ initialOffset, totalItems, fetchData }) => {
  const [offset, setOffset] = useState(initialOffset);
  const [total, setTotal] = useState(totalItems);

  const totalPages = Math.ceil(total / 10);
  const currentPage = Math.floor(offset / 10) + 1;

  useEffect(() => {
    fetchData(offset);
  }, [offset, fetchData]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setOffset(offset + 10);
    }
  };

  // Handle previous page
  const handlePrevious = () => {
    if (currentPage > 1) {
      setOffset(offset - 10);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination