# Emotion

エモーションは JS で CSS スタイルを記述するために設計されたライブラリ。コンポーネントやタグに直接@media クエリ等を書くことが出来、様々な css 記述が行える。

## 参考リンク

- [Emotion 公式](https://emotion.sh/docs/install)
- [Next.js と Emotion でいろいろハマった件 1](https://blog.unimoku.com/20201106)

## §1 導入

### 1.1 @emotion/react のインストール

まず、@emotion/react で emotion の本体をインストールします。

```
npm i @emotion/react
```

### 1.2 @babel/preset-react のインストール

また、emotion には詳しく書かれてなかったのですが、§1.1 だけでは§3.1 のような Error が出てしまうので@babel/preset-react をインストールします。

```
npm i @babel/preset-react
```

### 1.3 .babelrc の作成

ルートディレクトリに.babelrc を作ります(babel のルールに新しく Emotion の規則を付け足す...?)

```javascript:.babelrc
{
  "presets": [
    [
      "@babel/preset-react",
      { "runtime": "automatic", "importSource": "@emotion/react" }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

## §2 使い方

### 2.1 一つのコンポーネントで完結させる場合

```jsx:main.js
import { css } from "@emotion/react";
export default function Hare() {
  const style = css`
    background: #55ff23;
    @media (min-width: 420px) {
      background: hotpink;
    }
  `;
  return (
    <>
      <div css={style}>ダダダだ</div>
    </>
  );
}
```

### 2.2 コンポーネントを跨ぐ場合

複数のコンポーネントを橋渡しする場合は cssOverrides を使用する

▼ 親要素

```jsx:main.js
import { css } from "@emotion/react";

export default function main() {
  const style = css`
    background: #55ff23;
    @media (min-width: 420px) {
      background: hotpink;
    }
  `;
  return (
		<TitleH1 cssOverrides={style} />
	);
}
```

▼ 子要素

```jsx:TitleH1.js
export function TitleH1(props) {
  return (
    <h1 css={props.cssOverrides}>タイトルだにょん</h1>
  );
}
```

# §3 エラー

### 3.1 @babel/preset-react 　が存在しないエラー

以下のエラーは@babel/preset-react が存在しないことを指摘されています。

```
info  - Using external babel configuration from /Users/k-hareyama/private_code/emotion2/emotion2/.babelrc
error - ./node_modules/next/dist/client/dev/amp-dev.js
Error: Cannot find module '@babel/preset-react'
```

### 3.2 Inter によるエラー

create-next-app でプロジェクトを作ると index.js に Inter がインポートされてしまいます。
Inter で何故エラーが出てしまうのかは深掘りしないことにしますが、Inter を無くすとエラーが出ず、今は必要ないので消すことにします。

```
wait  - compiling...
error - ./pages/hare.js:4:1
Syntax error: "@next/font" requires SWC although Babel is being used due to a custom babel config being present.
Read more: https://nextjs.org/docs/messages/babel-font-loader-conflict
```
