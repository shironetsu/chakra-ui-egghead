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
レスポンシブ対応について。[Responsive Styles \- Chakra UI](https://chakra-ui.com/docs/styled-system/responsive-styles)

- 配列記法
    - `py={[0, 10, 20]}` みたいに配列を渡す。
    - 前から `sm, md, lg` に対応。
        - ブレークポイントは `sm, md, lg, xl, 2xl` とあるが、前から採用される形。
- オブジェクト記法
    - `h={{ base: 'auto', md: '100vh' }}` みたいなにオブジェクトを渡す。
    - "Remember, Chakra UI uses the min-width media query for responsive design."
    - 小さいほうが `base` に吸収される。
- `useBreakPointValue` [useBreakpointValue \- Chakra UI](https://chakra-ui.com/docs/hooks/use-breakpoint-value)
    - `const colSpan = useBreakpointValue({ base: 2, md: 1 })`
    - 配列・オブジェクト記法に対応していないものはこれを使う。
    - 第二引数にフォールバック時の値を入れられる（デフォルトは `'base'`）。SSRの初期値とか。

## 6. Define Custom Colors and Fonts in Chakra UI

`theme/styles.css` を

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700&display=swap');
```

と書いて、`layout.tsx` でインポートするとエラー。
`Error: Cannot find module './features/createimagebitmap'` らしい。

```
- error ./src/theme/styles.css.webpack[javascript/auto]!=!./node_modules/.pnpm/next@13.4.11_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[5].oneOf[12].use[2]!./node_modules/.pnpm/next@13.4.11_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[5].oneOf[12].use[3]!./src/theme/styles.css
Error: Cannot find module './features/createimagebitmap'
Require stack:
- path\to\chakra-ui-egghead\node_modules\.pnpm\caniuse-lite@1.0.30001517\node_modules\caniuse-lite\data\features.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\caniuse-lite@1.0.30001517\node_modules\caniuse-lite\dist\unpacker\features.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\caniuse-lite@1.0.30001517\node_modules\caniuse-lite\dist\unpacker\index.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\compiled\postcss-preset-env\index.cjs
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\build\webpack\config\blocks\css\plugins.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\build\webpack\config\blocks\css\index.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\build\webpack\config\index.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\build\webpack-config.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\server\dev\hot-reloader.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\server\dev\next-dev-server.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\server\next.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\server\lib\render-server.js
- path\to\chakra-ui-egghead\node_modules\.pnpm\next@13.4.11_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\compiled\jest-worker\processChild.js
Import trace for requested module:
./src/theme/styles.css.webpack[javascript/auto]!=!./node_modules/.pnpm/next@13.4.11_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[5].oneOf[12].use[2]!./node_modules/.pnpm/next@13.4.11_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[5].oneOf[12].use[3]!./src/theme/styles.css
./src/theme/styles.css
```

エラーの内容的にはcaniuse-liteが関係しているので `createimagebitmap`　がブラウザ互換性かNode側に実装がない都合で読み込まれていない？

Next的にはWebフォントは `@import` より良い方法があるからapp routerでは対応していないのかもしれん。

[Optimizing: Fonts \| Next\.js](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

[Fonts in Next\.js 13 \+ Chakra\-UI \- DEV Community](https://dev.to/feijens/fonts-in-nextjs-13-chakra-ui-3i87#:~:text=How%20to%20use%20%40next%2Ffont%20combined%20with%20chakra-ui%20Create,docs%20describe%2C%20I%27m%20going%20for%20Averia%20Serif%20Libre.)

このdev.toの記事の内容で対応。
フォールバック要らないかも？

`next/font`にも `fallback` がある：[Components: Font \| Next\.js](https://nextjs.org/docs/pages/api-reference/components/font#fallback)

```
`next/font` error:
Preload is enabled but no subsets were specified for font `Inter`. Please specify subsets or disable preloading if your intended subset can't be preloaded.
Available subsets: `cyrillic`, `cyrillic-ext`, `greek`, `greek-ext`, `latin`, `latin-ext`, `vietnamese`

Read more: https://nextjs.org/docs/messages/google-fonts-missing-subsets
```

`subsets: ['latin']` を追加。


まだエラー出る。

```
An error occured in `next/font`.

Error: Cannot find module './features/createimagebitmap'
```

`pnpm install --force` してみると解消……。

`fallback` に ChakraUIのベーステーマを渡そうとすると怒られる：

```
  x Font loader values must be explicitly written literals.
      ,-[C:\path\to\chakra-ui-egghead\src\theme\index.ts:9:1]
  9 |     weight: '700',
 10 |     display: 'swap',
 11 |     subsets: ['latin'],
 12 |     fallback: [base.fonts.heading]
    :                ^^^^^^^^^^^^^^^^^^
 13 | })
```

[Customize Theme \- Chakra UI](https://chakra-ui.com/docs/styled-system/customize-theme)

```ts
export const theme = extendTheme({
    colors: {
        brand: {
            50: '#f5fee5',
            100: '#e1fbb2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',
          },
    },
```

こんな感じで書くと、`colorScheme` を新しく定義できる。

```tsx
          <Button colorScheme="brand" size="lg" w="full">
```

`extendTheme` に渡せるオブジェクトに型が付いていないのが辛い。

型付けこれ：

```ts
declare const extendTheme: (...extensions: (Record<string, any> | ((theme: Record<string, any>) => Record<string, any>))[]) => Record<string, any>;
```
デフォルト値（＝上書き可能な値）は [default theme foundation style files](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src/foundations) を見ろとの記載があり。

## 7. Use Theme Extensions in Chakra UI
コンポーネント単位でカラースキームやバリアントのデフォルト値を指定する方法について。
- `extendTheme` には複数のオブジェクトを渡せる。
    - 後ろが優先
- `withDefaultColorScheme` https://chakra-ui.com/docs/styled-system/customize-theme#using-theme-extensions
    - `withDefaultColorScheme({ colorScheme: 'brand', components: ['Button'] })` みたいにコンポーネントとそのカラースキームを指定
    - `withDefaultColorScheme` は複数使える。
- `withDefaultVariant` https://chakra-ui.com/docs/styled-system/customize-theme#theme-extension-withdefaultvariant
    - 「バリアント」のデフォルト値を指定できる。
    - `Input` なら `"outline", "unstyled", "flushed", "filled"`等。https://chakra-ui.com/docs/components/input#changing-the-appearance-of-the-input
    - `withDefaultVariant({ variant: 'filled', components: ['Input', 'Select']})` みたいに使う。
- `withDefaultSize` や `withDefaultProps` というのもある。