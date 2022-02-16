# やれたらやるチーム client repository

## 開発環境
git clone
```bash
# --recursiveオプションでsubmoduleの中身も取得する
git clone -b develop --recursive https://github.com/do-it-if-i-can/client.git
```

パッケージのインストール
```bash
yarn
```

ローカル環境立ち上げ
```bash
yarn dev

# npmの場合はこちら
npm run dev
```

## submodule関係コマンド
```bash
# submoduleの更新（参照先mainブランチのHEADを参照する）
git submodule update --remote

# submoduleの反映（初回cloneでsubmoduleの中身がないときなど）
git submodule update --init

# submoduleの現在の参照先を確認（git fetch後に行なうと正確）
git submodule status（`git submodule`コマンドでも同様）
```

## 技術選定
- React(Next.js)
- TypeScript
- TailwindCSS(daisyUI)
- ESLint
- Prettier

## アーキテクチャ

## ブランチルール

- main（本番環境用）
  - develop ブランチのみ、PullRequest & merge 可能
- develop（開発環境用）
  - main ブランチ以外、PullRequest & merge 可能
- 命名規則は以下に従う

`[feature, fix, refactor, doc, test]/zzz-zzzXzz`

例： feature/ui-button

## コミットルール

- Gitmoji を使用する

> https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode

例： ✨ Button コンポーネント作成

## 命名規則

### 関数

**イベント系**

`const handleXzzXzz = () => {};`

- 接頭辞に「handle」を付ける

### 変数

`const zzzXzz = '';`

- lowerCamelCase で宣言する

### 型定義

`type XzzXzz = {};`

- type を使用する
- UpperCamelCase で宣言する

## ディレクトリ構成

- src フォルダの直下は、複数形フォルダ名を定義する
- src フォルダの二階層下以降は、単数形フォルダ名を定義する

> 参考記事 https://zenn.dev/yoshiko/articles/99f8047555f700

- 🗂 src
  - 🗂 compoennts
    - 🗂 page
      - 🗂 XzzXzz
        - index.ts
        - XzzXzz.tsx
        - XzzXzz.page.tsx
        - XzzXzz.stories.tsx
        - useXzzXzz.hook.ts
      - 🗂 User
    - 🗂 model
      - 🗂 Xzz
        - 🗂 Xzz
          - index.ts
          - Xzz.tsx
          - Xzz.stories.ts
      - 🗂 User
    - 🗂 ui
      - 🗂 XzzXzz
        - index.ts
        - XzzXzz.tsx
        - Xzz.stories.tsx
      - 🗂 Button
      - 🗂 Layout
    - 🗂 functional
      - 🗂 Xzz
        - index.ts
        - Xzz.tsx
      - 🗂 AuthProvider
      - 🗂 ErrorBoundary
  - 🗂 graphql
    - 🗂 query
      - zzzXzz.query.gql（query のみ）
      - zzzXzz.mutation.gql（mutation のみ）
    - codegen.yml
  - 🗂 constants
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - XXX_XXX.ts
    - XXX_XXX.ts
  - 🗂 pages
    - 🗂 zzz_zzz
      - index.page.tsx
    - 🗂 [zzz_zzz]
      - zzz.page.tsx
    - \_app.page.tsx
    - zzz_zzz.page.tsx
  - 🗂 types
    - Xzz.ts
  - 🗂 utils
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - zzzXzz.ts
    - zzzXzz.ts
  - 🗂 stores
    - zzzXzz.ts
