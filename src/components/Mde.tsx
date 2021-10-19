import React, { useState } from 'react';
import Editor from './Editor';
import Display from './Display';

const Mde: React.FC = () => {
    const helpText = `## Markdownエディタの使い方

### 段落
これは段落です。2つの文があります。

これは別の段落です。
ここにも2つの文があります。

### 装飾
\\*や\\_で囲うと*イタリック*に _なります_。

2つ使って囲うと**強調**に __なります__。

### コード
この文は\`コードブロック\`を含みます。

また、複数行にまたがるコードを書くことができます。

\`\`\`js:index.js
const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    console.log("button is clicked!");
});
\`\`\`

### リスト
\\-を使って順序なしリストを記述できます。
- 順序なしリストのアイテム
    - サブアイテムはタブもしくはスペースでインデント
- 順序なしリストの別のアイテム


\\*を使用しても同様です。
* 順序なしリストのアイテム
    * サブアイテムはタブもしくはスペースでインデント
* 順序なしリストの別のアイテム

### 見出し
いくつかのレベルに分けられた見出しを利用できます。

# h1
## h2
### h3
#### h4
##### h5
###### h6

### 引用
> 引用を書くことができます。この文は、HTMLの<blockquote>に囲まれます。

### リンク
[リンクを埋め込むことができます。](https://twitter.com/Rytaryu)

### 水平線
\\*や\\-、\\_を3つ以上並べることで、水平線を書くことができます。
***
---
___
`;

    const [text, setText] = useState(helpText);

    return (
        <div style={{ display: "flex", width: "100%", height: "95%", justifyContent: "column", alignItems: "center"}}>
            <Editor text={text} onChange={setText} />
            <Display text={text}/>
        </div>
    );
};

export default Mde;