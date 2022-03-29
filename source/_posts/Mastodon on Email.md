---
title: Mastodon on Email.md
---
<div>

|                    |                                                                                                                                                                                                                                                                                                        |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル           | **M**                                                                                                                                                                                                                                                                                                  |
| 画像               | [<img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png "Mastodon") |
| 開発者             | [ProgrammerGenboo](/ProgrammerGenboo "ProgrammerGenboo")                                                                                                                                                                                                                                               |
| ソースコード       | <a href="https://github.com/GenbuHase/MastodonOnEmail" rel="nofollow">GitHub</a>                                                                                                                                                                                                                       |
| プラットホーム     | Google Apps Script                                                                                                                                                                                                                                                                                     |
| プログラミング言語 | JavaScript                                                                                                                                                                                                                                                                                             |
| サービス開始日     | 2018年3月5日                                                                                                                                                                                                                                                                                           |
| ライセンス         | [MITライセンス](/MIT%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9 "MITライセンス")                                                                                                                                                                                                                     |

  
**Mastodon on Email**（**MoE**）とは、[オープンソース](/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9 "オープンソース")の[分散SNS](/%E5%88%86%E6%95%A3SNS "分散SNS")、[Mastodon](/Mastodon "Mastodon")のクライアントである。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 フォーマット表](#.E3.83.95.E3.82.A9.E3.83.BC.E3.83.9E.E3.83.83.E3.83.88.E8.A1.A8)
    -   [2.1 注釈](#.E6.B3.A8.E9.87.88)
-   [3 出典](#.E5.87.BA.E5.85.B8)

</div>

## 概要

[ProgrammerGenboo](/ProgrammerGenboo "ProgrammerGenboo")氏によって2018年3月5日より開発されているクライアントで、名前の通り、Eメールを用いてMastodonへの[トゥート](/%E3%83%88%E3%82%A5%E3%83%BC%E3%83%88 "トゥート")を行う。そのため、[フィーチャー・フォン](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%BC%E3%83%81%E3%83%A3%E3%83%BC%E3%83%BB%E3%83%95%E3%82%A9%E3%83%B3 "w:フィーチャー・フォン")（ガラケー）等からもトゥートが可能である。

Google Apps Scriptで動作し、利用する場合はユーザーがファイルをGoogle Apps Scriptにコピーする必要がある。そしてインスタンス側でトークンを生成、トークン情報を設定することでトゥートができるようになる。

## フォーマット表

<a href="https://github.com/GenbuHase/MastodonOnEmail/blob/master/README_ja.md" rel="nofollow">公式ドキュメント</a>も参照のこと<sup>[\[1\]](#cite_note-1)</sup>。

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="header">
<th scope="col">件名のフォーマット</th>
<th scope="col">概要</th>
</tr>

<tr class="odd">
<th><code>MoE{:instanceUrl}</code><sup><a href="#cite_note-2">[注釈 1]</a></sup></th>
<th>フォーマットベース<br />
本文の内容でトゥート</th>
</tr>
<tr class="even">
<th><code>&lt;{:privacy}&gt;</code><sup><a href="#cite_note-3">[注釈 2]</a></sup></th>
<th>指定された公開範囲でトゥート<br />
<code>0</code>：公開<br />
<code>1</code>：未収載<br />
<code>2</code>：非公開<br />
<code>3</code>：ダイレクト<br />
<code>その他(public | unlisted | ...)</code>：指定された公開範囲</th>
</tr>
<tr class="odd">
<th><code>MoE:Toot</code></th>
<th>フォーマットベースと同様</th>
</tr>
<tr class="even">
<th><code>MoE:Toot&lt;{:privacy}&gt;</code><sup><a href="#cite_note-4">[注釈 3]</a></sup></th>
<th><code>&lt;{:privacy}&gt;</code>と同様</th>
</tr>
<tr class="odd">
<th><code>MoE:Notify</code></th>
<th>直近15件の<a href="/%E3%83%A1%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%B3" title="メンション">メンション</a>通知を返す。</th>
</tr>
<tr class="even">
<th scope="col">本文のフォーマット</th>
<th scope="col">概要</th>
</tr>
<tr class="odd">
<th><code>[CW | {:CWContent}]</code></th>
<th><a href="/Content_Warning" title="Content Warning">Content Warning</a>を付けてトゥートする</th>
</tr>
<tr class="even">
<th><code>[{:emojiCode} | {:quantity}]</code></th>
<th><code>emojiCode</code>の絵文字を<code>quantity</code>個並べて置換</th>
</tr>
</tbody>
</table>

### 注釈

<div>

1.  [↑](#cite_ref-2) instanceUrlはトゥートするアカウントのインスタンスのドメイン。
2.  [↑](#cite_ref-3) `<1>`は`MoE@{:instanceUrl}<1>`を示す。
3.  [↑](#cite_ref-4) `MoE:Toot<1>`は`MoE:Toot@{:instanceUrl}<1>`を示す。

</div>

## 出典

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/GenbuHase/MastodonOnEmail/blob/master/README_ja.md" rel="nofollow">https://github.com/GenbuHase/MastodonOnEmail/blob/master/README_ja.md</a>

</div>

</div>
