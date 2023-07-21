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