<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:icon>
        <div>
          <img src="@/assets/img/tabbar/home.svg" alt="" />
        </div>
      </template>
      <template v-slot:active>
        <div>
          <img src="@/assets/img/tabbar/home-fill.svg" alt="" />
        </div>
      </template>
      <template v-slot:text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:icon>
        <div>
          <img src="@/assets/img/tabbar/category.svg" alt="" />
        </div>
      </template>
      <template v-slot:active>
        <div>
          <img src="@/assets/img/tabbar/category-fill.svg" alt="" />
        </div>
      </template>
      <template v-slot:text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:icon>
        <div>
          <img src="@/assets/img/tabbar/cart.svg" alt="" />
        </div>
      </template>
      <template v-slot:active>
        <div>
          <img src="@/assets/img/tabbar/cart-fill.svg" alt="" />
        </div>
      </template>
      <template v-slot:text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:icon>
        <div>
          <img src="@/assets/img/tabbar/user.svg" alt="" />
        </div>
      </template>
      <template v-slot:active>
        <div>
          <img src="@/assets/img/tabbar/user-fill.svg" alt="" />
        </div>
      </template>
      <template v-slot:text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  }
};
</script>

<style>
</style>