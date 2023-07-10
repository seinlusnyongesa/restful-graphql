import { gql } from "graphql-tag";
export const typeDefs = gql`
	type Query {
		users: [User!]!
		user(id: ID!): User!
	}
	type User {
		id: ID!
		name: String!
		username: String!
		email: String
		posts: [Post!]
	}

	type Post {
		id: ID!
		title: String!
		body: String!
		user: User
	}
`;
