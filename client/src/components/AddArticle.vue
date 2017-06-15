<template lang="html">
  <div>
    <div class="columns">
      <div class="column is-one-quarter">
        <p class="notification is-info">
          <code class="html">is-one-quarter</code>
        </p>
      </div>
      <div class="column content">
        <div class="field">
          <p class="control">
          <strong><label>Title Article</label></strong>
        </p>
          <p class="control">
            <input class="input" type="text" placeholder="Title Article" v-model="title">
          </p>
        </div>
        <p class="control">
        <strong><label>Content</label></strong>
      </p>
        <div class="field">
          <p class="control">
            <textarea class="textarea" placeholder="content" v-model="content"></textarea>
          </p>
        </div>
        <div class="field">
          <p class="control">
          <strong><label>Category</label></strong> silahkan isi sendiri
        </p>
          <p class="control">
            <input class="input" type="text" placeholder="Category" v-model="category">
          </p>
        </div>
        <div class="field is-grouped">
  <p class="control">
    <button class="button is-success" @click="save">Save</button>
  </p>
  <p class="control">
    <button class="button is-link">Cancel</button>
  </p>
</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title : '',
      content : '',
      category : ''
    }
  },
  methods : {
    save(){
      var article = {
        title : this.title,
        content : this.content,
        category : this.category
      }
      this.$store.dispatch('createArticles', article).then(res=>{
        this.$router.push('/')
        this.title = ''
        this.content = ''
        this.category =''
      })
    }
  }
}
</script>

<style lang="css" scoped>
.columns{
  margin-top: 50px;
  text-align: left;
}
.content{
  width: 50%;
}
</style>
