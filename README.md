# Chakra UI + Next.js

これを読む：

[Build a Modern User Interface with Chakra UI \| egghead\.io](https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106)

## メモ

まず

```
$ pnpm create next-app
```

```
✅TypeScript?
✅ESLint?
✖Tailwind CSS?
✅`src/` directory?
✅App Router? (recommended)
✖customize the default import alias?
```

## 1. Install and Setup Chakra UI in a React Project

インストールと`_app.tsx`の設定。

## 2. Build a Layout with the Container, Flex and VStack Component in Chakra UI

- まず `<Container>` で包む。
- style props スタイルプロップス
- ここ見る：[Default Theme \- Chakra UI](https://chakra-ui.com/docs/styled-system/theme)
- `maxW='container.xl'`
    - サイズを表すデザイントークンの内、`container` は特別扱いされている。
    - `container.sm = 640px` ~ `container.xl = 1280px`
    - `extendTheme` はデザイントークンの上書き。
- `<Flex>`
- pとかの数値は4倍するとピクセルになる。
- design token デザイントークン
    - デザインシステムはデザイントークンを持っている。
    - 色、サイズ、フォント等
- `<VStack>`

## 3. Build a 2-Column Form with the SimpleGrid, FormControl, and Input Component in Chakra UI

`<Details>` コンポーネントの実装。

`"use client"` したコンポーネントからインポートされているコンポーネントは `"use client"` なしでもクライアント側になるんだ。

> Once "use client" is defined in a file, all other modules imported into it, including child components, are considered part of the client bundle.

https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive:~:text=Once,the%20client%20bundle.

つまり、from:サーバー, import:クライアントの「境界」でだけ、`"use client"` が必須。

`"use client"`なしのクライアントコンポーネントが単体で存在するのを禁じるわけではない。

- `<VStack>`
    - "Lobotomized owl selector"(ロボトミーされたフクロウセレクター) https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/
    - `* + * { margin-top: 1.5em }` こういうやつ
    - `* + *` 虚ろな🦉の顔
    - 『EVERY LAUOUT』（積んでる…）の著者のページだった
- タイトルは `<Heading>` で囲む。
   - ドキュメントでは "TYPORAPHY" の項目にある。
   - デフォルトでは `h2` タグ。https://chakra-ui.com/docs/components/heading#usage
   - `as` prop で　`h1` ~ `h6` に変えられる。
- テキストは `<Text>` で囲む。
    - https://chakra-ui.com/docs/components/text
    - `noOfLines` propを指定してやると `...` で省略してくれるっぽい。いいね。
    - これも `as` prop でHTML要素を切り替えられる。デフォルトは `p` タグ。
- `<SimpleGrid>` + `<GridItem>`
    - https://chakra-ui.com/docs/components/simple-grid
    - simple-gridとgridで別らしい。
    - https://chakra-ui.com/docs/components/grid
    - 文字通り simple grid のほうが簡単。
    - `GridItem` は共通。
    - `<Grid>` はgrid layoutのCSSをそのまま書く感覚に近い？カスタマイズ性は当然上。
- フォーム関連
    - `<FormControl>`で`<FormLabel>`とインプット系要素（`<Input>, <Select>, <CheckBox>...`）の2つを囲むというのが基本構成。
    - ナルト　https://chakra-ui.com/docs/components/form-control#sample-usage-for-a-radio-or-checkbox-group
    - `<FormControl>` は `role="group"` を指定されたdiv要素として描画される？
    - `<FormLabel>` は `htmlFor` 相当の値を勝手に生成してくれる。
        -  これ `useId`(https://react.dev/reference/react/useId)使ってるのかな。
    - ちょっとビビったのだが、ブラウザが住所や姓名を自動補完してくれようとする。label要素の中のテキストを読んでいるのか？
    - 今回使っていないが、`<FormHelperText>`（補足テキスト）, `<FormErrorMessage>`（エラーメッセージ）もグループ内の他の要素に影響する。エラー時に枠を赤くするとか。
- `<Select>`
    - `<option>` は素の要素を使う。
- `<Input>`
    - https://chakra-ui.com/docs/components/input
    - 中に要素を足したりできる。
    - `type`を`text`⇔`password` で切り替えて内容を表示するしないを切り替える作例。
    - `_placeholder` propでプレースホルダのスタイルをいじることができる。
- `<Button>` はデフォルトで "auto"サイズなので `w="full"` を指定してやる。

## 4. Create a Dark Mode Switcher in Chakra UI
ダークモードについて。`Cart` コンポーネントがいつの間にか出来上がっているのでlesson3のソースからコピー。

https://github.com/nikolovlazar/egghead-getting-started-with-chakra-ui/tree/lesson-3

- ドキュメントの "Color Mode" の項に解説がある。https://chakra-ui.com/docs/styled-system/color-mode#usecolormode
- `localStorage` （デフォルト）か `cookies` に値を保存する。
- 初期値が `light`（デフォルト）, `dark`, `system` から選べる。
    - `extendTheme` で上書きする。
    - `system` がデフォルトであるべきでは？　
    - `config` で `initialColorMode: "system"` とするとOK。
    - `useSystemColorMode`(ブール値)という項目もあって、これを `true` にするとシステムの値をsubscribeする（追従する）。
- `system` は多分内部的にこれを読む：[prefers\-color\-scheme \- CSS: カスケーディングスタイルシート \| MDN](https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-color-scheme)
- これJSからどうアクセスするんだろう？　Color Mode API とかないのかな。
- `initialColorMode` を使う場合、`ColorModeScript` をヘッダーに足してやるとよい。Local storageと同期させられるらしい。
    - `_document.js` に書くとの記載。App Routerだと何処に置く？
- `useColorMode` hook
    - `const { colorMode, toggleColorMode } = useColorMode()`
    - なんか太陽と月のトグルボタンとか出したかったらこれ使うとよい。
- `useColorModeValue` hook
    - `const value = useColorModeValue(lightModeValue, darkModeValue)`
    - 出しわけしたい箇所ごと（背景、テキスト、枠線…）にこれを呼ぶ。
- サーバーサイドで color preference を知る方法　[Color Mode \- Chakra UI](https://chakra-ui.com/docs/styled-system/color-mode#add-colormodemanager-optional-for-ssr)
    - 初回描画から遅れて色が変わるのを防止。
    - Cookieを使う。`cookieStorageManagerSSR` というのが生えている。
- ダークモードって正直かなり贅沢な機能だと思うが、アクセシビリティの観点からも重要……と言われると Chakra UI が売りにしているのもうなずける。
    - 伊原力也、小林大輔、桝田草一、山本伶『Webアプリケーションアクセシビリティ　今日から始める現場からの改善』（技術評論社、2023年）
    弱視・ロービジョンの方々への対応に関して、
    > 画面のまぶしさを軽減させたり、コントラストを高めて文字や図を読みやすくしたりするため、ダークモードや色の反転、ハイコントラストモードといった色変更を利用することもある
- [ウェブアクセシビリティ導入ガイドブック｜デジタル庁](https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook/)


## 5. Implement Responsive Design in Chakra UI