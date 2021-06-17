import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutationsTypes";

Vue.use(Vuex);

const moduleA = {
  state: {
    name: "John Smith",
    age: 23
  },
  mutations: {
    changeName(state) {
      state.name = "Smith John";
    }
  },
  actions: {
    aUpdateName(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("changeName");
          resolve("moduleA action aChangeName");
        }, 1000);
      });
    }
  },
  getters: {
    fullname(state) {
      return "Fullname: " + state.name;
    },
    fullname2(state, getters) {
      return getters.fullname + " End";
    },
    addCounter(state, getters, rootState) {
      return getters.fullname2 + " " + rootState.counter;
    }
  }
};

const store = new Vuex.Store({
  state: {
    counter: 12,
    students: [
      { id: 100, name: "BoxHezi", age: 24 },
      { id: 200, name: "Li Goudan", age: 18 },
      { id: 300, name: "Dalabengba", age: 21 }
    ],
    info: {
      name: "BoxHezi"
    }
  },
  mutations: {
    [types.INCREMENT](state) {
      state.counter++;
    },
    [types.DECREMENT](state) {
      state.counter--;
    },
    [types.INCREMENT_COUNT](state, count) {
      state.counter += count;
    },
    [types.UPDATE_INFO](state) {
      state.info.name = "CubicBox";
    }
  },
  actions: {
    // actions中 - 异步方法。需要使用context.commit调用mutations中的方法

    // context: 上下文
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(types.UPDATE_INFO);
          console.log(payload);
          resolve("Action Succeed!");
        }, 1000);
      });
    }
  },
  getters: {
    squareCounter(state) {
      return state.counter * state.counter;
    },
    olderThan20(state) {
      return state.students.filter(s => {
        return s.age >= 20;
      });
    },
    olderThan20Count(state, getters) {
      return getters.olderThan20.length;
    },
    olderThanAge(state) {
      // return function(age) {
      //   return state.students.filter(s => s.age > age);
      // };
      return age => {
        return state.students.filter(s => s.age > age);
      };
    }
  },
  modules: {
    // 可以将state中的东西抽离写成模块

    a: moduleA
  }
});

export default store;
