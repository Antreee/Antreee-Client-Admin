import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({
	uri: "https://8957-2001-448a-6040-fa9b-6465-b856-e017-8ae6.ngrok.io",
});

const authLink = setContext((_, { headers }) => {
	const access_token = localStorage.getItem("access_token");

	return {
		headers: {
			...headers,
			authorization: access_token ? `${access_token}` : "",
		},
	};
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(link),
});

export default client;
