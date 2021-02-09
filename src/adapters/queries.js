import { gql } from '@apollo/client';

export const OPPORTUNITIES_LIST = gql`
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

export const PEOPLE_LIST = gql`
  query getPeople($offset: Int!, $size: Int!) {
    getPeople(offset: $offset, size: $size) {
      offset
      size
      total
      results {
        username
        name
        professionalHeadline
        skills {
          name
          weight
        }
        openTo
        locationName
        picture
      }
    }
  }
`;
