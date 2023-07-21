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
- `<Button>` はデフォルトで "auto"サイズなので `w="full"` を指定してやる