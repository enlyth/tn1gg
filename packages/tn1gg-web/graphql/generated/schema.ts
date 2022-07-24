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

export type MinecraftStatus = {
  __typename?: 'MinecraftStatus';
  lastUpdated?: Maybe<Scalars['Float']>;
  maxPlayers?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  online: Scalars['Boolean'];
  ping?: Maybe<Scalars['Int']>;
  players?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  minecraftStatus: MinecraftStatus;
};

export type MinecraftStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type MinecraftStatusQuery = { __typename?: 'Query', minecraftStatus: { __typename?: 'MinecraftStatus', online: boolean, name?: string | null, players?: number | null, maxPlayers?: number | null, version?: string | null, ping?: number | null, lastUpdated?: number | null } };


export const MinecraftStatusDocument = gql`
    query minecraftStatus {
  minecraftStatus {
    online
    name
    players
    maxPlayers
    version
    ping
    lastUpdated
  }
}
    `;

/**
 * __useMinecraftStatusQuery__
 *
 * To run a query within a React component, call `useMinecraftStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useMinecraftStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMinecraftStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useMinecraftStatusQuery(baseOptions?: Apollo.QueryHookOptions<MinecraftStatusQuery, MinecraftStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MinecraftStatusQuery, MinecraftStatusQueryVariables>(MinecraftStatusDocument, options);
      }
export function useMinecraftStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MinecraftStatusQuery, MinecraftStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MinecraftStatusQuery, MinecraftStatusQueryVariables>(MinecraftStatusDocument, options);
        }
export type MinecraftStatusQueryHookResult = ReturnType<typeof useMinecraftStatusQuery>;
export type MinecraftStatusLazyQueryHookResult = ReturnType<typeof useMinecraftStatusLazyQuery>;
export type MinecraftStatusQueryResult = Apollo.QueryResult<MinecraftStatusQuery, MinecraftStatusQueryVariables>;