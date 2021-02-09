import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { OPPORTUNITIES_LIST, PEOPLE_LIST } from './queries';

export default new ApolloClient({
  uri: 'http://localhost:4001/',
  cache: new InMemoryCache(),
});

export const getOpportunities = (page = 0, size = 10) => {
  const {
    loading = false,
    error = '',
    data: { getOpportunities: { offset = 0, total = 0, results = [] } = {} } = {},
  } = useQuery(OPPORTUNITIES_LIST, {
    variables: { offset: page - 1, size },
  });

  return {
    loading,
    error,
    offset,
    total,
    opportunities: results,
  };
};

export const getPeople = (page = 0, size = 10) => {
  const {
    loading = false,
    error = '',
    data: { getPeople: { offset = 0, total = 0, results = [] } = {} } = {},
  } = useQuery(PEOPLE_LIST, {
    variables: { offset: page - 1, size },
  });

  return {
    loading,
    error,
    offset,
    total,
    people: results,
  };
};
