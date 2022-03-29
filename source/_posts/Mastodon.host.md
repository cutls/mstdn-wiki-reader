---
title: Mastodon.host.md
---
<div>

<div>

|                                                                                                                                                                                                                                                                                                                                                        |                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [<img src="/images/thumb/f/fb/Confusion_grey.svg/25px-Confusion_grey.svg.png" srcset="/images/thumb/f/fb/Confusion_grey.svg/38px-Confusion_grey.svg.png 1.5x, /images/thumb/f/fb/Confusion_grey.svg/50px-Confusion_grey.svg.png 2x" width="25" height="19" alt="曖昧さ回避" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Confusion_grey.svg "曖昧さ回避") | 「[Masto.Host](/Masto.Host "Masto.Host")」とは異なります。 |

</div>

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="header">
<th>タイトル</th>
<th>mastodon.host</th>
</tr>

<tr class="odd">
<th>画像</th>
<td><a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_host.jpeg"><img src="/images/thumb/1/16/Mastodon_host.jpeg/300px-Mastodon_host.jpeg" srcset="/images/thumb/1/16/Mastodon_host.jpeg/450px-Mastodon_host.jpeg 1.5x, /images/thumb/1/16/Mastodon_host.jpeg/600px-Mastodon_host.jpeg 2x" width="300" height="158" alt="Mastodon host.jpeg" /></a></td>
</tr>
<tr class="even">
<th scope="row">ドメイン</th>
<td><a href="https://mastodon.host" rel="nofollow">https://mastodon.host</a></td>
</tr>
<tr class="odd">
<th scope="row">管理者</th>
<td><a href="https://mastodon.host/@gled" rel="nofollow">gled</a></td>
</tr>
<tr class="even">
<th scope="row">モデレーター</th>
<td><a href="https://mastodon.host/@skiring" rel="nofollow">Skiring</a><br />
<a href="https://mastodon.host/@House_of_Pears" rel="nofollow">House of Pears</a></td>
</tr>
<tr class="odd">
<th scope="row">国</th>
<td>イギリス</td>
</tr>
<tr class="even">
<th scope="row">開始日</th>
<td><a href="/2017%E5%B9%B4" title="2017年">2017年</a>4月7日<sup><a href="#cite_note-start-1">[1]</a></sup></td>
</tr>
<tr class="odd">
<th scope="row">寄付</th>
<td><a href="https://mastodon.host/Qr_bitcoin.png" rel="nofollow">Bitcoin</a><br />
<a href="https://liberapay.com/gled/donate" rel="nofollow">Liberapay</a><br />
PayPal</td>
</tr>
<tr class="even">
<th scope="row">ソースコード</th>
<td><a href="https://github.com/gled-rs/mastodon" rel="nofollow">GitHub</a></td>
</tr>
</tbody>
</table>

**mastodon.host**は、[オープンソース](/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9 "オープンソース")のソーシャルネットワーク[Mastodon](/Mastodon "Mastodon")の[インスタンス](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "インスタンス")。

## 概要

[2017年](/2017%E5%B9%B4 "2017年")4月7日<sup>[\[1\]](#cite_note-start-1)</sup>、gled氏によって立ち上げられた。2018年3月現在、約4000人のユーザー数を有する。

基本的に、ルールに反しない限りは話題は自由となっている。英語が中心のインスタンスだが、他言語ユーザーも参加することができる。

2017年4月15日には日本人ユーザーの増加に対し、gled氏による声明が発表された<sup>[\[2\]](#cite_note-2)</sup>。また、[Pawoo](/Pawoo "Pawoo")をドメインブロックしているインスタンスの一つである。

## 独自機能

mastodon.hostには、非常に多くの独自実装が加えられている。

[字数制限の変更](/%E5%AD%97%E6%95%B0%E5%88%B6%E9%99%90%E3%81%AE%E5%A4%89%E6%9B%B4 "字数制限の変更")  
-   [トゥート](/%E3%83%88%E3%82%A5%E3%83%BC%E3%83%88 "トゥート")の文字数が500から1024まで引き上げられている。
-   プロフィールの文字数が512まで引き上げられている。

<!-- -->

検索機能の強化  
-   各種[検索](/%E6%A4%9C%E7%B4%A2 "検索")結果の表示数が5から20まで引き上げられている。
-   トゥートの全文検索が実装されている。

<!-- -->

タイムライン・カラムの仕様変更  
-   [ブースト](/%E3%83%96%E3%83%BC%E3%82%B9%E3%83%88 "ブースト")・[返信](/%E3%83%AA%E3%83%97%E3%83%A9%E3%82%A4 "リプライ")が公開[タイムライン](/%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3 "タイムライン")に表示されるよう変更されている。
-   [カラム](/%E3%82%AB%E3%83%A9%E3%83%A0 "カラム")の幅が画面の幅に合わせて変化する。

<!-- -->

その他  
-   インスタンスのアカウントがXMPPアカウントとして利用できる。
-   仮想通貨のマイニングによってインスタンスを支援することができる（パソコンのみ）。
-   自動でフォローを行う<a href="https://mastodon.host/@federationbot" rel="nofollow">bot</a>によって、非常に接続数の多い[連合](/%E9%80%A3%E5%90%88 "連合")が形成されている。

## 出典

<div>

1.  ↑ <sup>[1.0](#cite_ref-start_1-0)</sup> <sup>[1.1](#cite_ref-start_1-1)</sup> <a href="https://mastodon.host/@gled/2205" rel="nofollow">https://mastodon.host/@gled/2205</a>
2.  [↑](#cite_ref-2) <a href="https://mastodon.host/@gled/715828" rel="nofollow">https://mastodon.host/@gled/715828</a>

</div>

</div>
