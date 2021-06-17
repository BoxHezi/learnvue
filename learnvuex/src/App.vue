<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition()">+</button>
    <button @click="substraction()">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>--------------Getters---------------</h2>

    <h2>{{ $store.getters.squareCounter }}</h2>
    <h2>{{ $store.getters.olderThan20 }}</h2>
    <h2>{{ $store.getters.olderThan20Count }}</h2>
    <h2>{{ $store.getters.olderThanAge(22) }}</h2>

    <h2>--------------state.info---------------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo()">Change Info</button>

    <h2>--------------modules---------------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.addCounter }}</h2>
    <button @click="changeName()">Change Name</button>
    <button @click="aChangeName()">aChangeName</button>

    <h2>-----------------------------</h2>

    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
import * as types from "./store/mutationsTypes";

export default {
  name: "App",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "Hello World"
    };
  },
  methods: {
    addition() {
      this.$store.commit(types.INCREMENT);
    },
    substraction() {
      this.$store.commit(types.DECREMENT);
    },
    addCount(count) {
      // mutations传入参数
      this.$store.commit(types.INCREMENT_COUNT, count);
    },
    updateInfo() {
      // this.$store.commit(types.UPDATE_INFO)
      this.$store.dispatch("aUpdateInfo", "PayLoad").then(data => {
        console.log(data);
      });
    },
    changeName() {
      this.$store.commit("changeName");
    },
    aChangeName() {
      this.$store.dispatch("aUpdateName").then(data => {
        console.log(data);
      });
    }
  }
};
</script>

<style></style>
