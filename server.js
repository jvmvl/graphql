var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
		name: String
		age: String
		email: String
		github: String
		twitter: String
		employed: Boolean
    }
`);

var root = {
    name: () => 'Jamal Chahir',
    age: () => 'over 30 years',
    email: () => 'jamalchahir@hotmail.com',
    github: () => 'https://github.com/jvmvl',
    twitter: () => 'https://twitter.com/f4m0usb34u7y',
    employed: () => true
};

var app = express();
app.use('/', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(1337, () => console.log('Express GraphQL Server Now Running On localhost:1337/graphql'));
