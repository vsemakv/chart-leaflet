<template>
  <section class="main">
    <div class="main__content">
      <div class="main__content-buttons">
        <VSelect v-model="selectedSort" :options="sortOptions" />
      </div>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.id }}</h2>
          <p>Назва: {{ post.title }}</p>
          <p>Опис: {{ post.body }}</p>
        </li>
      </ul>
    </div>
    <div class="main__pages">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="main__pages-item"
        :class="{ 'active-page': page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </section>
</template>
  
  <script>
import axios from "axios";
import VSelect from "@/components/VSelect.vue";

export default {
  components: { VSelect },
  data() {
    return {
      posts: null,
      page: 1,
      limit: 10,
      totalPages: 0,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "За назвою" },
        { value: "body", name: "За описом" },
      ],
    };
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      this.getPosts();
    },
  },
  mounted() {
    this.getPosts();
  },
  watch: {
    selectedSort(newValue) {
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue]);
      });
    },
  },
};
</script>
  
<style lang="scss" scoped>
.main {
  &__pages {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    &-item {
      padding: 10px;
      margin: 1px;
      border: 1px solid black;
      width: 20px;
      display: flex;
      justify-content: center;
      align-content: center;
      cursor: pointer;
    }
  }
}
.active-page {
  border: 2px solid green;
}
</style>