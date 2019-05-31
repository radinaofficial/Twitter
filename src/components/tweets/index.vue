<template>
  <div>
    <h1 class="alignTitle">Tweets:</h1>        
    <b-row v-for="i in Math.ceil(tweets.length / 2)" v-bind:key="i" class="spaceTop">
      <b-col cols="6" v-for="tweet in tweets.slice((i - 1) * 2, i *2)" v-bind:key="tweet.title">
        <div class="card maxWidth">
          <div class="card-body">
            <h4 class="card-title">{{ tweet.title }}</h4>
            <h5 class="card-subtitle mb-2 text-muted">{{ tweet.content }}</h5>
            <p class="card-text">{{ tweet.tag }}</p>
            <h6 class="card-subtitle mb-2 text-muted">{{ tweet.place }}</h6>
          </div>
        </div>
      </b-col>
    </b-row>
    
  </div>    
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {  
  name: 'Tweets',
  data() {
    return {
      alltweets: []
    }
  },
  computed:{
    tweets () {
      return this.$store.state.tweets
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.maxWidth{
  width: 100%;
}

.spaceTop {
  margin-top: 5px;
  margin-bottom: 3px;
}
</style>
