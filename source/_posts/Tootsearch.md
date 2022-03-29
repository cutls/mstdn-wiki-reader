---
title: Tootsearch.md
---
<div>

|                |                                                                                                                                                                                                                                                                                                        |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル       | tootsearch                                                                                                                                                                                                                                                                                             |
| 画像           | [<img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png "Mastodon") |
| 開発者         | Kirino Minato (imksoo)                                                                                                                                                                                                                                                                                 |
| ソースコード   | <a href="https://github.com/imksoo/tootsearch" rel="nofollow">GitHub</a>                                                                                                                                                                                                                               |
| プラットホーム | ウェブ                                                                                                                                                                                                                                                                                                 |
| サービス開始日 | 2017年6月2日                                                                                                                                                                                                                                                                                           |
| ライセンス     | [GNU Affero General Public License](/GNU_Affero_General_Public_License "GNU Affero General Public License")                                                                                                                                                                                            |
| Webサイト      | <a href="https://tootsearch.chotto.moe/" rel="nofollow">https://tootsearch.chotto.moe/</a>                                                                                                                                                                                                             |

  
**<a href="https://tootsearch.chotto.moe/" rel="nofollow">tootsearch</a>**は、マストドンのトゥートを検索することができるウェブアプリケーション。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [3 脚注](#.E8.84.9A.E6.B3.A8)
-   [4 外部リンク](#.E5.A4.96.E9.83.A8.E3.83.AA.E3.83.B3.E3.82.AF)

</div>

## 概要

2017年6月2日に公開された、マストドンのトゥートを検索できるウェブアプリケーション。検索対象となるインスタンスは[mstdn.jp](/Mstdn.jp "Mstdn.jp")、[pawoo.net](/Pawoo.net "Pawoo.net")、[friends.nico](/Friends.nico "Friends.nico")、[mstdn-workers.com](/Mstdn-workers.com "Mstdn-workers.com")、[mastodon.yuritopia.net](/Mastodon.yuritopia.net "Mastodon.yuritopia.net (存在しないページ)")、[mastodon.chotto.moe](/Mastodon.chotto.moe "Mastodon.chotto.moe (存在しないページ)")、 [jitakurack.chotto.moe](/Jitakurack.chotto.moe "Jitakurack.chotto.moe (存在しないページ)")の7インスタンスに限られる。公式にはアナウンスされていないが、これらのインスタンスのユーザーのトゥートだけでなく、これらのインスタンスの[連合タイムライン](/%E9%80%A3%E5%90%88%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3 "連合タイムライン")のトゥートも検索対象となっている<sup>[\[1\]](#cite_note-hd-1)</sup>ようである。

検索ではスコア順、時系列順、[ブースト](/%E3%83%96%E3%83%BC%E3%82%B9%E3%83%88 "ブースト")数順、[お気に入り](/%E3%81%8A%E6%B0%97%E3%81%AB%E5%85%A5%E3%82%8A "お気に入り")数順にトゥートを表示することが可能。また、決められた属性名<sup>[\[2\]](#cite_note-2)</sup>によりユーザー名検索などの特殊検索も可能なほか、OR検索にも対応している。検索可能なトゥートの期間は、明記されていないが、競合する他の検索エンジンよりも短い<sup>[\[1\]](#cite_note-hd-1)</sup>と見られている。

ライセンスは[GNU Affero General Public License](/AGPL "AGPL")であり、ソースコードはGitHubで公開されている<sup>[\[3\]](#cite_note-3)</sup>。

APIも利用できる。APIのURLは、検索ページのURLのパラメーターを https://tootsearch.chotto.moe/api/v1/search に付加したものである。結果としてJSONが返る。

オプトアウトの方法は明記されていないが、複数のアカウントまたはインスタンスが検索結果から除外された前例<sup>[\[4\]](#cite_note-4)[\[5\]](#cite_note-5)[\[6\]](#cite_note-6)</sup>がある。

## 関連項目

-   [Subway Tooter](/Subway_Tooter "Subway Tooter")

## 脚注

<div>

1.  ↑ <sup>[1.0](#cite_ref-hd_1-0)</sup> <sup>[1.1](#cite_ref-hd_1-1)</sup> [記事執筆者](/%E5%88%A9%E7%94%A8%E8%80%85:Hakabahitoyo "利用者:Hakabahitoyo")による独自調査。
2.  [↑](#cite_ref-2) <a href="https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#status" rel="nofollow">https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#status</a>
3.  [↑](#cite_ref-3) <a href="https://github.com/imksoo/tootsearch" rel="nofollow">https://github.com/imksoo/tootsearch</a>
4.  [↑](#cite_ref-4) <a href="https://github.com/imksoo/tootsearch/commit/c9300a6dea20d56fbe95b2fc0a5bee99f6b12d66" rel="nofollow">https://github.com/imksoo/tootsearch/commit/c9300a6dea20d56fbe95b2fc0a5bee99f6b12d66</a>
5.  [↑](#cite_ref-5) <a href="https://github.com/imksoo/tootsearch/commit/16ce0b200bba62d911b37f27f06d8d545b4c5e5a" rel="nofollow">https://github.com/imksoo/tootsearch/commit/16ce0b200bba62d911b37f27f06d8d545b4c5e5a</a>
6.  [↑](#cite_ref-6) <a href="https://github.com/imksoo/tootsearch/commit/9b8c2128f30cf10fce0a6b97daa5272a7d6ed037" rel="nofollow">https://github.com/imksoo/tootsearch/commit/9b8c2128f30cf10fce0a6b97daa5272a7d6ed037</a>

</div>

## 外部リンク

-   <a href="https://tootsearch.chotto.moe/" rel="nofollow">tootsearch</a>
-   <a href="https://github.com/imksoo/tootsearch" rel="nofollow">https://github.com/imksoo/tootsearch</a>

</div>
