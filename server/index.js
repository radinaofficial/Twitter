const express = require('express');
const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const Tweet = require('./tweet');
const schema = buildSchema(`
    type Query {
        getTweets: [Tweet]
    }

    type Mutation {
        addTweet(title: String!, content: String!, tag: String!, place: String!): Tweet
    }

    type Tweet {
        title: String
        content: String
        tag: String
        place: String
    }
`);

const tweets = [
    new Tweet('My first tweet',
        'Hello world!',
        '#firstTweet',
        'Plovdiv 2019')
];

const rootValue = {
    getTweets: () => tweets,
    addTweet: ({title, content, tag, place}) => {
        const tweet = new Tweet();
        tweet.title = title;
        tweet.content = content;
        tweet.tag = tag;
        tweet.place = place;
        return tweet;
    }
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    rootValue, schema, graphiql: true
}));

app.listen(4000, () => console.log("listening on port 4000"));