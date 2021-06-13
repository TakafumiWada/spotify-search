# Spotify Web API を用いた曲名検索

## 概要

曲を共有するサービスを制作する際などに自由入力で行ってしまうと、英語の大文字、小文字の違いや小さなスペルミスなどで違う曲だと判断されてしまいます。

そういったミスを無くすためには、曲名の一部などをキーワードとして入力してもらい、実際の曲情報を選択させる必要があるかと思います。

今回は SpotifyWebAPI を用いて曲名のキーワード検索を実装します。(もちろん、アルバム名やアーティスト名での検索も可能です。)

## 使い方

(VueやFirebaseの細かいセットアップの方法は省きます)

### モジュールのインストール

```
npm install
cd functions
npm install
```

### .env ファイルの作成

```
echo "CLIENT_ID=(CLIENT_IDの値)" >> functions/.env
echo "CLIENT_SERCRET=(CLIENT_SERCRETの値)" >> functions/.env
```

### firebase.js の作成

```
touch src/firebase.js
```

```
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  //
};

firebase.initializeApp(firebaseConfig);

export const functions = firebase.functions();
```

### firebase functions をデプロイ

```
firebase deploy --only functions
```
