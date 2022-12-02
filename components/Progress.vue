<template>
  <div class="progressbar">
    <div class="page">{{ page }} / {{ maxLength }}</div>
    <div class="gauge" :style="{width: `${page / maxLength * 100 }%`}"></div>
  </div>
</template>
<script>// @ts-nocheck

export default {
  computed: {
    page(){
      return this.$store.state.page
    },
    maxLength(){
      return this.$store.state.questions.length
    },
  }
}
</script>
<style scope>
  .progressbar {
    margin: 50px 0;  
  } 
  .page {
    font-size: 14px;
  }
  .gauge {
    background: cornflowerblue;
    height: 10px;
    margin-top: 10px;
    border-radius: 10px;
  }
</style>