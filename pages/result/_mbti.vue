<template>
  <main>
    <img :src="result[mbti].img" :alt="result[mbti].title" />
    <h1>{{result[mbti].title}}</h1>
    <h2>{{result[mbti].subtitle}}</h2>
    <p v-html="result[mbti].description"></p>
    <Button text="다시 테스트하기" :clickEvent="resetPage" />
  </main>
</template>
<script>
  // @ts-nocheck

  export default {
    data() {
      return {
        mbti: null,
        result: {
          istj: {
            img: "/istj.jpg",
            title: "당신의 MBTI 유형은 ISTJ 입니다",
            subtitle: "현실주의자",
            description: "현실주의자(ISTJ)는 진실하게 행동하는 자신의 모습에서 자부심을 느끼며, 자기 생각을 솔직하게 이야기하고 어떤 것에 헌신하기로 한 경우 최선을 다합니다. 현실주의자는 인구의 상당 부분을 차지합니다."
          },
          isfj: {
            img: "/isfj.png",
            title: "당신의 MBTI 유형은 ISFJ 입니다",
            subtitle: "수호자",
            description: "수호자(ISFJ)는 유능하고 긍정적인 성격으로 다양한 방면에서 역량을 발휘합니다. 또한 세심하고 배려심이 넘치며 분석 능력과 세부 사항 파악 능력도 뛰어납니다. 그리고 차분한 성격인 동시에 대인 관계 능력도 뛰어나며, 이 때문에 여러 사람과 깊은 관계를 맺을 가능성도 큽니다."
          },
          infj: {
            img: "/infj.jpg",
            title: "당신의 MBTI 유형은 INFJ 입니다",
            subtitle: "옹호자",
            description: "옹호자(INFJ)는 매우 희귀한 성격임에도 불구하고 세상에 큰 영향력을 발휘하곤 합니다. 이들은 이상주의적이고 원칙주의적인 성격으로, 삶에 순응하는 대신 삶에 맞서 변화를 만들어 내고자 합니다."
          },
          intj: {
            img: "/intj.jpg",
            title: "당신의 MBTI 유형은 INTJ 입니다",
            subtitle: "전략가",
            description: "전략가(INTJ)는 이성적이면서도 두뇌 회전이 빠른 성격으로, 자신의 뛰어난 사고 능력을 자랑스러워하며 거짓말과 위선을 꿰뚫어 보는 능력이 있습니다. 하지만 이로 인해 끊임없이 생각하고 주변의 모든 것을 분석하려는 자신의 성향을 이해할 수 있는 사람을 찾는 데 어려움을 겪기도 합니다."
          },
          istp: {
            img: "/istp.png",
            title: "당신의 MBTI 유형은 ISTP 입니다",
            subtitle: "장인",
            description: "장인(ISTP)은 이성과 호기심을 통해 세상을 바라보며 눈과 손으로 직접 탐구하는 일을 즐깁니다. 이들은 타고난 손기술을 지니고 있으며, 다양한 프로젝트에서 유용하고 재미있는 물건을 만들어 내고 주변 환경에서 배울 점을 찾습니다."
          },
          isfp: {
            img: "/isfp.jpg",
            title: "당신의 MBTI 유형은 ISFP 입니다",
            subtitle: "모험가",
            description: "모험가(ISFP)는 진정한 의미의 예술가라고 할 수 있습니다. 하지만 모험가라고 반드시 예술 업계에만 종사하는 것은 아닙니다. 이들에게는 삶 자체가 자신을 표현하기 위한 캔버스이기 때문입니다. 이들은 입는 옷부터 여가 시간을 보내는 방식까지 다양한 측면에서 자신의 독특한 개성을 생생히 드러냅니다."
          },
          infp: {
            img: "/infp.jpg",
            title: "당신의 MBTI 유형은 INFP 입니다",
            subtitle: "중재자",
            description: "중재자(INFP)는 언뜻 보기에 조용하고 자신을 내세우지 않는 것처럼 보이지만, 사실은 에너지와 열정이 넘치는 마음을 지닌 성격입니다. 이들은 창의적이고 상상력이 뛰어나며 몽상을 즐기는 성격으로, 머릿속에서 수많은 이야기를 만들어 내곤 합니다.",
          },
          intp: {
            img: "/intp.png",
            title: "당신의 MBTI 유형은 INTP 입니다",
            subtitle: "논리술사",
            description: "논리술사(INTP)는 자신의 독특한 관점과 활기 넘치는 지성에 자부심을 느끼며, 우주의 미스터리에 대해 깊이 생각하곤 합니다. 유명한 철학자와 과학자 중 논리술사 성격이 많은 것도 이 때문일 것입니다. 논리술사는 상당히 희귀한 성격이지만 뛰어난 창의성과 독창성으로 많은 사람 사이에서 존재감을 드러내곤 합니다. 이렇게 논리적이면서도 마술사와 같은 창의력을 발휘하는 성격이기에 ‘논리술사’라고 부르게 되었습니다.",
          },
          estp: {
            img: "/estp.jpg",
            title: "당신의 MBTI 유형은 ESTP 입니다",
            subtitle: "사업가",
            description: "사업가(ESTP)는 항상 주변 사람에게 영향력을 행사하곤 합니다. 파티에서 가는 곳마다 사람들에게 둘러싸여 있는 사람을 발견한다면 아마 사업가일 것입니다. 이들은 직설적인 유머 감각을 지니고 있으며 수많은 사람의 관심을 받는 일을 즐깁니다. 한 마디로 사회자가 무대로 올라올 사람을 찾을 때 직접 무대로 올라가는 성격이라고 할 수 있습니다.",
          },
          esfp: {
            img: "/esfp.jpg",
            title: "당신의 MBTI 유형은 ESFP 입니다",
            subtitle: "연예인",
            description: "연예인(ESFP)은 즉흥적으로 노래하고 춤을 추는 일을 즐기는 성격입니다. 이들은 지금 이 순간을 즐기며 남들도 자신과 같은 즐거움을 느낄 수 있기를 바랍니다. 또한 남을 응원하는 데 기꺼이 시간과 에너지를 투자하며, 매우 매력적인 방식으로 다른 사람의 기운을 북돋곤 합니다.",
          },
          enfp: {
            img: "/enfp.jpg",
            title: "당신의 MBTI 유형은 ENFP 입니다",
            subtitle: "활동가",
            description: "ESFP 유형은 사교적이고 친절하며 관용적이다. 매사 긍정적이고, 사람들과 함께 즐겁게 일을 해 나가는 것을 좋아한다. 새로운 사람과 환경에 빨리 적응하는 편이며, 현실적이고 융통성을 잘 발휘한다.",
          },
          entp: {
            img: "/entp.jpg",
            title: "당신의 MBTI 유형은 ENTP 입니다",
            subtitle: "변론가",
            description: "변론가(ENTP)는 두뇌 회전이 빠르고 대담한 성격으로 현재 상황에 이의를 제기하는 데 거리낌이 없습니다. 변론가는 어떤 의견이나 사람에 반대하는 일을 두려워하지 않으며, 논란이 될 만한 주제에 대해 격렬하게 논쟁하는 일을 즐깁니다.",
          },
          estj: {
            img: "/estj.png",
            title: "당신의 MBTI 유형은 ESTJ 입니다",
            subtitle: "경영자",
            description: "경영자(ESTJ)는 전통과 질서를 중시하는 성격으로, 자신이 생각하는 옳고 그름과 사회적 기준에 따라 가족과 공동체가 화합할 수 있도록 노력합니다. 이들은 정직과 헌신과 존엄성을 중시하며, 어려운 길을 기꺼이 앞장서고 다른 사람들에게 명확한 조언과 지도를 제공합니다.",
          },
          esfj: {
            img: "/esfj.jpg",
            title: "당신의 MBTI 유형은 ESFJ 입니다",
            subtitle: "집정관",
            description: "집정관(ESFJ)에게 인생이란 남과 함께 나눌 때 가장 즐거운 것입니다. 이들은 여러 사람을 하나로 모으는 역할을 하며 솔직하고 개방적인 태도로 친구와 연인과 이웃을 대합니다.",
          },
          enfj: {
            img: "/enfj.jpg",
            title: "당신의 MBTI 유형은 ENFJ 입니다",
            subtitle: "선도자",
            description: "선도자(ENFJ)는 삶에서 위대한 사명을 위해 힘써야 한다는 느낌을 받곤 합니다. 사려 깊고 이상주의적 성향을 지닌 선도자는 다른 사람과 주변 세상에 긍정적인 영향력을 발휘하기 위해 최선을 다하며, 어려운 상황에서도 올바른 일을 할 기회를 마다하지 않습니다.",
          },
          entj: {
            img: "/entj.jpg",
            title: "당신의 MBTI 유형은 ENTJ 입니다",
            subtitle: "통솔자",
            description: "통솔자(ENTJ)는 타고난 지도자라고 할 수 있습니다. 이들은 카리스마와 자신감을 지니고 있으며 자신의 권한을 이용해 사람들이 공통된 목표를 위해 함께 노력하도록 이끕니다. 또한 이들은 냉철한 이성을 지닌 것으로 유명하며, 자신이 원하는 것을 성취하기 위해 열정과 결단력과 날카로운 지적 능력을 활용합니다. 이들은 전체 인구의 3%에 불과하지만 다른 많은 성격을 압도하는 존재감을 뽐내며, 많은 비즈니스와 단체를 이끄는 역할을 할 때가 많습니다.",
          },
        }
      };
    },
    created() {
      this.mbti = this.$route.params.mbti;
      // this.mbti = "esfj";

      // 예외 처리
      // if (this.result[this.$route.params.mbti] === undefined) {
      //   this.$router.push({ name: "index" });
      // }
    },
    methods: {
      resetPage() {
        this.$store.dispatch("clickResetButton");
        this.$router.push({
          name: "index"
        });
      }
    }
  };

</script>
<style>
</style>
