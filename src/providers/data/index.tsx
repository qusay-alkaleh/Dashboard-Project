import grapgqlDataProvider, {
  GraphQLClient,
  liveProvider as grapgqlLiveProvider,
} from '@refinedev/nestjs-query';
import { fetchWrapper } from './fetch-wrapper';
import { createClient } from 'graphql-ws';

export const API_BASE_URL = 'https://api.crm.refine.dev';
export const API_URL = `${API_BASE_URL}/graphql`;
export const WS_URL = 'wss://api.crm.refine.dev/hraphql';

export const client = new GraphQLClient(API_URL, {
  fetch: (url: string, options: RequestInit) => {
    try {
      fetchWrapper(url, options);
    } catch (error) {
      return Promise.reject(error as Error);
    }
  },
});

export const wsClient =
  typeof window !== 'undefined'
    ? createClient({
        url: WS_URL,
        connectionParams: () => {
          const accessToken = localStorage.getItem('access_token');

          return {
            Authorization: `Bearer ${accessToken}`,
          };
        },
      })
    : undefined;

export const dataProvider = grapgqlDataProvider(client);
export const liveProvider = wsClient
  ? grapgqlLiveProvider(wsClient)
  : undefined;
