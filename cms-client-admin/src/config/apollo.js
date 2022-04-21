import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({
	uri: "https://7c44-2001-448a-6040-fa9b-68c7-bdf7-bb21-ac1f.ngrok.io",
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
