---
title: Write.as.md
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
<th>Write.as</th>
</tr>

<tr class="odd">
<th>画像</th>
<td><a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Writeas-logo.png" title="Write.as"><img src="/images/thumb/9/90/Writeas-logo.png/270px-Writeas-logo.png" srcset="/images/thumb/9/90/Writeas-logo.png/405px-Writeas-logo.png 1.5x, /images/thumb/9/90/Writeas-logo.png/540px-Writeas-logo.png 2x" width="270" height="56" alt="Write.as" /></a></td>
</tr>
<tr class="even">
<th scope="row">開発者</th>
<td><a href="https://github.com/thebaer" rel="nofollow">Matt Baer</a></td>
</tr>
<tr class="odd">
<th scope="row">ソースコード</th>
<td><a href="https://github.com/writeas/web-core" rel="nofollow">GitHub</a></td>
</tr>
<tr class="even">
<th scope="row">プラットホーム</th>
<td>Linux互換OS (サーバーサイド)<br />
ウェブ (クライアントサイド)</td>
</tr>
<tr class="odd">
<th scope="row">プログラミング言語</th>
<td>Go, JavaScript</td>
</tr>
<tr class="even">
<th scope="row">サービス開始日</th>
<td>2015年1月30日<sup><a href="#cite_note-1">[1]</a></sup></td>
</tr>
<tr class="odd">
<th scope="row">寄付</th>
<td><a href="https://www.producthunt.com/posts/write-as" rel="nofollow">Product Hunt</a></td>
</tr>
<tr class="even">
<th scope="row">ライセンス</th>
<td><a href="/MIT" title="MIT">MITライセンス</a></td>
</tr>
<tr class="odd">
<th scope="row">Webサイト</th>
<td><a href="https://write.as/" rel="nofollow">https://write.as/</a></td>
</tr>
</tbody>
</table>

  
Write.as(ライト アズ)とは、オープンソースの[分散SNS](/%E5%88%86%E6%95%A3SNS "分散SNS")プラットフォーム。Mediumのようなブログサービスを提供する。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 有料プラン](#.E6.9C.89.E6.96.99.E3.83.97.E3.83.A9.E3.83.B3)
    -   [2.1 Write Freelyプラン](#Write_Freely.E3.83.97.E3.83.A9.E3.83.B3)
    -   [2.2 Write Casuallyプラン](#Write_Casually.E3.83.97.E3.83.A9.E3.83.B3)
    -   [2.3 Write as Proプラン](#Write_as_Pro.E3.83.97.E3.83.A9.E3.83.B3)
-   [3 ソースコード](#.E3.82.BD.E3.83.BC.E3.82.B9.E3.82.B3.E3.83.BC.E3.83.89)
-   [4 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [5 出典](#.E5.87.BA.E5.85.B8)

</div>

## 概要

2015年1月30日に<a href="https://github.com/thebaer" rel="nofollow">Matt</a>氏によって開発が開始された。当初はtelnetによってコマンドラインからブログを投稿できるサービスだったが、後にMediumのようなwebインターフェイスを兼ね備えるようになった。

<div>

<div>

[<img src="/images/thumb/9/91/Mastodon%E4%B8%8A%E3%81%A7%E3%81%AEwrite.as%E3%81%AE%E8%A1%A8%E7%A4%BA.png/200px-Mastodon%E4%B8%8A%E3%81%A7%E3%81%AEwrite.as%E3%81%AE%E8%A1%A8%E7%A4%BA.png" srcset="/images/thumb/9/91/Mastodon%E4%B8%8A%E3%81%A7%E3%81%AEwrite.as%E3%81%AE%E8%A1%A8%E7%A4%BA.png/300px-Mastodon%E4%B8%8A%E3%81%A7%E3%81%AEwrite.as%E3%81%AE%E8%A1%A8%E7%A4%BA.png 1.5x, /images/9/91/Mastodon%E4%B8%8A%E3%81%A7%E3%81%AEwrite.as%E3%81%AE%E8%A1%A8%E7%A4%BA.png 2x" width="200" height="225" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon%E4%B8%8A%E3%81%A7%E3%81%AEwrite.as%E3%81%AE%E8%A1%A8%E7%A4%BA.png)

<div>

<div>

[](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon%E4%B8%8A%E3%81%A7%E3%81%AEwrite.as%E3%81%AE%E8%A1%A8%E7%A4%BA.png "拡大")

</div>

Mastodon上でのWrite.asの表示

</div>

</div>

</div>

2018年8月14日、[ActivityPub](/ActivityPub "ActivityPub")に対応したページが一般公開された。<sup>[\[2\]](#cite_note-2)</sup> 現時点ではデフォルトではActivityPub上では共有されないようになっているが、<a href="https://write.as/new/blog/federated" rel="nofollow">専用の登録ページ</a>から連合に対応したアカウントを作成することで[Mastodon](/Mastodon "Mastodon")や[Pleroma](/Pleroma "Pleroma"), [Misskey](/Misskey "Misskey")などの他の[ActivityPub](/ActivityPub "ActivityPub")対応サービス上でも投稿の更新通知が受け取れる様になっている。

## 有料プラン

Write.asは多くの他の[分散SNS](/%E5%88%86%E6%95%A3SNS "分散SNS")と異なり、サービス公開後に[ActivityPub](/ActivityPub "ActivityPub")に対応した商用目的のサービスのため、いくつかの機能が有料版のみに制限されている。<sup>[\[3\]](#cite_note-3)</sup> 2018年8月時点では以下のプランがある<sup>[\[4\]](#cite_note-4)</sup>。

### Write Freelyプラン

無料で利用できるプラン。開設できるブログの数は1つ、Markdownでの投稿、投稿数無制限、匿名投稿、[ハッシュタグ](/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0 "ハッシュタグ")によるカテゴライズ、5万文字数の投稿、[Twitter](/Twitter "Twitter"), Tumblr, Mediumへの同時投稿が3ヶ月間サポートされている。

### Write Casuallyプラン

月間1ドルから利用できるプラン。3つのブログが開設でき、10万文字の文字数、サブドメインの利用、トップページでの紹介、ブログ移転機能、データのエクスポート、カスタマーサービスの利用ができるようになる。

### Write as Proプラン

月間4ドルから利用できるプラン。10つのブログが開設でき、50万文字の文字数、Snap.asでの画像投稿、詳細なアクセス解析、静的ページ（サーバーサイドレンダリング）、厳重なパスワードによる保護、カスタムドメインの利用、ブログフォーマットの選択、カスタムCSS、Emailによる投稿、アーリーアクセスなどが利用できるようになる。

## ソースコード

Write.asは元々[プロプライエタリ](/%E3%83%97%E3%83%AD%E3%83%97%E3%83%A9%E3%82%A4%E3%82%A8%E3%82%BF%E3%83%AA "プロプライエタリ")ソフトウェアであったが、後に部分的にソースコードを公開した。現在公開されているWrite.asのバックエンドサーバーのソースコードは<a href="https://github.com/writeas/web-core" rel="nofollow">GitHub</a>で確認できるが、フロントエンドなどの一部のソースコードは依然として公開されていない。

## 関連項目

-   [Write Freely](/Write_Freely "Write Freely")
-   [Plume](/Plume "Plume")
-   [ActivityPub](/ActivityPub "ActivityPub")

## 出典

<div>

1.  [↑](#cite_ref-1) <a href="https://twitter.com/writeas__/status/561352338720702465" rel="nofollow">最も最初の投稿（Twitter上のシェア）</a>
2.  [↑](#cite_ref-2) <a href="https://twitter.com/writeas__/status/1029347404946894848" rel="nofollow">Twitter上の投稿 "#ActivityPub support is now available to everyone!"</a>
3.  [↑](#cite_ref-3) <a href="https://write.as/pricing" rel="nofollow">公式サイト "Pricing"</a>
4.  [↑](#cite_ref-4) <a href="https://write.as/me/plan" rel="nofollow">登録ページ</a>

</div>

</div>
