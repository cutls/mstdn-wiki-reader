---
title: Pawoo.md
---
<div class="mw-parser-output">

**Pawoo**(パウ―)とは、<a href="/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%83%A9%E3%83%83%E3%82%BB%E3%83%AB" class="new" title="株式会社ラッセル (存在しないページ)">株式会社ラッセル</a>が運営するオープンソースのソーシャルネットワーク[Mastodon](/Mastodon "Mastodon")のインスタンスである。

|              |                                                                                                                                                                                                                                                                                                                                   |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル     | Pawoo                                                                                                                                                                                                                                                                                                                             |
| 画像         | <a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Pawoo.net.png" class="image" title="Pawoo"><img src="/images/thumb/3/3f/Pawoo.net.png/300px-Pawoo.net.png" srcset="/images/thumb/3/3f/Pawoo.net.png/450px-Pawoo.net.png 1.5x, /images/thumb/3/3f/Pawoo.net.png/600px-Pawoo.net.png 2x" width="300" height="114" alt="Pawoo" /></a> |
| ドメイン     | <a href="https://pawoo.net" class="external free" rel="nofollow">https://pawoo.net</a>                                                                                                                                                                                                                                            |
| 管理者       | <a href="/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%83%A9%E3%83%83%E3%82%BB%E3%83%AB" class="new" title="株式会社ラッセル (存在しないページ)">株式会社ラッセル</a>                                                                                                                                                                  |
| 国           | 日本国                                                                                                                                                                                                                                                                                                                            |
| 開始日       | 2017年4月14日                                                                                                                                                                                                                                                                                                                     |
| ソースコード | <a href="https://github.com/CrossGate-Pawoo/mastodon" class="external text" rel="nofollow">GitHub</a>                                                                                                                                                                                                                             |
| 愛称         | Pawoo, 象, 🐘, 渋鯖, 支部                                                                                                                                                                                                                                                                                                         |

  

<div class="toc">

<div class="toctitle" lang="ja" dir="ltr">

## 目次

</div>

-   1
    概要
-   [<span class="tocnumber">2 <span class="toctext">独自機能 </span></span>](#.E7.8B.AC.E8.87.AA.E6.A9.9F.E8.83.BD)
    -   2.1
        Pixivアカウント連携
    -   2.2
        メディアタイムライン
    -   2.3
        固定トゥート
    -   2.4
        自然消滅トゥート
    -   2.5
        おすすめユーザー
    -   2.6
        おすすめタグ
    -   2.7
        カラムのレイアウト変更
    -   2.8
        新規通知の通知
-   3
    スマートフォン用アプリ
-   [<span class="tocnumber">4 <span class="toctext">歴史 </span></span>](#.E6.AD.B4.E5.8F.B2)
    -   4.1
        2017年
    -   4.2
        2018年
    -   4.3
        2019年
-   5
    他インスタンスによるPawooブロック問題
-   6
    文化
-   7
    出典
-   8
    関連項目

</div>

概要

> Pawoo（パウー）はpixivが運営するMastodonのインスタンス（サーバー）です。ひとまず安定運用を目指しています！<sup>[\[1\]](#cite_note-1)</sup>

Pixivによって2017年4月14日に開設された**日本語向け**インスタンスで、同社のサービスの方向性もありイラストレーターやそのファンが多く利用する傾向がある。

インスタンスについては[Mastodon](/Mastodon "Mastodon")の製作者である<a href="/Gargron" class="mw-redirect" title="Gargron">Eugen Rochko</a>氏にも認知されており、氏も同社のアカウントのトゥートをブーストしたり、おすすめのアーティストを尋ねたり<sup>[\[2\]](#cite_note-2)</sup>と積極的に支援している。

独自機能

<span class="mw-selflink selflink">Pawoo</span>は[Mastodon.social](/Mastodon.social "Mastodon.social")などの一般的なインスタンスとは異なり、多くの独自機能を実装している。多くの機能は本家ブランチにも取り入れられている。

Pixivアカウント連携

<div class="thumb tright">

<div class="thumbinner">

<a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.30.49.png" class="image"><img src="/images/thumb/3/3c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.30.49.png/300px-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.30.49.png" class="thumbimage" srcset="/images/thumb/3/3c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.30.49.png/450px-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.30.49.png 1.5x, /images/thumb/3/3c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.30.49.png/600px-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.30.49.png 2x" width="300" height="129" /></a>

<div class="thumbcaption">

<div class="magnify">

<a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.30.49.png" class="internal" title="拡大"></a>

</div>

Pixivアカウント連携

</div>

</div>

</div>

2017年4月23日に実装。同社のサービスであるPixivで利用するアカウントと連携して、いくつかの機能を共有できる。また、連携をするとプロフィールにpixivのプロフィールページへのリンクが設置される。ただしアカウントの作成および連携が必須なわけではない。

メディアタイムライン

<div class="thumb tright">

<div class="thumbinner">

<a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.21.08.png" class="image"><img src="/images/thumb/f/fa/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.21.08.png/300px-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.21.08.png" class="thumbimage" srcset="/images/thumb/f/fa/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.21.08.png/450px-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.21.08.png 1.5x, /images/thumb/f/fa/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.21.08.png/600px-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.21.08.png 2x" width="300" height="267" /></a>

<div class="thumbcaption">

<div class="magnify">

<a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-04-24_20.21.08.png" class="internal" title="拡大"></a>

</div>

メディアタイムライン

</div>

</div>

</div>

<div class="thumb tright">

<div class="thumbinner">

<a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Pawoo_alert.jpeg" class="image"><img src="/images/thumb/c/cf/Pawoo_alert.jpeg/300px-Pawoo_alert.jpeg" class="thumbimage" srcset="/images/thumb/c/cf/Pawoo_alert.jpeg/450px-Pawoo_alert.jpeg 1.5x, /images/thumb/c/cf/Pawoo_alert.jpeg/600px-Pawoo_alert.jpeg 2x" width="300" height="189" /></a>

<div class="thumbcaption">

<div class="magnify">

<a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Pawoo_alert.jpeg" class="internal" title="拡大"></a>

</div>

橙色に表示される通知アイコン

</div>

</div>

</div>

2017年4月24日に実装。[ローカルタイムライン](/%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3 "ローカルタイムライン")の中で画像が含まれる[トゥート](/%E3%83%88%E3%82%A5%E3%83%BC%E3%83%88 "トゥート")のみが表示されるタイムライン<sup>[\[3\]](#cite_note-3)</sup>。

固定トゥート

2017年6月9日に実装。Twitterの固定ツイート機能と同様にトゥートをユーザーページ上部に常に固定出来る。また、Twitterのものと違い複数のトゥートを固定可能である。

2017年9月、バージョン1.6.0のアップデートで[公式リポジトリ](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E5%85%AC%E5%BC%8F%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA "マストドン公式リポジトリ")への実装を果たした。

自然消滅トゥート

トゥートを一定期間で自動削除するように設定できる機能。設定できる期間は1分後、10分後、1時間後、12時間後、1日後、7日後の6種。

おすすめユーザー

Pawooが独自に提供している[ユーザーレコメンデーション](/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%AC%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3 "ユーザーレコメンデーション")。推挙されるのはPawooのユーザーのみである。pixivでフォローしているユーザーと、人気のある (ファボ・フォロワー数・画像投稿経験の高い) ユーザーのうち、アクティブな (トゥートが新しい) ユーザーが推挙される<sup>[\[4\]](#cite_note-4)</sup>。

おすすめタグ

トゥートカラムにある、「おすすめ」と判断された[ハッシュタグ](/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0 "ハッシュタグ")を表示する機能。

カラムのレイアウト変更

2018年3月29日より、トゥートカラムを左に、おすすめタグカラムを右に、そしてホームカラムが幅を広げて中心に配置された、[Hiveway](/Hiveway "Hiveway")に類似した独自のレイアウトが実装されている。ホームカラムの部分はトゥートカラム上のメニューから任意のカラムに変更が可能である。カラムのピン留めを行うか、トゥートカラムに用意された「元のレイアウトに戻す」リンクから旧レイアウトと切り替えることもできる。

新規通知の通知

新しい[通知](/%E9%80%9A%E7%9F%A5 "通知")が来た際、トゥートカラム上部（モバイルUIの場合は画面上部）の通知カラムのアイコンが橙色になって表示される。

スマートフォン用アプリ

iOS用とAndroid用のアプリが提供されている。Pawoo以外のインスタンスに接続することもできるほか、Pawooの独自機能 (おすすめユーザー、メディアタイムラインなど) に対応しているという特徴がある。2018年10月26日<sup>[\[5\]](#cite_note-5)</sup>、スマートフォン用アプリの開発終了がアナウンスされた。2019年7月1日<sup>[\[6\]](#cite_note-6)</sup>、スマートフォン用アプリの提供終了がアナウンスされた。実際にアプリの提供が終了するのは同年8月31日が予定されている。

歴史

2017年

-   4月14日、**Pawoo**設立。
-   4月15日、[Mastodon.cloud](/Mastodon.cloud "Mastodon.cloud"), [Mastodon.xyz](/Mastodon.xyz "Mastodon.xyz"), [Mastodon.social](/Mastodon.social "Mastodon.social")など欧米に拠点を置くインスタンスから後述の理由で一斉にブロックを受ける。
-   4月17日、ユーザー数が世界一位になる。
-   4月18日、Webエンジニアなどの求人を開始<sup>[\[7\]](#cite_note-7)</sup>。
-   4月23日、Pixivアカウントとの連携機能を提供<sup>[\[8\]](#cite_note-8)</sup>
-   4月24日、<a href="/%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3" class="new" title="メディアタイムライン (存在しないページ)">メディアタイムライン</a>をリリース。Android版の公式アプリをリリース。
-   4月27日、iOS版の公式アプリをリリース。
-   6月9日、固定トゥートをリリース。
-   6月15日、音楽を投稿したり再生できる独自機能を数多く備えた**Pawoo Music**をリリース。
-   10月12日、運営のPixivがMastodonのプラチナスポンサーになる。
-   10月19日、Pawoo Musicが全面リニューアル。
-   10月25日、Pawooが30万ユーザーを突破<sup>[\[9\]](#cite_note-9)</sup>

2018年

-   3月29日、独自のレイアウトがリリース。
-   4月14日、1周年を記念し、記念イラストの募集、プレゼント企画が行われ、<a href="https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%8A%E3%83%9F%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89" class="extiw" title="w:コナミコマンド">ある単語</a>をトゥートすると「裏ページ」に切り替わるという隠し機能が期間限定で実装された。
-   8月18日、Pawooが40万ユーザーを突破<sup>[\[10\]](#cite_note-10)</sup>
-   10月26日、スマートフォン用アプリの開発終了を発表。

2019年

-   8月31日、Pawoo MusicならびにPawooアプリの提供が終了<sup>[\[11\]](#cite_note-11)</sup>。
-   11月13日、Pawooを株式会社クロスゲートに譲渡し、株式会社ラッセルが運営を引き継ぐ発表あり<sup>[\[12\]](#cite_note-12)</sup>。
-   12月2日、株式会社ラッセルへ事業譲渡<sup>[\[13\]](#cite_note-13)</sup>

他インスタンスによるPawooブロック問題

[mastodon.xyz](/Mastodon.xyz "Mastodon.xyz")などの海外にサーバーを置く一部のインスタンスはPawooからの連合タイムラインへのアクセスをブロックしている。理由はいずれも（日本と異なる文化・法律を持つ海外インスタンスの基準に照らし合わせた場合においての）ポルノグラフィックが多くトゥートされているのにも関わらず、インスタンスの管理者からの対応が見られないため<sup>[\[14\]](#cite_note-14)</sup>としていて、インスタンス間でのルールの問題が浮き彫りになった。 一方で他のインスタンスをブロックする行為は分散構造というマストドンの構造理念に反する為、Githubではメディアの取扱いについて議論が行われた<sup>[\[15\]](#cite_note-15)</sup>。この問題は[メディアファイルを拒否](/%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF "ドメインブロック")機能が実装されたことで技術的には決着し、多くのインスタンスがPawooに対するドメインブロックを解除するようになった<sup>[\[16\]](#cite_note-16)</sup>。

文化

Pawooのユーザーは、[表示名](/%E8%A1%A8%E7%A4%BA%E5%90%8D "表示名")の末尾に、イラストの傾向 (稀に**性癖**とも言われる) を表す絵文字を付ける習慣がある<sup>[\[17\]](#cite_note-17)</sup>。牛の絵文字が巨乳を表すなど、読解に高度な連想が必要になる場合もある。

出典

<div class="mw-references-wrap mw-references-columns">

1.  [↑](#cite_ref-1)
    <a href="https://pawoo.net/about/" class="external free" rel="nofollow">https://pawoo.net/about/</a>
2.  [↑](#cite_ref-2)
    <a href="https://mastodon.social/users/Gargron/updates/1853890" class="external free" rel="nofollow">https://mastodon.social/users/Gargron/updates/1853890</a>
3.  [↑](#cite_ref-3)
    <a href="https://mastodon.cloud/web/statuses/3271061" class="external free" rel="nofollow">https://mastodon.cloud/web/statuses/3271061</a>
4.  [↑](#cite_ref-4)
    <a href="https://github.com/pixiv/mastodon/blob/pawoo/app/models/suggested_account_query.rb" class="external free" rel="nofollow">https://github.com/pixiv/mastodon/blob/pawoo/app/models/suggested_account_query.rb</a>
5.  [↑](#cite_ref-5)
    <a href="https://pawoo.net/@pixiv/100960929076229958" class="external free" rel="nofollow">https://pawoo.net/@pixiv/100960929076229958</a>
6.  [↑](#cite_ref-6)
    <a href="https://www.pixiv.net/info.php?id=5188" class="external free" rel="nofollow">https://www.pixiv.net/info.php?id=5188</a>
7.  [↑](#cite_ref-7)
    <a href="http://www.itmedia.co.jp/news/articles/1704/18/news068.html" class="external free" rel="nofollow">http://www.itmedia.co.jp/news/articles/1704/18/news068.html</a>
8.  [↑](#cite_ref-8)
    <a href="http://www.itmedia.co.jp/news/articles/1704/23/news010.html" class="external free" rel="nofollow">http://www.itmedia.co.jp/news/articles/1704/23/news010.html</a>
9.  [↑](#cite_ref-9)
    <a href="http://www.itmedia.co.jp/news/articles/1710/25/news074.html" class="external free" rel="nofollow">http://www.itmedia.co.jp/news/articles/1710/25/news074.html</a>
10. [↑](#cite_ref-10)
    <a href="https://pawoo.net/web/statuses/100569916500347387" class="external autonumber" rel="nofollow">[1]</a>
11. [↑](#cite_ref-11)
    <a href="https://pawoo.net/@pawoo_support/102665718659414477" class="external autonumber" rel="nofollow">[2]</a>
12. [↑](#cite_ref-12)
    <a href="https://pawoo.net/@pawoo_support/103128619742175257" class="external autonumber" rel="nofollow">[3]</a>
13. [↑](#cite_ref-13)
    <a href="http://www.russel.co.jp/hp/top_page/newsrelease_pawoo.pdf" class="external autonumber" rel="nofollow">[4]</a>
14. [↑](#cite_ref-14)
    <a href="https://mastodon.xyz/@status/724917" class="external free" rel="nofollow">https://mastodon.xyz/@status/724917</a>
15. [↑](#cite_ref-15)
    <a href="https://github.com/tootsuite/mastodon/issues/1847" class="external free" rel="nofollow">https://github.com/tootsuite/mastodon/issues/1847</a>
16. [↑](#cite_ref-16)
    <a href="http://www.itmedia.co.jp/news/articles/1705/20/news036.html" class="external text" rel="nofollow">マストドン会議2レポートその2 ロリエロ画像問題はどうなったのか</a>
17. [↑](#cite_ref-17)
    <a href="https://www.pixivision.net/ja/a/2940" class="external text" rel="nofollow">Pawooユーザー20万人突破記念企画「20歳のパウーちゃんを描こう」 結果発表</a>

</div>

関連項目

-   [Pawoo Music](/Pawoo_Music "Pawoo Music")
-   [ドメインブロック](/%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF "ドメインブロック")
-   <a href="/%E9%80%A3%E6%90%BA%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3" class="mw-redirect" title="連携ログイン">ソーシャルログイン</a>

</div>
