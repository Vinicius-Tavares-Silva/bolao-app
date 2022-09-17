import ApolloClient from 'apollo-boost'
import { DefaultApolloClient } from '@vue/apollo-composable'

export const defaultApolloClient = DefaultApolloClient

export const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl4xh4n5d0jvw01tac8qj8dg9/master'
})
