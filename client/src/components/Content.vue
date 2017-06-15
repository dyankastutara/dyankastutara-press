<template lang="html">
  <div>
    <div class="columns">
      <div class="column is-one-quarter">
        <p class="notification is-info">
          <code class="html">is-one-quarter</code>
        </p>
      </div>
      <div class="column">
        <Card :bordered="true" v-for="article in articles">
          <p slot="title">{{article.title}}</p>
          <p>{{article.content}}</p>
      </Card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  methods : {
    getArticle(){
      this.$store.dispatch('getArticles')
    }
  },
  computed : {
    ...mapState([
      'articles'
    ])
  },
  created(){
    this.getArticle()
  }
}
</script>

<style lang="css" scoped>
.columns{
  margin-top: 50px;
  text-align: left;
}
</style>
