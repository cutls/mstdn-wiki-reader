---
title: RSS.md
---
<div>

<div>

<div>

[<img src="/images/thumb/4/43/Feed-icon.svg/120px-Feed-icon.svg.png" srcset="/images/thumb/4/43/Feed-icon.svg/180px-Feed-icon.svg.png 1.5x, /images/thumb/4/43/Feed-icon.svg/240px-Feed-icon.svg.png 2x" width="120" height="120" alt="Feed-icon.svg" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Feed-icon.svg)

<div>

<div>

[](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Feed-icon.svg "拡大")

</div>

</div>

</div>

</div>

**RSS**（Rich Site Summary、RDF Site Summary、Really Simple Syndication）は、ウェブサイトの更新情報を配信することができる文書フォーマットの総称。

## 概要

ブログやニュースサイトなどといったウェブサイトにおいて、更新情報を`.rss、.xml、.rdf`の文書フォーマットのもとに配信することを可能とする技術。ユーザーがRSSリーダーを用いて購読することで、更新情報を受信することができる。多くのバージョンが存在しており、例えば分散型動画配信サービスの[PeerTube](/PeerTube "PeerTube")では動画の新着情報などをrss2.0、json1.0、atom2.0の形式から取得できる。

[IFTTT](/IFTTT "IFTTT (存在しないページ)")を用いることで[Mastodon](/Mastodon "Mastodon")や[Twitter](/Twitter "Twitter")などの[ソーシャル・ネットワーキング・サービス](/SNS "SNS")にRSSフィードを配信することも可能であり、Mastodonでは[chaosphere.hostdon.jp](/Chaosphere.hostdon.jp "Chaosphere.hostdon.jp")などの[インスタンス](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "インスタンス")でRSSフィード配信botが稼働している。

Mastodonでは、`@ユーザーID`から始まるユーザーページの末尾に`.atom`を追加したURL（`インスタンスURL/@ユーザーID.atom`）から、[Atom配信フォーマット](https://ja.wikipedia.org/wiki/Atom_(%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E9%85%8D%E4%BF%A1) "w:Atom (ウェブコンテンツ配信)")で任意の[アカウント](/%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88 "アカウント")の[トゥート](/%E3%83%88%E3%82%A5%E3%83%BC%E3%83%88 "トゥート")情報を出力することができたが、これはバージョン3.0.0rc1以降では廃止された<sup>[\[1\]](#cite_note-1)</sup>、Pleromaの場合は`インスタンスURL/users/ユーザーID/feed.atom`で取得できる<sup>\[*[要出典](https://ja.wikipedia.org/wiki/Wikipedia:%E3%80%8C%E8%A6%81%E5%87%BA%E5%85%B8%E3%80%8D%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%95%E3%82%8C%E3%81%9F%E6%96%B9%E3%81%B8 "w:Wikipedia:「要出典」をクリックされた方へ")*\]</sup>。）

また、バージョン2.4.0以降では、ユーザーページ及び、`/tags/`から始まる[ハッシュタグ](/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0 "ハッシュタグ")ページのURLの末尾に`.rss`を追加したURL（ユーザーページ：`インスタンスURL/@ユーザーID.rss`、ハッシュタグ：`インスタンスURL/tags/ハッシュタグ.rss`）から、[RSS](https://ja.wikipedia.org/wiki/RSS "w:RSS")2.0形式でトゥートを取得することが可能となった。

## 脚注

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/tootsuite/mastodon/pull/11247" rel="nofollow">https://github.com/tootsuite/mastodon/pull/11247</a>

</div>

</div>
