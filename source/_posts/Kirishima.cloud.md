---
title: Kirishima.cloud.md
---
<div>

|              |                                                                                                                                                                                                                                                                                                                                                                                     |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル     | kirishima.cloud(キリシマ ドット クラウド)                                                                                                                                                                                                                                                                                                                                           |
| 画像         | [<img src="/images/thumb/f/f6/Astarte_5x_resoluted.png/300px-Astarte_5x_resoluted.png" srcset="/images/thumb/f/f6/Astarte_5x_resoluted.png/450px-Astarte_5x_resoluted.png 1.5x, /images/thumb/f/f6/Astarte_5x_resoluted.png/600px-Astarte_5x_resoluted.png 2x" width="300" height="300" alt="Astarte" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Astarte_5x_resoluted.png "Astarte") |
| ドメイン     | <a href="https://kirishima.cloud" rel="nofollow">https://kirishima.cloud</a>                                                                                                                                                                                                                                                                                                        |
| 管理者       | <a href="https://kirishima.cloud/@Kirishimalab21" rel="nofollow">霧島ひなた</a>                                                                                                                                                                                                                                                                                                     |
| 国           | 日本                                                                                                                                                                                                                                                                                                                                                                                |
| 開始日       | 2017年10月4日                                                                                                                                                                                                                                                                                                                                                                       |
| 寄付         | <a href="http://amzn.asia/hJLmEbc" rel="nofollow">ほしいものリスト</a> <a href="https://enty.jp/fTVgWyCFuAkK" rel="nofollow">Enty</a><a href="https://www.pixiv.net/fanbox/creator/13015144" rel="nofollow">FanBox</a>                                                                                                                                                              |
| ソースコード | <a href="https://github.com/Kirishima21/mastodon" rel="nofollow">https://github.com/Kirishima21/mastodon</a>                                                                                                                                                                                                                                                                        |
| 愛称         | アスタルテ、キリシマストドン                                                                                                                                                                                                                                                                                                                                                        |

  
**kirishima.cloud** とは、オープンソースのソーシャルネットワーク[Mastodon](/Mastodon "Mastodon")の日本語向け[インスタンス](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "インスタンス")である。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
    -   [1.1 話題](#.E8.A9.B1.E9.A1.8C)
        -   [1.1.1 ソフトウェア開発(主にRust)](#.E3.82.BD.E3.83.95.E3.83.88.E3.82.A6.E3.82.A7.E3.82.A2.E9.96.8B.E7.99.BA.28.E4.B8.BB.E3.81.ABRust.29)
        -   [1.1.2 食事](#.E9.A3.9F.E4.BA.8B)
        -   [1.1.3 Croudia](#Croudia)
-   [2 独自機能](#.E7.8B.AC.E8.87.AA.E6.A9.9F.E8.83.BD)
    -   [2.1 各種投稿上限の引き上げ](#.E5.90.84.E7.A8.AE.E6.8A.95.E7.A8.BF.E4.B8.8A.E9.99.90.E3.81.AE.E5.BC.95.E3.81.8D.E4.B8.8A.E3.81.92)
    -   [2.2 BBcode対応](#BBcode.E5.AF.BE.E5.BF.9C)
    -   [2.3 Webラジオ聴取](#Web.E3.83.A9.E3.82.B8.E3.82.AA.E8.81.B4.E5.8F.96)
    -   [2.4 カスタム絵文字自動収集](#.E3.82.AB.E3.82.B9.E3.82.BF.E3.83.A0.E7.B5.B5.E6.96.87.E5.AD.97.E8.87.AA.E5.8B.95.E5.8F.8E.E9.9B.86)
    -   [2.5 ☆絵文字でお絵描き☆](#.E2.98.86.E7.B5.B5.E6.96.87.E5.AD.97.E3.81.A7.E3.81.8A.E7.B5.B5.E6.8F.8F.E3.81.8D.E2.98.86)
    -   [2.6 Markdown対応](#Markdown.E5.AF.BE.E5.BF.9C)
    -   [2.7 公開範囲ごとの色分け](#.E5.85.AC.E9.96.8B.E7.AF.84.E5.9B.B2.E3.81.94.E3.81.A8.E3.81.AE.E8.89.B2.E5.88.86.E3.81.91)
    -   [2.8 長文を自動的に畳む](#.E9.95.B7.E6.96.87.E3.82.92.E8.87.AA.E5.8B.95.E7.9A.84.E3.81.AB.E7.95.B3.E3.82.80)
    -   [2.9 Twitterへのリプライ](#Twitter.E3.81.B8.E3.81.AE.E3.83.AA.E3.83.97.E3.83.A9.E3.82.A4)
    -   [2.10 スタンプ文字](#.E3.82.B9.E3.82.BF.E3.83.B3.E3.83.97.E6.96.87.E5.AD.97)
    -   [2.11 Glitch-soc導入](#Glitch-soc.E5.B0.8E.E5.85.A5)
    -   [2.12 ユーザー絵文字](#.E3.83.A6.E3.83.BC.E3.82.B6.E3.83.BC.E7.B5.B5.E6.96.87.E5.AD.97)
-   [3 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [4 注釈](#.E6.B3.A8.E9.87.88)

</div>

## 概要

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td></td>
<td><strong>この記事はまだ書きかけです。</strong>
<div>
あなたが<a href="https://ja.mstdn.wiki/Kirishima.cloud&amp;action=edit" rel="nofollow">内容を拡充</a>してみませんか？
</div></td>
</tr>
</tbody>
</table>

霧島ひなた氏が運営しているインスタンス。後述の通り多くの独自機能が特長である。それらの機能は、霧島ひなた氏自身の健康とマストドンや[Mastodon Glitch Edition](/Glitch-soc "Glitch-soc")新バージョンとのコンフリクトを鑑みながら順次アップデートされる。また、5000個を超えるカスタム絵文字を誇っている。カスタム絵文字パレットや一覧を出す行為は端末に負荷がかかるため、ハードウェアのベンチマークに使用される。<sup>[\[1\]](#cite_note-1)\[*[要出典](https://ja.wikipedia.org/wiki/Wikipedia:%E3%80%8C%E8%A6%81%E5%87%BA%E5%85%B8%E3%80%8D%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%95%E3%82%8C%E3%81%9F%E6%96%B9%E3%81%B8 "w:Wikipedia:「要出典」をクリックされた方へ")*\]</sup>。

インスタンス名は永らく募集中とされていて、「アスタルテ」「キリシマストドン」「霧島鯖」などと呼ばれていたが、現在<sup>[\[2\]](#cite_note-2)</sup>は「アスタルテ」に統一されている。

また、毎日のトゥート数を計測し、ユーザーの健康管理を手厚くサポートする「[アスタルテ暇人ランキング](/%E3%82%A2%E3%82%B9%E3%82%BF%E3%83%AB%E3%83%86%E6%9A%87%E4%BA%BA%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0 "アスタルテ暇人ランキング")」が存在するため、[toot-counter](/Toot-counter "Toot-counter")など毎日のトゥート数を自動トゥートするを使うユーザーが皆無である<sup>[\[3\]](#cite_note-3)</sup>。

### 話題

話題については特に制限を設けていない。それ故に<a href="https://adventar.org/calendars/3503" rel="nofollow">アスタルテで実施されたアドベントカレンダー(2018)</a>では実に様々なテーマで書かれた。(<a href="https://adventar.org/calendars/3971" rel="nofollow">アスタルテで実施されるアドベントカレンダー(2019)</a>)

多くトゥートを行うユーザーを特徴付ける話題が、そのままアスタルテを特徴付ける主な話題となることもある。あるユーザー<sup>[\[4\]](#cite_note-4)</sup>が旅行先で見た縁もゆかりもない風俗店「<a href="https://maps.google.com/?cid=18110656808399308203" rel="nofollow">京都の団地妻</a>」がこのアスタルテのちょっとした話題になっているとは、店のオーナーは夢にも思わないだろう。当然ながらこの話題にR18要素はない。

以下に主な話題を述べるが、すべて総計しても数パーセントを占めるに過ぎないので、テーマインスタンスの類ではない。

#### ソフトウェア開発(主にRust)

霧島ひなた氏やmopopo氏などRustプログラミングの進捗著しいユーザーが存在し、その他自称、他称を問わず複数のプログラマーが在籍し、活動している。

#### 食事

これは一般的な意味での「食事」の要件<sup>[\[5\]](#cite_note-5)</sup>をすべて満たしているとは限らない上に、必ずしも食事を行うことを指すとは限らない。それ故にアスタルテの管理者(霧島ひなた)やアスタルテというサーバー(インスタンス)において食事とは「チャレンジ」である。よって、#<a href="https://kirishima.cloud/tags/%E3%82%A2%E3%82%B9%E3%82%BF%E3%83%AB%E3%83%86%E3%81%8A%E9%A3%9F%E4%BA%8B%E3%83%81%E3%83%A3%E3%83%AC%E3%83%B3%E3%82%B8" rel="nofollow">アスタルテお食事チャレンジ</a>という[ハッシュタグ](/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0 "ハッシュタグ")においてユーザーによる精力的な食事画像の投下が行われている。[連合](/%E9%80%A3%E5%90%88 "連合")しているサーバー(インスタンス)から見ると、これは「[飯テロ](/%E9%A3%AF%E3%83%86%E3%83%AD "飯テロ")」の一元集約化を達成できているとみなすことも可能だ。<sup>\[*[要出典](https://ja.wikipedia.org/wiki/Wikipedia:%E3%80%8C%E8%A6%81%E5%87%BA%E5%85%B8%E3%80%8D%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%95%E3%82%8C%E3%81%9F%E6%96%B9%E3%81%B8 "w:Wikipedia:「要出典」をクリックされた方へ")*\]</sup>

#### Croudia

諸経緯により、閉鎖済みのネコ型SNSであるCroudiaからの移民が多いため、在りし日のCroudiaについて感傷に浸ることもある。Crouduaよりも長い運営を目指している。

## 独自機能

kirishima.cloudには、いくつかの独自機能が搭載されている。

### 各種投稿上限の引き上げ

通常、Mastodonのトゥートは500文字までだが、このインスタンスでは6229文字までトゥートが可能。また、アップロードできるファイルのサイズも8MBから80MBにまで引き上げられている。

### BBcode対応

[Kibousoft Now](/Kibousoft_Now "Kibousoft Now")に実装されていたものと同様。斜体表示や回転表示などの装飾ができる。また、他のBBcode対応インスタンスのトゥートのBBcode入りのトゥートも正常に表示できる。トゥート入力フォームの下にチートシートがある。

### Webラジオ聴取

Listen.moe,AnimeNfo Radio,LoFi hip hop Radio,Linn Classical,Lihn Jazzなど14局のWebラジオを聴くことができる。

### カスタム絵文字自動収集

2時間おきに他のインスタンスのカスタム絵文字を収集・コピーする機能で、かつて[theboss.tech](/Theboss.tech "Theboss.tech")に実装されていた機能。

### [☆絵文字でお絵描き☆](/%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E7%B5%B5%E6%96%87%E5%AD%97%E3%81%A7%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E3%83%84%E3%83%BC%E3%83%AB "カスタム絵文字でお絵かきツール")

もともとtheboss.tech向けに作られた外部サイトで、カスタム絵文字を用いてアスキーアートのようなものを描画できる。トゥート入力フォームの下にリンクが貼られている。カスタム絵文字の数が非常に多いため、ハードウェアのスペックと覚悟が要求される。

### Markdown対応

2017年12月19日、Markdownに対応し、見出しや任意の文章へのリンクなどが行えるようになった。トゥート入力フォームの下にチートシートがある。

### 公開範囲ごとの色分け

トゥートの公開範囲ごとに、対応した色付きアイコンが表示される。以前はトゥートの背景色が変化していた。

### [長文を自動的に畳む](/%E9%95%B7%E6%96%87%E3%82%92%E8%87%AA%E5%8B%95%E7%9A%84%E3%81%AB%E7%95%B3%E3%82%80 "長文を自動的に畳む")

10行以上のトゥートはスクローラブルなボックスに格納される。なお他のインスタンスや一般的なサードパーティクライアントから見た場合は格納されないので注意を要する。

### Twitterへのリプライ

@(screen_name)@twitter.comに、自動的にtwitter.com/(screen_name)へのリンクが張られる。あたかもTwitterに対してリプライを送ってるように見える。

### スタンプ文字

<div>

<div>

[<img src="/images/thumb/3/38/Screenshot_20180630-014747_Chrome.jpg/200px-Screenshot_20180630-014747_Chrome.jpg" srcset="/images/thumb/3/38/Screenshot_20180630-014747_Chrome.jpg/300px-Screenshot_20180630-014747_Chrome.jpg 1.5x, /images/thumb/3/38/Screenshot_20180630-014747_Chrome.jpg/400px-Screenshot_20180630-014747_Chrome.jpg 2x" width="200" height="107" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Screenshot_20180630-014747_Chrome.jpg)

<div>

<div>

[](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Screenshot_20180630-014747_Chrome.jpg "拡大")

</div>

5000兆円欲しい！

</div>

</div>

</div>

特定の文字が自動でスタンプとして表示される。

例えば、「5000兆円欲しい！」という文字列をトゥートすると画像のように見れる。一覧はトゥートボックスの下に存在している。(公式WebUIのみ。一般的なサードパーティクライアントではただの文字列として表示される場合が多い。)

### [Glitch-soc](/Mastodon_Glitch_Edition "Mastodon Glitch Edition")導入

2018年8月末、上記独自機能を基本的に廃止することなくマストドンのフォークバージョンであるGlitch-socに移行した。ただし、実装されていたトレンドタグ表示機能は廃止された。

[Glitch-soc](/Mastodon_Glitch_Edition "Mastodon Glitch Edition")導入によって、ローカル限定投稿など様々な本家([マストドン公式リポジトリ](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E5%85%AC%E5%BC%8F%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA "マストドン公式リポジトリ"))にはない機能が追加された。

### ユーザー絵文字

[friends.nico](/Friends.nico "Friends.nico")にあった`:@[acct]:`でその\[acct\]のアバターをカスタム絵文字のように使える機能。表示できるのは、WebUI以外では[Subway Tooter](/SubwayTooter "SubwayTooter")や[TheDesk](/TheDesk "TheDesk")など、ごく少数に限られる。

2019年10月、アップデートの不具合により機能の提供が停止されている。`:@[acct]:`を今までのように投稿すると:で囲まれたメンションになり相手に通知が行くため注意が必要である。

## 関連項目

-   [theboss.tech](/Theboss.tech "Theboss.tech")
-   [BBCode](/BBCode "BBCode")
-   [Markdown](/Markdown "Markdown")
-   [字数制限の変更](/%E5%AD%97%E6%95%B0%E5%88%B6%E9%99%90%E3%81%AE%E5%A4%89%E6%9B%B4 "字数制限の変更")
-   [長文を自動的に畳む](/%E9%95%B7%E6%96%87%E3%82%92%E8%87%AA%E5%8B%95%E7%9A%84%E3%81%AB%E7%95%B3%E3%82%80 "長文を自動的に畳む")
-   [TheDesk](/TheDesk "TheDesk") アスタルテの公認クライアント。作者 ([Cutls P](/Cutls_P "Cutls P")) はこのインスタンスに常駐している。
-   [アスタルテ暇人ランキング](/%E3%82%A2%E3%82%B9%E3%82%BF%E3%83%AB%E3%83%86%E6%9A%87%E4%BA%BA%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0 "アスタルテ暇人ランキング")
-   [Mastodon Glitch Edition](/Mastodon_Glitch_Edition "Mastodon Glitch Edition")

## 注釈

<div>

1.  [↑](#cite_ref-1) 他に、クライアントの実装評価に使われることもある。クライアント側で一気に取得、描画すると確実にフリーズするため、遅延読み込みやページングなどの対策が必要。
2.  [↑](#cite_ref-2) いつ頃かは資料がないため不明である。2018年4月/5月であると推測される。
3.  [↑](#cite_ref-3) なお、これらのツールの多くはトゥートを未収載で行うため、ローカルタイムラインの汚染はない。
4.  [↑](#cite_ref-4) <a href="https://kirishima.cloud/@kokosuMIX" rel="nofollow">https://kirishima.cloud/@kokosuMIX</a>
5.  [↑](#cite_ref-5) 「人間が生命を維持し，活動するために摂取する食品，およびそれらを調製する方法，飲食する際のしきたりなど，食生活の事象の総体」(<a href="https://kotobank.jp/word/食事-80132" rel="nofollow">ブリタニカ国際大百科事典 小項目事典</a>)

</div>

</div>
