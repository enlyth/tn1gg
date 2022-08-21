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

export type DailyWeather = {
  __typename?: 'DailyWeather';
  precipitation_sum: Array<Scalars['Float']>;
  temperature_2m_max: Array<Scalars['Float']>;
  temperature_2m_min: Array<Scalars['Float']>;
  time: Array<Scalars['String']>;
};

export type DailyWeatherInfo = {
  __typename?: 'DailyWeatherInfo';
  precipitation_sum: Scalars['String'];
  temperature_2m_max: Scalars['String'];
  temperature_2m_min: Scalars['String'];
  time: Scalars['String'];
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

export type NewsItem = {
  __typename?: 'NewsItem';
  author: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  guid: Scalars['String'];
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  link: Scalars['String'];
  pubDate: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  minecraftStatus: MinecraftStatus;
  news: Array<Maybe<NewsItem>>;
  weather: Weather;
};

export type Weather = {
  __typename?: 'Weather';
  daily: DailyWeather;
  daily_units: DailyWeatherInfo;
  elevation: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  timezone: Scalars['String'];
  timezone_abbreviation: Scalars['String'];
};

export type MinecraftStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type MinecraftStatusQuery = { __typename?: 'Query', minecraftStatus: { __typename?: 'MinecraftStatus', online: boolean, name?: string | null, players?: number | null, maxPlayers?: number | null, version?: string | null, ping?: number | null, lastUpdated?: number | null } };

export type NewsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsQuery = { __typename?: 'Query', news: Array<{ __typename?: 'NewsItem', title: string, link: string, pubDate: string, description?: string | null, guid: string, keywords?: Array<string | null> | null, author: string } | null> };

export type WeatherQueryVariables = Exact<{ [key: string]: never; }>;


export type WeatherQuery = { __typename?: 'Query', weather: { __typename?: 'Weather', timezone: string, timezone_abbreviation: string, latitude: number, longitude: number, elevation: number, daily: { __typename?: 'DailyWeather', time: Array<string>, temperature_2m_min: Array<number>, temperature_2m_max: Array<number>, precipitation_sum: Array<number> }, daily_units: { __typename?: 'DailyWeatherInfo', time: string, temperature_2m_min: string, temperature_2m_max: string, precipitation_sum: string } } };


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
export const NewsDocument = gql`
    query news {
  news {
    title
    link
    pubDate
    description
    guid
    keywords
    author
  }
}
    `;

/**
 * __useNewsQuery__
 *
 * To run a query within a React component, call `useNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewsQuery(baseOptions?: Apollo.QueryHookOptions<NewsQuery, NewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
      }
export function useNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsQuery, NewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
        }
export type NewsQueryHookResult = ReturnType<typeof useNewsQuery>;
export type NewsLazyQueryHookResult = ReturnType<typeof useNewsLazyQuery>;
export type NewsQueryResult = Apollo.QueryResult<NewsQuery, NewsQueryVariables>;
export const WeatherDocument = gql`
    query weather {
  weather {
    timezone
    timezone_abbreviation
    latitude
    longitude
    daily {
      time
      temperature_2m_min
      temperature_2m_max
      precipitation_sum
    }
    elevation
    daily_units {
      time
      temperature_2m_min
      temperature_2m_max
      precipitation_sum
    }
  }
}
    `;

/**
 * __useWeatherQuery__
 *
 * To run a query within a React component, call `useWeatherQuery` and pass it any options that fit your needs.
 * When your component renders, `useWeatherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWeatherQuery({
 *   variables: {
 *   },
 * });
 */
export function useWeatherQuery(baseOptions?: Apollo.QueryHookOptions<WeatherQuery, WeatherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WeatherQuery, WeatherQueryVariables>(WeatherDocument, options);
      }
export function useWeatherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WeatherQuery, WeatherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WeatherQuery, WeatherQueryVariables>(WeatherDocument, options);
        }
export type WeatherQueryHookResult = ReturnType<typeof useWeatherQuery>;
export type WeatherLazyQueryHookResult = ReturnType<typeof useWeatherLazyQuery>;
export type WeatherQueryResult = Apollo.QueryResult<WeatherQuery, WeatherQueryVariables>;