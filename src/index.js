import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import { UserAPI } from "./datasources/user-api.js";

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
	context: async () => {
		const { cache } = server;
		return {
			dataSources: {
				userAPI: new UserAPI({ cache }),
			},
		};
	},
});

console.log(`server running on port ${url}`);
