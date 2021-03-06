import { gql } from "apollo-server-express";

// createdAt && updatedAt columns should be Date type, instead of String.
// delete methods are returning statuscode isntead of entity instance
export const typeDefs = gql`
  scalar Date

  type User {
    firstName: String!
    lastName: String
    passwordHash: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    id: ID!
    post: [Post!]
  }
  type Post {
    title: String
    content: String!
    createdAt: String!
    updatedAt: String
    id: ID!
    authorId: User
  }

  type Query {
    allUsers: [User!]!
    findUser(id: ID!): User
    allPosts: [Post!]!
    findPost(id: ID!): Post
  }
  type Mutation {
    createUser(
      firstName: String!
      lastName: String
      passwordHash: String!
      email: String!
    ): User
    createPost(title: String, content: String!): Post
    deleteUser(id: Int!): User
    deletePost(id: Int!): Post
  }
`;
