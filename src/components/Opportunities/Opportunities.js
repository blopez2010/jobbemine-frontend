import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import LinearIndeterminate from '../global-components/LinearIndeterminate';
import JobCard from './sub-components/JobCard';
import { getOpportunities } from '../../adapters/api';

const Opportunities = () => {
  const [page, setPage] = useState(1);
  const size = 10;

  const { loading, error, offset, total, opportunities } = getOpportunities(page, size) || {};

  useEffect(() => {
    setPage(offset + 1);
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (error) return <p>Error :(</p>;

  return (
    <div className="container">
      {loading ? (
        <LinearIndeterminate />
      ) : (
        <div className="list-container">
          {opportunities.map(opportunity => (
            <JobCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      )}
      <div className="pagination">
        <Pagination count={size} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Opportunities;
