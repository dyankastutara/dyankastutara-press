<template lang="html">
  <div class="signin">
    <div class="layout">
        <div style="height: 200px">
          <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>
          <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>
          
        </div>
        <div class="layout-copy">
            2017 &copy; DyanKastutara
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.signin{
  margin-top : 15%;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    width : 40%;
    margin : auto;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.layout-ceiling{
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
}
.layout-ceiling-main{
    float: right;
    margin-right: 15px;
}
.layout-ceiling-main a{
    color: #9ba7b5;
}
</style>
