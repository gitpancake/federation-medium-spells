import { ApolloServer, gql } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

const typeDefs = gql`
	type Spell {
		id: Int!
		name: String
	}

	extend type Query {
		spells: [Spell]
	}
`;

const resolvers = {
	Query: {
		spells: async () => {
			return [
				{ id: 1, name: 'Wingardium Leviosar' },
				{ id: 2, name: 'Alohomora' },
			];
		},
	},
};

const server = new ApolloServer({
	schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4002 }).then(({ url }) => {
	console.log(`🚀 Spells Service ready at ${url}`);
});
