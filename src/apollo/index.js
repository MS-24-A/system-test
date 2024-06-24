import { ApolloClient, InMemoryCache,createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {getJWT} from "../../utils/accessToken";

const httpLink = createHttpLink({
	uri: `${process.env.API_URL}/graphql`,
});
const authLink = setContext((_, { headers }) => {
	const ACCESS_TOKEN = getJWT();
	return {
		headers: {
			...headers,
			authorization: ACCESS_TOKEN ? `Bearer ${ACCESS_TOKEN}` : "",
		}
	}
});
const apolloClient  = new ApolloClient({
	link:authLink.concat(httpLink),
	cache: new InMemoryCache()
});

export default apolloClient