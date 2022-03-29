---
title: Mirrortter.md
---
<div>

|                    |                                                                                                                                                                                                                                                                                                        |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル           | mirrortter                                                                                                                                                                                                                                                                                             |
| 画像               | [<img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png "Mastodon") |
| 開発者             | [新都心](/%E6%96%B0%E9%83%BD%E5%BF%83 "新都心")                                                                                                                                                                                                                                                        |
| ソースコード       | <a href="https://github.com/neet/mirrortter" rel="nofollow">GitHub</a>                                                                                                                                                                                                                                 |
| プラットホーム     | Node.jsの動作するサーバー                                                                                                                                                                                                                                                                              |
| プログラミング言語 | TypeScript                                                                                                                                                                                                                                                                                             |
| サービス開始日     | 2018年9月9日<sup>[\[1\]](#cite_note-launch-1)</sup>                                                                                                                                                                                                                                                    |
| 寄付               | <a href="https://www.patreon.com/neetshin" rel="nofollow">Patreon</a>                                                                                                                                                                                                                                  |
| ライセンス         | [GNU Affero General Public License](/GNU_Affero_General_Public_License "GNU Affero General Public License")3.0                                                                                                                                                                                         |

  
**mirrortter**は、[Mastodon](/Mastodon "Mastodon")の投稿を[Twitter](/Twitter "Twitter")に同期するオープンソース・ソフトウェア。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 設定項目](#.E8.A8.AD.E5.AE.9A.E9.A0.85.E7.9B.AE)
-   [3 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [4 出典](#.E5.87.BA.E5.85.B8)

</div>

## 概要

[新都心](/%E6%96%B0%E9%83%BD%E5%BF%83 "新都心")によって[TypeScript](https://ja.wikipedia.org/wiki/TypeScript "w:TypeScript")で開発されたソフトウェアで、2018年9月9日<sup>[\[1\]](#cite_note-launch-1)</sup>より[GNU Affero General Public License](/GNU_Affero_General_Public_License "GNU Affero General Public License")（AGPL）3.0のライセンスのもと[GitHub](/GitHub "GitHub")上で公開されている<sup>[\[2\]](#cite_note-github-2)</sup>。

Mastodon、Twitterのアクセストークンなど複数の項目を設定した上でデプロイすることで同期が開始される。ツイート（Twitter上の投稿）に投稿元の[トゥート](/%E3%83%88%E3%82%A5%E3%83%BC%E3%83%88 "トゥート")（マストドン上の投稿）のURLを添付するか、[CW](/Content_Warning "Content Warning")や[NSFW](/NSFW "NSFW")の設定された投稿をどのように同期するか、未収載以下の公開範囲の狭い投稿を同期するか、投稿を同期する間隔、ストリーミングなど、様々な設定ができるのが特徴。

## 設定項目

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="header">
<th scope="col">項目</th>
<th scope="col">内容</th>
</tr>

<tr class="odd">
<td><code>MASTODON_URL</code></td>
<td>Mastodonの<a href="/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9" title="インスタンス">インスタンス</a>URL。</td>
</tr>
<tr class="even">
<td><code>MASTODON_STREAMING_URL</code></td>
<td>Mastodonの<a href="/%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%83%9F%E3%83%B3%E3%82%B0API" title="ストリーミングAPI">ストリーミングAPI</a>エンドポイント。</td>
</tr>
<tr class="odd">
<td><code>MASTODON_ACCESS_TOKEN</code></td>
<td>Mastodonのアクセストークン。</td>
</tr>
<tr class="even">
<td><code>TWITTER_CONSUMER_KEY</code><br />
<code>TWITTER_CONSUMER_SECRET</code><br />
<code>TWITTER_ACCESS_TOKEN</code><br />
<code>TWITTER_ACCESS_TOKEN_SECRET</code></td>
<td>Twitterの認証情報。</td>
</tr>
<tr class="odd">
<td><code>FETCH_INTERVAL</code></td>
<td>投稿を同期する間隔。</td>
</tr>
<tr class="even">
<td><code>USE_STREAMING</code></td>
<td>ストリーミングAPIを使用するかの可否。<code>true</code>の場合<code>FETCH_INTERVAL</code>は無視される。</td>
</tr>
<tr class="odd">
<td><code>MIRROR_BOOSTS</code></td>
<td>Mastodonで<a href="/%E3%83%96%E3%83%BC%E3%82%B9%E3%83%88" title="ブースト">ブースト</a>した投稿の同期の可否。</td>
</tr>
<tr class="even">
<td><code>MIRROR_MENTIONS</code></td>
<td>Mastodonで<a href="/%E3%83%A1%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%B3" title="メンション">メンション</a>した投稿の同期の可否。</td>
</tr>
<tr class="odd">
<td><code>MIRROR_SENSITIVE</code></td>
<td>センシティブな投稿の同期の可否。</td>
</tr>
<tr class="even">
<td><code>MIRROR_WITH_URL</code></td>
<td>ツイートに同期元のトゥートURLを添付するか。以下の設定が可能。
<ul>
<li><code>always</code></li>
</ul>
<ul>
<li>同期ツイートに必ずURLを添付する。</li>
</ul>
<ul>
<li><code>only_media</code></li>
</ul>
<ul>
<li>メディアが添付されている場合にURLをツイートする。</li>
</ul>
<ul>
<li><code>only_sensitive</code></li>
</ul>
<ul>
<li>センシティブな投稿の場合にURLをツイートする。</li>
</ul>
<ul>
<li><code>media_or_sensitive</code></li>
</ul>
<ul>
<li>メディア添付もしくはセンシティブな投稿の場合にURLをツイートする。</li>
</ul>
<ul>
<li><code>never</code></li>
</ul>
<ul>
<li>投稿内容のみ。</li>
</ul></td>
</tr>
<tr class="odd">
<td><code>ALLOWED_VISIBILITY</code></td>
<td>同期を許可する投稿の公開範囲。<code>public</code>、<code>unlisted</code>、<code>private</code> および <code>direct</code> がスペース区切りで指定可能。</td>
</tr>
<tr class="even">
<td><code>ELLIPSIS</code></td>
<td>文字数制限による省略の際に使用される省略記号。</td>
</tr>
</tbody>
</table>

## 関連項目

-   [新都心](/%E6%96%B0%E9%83%BD%E5%BF%83 "新都心")
-   [Mastodon](/Mastodon "Mastodon")
-   [Twitter](/Twitter "Twitter")

<!-- -->

-   [Twitter→Mastodonトゥート同期アプリ](/Twitter%E2%86%92Mastodon%E3%83%88%E3%82%A5%E3%83%BC%E3%83%88%E5%90%8C%E6%9C%9F%E3%82%A2%E3%83%97%E3%83%AA "Twitter→Mastodonトゥート同期アプリ")
-   [MASTMAN](/MASTMAN "MASTMAN")

## 出典

<div>

1.  ↑ <sup>[1.0](#cite_ref-launch_1-0)</sup> <sup>[1.1](#cite_ref-launch_1-1)</sup> <a href="https://mastodon.social/@neet/100696219466892400" rel="nofollow">@neet@mastodon.socialの2018年9月9日のトゥート (100696219466892400)</a>
2.  [↑](#cite_ref-github_2-0) <a href="https://github.com/neet/mirrortter" rel="nofollow">GitHub</a>

</div>

</div>
