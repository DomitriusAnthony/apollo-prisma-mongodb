const resolvers = {
    Query: {
        users: (_, args, { prisma }) => {            
             return prisma.users();
        }
    },
    Mutation: {
        createUser: (_, args, { prisma }) => {            
            const newUser = prisma.createUser({
                ...args,
            })

            return newUser;
        }
    }
}

module.exports = resolvers;