const { gql } = require('apollo-server-express');

//typeDefs definition
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    favourites: [Book]
    read: [Book]
    favouritesCount: Int
    readCount: Int
    searchHistory: [String]
  }

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    title: String
    description: String
    categories: [String]
    image: String
    isbn13: String
    isbn10: String
    webReaderLink: String
    googleListPrice: String
    googleRetailPrice: String
    googlePlayBooks: String
    googleRatings: Int
    publishedDate: String
    publisher: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input bookData {
    _id: ID
    bookId: String
    authors: [String]
    title: String!
    description: String
    categories: [String]
    image: String
    isbn13: String
    isbn10: String
    webReaderLink: String
    googleListPrice: String
    googleRetailPrice: String
    googlePlayBooks: String
    googleRatings: Int
    publishedDate: String
    publisher: String
  }

  type Query {
    users: [User]
    user(username: String): User
    getMe: User
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    addFavouriteBook(input: bookData): User
    deleteFavouriteBook(bookId: String!): User
    addReadBook(input: bookData): User
    deleteReadBook(bookId: String!): User
    searchedHistory(searchString: String!, iddd:String): User
  }
`
//addFavouriteBook(input: bookData!): User
//deleteFavouriteBook(ibsnId: String!): User
//addFavouriteBook(input: bookData!, iddd: String): User
//deleteFavouriteBook(ibsnId: String!, iddd: String): User
// export the typeDefs
module.exports = typeDefs;