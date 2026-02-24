export const typeDefs = `
    type User{
        id:ID!
        name:String!
        email:String!
        gender:String!
        sal:Int!
    }
    
    type Query{
        users:[User]
        user(id:ID!):User
    }

    type Mutation{
       createUser(name:String!,email:String!,gender:String!,sal:Int!):User
       deleteUser(id:ID!) : String
    }
`