<template>
  <header>
    <h1><NuxtLink to="/">The Movie App</NuxtLink></h1>
    <div class="search">
      <div class="search__input-box">
        <input type="text" placeholder="검색" v-model="word" @keydown="searchHandler" />
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const word = ref();

function searchHandler(e: KeyboardEvent) {
  if (e.key === "Enter") {
    navigateTo(`/name-${word.value}`);
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 120px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 32px;
    color: #eee;
    font-weight: 700;
  }
}
</style>
