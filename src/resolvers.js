export const resolvers = {
	Query: {
		users: (_, __, { dataSources }) => {
			return dataSources.userAPI.getUsers();
		},
		user: (_, { id }, { dataSources }) => {
			return dataSources.userAPI.getUser(id);
		},
	},
	User: {
		posts: async ({ id }, __, { dataSources }) => {
			return dataSources.userAPI.getUserPosts(id);
		},
	},
};
