# Spotify Web API を用いた曲名検索

## 概要

自由にキーワードを入力し、それにマッチする上位 20 件の曲名、アーティスト、SpotifyURL を表示。

## 使い方

(Vue や Firebase の細かいセットアップの方法は省きます)

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

### ローカルで実行

```
firebase emulators:start
```
