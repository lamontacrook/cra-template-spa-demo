
import { useState, useEffect } from 'react';
const { AEMHeadless } = require('@adobe/aem-headless-client-js')

// environment variable REACT_APP_GRAPHQL_ENDPOINT is used to point to endpoint in AEM
const {
  REACT_APP_PUBLIC_URI,
  REACT_APP_GRAPHQL_ENDPOINT,
  REACT_APP_AUTHORIZATION
} = process.env;

/**
 * Custom React Hook to perform a GraphQL query
 * @param query - GraphQL query
 * @param path - Persistent query path
 */
export function useGraphQL(query, path) {
  let [data, setData] = useState(null);
  let [errors, setErrors] = useState(null);

  useEffect(() => {
    const sdk = new AEMHeadless({
      serviceURL: REACT_APP_PUBLIC_URI,
      endpoint: REACT_APP_GRAPHQL_ENDPOINT,
      auth: REACT_APP_AUTHORIZATION.split(":"),
    })
    const request = query ? sdk.runQuery.bind(sdk) : sdk.runPersistedQuery.bind(sdk);

    request(query || path)
      .then(({ data, errors }) => {
        if (errors) setErrors(mapErrors(errors));
        if (data) setData(data);
      })
      .catch((error) => {
        setErrors(error);
      });
  }, [query, path]);

  return { data, errors }
}

/**
 * concatenate error messages into a single string.
 * @param {*} errors
 */
export function mapErrors(errors) {
  return errors.map((error) => error.message ? error.message : error).join(",");
}