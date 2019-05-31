import Vue from 'vue';
import Router from 'vue-router';
import Tweets from '../components/tweets';
import AddTweet from '../components/addtweet'

Vue.use(Router);

const routes = [
    {
        path:'/',
        name:'tweets',
        components:{
            default: Tweets
        },
    },
    {
        path:'/addtweet',
        name:'addtweet',
        components:{
            default: AddTweet
        }
    },
];

export default new Router({routes});