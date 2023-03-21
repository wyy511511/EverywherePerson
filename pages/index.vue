<template>
  <!-- 인트로 페이지 -->
  <main v-if="page === 0">
    <img src="../static/MBTI.png" alt="MBTI MAIN">
    <h1>Everywher Person </h1>
    <h2>润吗? 润哪？</h2>
    <Button text="Test Start" :clickEvent="startTest"/>
  </main>
  <!-- 질문 페이지 -->
  <main v-else-if="page < 5">
    <Question />
  </main>
  <!-- 결과 페이지 -->
  <!-- <main v-else-if="page === 5">
    <Result />
  </main> -->
</template>

<script>
/**
 * 메인페이지에 들어갈 것
 * 1. 인트로 페이지
 * 2. 조건부 랜더링을 통해 퀴즈 컴포넌트
 * 3. 결과는 페이지 이동 /result/_mbti.vue
 */

export default {
  computed:{
    page(){
      return this.$store.state.page;
    },
  },
  methods: {
    startTest(){
      this.$store.commit('SET_PAGE' , 1)
    }
  },
}
</script>
