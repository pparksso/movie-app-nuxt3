<template>
  <section :style="{ backgroundImage: `url('${imgPath}${movieDetail.backdrop_path}')` }">
    <div class="detail">
      <div class="detail__img-box">
        <img :src="imgPath + movieDetail.poster_path" :alt="movieDetail.title" />
      </div>
      <div class="detail__text-box">
        <h1>{{ movieDetail.title }}</h1>
        <p>{{ movieDetail.overview }}</p>
        <span>개봉일 : {{ movieDetail.release_date }}</span>
        <span>상영시간 : {{ movieDetail.runtime }} 분</span>
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

const { data }: any = await useFetch(
  () => `
https://api.themoviedb.org/3/movie/${parseInt(route.params.id)}?api_key=${config.public.apiKey}&language=ko-KR`
);
const movieDetail: [detail] = data.value;
</script>
<style lang="scss" scoped>
section {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  backdrop-filter: blur(8px);
  min-height: calc(100vh - 240px);
  padding: 100px 0;
  &__img-box {
    vertical-align: middle;
    margin-right: 100px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    img {
      width: 300px;
      height: 450px;
      object-fit: cover;
    }
  }
  &__text-box {
    width: 500px;
    h1 {
      font-size: 30px;
      color: #333;
      font-weight: 700;
      margin-bottom: 50px;
    }
    p {
      color: #ddd;
      margin-bottom: 30px;
      word-break: keep-all;
    }
    span {
      color: #aaa;
      display: block;
      margin-bottom: 20px;
    }
  }
}
</style>
