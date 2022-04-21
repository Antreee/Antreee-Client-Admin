import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({
	uri: "https://d159-2001-448a-6040-2dcc-1b9-26c0-5707-def5.ngrok.io",
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
