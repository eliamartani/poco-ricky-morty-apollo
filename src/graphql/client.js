import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const uri = 'https://rickandmortyapi.com/graphql/';

cache.writeData({ data: { favoriteCharacters: [] } });

const client = new ApolloClient({
  uri,
  cache,
  onError: ({ networkError, graphQLErrors }) => {
    console.error('🔥 graphQLErrors', graphQLErrors);
    console.error('🔥 networkError', networkError);
  },
});

export default client;
