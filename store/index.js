// 상태
export const state = {
  page : 0,
  questions : [
  {
    q : "당신은 외향적이신가요?",
    a : [
    {
      text : "네",
      value : "e"
    },
    {
      text : "아니요",
      value : "i"
    },
    ]
  },
  {
    q : "당신은 감각적이신가요?",
    a : [
    {
      text : "네",
      value : "s"
    },
    {
      text : "아니요",
      value : "n"
    },
    ]
  },
  {
    q : "당신은 감정적이신가요?",
    a : [
    {
      text : "네",
      value : "f"
    },
    {
      text : "아니요",
      value : "t"
    },
    ]
  },
  {
    q : "당신은 계획적이신가요?",
    a : [
    {
      text : "네",
      value : "j"
    },
    {
      text : "아니요",
      value : "p"
    },
    ]
  }
],
  result: {
    e: 0,
    i: 0,
    s: 0,
    n: 0,
    t: 0,
    f: 0,
    p: 0,
    j: 0,
  }
}

// commit, state 를 변경한다
export const mutations = {
  // 질문에 응답을 했을 때, 저장되도록 반영
  // 첫번째 파라미터는 언제나 state 
  SET_USER_TYPE(state , type) {
    state.result[type] += 1;
    state.page += 1;
  },

  // 페이지만 변경하는 mutation
  SET_PAGE(state, page){
    state.page = page;
  },

  // 초기화기때문에 state 옆의 payload 를 설정안했음
  PAGE_RESET(state){
    state.page = 0;
    state.result = {
      e: 0,
      i: 0,
      s: 0,
      n: 0,
      t: 0,
      f: 0,
      p: 0,
      j: 0,
    }
  },

}

// 액션 
export const actions = {
  // 'commit' 을 이용하여 위에'mutations' 에 있는것을 가져올수 있음
  clickButton({commit} , type ){
    commit('SET_USER_TYPE' , type)
  },
  clickResetButton({commit}){
    commit('PAGE_RESET')
  }
}