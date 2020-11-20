import { ApolloServer, gql } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

const typeDefs = gql`
	type Wizard @key(fields: "id") {
		id: Int!
		name: String
		hairColor: String
	}
	extend type Query {
		wizards: [Wizard]
	}
`;

const resolvers = {
	Query: {
		wizards: async () => {
			return [
				{ id: 1, name: 'Harry', hairColor: 'Black' },
				{ id: 2, name: 'Ron', hairColor: 'Ginger' },
				{ id: 3, name: 'Hermione', hairColor: 'Brown' },
			];
		},
	},
};

const server = new ApolloServer({
	schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4001 }).then(({ url }) => {
	console.log(`🚀 Wizards Service ready at ${url}`);
});
