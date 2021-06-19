<template>
  <div>
    <h2>Home</h2>
    <ol>
      <li v-for="item in this.banner" v-bind:key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
import { getHomeMultiData } from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      banner: {
        type: Array,
        default: []
      },
      recommend: {
        type: Array,
        default: []
      }
    };
  },
  methods: {},
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.banner.list;
    });
  }
};
</script>

<style></style>
