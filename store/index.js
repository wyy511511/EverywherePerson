// 상태
export const state = {
  page : 0,
  questions : [
  {
    q : "你知道这是哪里吗?",
    a : [
    {
      text : "Yes",
      value : "e"
    },
    {
      text : "No",
      value : "i"
    },
    ]
  },
  {
    q : "你觉得加拿大可以躺平吗?",
    a : [
    {
      text : "Yes",
      value : "s"
    },
    {
      text : "No",
      value : "n"
    },
    ]
  },
  {
    q : "你可以学习3个小时吗?",
    a : [
    {
      text : "Yes",
      value : "f"
    },
    {
      text : "No",
      value : "t"
    },
    ]
  },
  {
    q : "你讨厌小红书文科转码刷题四道吗?",
    a : [
    {
      text : "Yes",
      value : "j"
    },
    {
      text : "No",
      value : "p"
    },
    ]
  },
  {
    q : "你讨厌小红书文科转码刷题四道吗?",
    a : [
    {
      text : "Yes",
      value : "j"
    },
    {
      text : "No",
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
// export const actions = {
//   // 'commit' 을 이용하여 위에'mutations' 에 있는것을 가져올수 있음
//   clickButton({commit} , type ){
//     commit('SET_USER_TYPE' , type)
//   },
//   clickResetButton({commit}){
//     commit('PAGE_RESET')
//   }
// }

export const actions = {
  clickAnswer({ commit }, value) {
    commit("SET_USER_TYPE", value);
  },
  clickResetButton({ commit }) {
    commit("PAGE_RESET");
  },
  // ...更多操作
};

// getters
export const getters = {
  // 根据 result 属性计算 MBTI 类型
  mbti(state) {
    const e = state.result.e > state.result.i ? "E" : "I";
    const s = state.result.s > state.result.n ? "S" : "N";
    const t = state.result.t > state.result.f ? "T" : "F";
    const p = state.result.p > state.result.j ? "P" : "J";
    return `${e}${s}${t}${p}`;
  },
};




