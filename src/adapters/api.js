import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';

export default new ApolloClient({
  uri: 'http://localhost:4001/',
  cache: new InMemoryCache(),
});

export const getOpportunities = (page = 0, size = 10) => {
  const OPPORTUNITIES_LIST = gql`
    query GetOpportunities($offset: Int!, $size: Int!) {
      getOpportunities(offset: $offset, size: $size) {
        offset
        size
        total
        results {
          id
          objective
          type
          organizations {
            name
            picture
          }
          remote
          locations
          compensation {
            data {
              currency
              code
              minAmount
              maxAmount
              periodicity
            }
          }
          members {
            username
            name
            picture
          }
          skills {
            name
            experience
          }
        }
      }
    }
  `;

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
    opportunities: results
  };
};
