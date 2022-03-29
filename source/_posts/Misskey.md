---
title: Misskey.md
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
<th>Misskey</th>
</tr>

<tr class="odd">
<th>画像</th>
<td><a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Misskey_title.png"><img src="/images/b/ba/Misskey_title.png" width="251" height="66" alt="Misskey title.png" /></a></td>
</tr>
<tr class="even">
<th scope="row">開発者</th>
<td>syuilo</td>
</tr>
<tr class="odd">
<th scope="row">ソースコード</th>
<td><a href="https://github.com/syuilo/misskey" rel="nofollow">GitHub</a></td>
</tr>
<tr class="even">
<th scope="row">プラットホーム</th>
<td>Node.js (サーバーサイド)<br />
Web (クライアントサイド)</td>
</tr>
<tr class="odd">
<th scope="row">プログラミング言語</th>
<td>TypeScript, Vue</td>
</tr>
<tr class="even">
<th scope="row">サービス開始日</th>
<td>2014年7月<sup><a href="#cite_note-1">[1]</a><a href="#cite_note-2">[2]</a></sup></td>
</tr>
<tr class="odd">
<th scope="row">ライセンス</th>
<td>AGPL 3.0</td>
</tr>
<tr class="even">
<th scope="row">Webサイト</th>
<td><a href="https://join.misskey.page/ja/" rel="nofollow">https://join.misskey.page/ja/</a></td>
</tr>
</tbody>
</table>

  
**Misskey**(ミスキー)は、オープンソースの[ソーシャル・ネットワーキング・サービス](/%E3%82%BD%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%BB%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9 "ソーシャル・ネットワーキング・サービス")（SNS）の一つで、[ActivityPub](/ActivityPub "ActivityPub")によりMastodonなどの分散SNSとやりとりが可能な[分散SNS](/%E5%88%86%E6%95%A3SNS "分散SNS")である。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 主な機能](#.E4.B8.BB.E3.81.AA.E6.A9.9F.E8.83.BD)
    -   [2.1 リアクション](#.E3.83.AA.E3.82.A2.E3.82.AF.E3.82.B7.E3.83.A7.E3.83.B3)
    -   [2.2 デッキ](#.E3.83.87.E3.83.83.E3.82.AD)
    -   [2.3 ウィジェット](#.E3.82.A6.E3.82.A3.E3.82.B8.E3.82.A7.E3.83.83.E3.83.88)
    -   [2.4 ドライブ](#.E3.83.89.E3.83.A9.E3.82.A4.E3.83.96)
    -   [2.5 アンケート](#.E3.82.A2.E3.83.B3.E3.82.B1.E3.83.BC.E3.83.88)
    -   [2.6 リバーシ](#.E3.83.AA.E3.83.90.E3.83.BC.E3.82.B7)
    -   [2.7 Cat](#Cat)
    -   [2.8 MFM](#MFM)
-   [3 ライセンス](#.E3.83.A9.E3.82.A4.E3.82.BB.E3.83.B3.E3.82.B9)
-   [4 主なインスタンス](#.E4.B8.BB.E3.81.AA.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9)
-   [5 インスタンス一覧](#.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7)
-   [6 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [7 外部リンク](#.E5.A4.96.E9.83.A8.E3.83.AA.E3.83.B3.E3.82.AF)
-   [8 出典](#.E5.87.BA.E5.85.B8)

</div>

## 概要

2014年6月よりsyuilo氏により開発されている、「Twitterライク」を謳うオープンソースのソーシャル・ネットワーキング・サービス（SNS）。

Markdownにより投稿を装飾する機能や、複数のリアクションから選べるリアクション機能、10までの選択肢を登録できる投票機能、ファイルをアップロードできる「ドライブ」機能、ユーザー同士でリバーシの対戦ができる機能などが特徴。

当初は[インスタンス](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "インスタンス")同士での相互通信が不可能であったが、2018年4月8日より[ActivityPub](/ActivityPub "ActivityPub")を実装したため[分散SNS](/%E5%88%86%E6%95%A3SNS "分散SNS")となり、Misskeyをはじめ[Mastodon](/Mastodon "Mastodon")や[Pleroma](/Pleroma "Pleroma")などの分散SNSのインスタンスと相互通信が可能となった<sup>[\[3\]](#cite_note-3)</sup>。

なお、MastodonとAPIの互換性はないため、MastodonクライアントでMisskeyを利用するといったことはできない(ただしMisskeyに対応したMastodonクライアントも一部存在する)。

## 主な機能

### リアクション

ユーザーの投稿に「😆」「🤔」「👍」などの「リアクション」を付けることができる。10.97.0よりカスタム絵文字がリアクションに利用できるようになっている。

Misskeyインスタンス同士でならリアクション情報が伝達されるが、それ以外の場合(MisskeyとMastodon間など)は、全てのリアクションは「いいね(管理者設定によりお気に入りに変更可能)」として扱われ、逆に外部インスタンスからの「いいね」はインスタンス設定により、全て「👍」または「⭐️」として扱われる。

### デッキ

<div>

<div>

[<img src="/images/thumb/e/ed/Deck.jpg/300px-Deck.jpg" srcset="/images/thumb/e/ed/Deck.jpg/450px-Deck.jpg 1.5x, /images/thumb/e/ed/Deck.jpg/600px-Deck.jpg 2x" width="300" height="172" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Deck.jpg)

<div>

<div>

[](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Deck.jpg "拡大")

</div>

Deck

</div>

</div>

</div>

Mastodon風のカラムUI。カラムは自由に追加/削除/並べ替えができ、複数のカラムを上下に水平分割して表示することも可能。

後述のウィジェットをカラムに配置することもできる。

現時点で利用可能なカラムは、ホーム/ローカル/ソーシャル/グローバルタイムラインカラム、あなた宛て(返信)カラム、ダイレクト投稿カラム、通知カラム、ウィジェットカラム、リストカラム、ハッシュタグカラム。

モバイル版には非対応であったが、10.90.0より利用できるようになっている。

### ウィジェット

通知、アクティビティ、カレンダー、トレンドなどをウィジェットとして利用できる。 これらのウィジェットは自由にホーム、デッキに配置してカスタマイズすることができる。モバイル版でもウィジェットは利用可能だが、一部モバイル版に対応していないウィジェットもある。

特定の場所でのみ有効なウィジェットもあり、「タイムマシン」ウィジェットはホームに設置されている場合のみタイムラインを指定した日付に遡らせる。

### ドライブ

ユーザーの投稿したファイルを管理する機能。 投稿に添付したりアカウントのアイコンに設定するなどしたファイルは自動でドライブに追加される。直接ファイルをドライブにアップロードすることも可能。

### アンケート

投稿にアンケートを添付することができる。選択肢を2〜10個設定し、ユーザーがどれか１つまたは複数の項目に投票する。 アンケートの期限を設定することはできなかったが、10.92.0より自由に設定できるようになっている。

他のインスタンスに対しては、アンケートへのリンクに変換されて表現される。10.92.0よりMastodon 2.8から搭載されたアンケートに対応した。

### リバーシ

Misskeyユーザー同士で<a href="https://ja.wikipedia.org/wiki/%E3%82%AA%E3%82%BB%E3%83%AD_(%E9%81%8A%E6%88%AF)" rel="nofollow">リバーシ</a>で遊ぶことができる。現時点では別のインスタンスのユーザーとの対局は不可。 変則ルールや、カスタムマップに対応している。 他のユーザーの対局を観戦したり、過去の対局をリプレイすることもできる。

AI開発のためのAPIが用意されており<sup>[\[4\]](#cite_note-4)</sup>、実際にいくつかのBotが存在する<sup>[\[5\]](#cite_note-5)</sup>。

### Cat

ジョーク機能。この設定を有効にすると、自分の全ての投稿の本文に存在する「な」又は「ナ」が「にゃ」「ニャ」に変換される。

この変換はMisskeyや、その他Cat機能に対応するインスタンスを除きリモートには適用されない。 設定を無効に戻すと投稿も元に戻る。

### MFM

MFM(Misskey Flavored Markdown)と呼ばれるMarkdown風の構文を投稿やプロフィールに使うことができ、テキストの一部を太字にしたりすることができる。

## ライセンス

2018年3月28日<sup>[\[6\]](#cite_note-6)</sup>に、[MITライセンス](/MIT%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9 "MITライセンス")から[AGPL](/GNU_Affero_General_Public_License "GNU Affero General Public License")に変更された。 ロゴはMisskeyに関係する用途<sup>[\[7\]](#cite_note-7)</sup>であれば自由に利用可能である。

## 主なインスタンス

<a href="https://join.misskey.page/ja/" rel="nofollow">joinmisskey</a>に記載されているインスタンス。

-   <a href="https://misskey.io" rel="nofollow">misskey.io</a> - 現在の公式インスタンス。
    -   misskey.xyz - 旧公式インスタンス。
-   <a href="https://misskey.m544.net" rel="nofollow">misskey.m544.net</a> - [めいめい](/%E3%82%81%E3%81%84%E3%82%81%E3%81%84 "めいめい")氏が運営するインスタンス。
-   <a href="https://twista.283.cloud" rel="nofollow">twista</a> - 硫酸鶏氏が運営するインスタンス。
-   <a href="https://misskey.dev" rel="nofollow">misskey.dev</a> - [takimura](/Takimura "Takimura")氏が運営するインスタンス。
-   <a href="https://yuzulia.xyz" rel="nofollow">yuzulia.xyz</a> - ゆずりょー氏が運営するインスタンス。
-   <a href="https://msk.kirigakure.net" rel="nofollow">霧sskey</a> - 霧隠懐希氏が運営するインスタンス。
-   <a href="https://groundpolis.app" rel="nofollow">groundpolis.app</a>- Xeltica氏が運営するインスタンス。

## インスタンス一覧

<a href="https://join.misskey.page/ja/wiki/instances" rel="nofollow">https://join.misskey.page/ja/wiki/instances</a> はMisskeyのインスタンス一覧である。更新は手動。言語別に分類されており、ウェブサイトの言語設定に応じて表示が切り替わる。

[Fediverse Network](/Fediverse_Network "Fediverse Network")は2018年5月6日<sup>[\[8\]](#cite_note-8)</sup>よりMisskeyインスタンス一覧を運用している。

## 関連項目

Misskeyに対応したクライアント

-   [TheDesk](/TheDesk "TheDesk")
-   [Subway Tooter](/Subway_Tooter "Subway Tooter")
-   MissCat - iOS用 Misskey特化クライアント
-   MilkTea - Android用 Misskey特化クライアント
-   SocialHub
-   WhaleBird
-   Marindiver

## 外部リンク

公式

-   <a href="https://join.misskey.page" rel="nofollow">Misskeyをはじめよう (joinmisskey)</a>
-   misskey.ioの公式アカウント (@misskey_io) - [Twitter](/Twitter "Twitter")
-   <a href="https://misskey.io/docs" rel="nofollow">Misskey Docs</a> - misskey.ioの公式ドキュメント。

## 出典

<div>

1.  [↑](#cite_ref-1) <a href="https://join.misskey.page/ja/wiki/history/" rel="nofollow">https://join.misskey.page/ja/wiki/history/</a>
2.  [↑](#cite_ref-2) <a href="https://web.archive.org/web/20140911001916/http://misskey.xyz" rel="nofollow">https://web.archive.org/web/20140911001916/http://misskey.xyz</a>
3.  [↑](#cite_ref-3) <a href="https://mstdn.maud.io/@syuilo/99823108784543849" rel="nofollow">https://mstdn.maud.io/@syuilo/99823108784543849</a>
4.  [↑](#cite_ref-4) <a href="https://gist.github.com/syuilo/210c2ce0f823e8a2fe20ad3f0c18b727" rel="nofollow">https://gist.github.com/syuilo/210c2ce0f823e8a2fe20ad3f0c18b727</a>
5.  [↑](#cite_ref-5) <a href="https://github.com/syuilo/ai" rel="nofollow">https://github.com/syuilo/ai</a>
6.  [↑](#cite_ref-6) <a href="https://github.com/syuilo/misskey/commit/d792de9a7fe3067a5b49e405c02e7eb71a60bd92" rel="nofollow">https://github.com/syuilo/misskey/commit/d792de9a7fe3067a5b49e405c02e7eb71a60bd92</a>
7.  [↑](#cite_ref-7) <a href="https://github.com/joinmisskey/mk-assets/blob/master/icons/README.md" rel="nofollow">https://github.com/joinmisskey/mk-assets/blob/master/icons/README.md</a>
8.  [↑](#cite_ref-8) <a href="https://pleroma.fr/notice/70601" rel="nofollow">https://pleroma.fr/notice/70601</a>

</div>

</div>
