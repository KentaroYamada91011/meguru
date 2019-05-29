<template>
  <ul class="list">
    <li class="item" v-for="(crumb, key) in breadcrumbs" :key="name">
      <span v-if="crumb.path"><nuxt-link :to="crumb.path" >{{ crumb.name }}</nuxt-link></span>
      <span v-else>{{ crumb.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    breadcrumbs: {type: Array}
  }
}
</script>

<style>
.list {
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0 16px;
}
.item {
  display: inline-block;
}
.item::after {
  content: '＞';
  display: inline-block;
}
.item:last-child::after {
  content: none;
}
</style>
