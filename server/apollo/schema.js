const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        posts: [Post!]!
    }

    type Post {
        id: ID!
        title: String!
        pulished: Boolean! 
        author: User
    }

    type Query {
        users: [User!]!
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`

module.exports = typeDefs;