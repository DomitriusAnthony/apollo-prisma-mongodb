const { prisma } = require('./generated/prisma-client');

// A 'main' function so that we can use async/await
async function main() {

    // Create a new user
    const newUser = await prisma.createUser({ 
        name: "Domitrius",
        email: "dom@wow.com",
        posts: {
            create: [{
                title: "My first post"
            },{
                title: "Testing for two posts"
            }]
        }
    });
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

    // Read all users from the database and print them to the console
    const allUsers = await prisma.users();
    console.log(allUsers);

    const allPosts = await prisma.posts()
    console.log(allPosts)
}

main().catch(e => console.log(e));