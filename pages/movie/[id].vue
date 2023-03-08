<template>
  <section>
    <div class="detail">
      <div class="detail__img-box">
        <img :src="imgPath + movieDetail.poster_path" :alt="movieDetail.title" />
      </div>
      <div class="detail__text-box">
        <h1>{{ movieDetail.title }}</h1>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
interface detail {
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: Number;
  title: string;
}
const route = useRoute();
const config = useRuntimeConfig();
const imgPath = "https://image.tmdb.org/t/p/original/";

const { data } = await useFetch(
  () => `
https://api.themoviedb.org/3/movie/${parseInt(route.params.id)}?api_key=${config.public.apiKey}&language=ko-KR`
);
const movieDetail: [detail] = data.value;
</script>
<style lang="scss" scoped>
.detail {
  display: flex;
}
</style>
