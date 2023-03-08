<template>
  <section>
    <div class="container">
      <ul class="movie-list">
        <li v-for="movie in movies" :key="String(movie.id)" class="movie-list__item">
          <div class="movie-list__item__img-box">
            <NuxtLink :to="`movie/${movie.id}`">
              <img :src="imgPath + movie.poster_path" :alt="movie.title" />
            </NuxtLink>
          </div>
          <NuxtLink :to="`movie/${movie.id}`">
            <h1>{{ movie.title }}</h1>
          </NuxtLink>
          <div class="movie-list__item__text-box">
            <div class="movie-list__item__text-box__desc">
              <p>{{ movie.overview }}</p>
              <p><span>개봉일 : </span>{{ movie.release_date }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
interface movie {
  id: Number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}
const imgPath = "https://image.tmdb.org/t/p/original";

const route = useRoute();
const config = useRuntimeConfig();

const { data } = await useFetch(() => `https://api.themoviedb.org/3/search/movie?api_key=${config.public.apiKey}&language=ko-KR&page=1&query=${route.params.title}`);

const movies: [movie] = data.value.results;
</script>
<style lang="scss" scoped>
.movie-list {
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__item {
    width: 30%;
    margin: 0 15px 50px;
    &__img-box {
      a {
        width: 100%;
        height: 100%;
        display: block;
        background-color: #aaa;
        img {
          width: 100%;
          height: 500px;
          object-fit: fill;
        }
      }
    }
    a h1 {
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      margin: 10px 0;
    }
    &__text-box {
      &__desc {
        p {
          font-weight: 400;
          span {
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
