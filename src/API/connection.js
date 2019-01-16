import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://www.graphqlhub.com/graphql'
});

export default apolloClient;