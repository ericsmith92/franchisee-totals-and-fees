import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Franchisee = {
  __typename?: 'Franchisee';
  first_name: Scalars['String'];
  id: Scalars['String'];
  last_name: Scalars['String'];
  location_ids: Array<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  address: Scalars['String'];
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  franchisee?: Maybe<Franchisee>;
  franchisees?: Maybe<Array<Franchisee>>;
  locations?: Maybe<Array<Location>>;
  sale?: Maybe<Array<Sale>>;
  sales?: Maybe<Array<Sale>>;
};


export type QueryFranchiseeArgs = {
  id: Scalars['String'];
};


export type QuerySaleArgs = {
  date: Scalars['String'];
  franchisee_id?: InputMaybe<Scalars['String']>;
  location_ids?: InputMaybe<Array<Scalars['String']>>;
  searchFilter: Scalars['String'];
};

export type Sale = {
  __typename?: 'Sale';
  date: Scalars['String'];
  franchisee_id: Scalars['String'];
  id: Scalars['String'];
  location_id: Scalars['String'];
  subtotal: Scalars['Float'];
  tax: Scalars['Float'];
  total: Scalars['Float'];
};

export type Franchisee_FragFragment = { __typename?: 'Franchisee', id: string, first_name: string, last_name: string };

export type Location_FragFragment = { __typename?: 'Location', id: string, address: string };

export type FranchiseeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FranchiseeQuery = { __typename?: 'Query', franchisee?: { __typename?: 'Franchisee', id: string, first_name: string, last_name: string, location_ids: Array<string> } | null };

export type SalesQueryVariables = Exact<{
  searchFilter: Scalars['String'];
  date: Scalars['String'];
  locationIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  franchiseeId?: InputMaybe<Scalars['String']>;
}>;


export type SalesQuery = { __typename?: 'Query', sale?: Array<{ __typename?: 'Sale', id: string, date: string, tax: number, subtotal: number, total: number, franchisee_id: string, location_id: string }> | null };

export type SalesFormQueryVariables = Exact<{ [key: string]: never; }>;


export type SalesFormQuery = { __typename?: 'Query', locations?: Array<{ __typename?: 'Location', id: string, address: string }> | null, franchisees?: Array<{ __typename?: 'Franchisee', id: string, first_name: string, last_name: string }> | null };

export const Franchisee_FragFragmentDoc = gql`
    fragment FRANCHISEE_FRAG on Franchisee {
  id
  first_name
  last_name
}
    `;
export const Location_FragFragmentDoc = gql`
    fragment LOCATION_FRAG on Location {
  id
  address
}
    `;
export const FranchiseeDocument = gql`
    query Franchisee($id: String!) {
  franchisee(id: $id) {
    id
    first_name
    last_name
    location_ids
  }
}
    `;

/**
 * __useFranchiseeQuery__
 *
 * To run a query within a React component, call `useFranchiseeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFranchiseeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFranchiseeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFranchiseeQuery(baseOptions: Apollo.QueryHookOptions<FranchiseeQuery, FranchiseeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FranchiseeQuery, FranchiseeQueryVariables>(FranchiseeDocument, options);
      }
export function useFranchiseeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FranchiseeQuery, FranchiseeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FranchiseeQuery, FranchiseeQueryVariables>(FranchiseeDocument, options);
        }
export type FranchiseeQueryHookResult = ReturnType<typeof useFranchiseeQuery>;
export type FranchiseeLazyQueryHookResult = ReturnType<typeof useFranchiseeLazyQuery>;
export type FranchiseeQueryResult = Apollo.QueryResult<FranchiseeQuery, FranchiseeQueryVariables>;
export const SalesDocument = gql`
    query Sales($searchFilter: String!, $date: String!, $locationIds: [String!], $franchiseeId: String) {
  sale(
    searchFilter: $searchFilter
    date: $date
    location_ids: $locationIds
    franchisee_id: $franchiseeId
  ) {
    id
    date
    tax
    subtotal
    total
    franchisee_id
    location_id
  }
}
    `;

/**
 * __useSalesQuery__
 *
 * To run a query within a React component, call `useSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalesQuery({
 *   variables: {
 *      searchFilter: // value for 'searchFilter'
 *      date: // value for 'date'
 *      locationIds: // value for 'locationIds'
 *      franchiseeId: // value for 'franchiseeId'
 *   },
 * });
 */
export function useSalesQuery(baseOptions: Apollo.QueryHookOptions<SalesQuery, SalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SalesQuery, SalesQueryVariables>(SalesDocument, options);
      }
export function useSalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalesQuery, SalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SalesQuery, SalesQueryVariables>(SalesDocument, options);
        }
export type SalesQueryHookResult = ReturnType<typeof useSalesQuery>;
export type SalesLazyQueryHookResult = ReturnType<typeof useSalesLazyQuery>;
export type SalesQueryResult = Apollo.QueryResult<SalesQuery, SalesQueryVariables>;
export const SalesFormDocument = gql`
    query SalesForm {
  locations {
    ...LOCATION_FRAG
  }
  franchisees {
    ...FRANCHISEE_FRAG
  }
}
    ${Location_FragFragmentDoc}
${Franchisee_FragFragmentDoc}`;

/**
 * __useSalesFormQuery__
 *
 * To run a query within a React component, call `useSalesFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalesFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalesFormQuery({
 *   variables: {
 *   },
 * });
 */
export function useSalesFormQuery(baseOptions?: Apollo.QueryHookOptions<SalesFormQuery, SalesFormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SalesFormQuery, SalesFormQueryVariables>(SalesFormDocument, options);
      }
export function useSalesFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalesFormQuery, SalesFormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SalesFormQuery, SalesFormQueryVariables>(SalesFormDocument, options);
        }
export type SalesFormQueryHookResult = ReturnType<typeof useSalesFormQuery>;
export type SalesFormLazyQueryHookResult = ReturnType<typeof useSalesFormLazyQuery>;
export type SalesFormQueryResult = Apollo.QueryResult<SalesFormQuery, SalesFormQueryVariables>;