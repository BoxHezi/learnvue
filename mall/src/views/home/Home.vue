<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:center>Mall</template>
    </nav-bar>
    <ol>
      <li v-for="item in this.banner" v-bind:key="item">
        <img :src="item.image" />
      </li>
    </ol>
  </div>
</template>

<script>
import { getHomeMultiData } from "@/network/home";
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      banner: {
        type: Array,
        default() {
          return [];
        }
      },
      recommend: {
        type: Array,
        default() {
          return [];
        }
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

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 2px;
}

img {
  width: 100%;
}
</style>
