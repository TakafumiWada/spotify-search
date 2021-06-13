<template>
  <div id="app">
    <div>
      <input type="text" v-model="inputText" />
      <button v-on:click="search">検索</button>
    </div>
    <div>
      <div
        v-for="(item, index) in results"
        v-bind:key="`result:${index}`"
        class="search-result"
      >
        <div>曲名：{{ item.name }}</div>
        <div>アーティスト名：{{ item.artists[0].name }}</div>
        <div>
          <a v-bind:href="item.external_urls.spotify" target="_blank">詳細</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { functions } from "@/firebase";
export default {
  name: "App",
  data() {
    return {
      inputText: "",
      results: [],
    };
  },
  methods: {
    async search() {
      const searchSpotify = functions.httpsCallable("searchSpotify");
      const res = await searchSpotify(this.inputText);
      const items = res.data.body?.tracks?.items;
      console.log(items);
      if (items) this.results = items;
    },
  },
};
</script>

<style scoped>
.search-result {
  margin: 10px 0;
}
</style>
>
