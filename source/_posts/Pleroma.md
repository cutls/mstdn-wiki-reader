---
title: Pleroma.md
---
<div>

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="header">
<th>タイトル</th>
<th>Pleroma</th>
</tr>

<tr class="odd">
<th>画像</th>
<td><a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Pleroma_logo_vector_nobg_nopan.svg"><img src="/images/thumb/7/77/Pleroma_logo_vector_nobg_nopan.svg/100px-Pleroma_logo_vector_nobg_nopan.svg.png" srcset="/images/thumb/7/77/Pleroma_logo_vector_nobg_nopan.svg/150px-Pleroma_logo_vector_nobg_nopan.svg.png 1.5x, /images/thumb/7/77/Pleroma_logo_vector_nobg_nopan.svg/200px-Pleroma_logo_vector_nobg_nopan.svg.png 2x" width="100" height="160" alt="Pleroma logo vector nobg nopan.svg" /></a></td>
</tr>
<tr class="even">
<th scope="row">開発者</th>
<td><a href="/Lain" title="Lain">lain</a></td>
</tr>
<tr class="odd">
<th scope="row">ソースコード</th>
<td><a href="https://git.pleroma.social/pleroma/pleroma" rel="nofollow">GitLab</a></td>
</tr>
<tr class="even">
<th scope="row">プラットホーム</th>
<td>Linux互換OS (サーバーサイド)<br />
Web（クライアントサイド）</td>
</tr>
<tr class="odd">
<th scope="row">プログラミング言語</th>
<td>Elixir</td>
</tr>
<tr class="even">
<th scope="row">ライセンス</th>
<td><a href="/GNU_Affero_General_Public_License" title="GNU Affero General Public License">GNU Affero General Public License</a></td>
</tr>
<tr class="odd">
<th scope="row">Webサイト</th>
<td><a href="https://pleroma.social/" rel="nofollow">https://pleroma.social/</a></td>
</tr>
</tbody>
</table>

  
**Pleroma**は[分散SNS](/%E5%88%86%E6%95%A3SNS "分散SNS")の実装の一つ。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 バックエンドとフロントエンドの組み合わせ](#.E3.83.90.E3.83.83.E3.82.AF.E3.82.A8.E3.83.B3.E3.83.89.E3.81.A8.E3.83.95.E3.83.AD.E3.83.B3.E3.83.88.E3.82.A8.E3.83.B3.E3.83.89.E3.81.AE.E7.B5.84.E3.81.BF.E5.90.88.E3.82.8F.E3.81.9B)
-   [3 名前の由来](#.E5.90.8D.E5.89.8D.E3.81.AE.E7.94.B1.E6.9D.A5)
-   [4 Pleromaのインスタンス一覧を提供するウェブサイト](#Pleroma.E3.81.AE.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7.E3.82.92.E6.8F.90.E4.BE.9B.E3.81.99.E3.82.8B.E3.82.A6.E3.82.A7.E3.83.96.E3.82.B5.E3.82.A4.E3.83.88)
-   [5 Pleromaに対応しているクライアント](#Pleroma.E3.81.AB.E5.AF.BE.E5.BF.9C.E3.81.97.E3.81.A6.E3.81.84.E3.82.8B.E3.82.AF.E3.83.A9.E3.82.A4.E3.82.A2.E3.83.B3.E3.83.88)
-   [6 Pleromaに対応している関連ソフトウェア](#Pleroma.E3.81.AB.E5.AF.BE.E5.BF.9C.E3.81.97.E3.81.A6.E3.81.84.E3.82.8B.E9.96.A2.E9.80.A3.E3.82.BD.E3.83.95.E3.83.88.E3.82.A6.E3.82.A7.E3.82.A2)
-   [7 マスコットキャラクター](#.E3.83.9E.E3.82.B9.E3.82.B3.E3.83.83.E3.83.88.E3.82.AD.E3.83.A3.E3.83.A9.E3.82.AF.E3.82.BF.E3.83.BC)
-   [8 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [9 脚注](#.E8.84.9A.E6.B3.A8)
-   [10 外部リンク](#.E5.A4.96.E9.83.A8.E3.83.AA.E3.83.B3.E3.82.AF)

</div>

## 概要

[lain](/Lain "Lain")により開発されている分散SNS。[OStatus](/OStatus "OStatus")プロトコル<sup>[\[1\]](#cite_note-1)</sup>と[ActivityPub](/ActivityPub "ActivityPub")プロトコルにより、マストドンを含む他の分散SNSの[インスタンス](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "インスタンス")と[連合](/%E9%80%A3%E5%90%88 "連合")を形成することができる。また、[Mastodon](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3 "マストドン")のAPIとある程度の互換性があるため、マストドン用のクライアント (スマートフォンアプリなど) を使用できる場合がある。

GNU/Linuxで動作する。使用しているプログラミング言語はElixirである。マストドンと比較すると、低コストな計算機資源で動作することを標榜しており、2 GBのRAMでの運用<sup>[\[2\]](#cite_note-2)</sup>が可能である。ライセンスは[AGPL](/GNU_Affero_General_Public_License "GNU Affero General Public License")である。

開発当初の連合プロトコルは[OStatus](/OStatus "OStatus")のみであったが、2018年3月8日<sup>[\[3\]](#cite_note-3)</sup>に[ActivityPub](/ActivityPub "ActivityPub")に対応した<sup>[\[4\]](#cite_note-4)</sup>。

## バックエンドとフロントエンドの組み合わせ

Pleromaはバックエンド (サーバーサイド) とフロントエンド (ウェブUI) が分離されており、それぞれ他の分散SNSと組み合わせることが可能である。[GNU social](/GNU_social "GNU social")のバックエンドとPleromaのフロントエンドの組み合わせがGNU/Smug<sup>[\[5\]](#cite_note-5)</sup>とFreezePeach<sup>[\[6\]](#cite_note-6)</sup>で試みられた<sup>[\[7\]](#cite_note-7)</sup>。また [Gab social](/Gab "Gab") ([Twitter](/Twitter "Twitter") ライクな UI に改変した Mastodon のフォーク) のフロントエンドを基にした [Soapbox](/Soapbox "Soapbox") も存在する。

PleromaのバックエンドとMastodonのフロントエンドの組み合わせも利用できる。この場合には、https://example.com/web のようなURLで Mastodon のフロントエンドを使用できる。ただし、MastodonフロントエンドはDevelopブランチでは廃止されており<sup>[\[8\]](#cite_note-8)</sup>、次のリリースで利用できなくなる予定である。

## 名前の由来

**pleroma**はギリシャ語で「全能性」を意味する。

## Pleromaのインスタンス一覧を提供するウェブサイト

[Fediverse Observer (Poduptime)](/Fediverse_Observer_(Poduptime) "Fediverse Observer (Poduptime)") の <a href="https://pleroma.fediverse.observer/list" rel="nofollow">Pleromaインスタンス一覧</a> は自動的に更新される。

the federationの <a href="https://the-federation.info/pleroma" rel="nofollow">Pleromaインスタンス一覧</a> は自動的に更新される。

## Pleromaに対応しているクライアント

Pleromaは[マストドン](/Mastodon "Mastodon")のAPIを模倣しているため、マストドン用のクライアントアプリは、Pleromaインスタンスでも利用できる。ただし、APIの挙動の違いから、正常に動作しない場合もある。また、Pleromaはマストドンの[ストリーミングAPI](/%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%83%9F%E3%83%B3%E3%82%B0API "ストリーミングAPI")を模倣していないため、Pleromaのストリーミングに対応していないアプリが多い。この場合には、タイムラインの新しい投稿を取得するために、ユーザーが明示的に更新の操作を行う必要がある。

公式ドキュメント<sup>[\[9\]](#cite_note-9)</sup>によれば、Pleromaに対応しているクライアントアプリは以下である。前述のように、このリストに記載されていても、Pleromaのストリーミングに対応していないアプリが多い。

-   [Roma](/Roma "Roma") for Desktop (デスクトップ)
-   Social (デスクトップ)
-   [whalebird](/Whalebird "Whalebird") (デスクトップ)
-   AndStatus (Android)
-   [Amaroq](/Amaroq "Amaroq") (iOS)
-   [Fedilab](/Fedilab "Fedilab") (Android)
-   Kyclos (SailfishOS)
-   Husky (Android)
-   Fedi (iOS, Android)
-   [Tusky](/Tusky "Tusky") (Android)
-   Twidere (Android)
-   Indigenous (Android)
-   [Brutaldon](/Brutaldon "Brutaldon") (ウェブ)
-   [Halcyon](/Halcyon "Halcyon") (ウェブ)
-   Pinafone (ウェブ)
-   [Sengi](/Sengi "Sengi") (ウェブ)
-   DashFE (ウェブ)
-   BloatFE (ウェブ)

## Pleromaに対応している関連ソフトウェア

-   [フォローリンク](/%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%AF "フォローリンク")<sup>[\[10\]](#cite_note-10)</sup>
-   [おすすめフォロワー](/%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%83%95%E3%82%A9%E3%83%AD%E3%83%AF%E3%83%BC "おすすめフォロワー")<sup>[\[11\]](#cite_note-11)</sup>
-   [カスタム絵文字でお絵かきツール](/%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E7%B5%B5%E6%96%87%E5%AD%97%E3%81%A7%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E3%83%84%E3%83%BC%E3%83%AB "カスタム絵文字でお絵かきツール")<sup>[\[12\]](#cite_note-12)</sup>
-   [分散SNSフォーラム](/%E5%88%86%E6%95%A3SNS%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A9%E3%83%A0 "分散SNSフォーラム") (廃止。当該項目を参照。)
-   [マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング") (廃止。当該項目を参照。)
-   [ミステリーポスト](/%E3%83%9F%E3%82%B9%E3%83%86%E3%83%AA%E3%83%BC%E3%83%9D%E3%82%B9%E3%83%88 "ミステリーポスト") (廃止。当該項目を参照。)
-   [Mastodon Birthday](/Mastodon_Birthday "Mastodon Birthday")<sup>[\[13\]](#cite_note-13)</sup>
-   [AnonyMasto](/AnonyMasto "AnonyMasto")<sup>[\[14\]](#cite_note-14)</sup> (廃止。当該項目を参照。)
-   [Who To Follow For Mastodon & Pleroma](/Who_To_Follow_For_Mastodon_%26_Pleroma "Who To Follow For Mastodon & Pleroma")

## マスコットキャラクター

Pleromaのマスコットキャラクターとして**プロレマたん**または**pleroma-tan**が知られている。2019年4月にPleromaのリポジトリに追加され<sup>[\[15\]](#cite_note-15)</sup>、マストドン風フロントエンドの左下に表示される<sup>[\[16\]](#cite_note-16)</sup>ようになった。人間型のものと、狐化されたものが存在する。

[<img src="/images/thumb/1/14/Pleroma-tan.png/120px-Pleroma-tan.png" srcset="/images/thumb/1/14/Pleroma-tan.png/181px-Pleroma-tan.png 1.5x, /images/thumb/1/14/Pleroma-tan.png/241px-Pleroma-tan.png 2x" width="120" height="256" alt="Pleroma-tan.png" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Pleroma-tan.png) [<img src="/images/thumb/c/c3/Pleroma-fox-tan.png/143px-Pleroma-fox-tan.png" srcset="/images/thumb/c/c3/Pleroma-fox-tan.png/214px-Pleroma-fox-tan.png 1.5x, /images/thumb/c/c3/Pleroma-fox-tan.png/286px-Pleroma-fox-tan.png 2x" width="143" height="256" alt="Pleroma-fox-tan.png" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Pleroma-fox-tan.png)

## 関連項目

-   [Newroma](/Newroma "Newroma")

## 脚注

<div>

1.  [↑](#cite_ref-1) バージョン2.0.0で削除された。
2.  [↑](#cite_ref-2) <a href="https://pleroma.social/blog/2021/01/13/the-big-pleroma-and-fediverse-faq/" rel="nofollow">The Big Pleroma and Fediverse FAQ Part 1 - Beginner Questions</a>
3.  [↑](#cite_ref-3) <a href="https://git.pleroma.social/pleroma/pleroma/commit/460062f2b04220ffcd8f20aa842cc95582d1f849" rel="nofollow">https://git.pleroma.social/pleroma/pleroma/commit/460062f2b04220ffcd8f20aa842cc95582d1f849</a>
4.  [↑](#cite_ref-4) <a href="https://blog.soykaf.com/post/activity-pub-in-pleroma/" rel="nofollow">ActivityPub in Pleroma</a>
5.  [↑](#cite_ref-5) <a href="https://gs.smuglo.li/suikabest2hu.html" rel="nofollow">https://gs.smuglo.li/suikabest2hu.html</a>
6.  [↑](#cite_ref-6) <a href="https://freezepeach.xyz/pleroma.html" rel="nofollow">https://freezepeach.xyz/pleroma.html</a>
7.  [↑](#cite_ref-7) 2022年1月時点で、どちらもアクセスできなくなっている。
8.  [↑](#cite_ref-8) <a href="https://git.pleroma.social/pleroma/pleroma/-/merge_requests/3392" rel="nofollow">Remove MastoFE from Pleroma, fixes #2625 (!3392)</a>
9.  [↑](#cite_ref-9) <a href="https://docs-develop.pleroma.social/backend/clients/" rel="nofollow">https://docs-develop.pleroma.social/backend/clients/</a>
10. [↑](#cite_ref-10) <a href="https://mstdn.nere9.help/users/osapon/statuses/99755919266836138" rel="nofollow">https://mstdn.nere9.help/users/osapon/statuses/99755919266836138</a>
11. [↑](#cite_ref-11) <a href="https://mstdn.nere9.help/users/osapon/statuses/99755919266836138" rel="nofollow">https://mstdn.nere9.help/users/osapon/statuses/99755919266836138</a>
12. [↑](#cite_ref-12) <a href="https://git.pleroma.social/pleroma/pleroma/merge_requests/52" rel="nofollow">https://git.pleroma.social/pleroma/pleroma/merge_requests/52</a>
13. [↑](#cite_ref-13) 記事執筆者による独自調査。
14. [↑](#cite_ref-14) 記事執筆者による独自調査。
15. [↑](#cite_ref-15) <a href="https://git.pleroma.social/pleroma/pleroma/merge_requests/913" rel="nofollow">priv/static/images: Add pleroma-tan !913</a>
16. [↑](#cite_ref-16) <a href="https://git.pleroma.social/pleroma/pleroma/merge_requests/1018" rel="nofollow">mastodon_api_controller.ex: Add pleroma-tan to initial_state !1018</a>

</div>

## 外部リンク

-   <a href="http://www.itmedia.co.jp/news/articles/1711/12/news018.html" rel="nofollow">新しい連合型SNS「Pleroma」はMastodonを置き換える？</a>
-   <a href="http://www.itmedia.co.jp/news/articles/1711/15/news124.html" rel="nofollow">Mastodonに続く新たな連合型SNS「Pleroma」作者に聞く 開発の背景、特徴、ロードマップ</a>
-   <a href="https://masto.news/2017/11/12/pleroma/" rel="nofollow">マストドンの次に来る？「Pleroma」の日本人ユーザーが増加中</a>
-   <a href="https://distsn.org/pleroma-instances.html" rel="nofollow">Pleromaインスタンス一覧</a>

</div>
