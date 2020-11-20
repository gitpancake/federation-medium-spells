import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';

const PORT = 4000;

const gateway = new ApolloGateway({
	serviceList: [
		{ name: 'wizards', url: 'http://localhost:4001' },
		{ name: 'spells', url: 'http://localhost:4002' },
	],
});

const server = new ApolloServer({
	gateway,
	subscriptions: false,
});

server.listen({ port: PORT }).then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
