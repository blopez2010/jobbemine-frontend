import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/core/Pagination';
import LinearIndeterminate from '../global-components/LinearIndeterminate';
import { getPeople } from '../../adapters/api';

// Components
import PeopleCard from './sub-components/PeopleCard';

const People = () => {
  const [page, setPage] = useState(1);
  const size = 10;

  const { loading, error, offset, total, people } = getPeople(page, size) || {};

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
          {people.map(p => (
            <PeopleCard key={p.username} people={p} />
          ))}
        </div>
      )}
      <div className="pagination">
        <Pagination count={size} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default People;
