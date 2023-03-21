<template>
  <div>
    <h1>{{page}}. {{question}}</h1>
    <Button v-for="(item , index) in answers"
    styleType="blue" 
    :key="index" 
    :text="item.text"
    :clickEvent="() => {
      clickButton(item)
    }"
    />
    <Progress  />
  </div>
</template>
<script>
export default {
  // computed - 상태를 가져와서 쓸거기 때문
  // computed : ( 연산프로퍼티 )
  computed:{
    // questions(){
    //   return this.$store.state.questions;
    // },
    page(){
      return this.$store.state.page;
    },
    question(){
      return this.$store.state.questions[this.$store.state.page - 1].q;
    },
    answers(){
      return this.$store.state.questions[this.$store.state.page - 1].a
    },
  },
  methods: {
    clickButton(item){
      // this.$store.dispatch('clickButton', item.value);
      this.$store.dispatch("clickAnswer", item.value);
      // 마지막 질문일때만 라우터 이동
      if(this.page === this.$store.state.questions.length){

        const result = this.$store.state.result

        this.$router.push({
        name: 'result-mbti' ,
        params: {
        mbti: `${result.e === 1 ? "e" : "i"}${result.s === 1 ? "s" : "n"}${result.t === 1 ? "t" : "f"}${result.p === 1 ? "p" : "j"}`
      }})
      }
    
    }
  },
  
}
</script>
<style> 
  
</style>