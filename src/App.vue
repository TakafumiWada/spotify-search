<template>
  <div id="app">
    <div>
      <div class="feature-result">
        TrackID: <input type="text" v-model="inputID" />
        <button v-on:click="getFeature">特徴取得</button>
        <div>ノリノリ度: {{ resultFeature.danceability }}</div>
        <div>エネルギッシュ度: {{ resultFeature.energy }}</div>
        <div>騒がしさ: {{ resultFeature.loudness }}</div>
        <div>テンポ: {{ resultFeature.tempo }}</div>
        <div>ポジティブさ: {{ resultFeature.valence }}</div>
      </div>
      <div>
        曲名キーワード: <input type="text" v-model="inputMusicText" />
        <button v-on:click="searchMusic">検索</button>
      </div>
      <div>
        歌手名キーワード: <input type="text" v-model="inputArtistText" />
        <button v-on:click="searchArtist">検索</button>
      </div>
    </div>
    <div>
      <div
        v-for="(item, index) in results"
        v-bind:key="`result:${index}`"
        class="search-result"
      >
        <div>曲名: {{ item.name }}</div>
        <div>アーティスト名: {{ item.artists[0].name }}</div>
        <div>TrackID: {{ item.id }}</div>
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
      inputMusicText: "",
      inputArtistText: "",
      inputID: "",
      results: [],
      resultFeature: {},
    };
  },
  methods: {
    async searchMusic() {
      const searchSpotify = functions.httpsCallable("searchMusicSpotify");
      const res = await searchSpotify(this.inputMusicText);
      const items = res.data.body?.tracks?.items;
      console.log(items);
      if (items) this.results = items;
    },
    async searchArtist() {
      const searchSpotify = functions.httpsCallable("searchArtistSpotify");
      const res = await searchSpotify(this.inputArtistText);
      const items = res.data.body?.tracks?.items;
      console.log(items);
      if (items) this.results = items;
    },
    async getFeature() {
      const getAudioFeatures = functions.httpsCallable("getAudioFeatures");
      const res = await getAudioFeatures(this.inputID);
      console.log(res);
      this.resultFeature = res.data?.body;
    },
  },
};
</script>

<style scoped>
.search-result {
  margin: 10px 0;
}
.feature-result {
  margin-bottom: 20px;
}
</style>
>
