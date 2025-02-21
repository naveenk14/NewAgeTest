import React,{useState} from 'react';
import Sort from '../../assets/sort.png'

const Sorting = ({ onClick }) => {
    const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    onClick(newSortOrder); 
  };

  
  
  return (
    <img
      src={Sort}
      alt="Sort Icon"
      style={{ width: '16px', height: '16px', marginLeft: '4px', cursor: 'pointer' }}
      onClick={toggleSortOrder}
    />
  );
};

export default Sorting;



