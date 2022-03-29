---
title: TheDesk.md
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
<th>TheDesk</th>
</tr>

<tr class="odd">
<th>画像</th>
<td><a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:TheDesk.png"><img src="/images/thumb/f/f8/TheDesk.png/300px-TheDesk.png" srcset="/images/thumb/f/f8/TheDesk.png/450px-TheDesk.png 1.5x, /images/f/f8/TheDesk.png 2x" width="300" height="300" alt="TheDesk.png" /></a></td>
</tr>
<tr class="even">
<th scope="row">開発者</th>
<td><a href="/Cutls_P" title="Cutls P">Cutls P</a></td>
</tr>
<tr class="odd">
<th scope="row">ソースコード</th>
<td><a href="https://github.com/cutls/TheDesk" rel="nofollow">GitHub</a></td>
</tr>
<tr class="even">
<th scope="row">プラットホーム</th>
<td>Electron (Windows/Linux/macOS)</td>
</tr>
<tr class="odd">
<th scope="row">プログラミング言語</th>
<td>JavaScriptなど (本文参照)</td>
</tr>
<tr class="even">
<th scope="row">サービス開始日</th>
<td><a href="/2018%E5%B9%B4" title="2018年">2018年</a>1月13日</td>
</tr>
<tr class="odd">
<th scope="row">寄付</th>
<td><a href="https://cutls.fanbox.cc" rel="nofollow">PixivFANBOX</a> <a href="https://www.patreon.com/cutls" rel="nofollow">Patreon</a> <a href="https://www.amazon.co.jp/registry/wishlist/2TV35ZHHJPDSB" rel="nofollow">Amazon</a></td>
</tr>
<tr class="even">
<th scope="row">ライセンス</th>
<td><a href="https://github.com/cutls/TheDesk/blob/master/LICENSE" rel="nofollow">GNU General Public License v3.0</a></td>
</tr>
<tr class="odd">
<th scope="row">Webサイト</th>
<td><a href="https://thedesk.top/" rel="nofollow">公式サイト</a><br />
<a href="https://docs.thedesk.top/" rel="nofollow">公式ドキュメント</a></td>
</tr>
<tr class="even">
<th scope="row">ダウンロード</th>
<td><a href="https://thedesk.top" rel="nofollow">Win/Linux/macOS (公式サイト)</a><br />
<a href="https://www.microsoft.com/ja-jp/p/thedesk/9p2ndnz0gwzf" rel="nofollow">Windows (Microsoft Store)</a><br />

<p>以下はそれぞれ要環境構築<br />
Linux: <code>snap install thedesk</code><br />
macOS: <code>brew cask install thedesk</code></p></td>
</tr>
</tbody>
</table>

  

**TheDesk**(ザ デスク)は、[オープンソース](/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9 "オープンソース")の[分散SNS](/%E5%88%86%E6%95%A3SNS "分散SNS")[Mastodon](/Mastodon "Mastodon")のデスクトップ用[クライアント](/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88 "クライアント")である。使用方法等については<a href="https://docs.thedesk.top/" rel="nofollow">公式ドキュメント</a>を参照願いたい。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 なりたち](#.E3.81.AA.E3.82.8A.E3.81.9F.E3.81.A1)
-   [3 技術](#.E6.8A.80.E8.A1.93)
    -   [3.1 フロントエンド](#.E3.83.95.E3.83.AD.E3.83.B3.E3.83.88.E3.82.A8.E3.83.B3.E3.83.89)
    -   [3.2 バックエンド](#.E3.83.90.E3.83.83.E3.82.AF.E3.82.A8.E3.83.B3.E3.83.89)
-   [4 ライセンス](#.E3.83.A9.E3.82.A4.E3.82.BB.E3.83.B3.E3.82.B9)
-   [5 バージョン](#.E3.83.90.E3.83.BC.E3.82.B8.E3.83.A7.E3.83.B3)
    -   [5.1 バージョンの一覧](#.E3.83.90.E3.83.BC.E3.82.B8.E3.83.A7.E3.83.B3.E3.81.AE.E4.B8.80.E8.A6.A7)
        -   [5.1.1 TheDesk Miku](#TheDesk_Miku)
        -   [5.1.2 TheDesk Mika](#TheDesk_Mika)
        -   [5.1.3 TheDesk Uzuki](#TheDesk_Uzuki)
        -   [5.1.4 TheDesk Miho](#TheDesk_Miho)
        -   [5.1.5 TheDesk Riina](#TheDesk_Riina)
        -   [5.1.6 TheDesk Airi](#TheDesk_Airi)
        -   [5.1.7 TheDesk Mizuki](#TheDesk_Mizuki)
        -   [5.1.8 TheDesk Mio](#TheDesk_Mio)
        -   [5.1.9 TheDesk Akane](#TheDesk_Akane)
        -   [5.1.10 TheDesk Miria](#TheDesk_Miria)
-   [6 サポートするインスタンス](#.E3.82.B5.E3.83.9D.E3.83.BC.E3.83.88.E3.81.99.E3.82.8B.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9)
    -   [6.1 公認インスタンス](#.E5.85.AC.E8.AA.8D.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9)
    -   [6.2 サポートするインスタンス一覧](#.E3.82.B5.E3.83.9D.E3.83.BC.E3.83.88.E3.81.99.E3.82.8B.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7)
    -   [6.3 独自機能への対応](#.E7.8B.AC.E8.87.AA.E6.A9.9F.E8.83.BD.E3.81.B8.E3.81.AE.E5.AF.BE.E5.BF.9C)
-   [7 機能](#.E6.A9.9F.E8.83.BD)
    -   [7.1 主な機能](#.E4.B8.BB.E3.81.AA.E6.A9.9F.E8.83.BD)
    -   [7.2 特筆すべき機能](#.E7.89.B9.E7.AD.86.E3.81.99.E3.81.B9.E3.81.8D.E6.A9.9F.E8.83.BD)
        -   [7.2.1 TheDeskお知らせ](#TheDesk.E3.81.8A.E7.9F.A5.E3.82.89.E3.81.9B)
    -   [7.3 他言語展開](#.E4.BB.96.E8.A8.80.E8.AA.9E.E5.B1.95.E9.96.8B)
-   [8 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [9 外部リンク](#.E5.A4.96.E9.83.A8.E3.83.AA.E3.83.B3.E3.82.AF)
-   [10 注釈](#.E6.B3.A8.E9.87.88)
-   [11 出典](#.E5.87.BA.E5.85.B8)

</div>

## 概要

[Cutls P](/Cutls_P "Cutls P")により開発されているMastodonのデスクトップ用クライアント。後述のIntegrated TLなどの独自機能によりWebブラウザや他ソフトよりも利便性を意識したクライアントになっており、複数のインスタンスを使うユーザーや[kirishima.cloud](/Kirishima.cloud "Kirishima.cloud")ユーザーに適している。Mastodonのほかに[Pleroma](/Pleroma "Pleroma")や[Misskey](/Misskey "Misskey")とも完全ではないが互換性がある。

バージョン名付け規則は初期バージョンより常に\[Codename\] (ver.x)という形であったが、2018年6月12日リリースのMio (15.6.0)、つまりMio (ver.6)から、\[Codename\] (IntenalVersion)に変更された。

公式ホームページからはWindows版,Linux版,macOS版が配布されている。Windows版はAkane (16.1.0)よりインストーラー/ポーダブル版(.exe)で配布されている。それ以前のWindows版や現行のLinux版,macOS版はzipファイルでの配布。

2018年9月28日より、<a href="https://www.microsoft.com/ja-jp/p/thedesk/9p2ndnz0gwzf" rel="nofollow">Microsoft Store</a>でからもダウンロードできるようになったが、一部機能に制限がある。 また、<a href="https://snapcraft.io/thedesk" rel="nofollow">Snapcraft</a>やHomebrewを経由してもインストールできる。

## なりたち

2017年12月30日 23:59にサービスを終了したSNS、**Croudia**(クローディア)用のクライアントであったCroudiaDesk(略称:CroDesk)をMastodon向けに作り直したものであるため、バージョンもCroudiaDeskの続きからとなっている。

Croudiaのサービスを終了が告知されてから、Croudiaユーザーであった霧島ひなた氏の[kirishima.cloud](/Kirishima.cloud "Kirishima.cloud")に移住する動きが加速した。その中で作られたTheDeskの最初期バージョンはCroudiaDeskのアップデートとして、内部アップデータを通じて提供された。ベータの最初のバージョンはTheDesk Miku.0.0であった。正式リリース時のバージョンはTheDesk Miku (ver.1)。正式リリースとともにバージョンの命名規則も変更された。また現在はダウンローダーがMiku (ver.4)より更新され、よりスムーズにアップデートできるようになった。また、macOS版リリースと同時(Airi (ver.8\[fixed2\]))にダウンローダーを全プラットフォームに搭載した。

リリースから2週間経って2018年1月28日よりオープンソースソフトウェアとして提供されている。Riina (ver.8)からWindows 32bit/Linux 64bit,32bitバージョンも作られたが、開発者によって検証されたものではなかった。TheDesk Airi (ver.1)よりサポートが開始された。2018年7月30日現在、[Misskey](/Misskey "Misskey")に対応するほぼ唯一のクライアントである。<sup>[\[注釈 1\]](#cite_note-1)</sup>Electronが対応するすべてのプラットフォームにおいて、GitHubからソースコードをクローンしElectronをインストールすれば使用できる。(Linux同様コードセットアップ<sup>[\[注釈 2\]](#cite_note-2)</sup>が必要。)2018年5月20日、macOS版がリリースされた。

Windows版ではAkane (16.0.1)以降ダウンロードと展開は自動で行われていたが、環境依存によるエラーが多発したためAkane (16.0.10)以降はオプションとなっていた。Akane (16.1.0)より展開は不要<sup>[\[注釈 3\]](#cite_note-3)</sup>となったため、この機能は省かれた。

Akane (16.0.10)以降のダウンローダーではUIがシンプルになり、バージョニング機能が使用できる。

CroudiaDeskとUIこそほぼ同じであったが、中身は大きく変えられている。例えばCroudiaDeskはAPIをCutls P自身のサーバーを経由してアクセスしていたが<sup>[\[注釈 4\]](#cite_note-4)</sup>、TheDeskは直接アクセスしている。

2018年4月1日のエイプリールフールにはTheDesk内でCroudiaのモバイルWeb版のUIを再現し、Croudiaクライアントに回帰する旨のトゥートがされた<sup>[\[1\]](#cite_note-5)</sup>。なお、2019年度はエイプリルフールネタを実行しない<sup>[\[2\]](#cite_note-6)</sup>。

## 技術

### フロントエンド

プラットフォームとしてElectronを利用しているため、フロントエンドとしては以下の言語(自然言語を除く)が利用されている。

レンダラープロセス

-   JavaScript (プログラミング言語)
-   HTML (マークアップ言語)
-   CSS (スタイルシート)

以上はChromiumエンジンを使用して実行、描画される。

メインプロセス

-   Node.js

### バックエンド

-   PHP (TheDeskお知らせ機能:履歴の送出)
-   Node.js (TheDeskお知らせ機能:ストリーミング配信)

## ライセンス

TheDeskは長らくTheDesk LICENSEという厳しい独自ライセンスを採用していたが、現在は[GNU General Public License](/GNU_General_Public_License "GNU General Public License")となっている。 アイコンはクリエイティブ・コモンズで提供されている。

## バージョン

バージョンのローマ字の人名は、ソーシャルゲーム「[アイドルマスター シンデレラガールズ](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC_%E3%82%B7%E3%83%B3%E3%83%87%E3%83%AC%E3%83%A9%E3%82%AC%E3%83%BC%E3%83%AB%E3%82%BA "w:アイドルマスター シンデレラガールズ")」による<sup>[\[注釈 5\]](#cite_note-7)</sup>。ベータ版をCroDeskユーザーに提供したあと、いくつかのアップデートを経て2018年1月13日に正式リリースが行われた。

### バージョンの一覧

#### TheDesk Miku

内部バージョンは7。最初のバージョン。アイドルマスター シンデレラガールズに登場するアイドルの「前川みく」から命名。同名のキャラクターである「初音ミク」や、それに関連する[mikutter](/Social.mikutter.hachune.net "Social.mikutter.hachune.net")とは無関係である。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>ver.1</td>
<td>2018年1月13日</td>
<td>最初のリリースバージョン。
追加機能
<ul>
<li>プロフィールの更新</li>
<li>検索</li>
<li>ブロック・ミュート・ドメインブロック・フォローリクエスト・お気に入りのリスト</li>
<li>ドメインブロックの追加、フォローリクエストの許可・拒否</li>
<li>絵文字、BBcodeの挿入</li>
<li>ハッシュタグタイムライン</li>
<li>ローカルタイムラインとホームタイムラインの統合タイムライン</li>
<li>無限ロード</li>
<li>添付ビデオの再生</li>
<li>メディアの複数添付</li>
<li>CW、NSFWを隠す</li>
<li>フォロー・ブロック・ミュート・トゥートの削除</li>
<li>通知の一覧、ポップアップ</li>
<li>相対時間・絶対時間の両方表示、混合表示（当日は相対時間、それ以前は絶対時間）</li>
</ul></td>
<td><sup><a href="#cite_note-8">[3]</a></sup></td>
</tr>
<tr class="even">
<td>ver.2</td>
<td>2018年1月14日</td>
<td><ul>
<li>トゥート詳細画面の実装（それ以前のトゥート、お気に入り、ブーストしたユーザーの一覧）</li>
<li>kirishima.cloud、Knzk.meの文字数制限の拡張に対応</li>
</ul></td>
<td><sup><a href="#cite_note-9">[4]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.3</td>
<td>2018年1月15日</td>
<td><ul>
<li>内蔵アップデートダウンローダーの実装</li>
</ul></td>
<td><sup><a href="#cite_note-10">[5]</a></sup></td>
</tr>
<tr class="even">
<td>ver.4</td>
<td>2018年1月16日</td>
<td>不具合修正
<ul>
<li>更新チェックがループする不具合の回避</li>
</ul>
<p>他</p>
修正
<ul>
<li>API制限により、更新頻度を3秒からCroDeskと同様の5秒に変更</li>
</ul></td>
<td><sup><a href="#cite_note-11">[6]</a></sup></td>
</tr>
</tbody>
</table>

#### TheDesk Mika

内部バージョンは8。マルチアカウント対応記念のバージョン。アイドルマスターシンデレラガールズに登場するアイドルの「城ヶ崎美嘉」から命名。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>ver.1</td>
<td>2018年1月18日</td>
<td><ul>
<li>マルチアカウントに対応</li>
<li>通知の改善</li>
<li>複数の不具合修正</li>
<li>マストどすをサポート</li>
</ul></td>
<td><sup><a href="#cite_note-12">[7]</a></sup></td>
</tr>
<tr class="even">
<td>ver.2</td>
<td>2018年1月19日</td>
<td><ul>
<li>ストリーミングAPIに対応</li>
</ul></td>
<td><sup><a href="#cite_note-13">[8]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.3</td>
<td>2018年1月20日</td>
<td><ul>
<li>複数の不具合修正</li>
<li>ウィンドウサイズの保存</li>
<li>設定項目に「自動トゥート折りたたみ」「トゥート後のトゥートボックスの処理」追加</li>
<li>トゥート時にハッシュタグとメンションのサジェスト機能</li>
<li><a href="/Mastodon_Instances" title="Mastodon Instances">Mastodon Instances</a>のAPIによるアカウントマネージャでインスタンスの情報取得機能</li>
</ul></td>
<td><sup><a href="#cite_note-14">[9]</a></sup></td>
</tr>
</tbody>
</table>

#### TheDesk Uzuki

内部バージョンは10。マルチカラム対応記念のバージョン。内部バージョン9は諸事情で存在しない。アイドルマスター シンデレラガールズに登場するアイドルの「島村卯月」から命名。2018年1月21日に連続してアップデートが行われたのは特徴的である。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>ver.1</td>
<td>2018年1月21日</td>
<td><ul>
<li>マルチログイン・マルチカラムへの対応</li>
</ul></td>
<td><sup><a href="#cite_note-15">[10]</a></sup></td>
</tr>
<tr class="even">
<td>ver.1[fixed]</td>
<td>2018年1月21日</td>
<td><ul>
<li>ローカルタイムラインにホームのトゥートが出てしまう不具合の修正</li>
<li>トゥートを削除できない不具合の修正</li>
</ul></td>
<td><sup><a href="#cite_note-16">[11]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.2</td>
<td>2018年1月21日</td>
<td><ul>
<li>複数の不具合修正</li>
<li>一部レイアウトの変更</li>
<li>カード解析をオフにできるように機能追加</li>
<li>ヘルプボタンの追加</li>
</ul></td>
<td><sup><a href="#cite_note-17">[12]</a></sup></td>
</tr>
<tr class="even">
<td>ver.3</td>
<td>2018年1月21日</td>
<td><ul>
<li>通知カラムの追加</li>
<li>複数の不具合修正</li>
</ul></td>
<td><sup><a href="#cite_note-18">[13]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.3[fixed]</td>
<td>2018年1月21日</td>
<td><ul>
<li>複数の不具合修正</li>
</ul></td>
<td><sup><a href="#cite_note-19">[14]</a></sup></td>
</tr>
<tr class="even">
<td>ver.4</td>
<td>2018年1月21日</td>
<td><ul>
<li>複数の不具合修正</li>
<li>デフォルト公開範囲・警告文の指定機能追加</li>
<li>設定のアラートを変更項目のみに変更</li>
<li>タイムライン上のBBcodeがセーフティに描画するように</li>
<li>BBcodeエディタの実装</li>
</ul></td>
<td><sup><a href="#cite_note-20">[15]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.4[fixed]</td>
<td>2018年1月22日</td>
<td><ul>
<li>フォロー・ミュート・ブロック、スクロールに関する不具合の修正</li>
</ul></td>
<td><sup><a href="#cite_note-21">[16]</a></sup></td>
</tr>
<tr class="even">
<td>ver.5</td>
<td>2018年1月23日</td>
<td><ul>
<li>ブーストを行った際のカウントの挙動の修正</li>
<li>絵文字の表示に対応</li>
<li>絵文字の順番がMastodon公式と同じものに変更</li>
</ul></td>
<td><sup><a href="#cite_note-22">[17]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.6</td>
<td>2018年1月24日</td>
<td><ul>
<li>画面内どこへでもドラッグ&amp;ドロップでメディア添付できる機能の追加</li>
<li>複数メディアのドラッグ&amp;ドロップに対応</li>
<li>ファイルの手動選択に対応</li>
<li>日付に関する不具合の修正</li>
</ul></td>
<td><sup><a href="#cite_note-23">[18]</a></sup></td>
</tr>
</tbody>
</table>

#### TheDesk Miho

内部バージョンは11。[Markdown](/Markdown "Markdown")対応記念のバージョン。アイドルマスター シンデレラガールズに登場するアイドルの「小日向美穂」から命名。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>ver.1</td>
<td>2018年1月26日</td>
<td><ul>
<li><a href="/Markdown" title="Markdown">Markdown</a>エディタを実装</li>
<li>複数不具合の修正</li>
</ul></td>
<td><sup><a href="#cite_note-24">[19]</a></sup></td>
</tr>
<tr class="even">
<td>ver.2</td>
<td>2018年1月27日</td>
<td><ul>
<li>Electronの脆弱性への対策</li>
<li>Markdownプレビュー、デザインの不具合修正</li>
<li>イメージビューワーの刷新、マウスホイールでの拡大縮小機能の追加</li>
<li>メディアのアップロードが終了するまでトゥート不可になるよう変更</li>
<li>メディアアップロード後のURL挿入の可否設定を追加</li>
</ul></td>
<td><sup><a href="#cite_note-25">[20]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.3</td>
<td>?</td>
<td>諸事情により欠番。このバージョンよりオープンソースソフトとなっている。</td>
<td>?</td>
</tr>
<tr class="even">
<td>ver.4</td>
<td>2018年1月28日</td>
<td><ul>
<li>イメージビューワーの刷新</li>
</ul>
<ul>
<li>最前面に展開するよう変更</li>
<li>複数画像がある場合矢印ボタン、キーボードの←→で切り替えられる機能の追加</li>
<li>高さ・横幅の調整</li>
</ul>
<ul>
<li>返信時、自動でトゥートボックスが展開するよう変更</li>
<li>Youtubeなどのサムネイル表示を横幅に合わせるよう変更</li>
</ul></td>
<td><sup><a href="#cite_note-26">[21]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.5</td>
<td>2018年1月31日</td>
<td><ul>
<li>イメージビューワーの不具合修正</li>
<li>インライン画像もイメージビューワーで表示できるよう変更</li>
<li>複数枚の画像がある場合、横幅に合わせて表示するよう変更</li>
<li>Integrated タイムラインの不具合修正</li>
<li>シェアNaN・フォローに関する不具合の解消に向けた修正</li>
<li>Escで消えるよう変更</li>
<li>ログインする際、ブラウザで開くよう変更</li>
</ul>
<p>他</p></td>
<td><sup><a href="#cite_note-27">[22]</a></sup></td>
</tr>
<tr class="even">
<td>ver.6</td>
<td>2018年1月31日</td>
<td><ul>
<li>通知から容易にユーザープロフィールに遷移できるように修正</li>
</ul></td>
<td><sup><a href="#cite_note-28">[23]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.7</td>
<td>2018年2月5日</td>
<td><ul>
<li>複数の不具合修正</li>
<li>ユーザーデータを一つ遡れる機能の追加</li>
<li>URL解析機能をデフォルトでオフに変更</li>
<li>設定にカラムの並び替え機能を追加</li>
<li>トゥート時、Shift+Enterで全角スペースを入れての改行ができる機能の追加</li>
</ul></td>
<td><sup><a href="#cite_note-29">[24]</a></sup></td>
</tr>
<tr class="even">
<td>ver.8</td>
<td>2018年2月9日</td>
<td><ul>
<li>インスタンス入力時のサジェスト機能を追加</li>
<li><a href="/%E3%82%A2%E3%82%B9%E3%82%BF%E3%83%AB%E3%83%86%E6%9A%87%E4%BA%BA%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0" title="アスタルテ暇人ランキング">アスタルテ暇人ランキング</a>へのキーボードショートカットを追加（Ctrl+R）</li>
<li>設定ページ下部の整理</li>
<li>Markdown・BBcode非対応インスタンスに対する調整</li>
<li>サポートインスタンスの調整</li>
<li>ライセンスのバージョンアップ</li>
</ul></td>
<td><sup><a href="#cite_note-30">[25]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.9</td>
<td>2018年2月10日</td>
<td><ul>
<li>ドメイン変更によるアップデートの不具合を修正</li>
</ul></td>
<td><sup><a href="#cite_note-31">[26]</a></sup></td>
</tr>
<tr class="even">
<td>ver.10</td>
<td>2018年2月13日</td>
<td><ul>
<li>ラジオ機能の追加</li>
<li>Markdownの追加</li>
</ul>
<ul>
<li>リスト</li>
<li>上下飾り文字</li>
</ul>
<ul>
<li>100件毎の自動リフレッシュ機能を追加</li>
<li>URL解析ボタンを見やすく修正</li>
<li>続き表示、一番上に戻る、絵文字前スペースなど、複数の不具合修正</li>
<li>ゼロ幅スペースが入力できるキーボードショートカットの追加（Shift+Space）</li>
</ul></td>
<td><sup><a href="#cite_note-32">[27]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.11</td>
<td>2018年2月14日</td>
<td><ul>
<li>イメージビューワーの下部に画像元のトゥートへ遷移するボタンを追加</li>
<li>複数の不具合修正</li>
</ul></td>
<td><sup><a href="#cite_note-33">[28]</a></sup></td>
</tr>
<tr class="even">
<td>ver.12</td>
<td>2018年2月16日</td>
<td><ul>
<li>イメージビューワーなど複数の不具合修正</li>
<li>ラジオにJazz FMを追加</li>
<li>画像ダウンローダーの追加</li>
<li>アップデータの改善</li>
</ul>
<ul>
<li>不具合修正</li>
<li>ダウンロード後に開くフォルダがダウンロードしたフォルダに変更</li>
</ul></td>
<td><sup><a href="#cite_note-34">[29]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.13</td>
<td>2018年2月18日</td>
<td><ul>
<li>トゥートボックスの最小化機能を追加</li>
<li>フォントサイズの変更ができるよう変更</li>
<li>メディアフィルター機能の追加</li>
<li>ワンクリックでのトゥートのURL、埋め込みのコピー機能を追加</li>
<li>5重に通知される不具合の修正</li>
</ul></td>
<td><sup><a href="#cite_note-35">[30]</a></sup></td>
</tr>
</tbody>
</table>

#### TheDesk Riina

内部バージョンは12。UIの改良がメイン。アイドルマスター シンデレラガールズに登場するアイドルの「多田李衣菜」から命名。このバージョンの間に4回のfixedアップデートが行われている。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>ver.1</td>
<td>2018年2月18日</td>
<td><ul>
<li>UIの大幅な刷新</li>
<li>via表示が長い場合、省略する機能の追加</li>
<li>左下にトゥートの公開情報を表示する機能の追加</li>
</ul>
<ul>
<li>アイコンを押すとトゥートのURLがコピーされる</li>
</ul>
<ul>
<li>トゥートボックスの上部に自分のプロフィールを確認できるボタンの追加</li>
<li>URLスキームに対応（thedesk://）</li>
</ul></td>
<td><sup><a href="#cite_note-36">[31]</a></sup></td>
</tr>
<tr class="even">
<td>ver.1[fixed]</td>
<td>2018年2月18日</td>
<td><ul>
<li>致命的な不具合の修正</li>
</ul></td>
<td><sup><a href="#cite_note-37">[32]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.2</td>
<td>2018年2月18日</td>
<td><ul>
<li>アップデータやレイアウトなど複数の不具合修正</li>
<li>URLコピーを時間表示部に変更</li>
<li>アニメーションアイコンを再生するかの設定項目の追加</li>
</ul></td>
<td><sup><a href="#cite_note-38">[33]</a></sup></td>
</tr>
<tr class="even">
<td>ver.3</td>
<td>2018年2月19日</td>
<td><ul>
<li>通知やレイアウトなど複数の不具合修正</li>
<li>画像添付の順番を正規化</li>
<li>bmpイメージを自動変換する機能の追加</li>
</ul></td>
<td><sup><a href="#cite_note-39">[34]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.4</td>
<td>2018年2月24日</td>
<td><ul>
<li>返信時、画像添付時の挙動の修正</li>
<li>トゥートUIの変更</li>
<li>文字数での自動折りたたみを設定できる機能の追加</li>
<li>設定画面のUIの変更</li>
<li>トゥートボックスをデフォルトで最小化するよう変更</li>
</ul></td>
<td><sup><a href="#cite_note-40">[35]</a></sup></td>
</tr>
<tr class="even">
<td>ver.5</td>
<td>2018年2月25日</td>
<td><ul>
<li>デザインの修正</li>
<li>設定画面をコンパクトに修正</li>
<li>アニメーションの追加</li>
<li>不具合の修正</li>
</ul></td>
<td><sup><a href="#cite_note-41">[36]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.6</td>
<td>2018年2月25日</td>
<td><ul>
<li>デザインの修正</li>
<li>シャドウの追加</li>
<li>不具合の修正</li>
</ul></td>
<td><sup><a href="#cite_note-42">[37]</a></sup></td>
</tr>
<tr class="even">
<td>ver.6[fixed]</td>
<td>2018年2月25日</td>
<td>不具合の修正
<ul>
<li>トゥートを削除できない不具合</li>
<li>Integrated タイムラインの順番がおかしい不具合</li>
<li>スクロールで読み込まれない不具合</li>
<li>URLコピーが効かない不具合</li>
</ul></td>
<td><sup><a href="#cite_note-43">[38]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.7</td>
<td>2018年2月25日</td>
<td><ul>
<li>自動折りたたみ機能などの不具合の修正</li>
</ul></td>
<td><sup><a href="#cite_note-44">[39]</a></sup></td>
</tr>
<tr class="even">
<td>ver.8</td>
<td>2018年2月26日</td>
<td><ul>
<li>不具合の修正</li>
<li>プラットフォームの追加</li>
</ul></td>
<td><sup><a href="#cite_note-45">[40]</a></sup></td>
</tr>
</tbody>
</table>

#### TheDesk Airi

内部バージョンは13。ver.1では多くの機能が追加された。また、同時にHPのリニューアルも行われている。

アイドルマスター シンデレラガールズに登場するアイドルの「十時愛梨」から命名。キャッチコピーは「まるでメイドのようなクライアント」。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>ver.1</td>
<td>2018年3月10日</td>
<td><ul>
<li>Web魚拓機能追加</li>
<li>強調/ミュート機能追加</li>
<li>よく使うタグ追加</li>
<li>Nanoモード追加</li>
<li>ながら観モード追加</li>
<li>URLスキーム機能追加</li>
</ul></td>
<td><sup><a href="#cite_note-46">[41]</a></sup></td>
</tr>
<tr class="even">
<td>ver.2</td>
<td>2018年3月13日</td>
<td><ul>
<li>UIをシンプルに洗練</li>
<li>TL「一番上へ」をTL種別アイコンと統合</li>
<li>デフォルトの絵文字に対応</li>
<li>バージョン1.xのインスタンスに暫定対応。</li>
</ul></td>
<td><sup><a href="#cite_note-47">[42]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.3</td>
<td>2018年3月14日</td>
<td><ul>
<li>絵文字描画周りなどのバグ修正</li>
</ul></td>
<td><sup><a href="#cite_note-48">[43]</a></sup></td>
</tr>
<tr class="even">
<td>ver.4</td>
<td>2018年3月14日</td>
<td><ul>
<li>絵文字描画周りなどのバグ修正</li>
</ul></td>
<td><sup><a href="#cite_note-49">[44]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.5</td>
<td>2018年3月15日</td>
<td><ul>
<li>Spotify NowPlaying機能を追加</li>
<li>脆弱性の修正</li>
<li>絵文字の描画に関する修正</li>
</ul></td>
<td><sup><a href="#cite_note-50">[45]</a></sup></td>
</tr>
<tr class="even">
<td>ver.6</td>
<td>2018年3月17日</td>
<td><ul>
<li>Tootsearchでトゥート検索(β)</li>
</ul></td>
<td><sup><a href="#cite_note-51">[46]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.7</td>
<td>2018年3月20日</td>
<td><ul>
<li>バグフィックス</li>
<li>カスタム絵文字検索</li>
<li>Pleroma暫定対応(投稿・表示のみ。通知，削除等には対応しません。)</li>
<li>個別インスタンスの対応(独自名称は追加後再読込が必要です。)</li>
</ul></td>
<td><sup><a href="#cite_note-52">[47]</a></sup></td>
</tr>
<tr class="even">
<td>ver.8</td>
<td>2018年3月21日</td>
<td><ul>
<li>バグフィックス</li>
<li>UI改善</li>
<li>キーボードショートカット追加・変更</li>
<li>他アカウントからお気に入り登録・フォローなどが可能に</li>
</ul></td>
<td><sup><a href="#cite_note-53">[48]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.9</td>
<td>2018年3月27日</td>
<td><ul>
<li>本文コピー(各TLの公開範囲のボタンをクリック。)</li>
<li>絵文字大幅拡充</li>
<li>Local+ TL(ローカルTLに，同一インスタンスのリプライやブーストを)</li>
<li>Glance TL(認証しなくてもローカルTLが見れる)</li>
<li>ますとどんちほー(mstdn.kemono-friends.info)に対応</li>
<li>独自ロケール拡充</li>
</ul></td>
<td><sup><a href="#cite_note-54">[49]</a></sup></td>
</tr>
</tbody>
</table>

#### TheDesk Mizuki

内部バージョンは14。アイドルマスター シンデレラガールズに登場するアイドルの「川島瑞樹」から命名。キャッチコピーは「まだまだフレッシュなクライアント」。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>ver.1</td>
<td>2018年3月31日</td>
<td><ul>
<li>トゥート翻訳(Google翻訳)</li>
<li>ネイティブ通知</li>
<li>faiconピッカー</li>
<li>画像貼り付け</li>
<li>他アカウントでプロフィールを開く</li>
<li>誤爆防止措置(ドメインを明示)</li>
</ul></td>
<td><sup><a href="#cite_note-55">[50]</a></sup></td>
</tr>
<tr class="even">
<td>ver.2</td>
<td>2018年3月31日</td>
<td><ul>
<li>プラットフォーム最適化</li>
</ul></td>
<td><sup><a href="#cite_note-56">[51]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.3</td>
<td>2018年4月1日</td>
<td><ul>
<li>リスト機能実装</li>
<li>SpotifyNowPlaingをWin以外でも利用可に</li>
<li>トゥート翻訳のバグを修正</li>
</ul></td>
<td><sup><a href="#cite_note-57">[52]</a></sup></td>
</tr>
<tr class="even">
<td>ver.4</td>
<td>2018年4月7日</td>
<td><ul>
<li>カラムヘッダーにの色変更(21色+デフォルト)</li>
<li>画像読み込み進捗表示</li>
<li>引用トゥートボタン</li>
<li>トゥート詳細をブラウザで開くボタン</li>
<li>トゥート内のトゥートへのリンクをTheDesk内で開く</li>
</ul></td>
<td><sup><a href="#cite_note-58">[53]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.5</td>
<td>2018年4月8日</td>
<td><ul>
<li>アップデータを改良</li>
<li>トゥートリンクを踏んだときの利用アカウントについて改良</li>
<li>板橋丼サポート(限定公開をサポート)</li>
</ul></td>
<td><sup><a href="#cite_note-59">[54]</a></sup></td>
</tr>
<tr class="even">
<td>ver.6</td>
<td>2018年4月15日</td>
<td><ul>
<li>リストに関するバグを修正</li>
<li>サポートインスタンスに関する修正</li>
<li>カラーテーマ追加</li>
</ul></td>
<td><sup><a href="#cite_note-60">[55]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.7</td>
<td>2018年4月17日</td>
<td><ul>
<li>致命的なエラーの修正</li>
</ul></td>
<td><sup><a href="#cite_note-61">[56]</a></sup></td>
</tr>
</tbody>
</table>

#### TheDesk Mio

内部バージョンは15。アイドルマスター シンデレラガールズに登場するアイドルの「本田未央」から命名。キャッチコピーは「ミツボシ級クライアント」(彼女が歌う曲のタイトルより)。バージョン15.6.0より、バージョンの名付け規則が変更されている。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>ver.1</td>
<td>2018年5月10日</td>
<td><ul>
<li>Adobeフォトエディタ</li>
<li>トゥートボックスUI変更。よりコンパクトに</li>
<li>サイドバーの挙動修正</li>
<li>名前のカスタム絵文字に対応</li>
<li>マウスオーバーでアクションを表示</li>
<li>ブーストの言及元を簡単チェック</li>
</ul></td>
<td><sup><a href="#cite_note-62">[57]</a></sup></td>
</tr>
<tr class="even">
<td>ver.2</td>
<td>2018年5月12日</td>
<td><ul>
<li>バグの修正</li>
</ul></td>
<td><sup><a href="#cite_note-63">[58]</a></sup></td>
</tr>
<tr class="odd">
<td>ver.3</td>
<td>2018年5月20日</td>
<td><ul>
<li>macOS版正式リリース</li>
<li>Spotifyなうぷれ改修(アートワーク投稿)</li>
<li>iTunesなうぷれ機能(macOS必須)</li>
<li>メインアカウント機能(起動時や投稿後のアカウントを指定)</li>
<li>エアリプソース確認が投稿者のアカウントのLTLに</li>
<li>未認証TLのトゥートをメインアカウントで詳細表示できるように</li>
<li>Nano機能がウィンドウ位置を記憶するように</li>
<li>DMタイムライン</li>
</ul></td>
<td><sup><a href="#cite_note-64">[59]</a></sup></td>
</tr>
<tr class="even">
<td>ver.4</td>
<td>2018年5月26日</td>
<td><ul>
<li>バグの修正</li>
</ul></td>
<td><sup><a href="#cite_note-65">[60]</a></sup></td>
</tr>
<tr class="odd">
<td>15.6.0</td>
<td>2018年6月12日</td>
<td><ul>
<li>バグの修正</li>
</ul></td>
<td><sup><a href="#cite_note-66">[61]</a></sup></td>
</tr>
<tr class="even">
<td>15.7.0</td>
<td>2018年6月18日</td>
<td><ul>
<li>公開範囲情報の記録がインスタンスごとに(これにより一度記録がリセットされます。)</li>
<li>インスタンスのユーザー設定に従った公開範囲指定(アカウント設定より情報更新をしてください。)</li>
<li>インスタンスカラーを設定できるように(アカウント設定から)</li>
<li>スクリーンショット(魚拓)機能の高速化</li>
<li>Integrated TLのバグ修正</li>
<li>キーボードショートカットのバグ修正</li>
<li>コピペのバグ改善(ただし、ワンクリックコピーで複数の絵文字があるトゥートをコピーするとバグが発生します)</li>
<li>CWのバグ改善</li>
<li>DTP鯖(dtp-mstdn.jp)( #dtp )とtheboss.tech( #theboss_tech )をサポートタグ付きトゥート時、デフォルトタグがないとき確認ダイアログが表示されます。</li>
</ul></td>
<td><sup><a href="#cite_note-67">[62]</a></sup></td>
</tr>
<tr class="odd">
<td>15.8.0</td>
<td>2018年7月7日</td>
<td><ul>
<li>Glance TLの不具合解消</li>
<li>フォントが変更可能に</li>
<li>同一インスタンスで複数垢ログインに対応</li>
<li>カラーテーマの追加</li>
</ul></td>
<td><sup><a href="#cite_note-68">[63]</a></sup></td>
</tr>
<tr class="even">
<td>15.9.1</td>
<td>2018年7月19日</td>
<td><ul>
<li>フィルター機能に対応</li>
<li>削除して再編集に対応</li>
<li>削除追跡(削除されたトゥートが画面から消えずに背景色のみ変化します。)</li>
<li>通知が表示されないバグ・削除時に境界線が太くなる現象の修正など</li>
</ul></td>
<td><sup><a href="#cite_note-69">[64]</a></sup></td>
</tr>
<tr class="odd">
<td>15.10.0</td>
<td>2018年7月22日</td>
<td><ul>
<li>音声読み上げに対応</li>
<li>Twitterのツイートに対するリンクをリッチに表示</li>
<li>削除追跡取り下げ</li>
<li>アップデートスキップの有効期限を次バージョン時にする機能</li>
<li>CINDERELLA NowPlaying(imastodon.net).</li>
<li>ライセンス変更(v5)</li>
</ul></td>
<td><sup><a href="#cite_note-70">[65]</a></sup></td>
</tr>
</tbody>
</table>

#### TheDesk Akane

内部バージョンは16。アイドルマスター シンデレラガールズに登場するアイドルの「日野茜」から命名。キャッチコピーは「Elegance in Passion<sup>[\[注釈 6\]](#cite_note-71)</sup>」。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>16.0.0</td>
<td>2018年7月30日</td>
<td><ul>
<li>英語に対応</li>
<li><a href="/Misskey" title="Misskey">Misskey</a>に対応</li>
<li>デザインを大きく変更</li>
<li>TheDesk Tipsに対応(後述)</li>
</ul></td>
<td><sup><a href="#cite_note-72">[66]</a></sup></td>
</tr>
<tr class="even">
<td>16.0.1</td>
<td>2018年8月5日</td>
<td><ul>
<li>自動展開(Windows版のみ)</li>
<li>設定エクスポート/インポート</li>
</ul></td>
<td><sup><a href="#cite_note-73">[67]</a></sup></td>
</tr>
<tr class="odd">
<td>16.0.2</td>
<td>2018年8月5日</td>
<td><ul>
<li>バグ修正</li>
<li>CW固定/トゥートボックス固定</li>
</ul></td>
<td><sup><a href="#cite_note-74">[68]</a></sup></td>
</tr>
<tr class="even">
<td>16.0.3</td>
<td>2018年8月6日</td>
<td><ul>
<li>Fav数カウントについてのバグ</li>
<li><a href="/Misskey" title="Misskey">Misskey</a>機能改修</li>
</ul></td>
<td><sup><a href="#cite_note-75">[69]</a></sup></td>
</tr>
<tr class="odd">
<td>16.0.4</td>
<td>2018年8月10日</td>
<td><ul>
<li>多重取得バグ修正</li>
<li><a href="/Misskey" title="Misskey">Misskey</a>機能改修</li>
<li>アニメーション/ロケール追加</li>
<li>Electron 2.0.7へ</li>
</ul></td>
<td><sup><a href="#cite_note-76">[70]</a></sup></td>
</tr>
<tr class="even">
<td>16.0.5</td>
<td>2018年8月11日</td>
<td><ul>
<li>トゥートボックスの挙動に関するバグ</li>
<li><a href="/Misskey" title="Misskey">Misskey</a>機能改修</li>
<li>閉じた後Nで開かないバグ</li>
<li>Integrated TLで更新されないバグ</li>
</ul></td>
<td><sup><a href="#cite_note-77">[71]</a></sup></td>
</tr>
<tr class="odd">
<td>16.0.6</td>
<td>2018年8月11日</td>
<td><ul>
<li>トゥートボックスの挙動に関するバグ</li>
<li><a href="/Misskey" title="Misskey">Misskey</a>機能改修</li>
<li>閉じた後Nで開かないバグ</li>
<li>Integrated TLで更新されないバグ</li>
</ul></td>
<td><sup><a href="#cite_note-78">[72]</a></sup></td>
</tr>
<tr class="even">
<td>16.0.7</td>
<td>2018年8月16日</td>
<td><ul>
<li>Pixivの埋め込み</li>
<li>Misskey周りの修正</li>
<li>その他バグ修正</li>
</ul></td>
<td><sup><a href="#cite_note-79">[73]</a></sup></td>
</tr>
<tr class="odd">
<td>16.0.8</td>
<td>2018年8月17日</td>
<td><ul>
<li>ログインできない不具合修正</li>
<li>通知お知らせアイコンの設定追加</li>
<li>ストリーミング再接続機能追加</li>
</ul></td>
<td><sup><a href="#cite_note-80">[74]</a></sup></td>
</tr>
<tr class="even">
<td>16.0.9</td>
<td>2018年8月23日</td>
<td><ul>
<li>ログインできない問題を修正</li>
<li>ストリーミングが切れることがある不具合を修正</li>
<li>長文投稿時にCWが簡単に付く機能</li>
<li>誰が通知アクションをしたかのミニアイコンを表示</li>
<li>クリップボードへ複数枚の貼り付けに対応</li>
<li>全てのMisskeyに全てのOSからログイン可能に</li>
<li>friends.nicoのユーザー絵文字に対応</li>
</ul></td>
<td><sup><a href="#cite_note-81">[75]</a></sup></td>
</tr>
<tr class="odd">
<td>16.0.10</td>
<td>2018年8月24日</td>
<td><ul>
<li>自動CWのバグ</li>
<li>アップデートに関する機能改修</li>
<li>MisskeyのURLコピーに関する不具合</li>
<li>TheDeskからのリアルタイムお知らせ</li>
</ul></td>
<td><sup><a href="#cite_note-82">[76]</a></sup></td>
</tr>
<tr class="even">
<td>16.0.11</td>
<td>2018年8月24日</td>
<td><ul>
<li>脆弱性対応</li>
</ul></td>
<td><sup><a href="#cite_note-83">[77]</a></sup></td>
</tr>
<tr class="odd">
<td>16.1.0</td>
<td>2018年9月11日</td>
<td><ul>
<li>不具合修正(マウスオーバー,クリックに関する)</li>
<li>2.5.0に対する対応(リプ数やendorseなど)</li>
<li>軽量化を図った</li>
<li>一つのカラムをTwitter(TweetDeck)にできる機能</li>
<li>画像の保存先を変えられるように</li>
<li>インスタンス情報の拡充</li>
<li>プロフィールページデザイン変更</li>
<li>トゥートバーを左端に持ってこれるように</li>
</ul></td>
<td><sup><a href="#cite_note-84">[78]</a></sup></td>
</tr>
<tr class="even">
<td>16.1.1</td>
<td>2018年9月12日</td>
<td><ul>
<li>インストール形式の変更</li>
<li>不具合修正</li>
</ul></td>
<td><sup><a href="#cite_note-85">[79]</a></sup></td>
</tr>
<tr class="odd">
<td>16.1.2</td>
<td>2018年9月12日</td>
<td><ul>
<li>不具合修正</li>
</ul></td>
<td><sup><a href="#cite_note-86">[80]</a></sup></td>
</tr>
<tr class="even">
<td>16.1.3</td>
<td>2018年9月12日</td>
<td><ul>
<li>セカンダリートゥートボタン</li>
<li>不具合修正</li>
<li>ライセンス変更</li>
</ul></td>
<td><sup><a href="#cite_note-87">[81]</a></sup></td>
</tr>
<tr class="odd">
<td>16.1.4</td>
<td>2018年9月19日</td>
<td><ul>
<li>不具合修正</li>
</ul></td>
<td><sup><a href="#cite_note-88">[82]</a></sup></td>
</tr>
<tr class="even">
<td>16.1.5</td>
<td>2018年9月20日</td>
<td><ul>
<li>不具合修正</li>
<li>脆弱性修正</li>
</ul></td>
<td><sup><a href="#cite_note-89">[83]</a></sup></td>
</tr>
</tbody>
</table>

#### TheDesk Miria

内部バージョンは17。アイドルマスター シンデレラガールズに登場するアイドルの「赤城みりあ」から命名。キャッチコピーは「Update Now」(彼女が歌う曲のタイトルより<sup>[\[注釈 7\]](#cite_note-90)</sup>)。

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="header">
<th>バージョン</th>
<th>配布開始日</th>
<th>内容</th>
<th>出典</th>
</tr>

<tr class="odd">
<td>17.0.0</td>
<td>2018年12月9日</td>
<td><ul>
<li>セキュリティアップデート</li>
<li><a href="/Mastodon#InstanceTicker" title="Mastodon">Mastodon #InstanceTicker</a>対応</li>
<li>フォント選択機能が便利に</li>
</ul></td>
<td><sup><a href="#cite_note-91">[84]</a></sup></td>
</tr>
<tr class="even">
<td>17.0.1</td>
<td>2019年2月27日</td>
<td><ul>
<li>バグ修正</li>
<li>(Mastodon 2.7)時間指定投稿が利用できます。</li>
<li>(Mastodon 2.7)「インスタンス」を「サーバー」に変更</li>
<li>CW付きのトゥートの再編集に対応</li>
<li>インストール場所が指定できるように</li>
<li>トゥートのコピペができない不具合を修正</li>
<li>TweetDeckの横幅だけ広げられる機能</li>
</ul></td>
<td><sup><a href="#cite_note-92">[85]</a></sup></td>
</tr>
<tr class="odd">
<td>17.0.2</td>
<td>2019年2月28日</td>
<td><ul>
<li>ストリーミングに関するバグ修正</li>
<li>ブースト除外</li>
</ul></td>
<td>?</td>
</tr>
<tr class="even">
<td>17.1.0</td>
<td>2019年3月6日</td>
<td><ul>
<li>トゥートボックスがフロートタイプに。左下、右下以外にも自由においてください。</li>
<li>いろいろとアニメーション入れた(硬派な方は設定「タイムラインの設定」からオフに)アンケートができるように(OK:Mastodon (2.8~)/WIP: votedon./ NG: ニコフレ)</li>
<li>フォント選択機能が復活</li>
<li>WindowsからiTunesやAIMP、その他CAD系のNowPlayingができるように。要プラグインのソフトもある。</li>
</ul></td>
<td><sup><a href="#cite_note-93">[86]</a></sup></td>
</tr>
<tr class="odd">
<td>17.2.0</td>
<td>2019年3月9日</td>
<td><ul>
<li>カスタムテーマ(Misskeyと暫定互換性あり)を追加</li>
<li>Misskeyのログイン方法を変更(DevCenterに行く必要がなくなった)</li>
<li>ダイアログの多言語化</li>
</ul></td>
<td><sup><a href="#cite_note-94">[87]</a></sup></td>
</tr>
</tbody>
</table>

これ以降のリリースノートは、<a href="https://github.com/cutls/TheDesk/releases" rel="nofollow">リリースノート</a>を参照。2021年1月9日時点で最新は75リリースを経て22.0.1 (Koume)である。

## サポートするインスタンス

基本的にMastodonインスタンスはすべて対応するが、加えて一部インスタンスではインスタンスの独自機能に対応する。サポートされていないインスタンスにログインした場合の不具合は一切保証しない。

なお初期はバージョン1.x系のインスタンスで動作しなかったが、暫定的にAiri (ver.2)で対応した。PleromaにはAiri (ver.7)より暫定的に対応している。[Misskey](/Misskey "Misskey")に関しては、長らくWindows/Linuxでmisskey.xyzへのログインに限りそのまま認証できるが、他の場合(他のプラットフォーム/他のインスタンス)では、デベロッパーセンターからApp Secretをコピーする必要があるといった状況が続いたが、Miria (17.2.0)よりすべてのインスタンスに前準備なしにログインできる。 なお、開発者はTheDeskにおけるMisskeyのサポート終了とPleromaのAPI挙動の疑念についてトゥート<sup>[\[88\]](#cite_note-95)</sup>している。しかし、Misskeyの挙動改善アップデートをなしている。

### 公認インスタンス

TheDeskは公認インスタンスでの使用を第一に開発する。

-   [kirishima.cloud](/Kirishima.cloud "Kirishima.cloud")<sup>[\[89\]](#cite_note-96)</sup>
-   箕面どん([minohdon.jp](/Minohdon.jp "Minohdon.jp"))

### サポートするインスタンス一覧

これらは各インスタンスの公認を受けたものではない。

-   Knzk.me (神崎丼)

初期より対応

-   [マストどす](/%E3%83%9E%E3%82%B9%E3%83%88%E3%81%A9%E3%81%99 "マストどす")

Mika (ver.1)より対応

-   [yづドン](/Y%E3%81%A5%E3%83%89%E3%83%B3 "Yづドン")

Miho (ver.7)より対応

-   [imastodon.net](/Imastodon.net "Imastodon.net")

Airi (ver.7)より対応\[一部日本語(im@s)表記\]

-   [mstdn.osaka](/Mstdn.osaka "Mstdn.osaka")

Airi (ver.7)より対応\[一部大阪弁表記\]

-   [ますとどんちほー](/%E3%81%BE%E3%81%99%E3%81%A8%E3%81%A9%E3%82%93%E3%81%A1%E3%81%BB%E3%83%BC "ますとどんちほー")

Airi (ver.9)より対応\[一部独自ロケール対応\]<sup>[\[注釈 8\]](#cite_note-97)</sup>

-   [DTP-Mstdn.jp](/DTP-Mstdn.jp "DTP-Mstdn.jp")

Mio (15.7.0)より対応。デフォルトタグ機能に最適化

-   ~~[theboss.tech](/Theboss.tech "Theboss.tech")~~

~~Mio (15.7.0)より対応。デフォルトタグ機能に最適化~~閉鎖に伴い削除

-   misskey.xyz

Akane (16.0.0)より。[Misskey](/Misskey "Misskey")のインスタンス。[Misskey](/Misskey "Misskey")固有の機能、名称に対応する。

-   misskey.dev

Usamin (18.2.0)より。[Misskey](/Misskey "Misskey")のインスタンス。[Misskey](/Misskey "Misskey")固有の機能、名称に対応する。

-   [precure.ml](/Precure.ml "Precure.ml")

Usamin (18.2.0)より。独自機能に最適化されている。

-   [best-friends.chat](/Best-friends.chat "Best-friends.chat")

Usamin (18.2.0)より。

### 独自機能への対応

アスタルテ ([kirishima.cloud](/Kirishima.cloud "Kirishima.cloud")) や Knzk.me (神崎丼)、[ますとどんちほー](/%E3%81%BE%E3%81%99%E3%81%A8%E3%81%A9%E3%82%93%E3%81%A1%E3%81%BB%E3%83%BC "ますとどんちほー")、misskey.xyzでは、文字数制限の拡張に対応する。その他のインスタンスでは文字数は500文字である。

-   アスタルテ ([kirishima.cloud](/Kirishima.cloud "Kirishima.cloud"))の独自機能として[BBCode](/BBCode "BBCode")やMarkdown、faiconの描画・エディタ機能、ユーザー絵文字描画機能を備える。また、2.4.1 rcで存在したトレンドタグ機能復活に対応する。
-   [imastodon.net](/Imastodon.net "Imastodon.net")、[mstdn.osaka](/Mstdn.osaka "Mstdn.osaka")や[ますとどんちほー](/%E3%81%BE%E3%81%99%E3%81%A8%E3%81%A9%E3%82%93%E3%81%A1%E3%81%BB%E3%83%BC "ますとどんちほー")の独自言語表示に対応する。[Misskey](/Misskey "Misskey")は[Mastodon](/Mastodon "Mastodon")と同等機能だが表記が異なる場合があるため、その表記に対応する。TheDeskでは「独自ロケール」と称している。
-   [yづドン](/Y%E3%81%A5%E3%83%89%E3%83%B3 "Yづドン")の定型文入力ボタンにはMiho (ver.7)<sup>[\[90\]](#cite_note-98)</sup>から現在(Miria (17.0.0))に至るまで対応していない。
-   Mio (ver.3)より、 [imastodon.net](/Imastodon.net "Imastodon.net")の独自トレンドタグを表示できる。
-   Mio (15.7.0)より[theboss.tech](/Theboss.tech "Theboss.tech")とdtp-mstdn.jpのデフォルトタグ機能に最適化されている。デフォルトタグが手入力されていない状態で他のタグが入っている状態ではLocalに表示されないため、それに対して警告が発せられる。
-   Akane (16.0.9)より[best-firneds.chat](/Best-firneds.chat "Best-firneds.chat (存在しないページ)")等のユーザー絵文字に対応する。かつてサポートインスタンスには含まれないながらも[friends.nico](/Friends.nico "Friends.nico")のために対応した。
-   Usamin (18.3.0)より、[dtp-mstdn.jp](/Dtp-mstdn.jp "Dtp-mstdn.jp")の引用の簡易表示ができる。

## 機能

機能については、トゥートやブーストなど基本的なものも含めて、その多くが<a href="https://docs.thedesk.top/" rel="nofollow">公式ドキュメント</a>に細かく記載されている。

### 主な機能

-   Integrated TL

Miku (ver.1) <sup>[\[91\]](#cite_note-99)</sup>より対応。ローカルTLにホームTLのトゥートを挿入して表示できる。

-   マルチカラム

Uzuki (ver.1)<sup>[\[92\]](#cite_note-100)</sup>より対応。自動伸縮式のマルチカラムであるため、設定で指定した値(初期値300px)よりもカラムの幅を広げられる。例えばウィンドウサイズが900px<sup>[\[注釈 9\]](#cite_note-101)</sup>でカラムが3つならば、値を300px以下に設定しない限り300pxで表示される。これは、もとはシングルカラムのクライアントであったためである。Miho (ver.7)より並び替えに対応した。

-   マルチアカウント

Mika (ver.1)<sup>[\[93\]](#cite_note-102)</sup> より対応。Uzuki (ver.1)<sup>[\[94\]](#cite_note-103)</sup>より同時に複数アカウントにログインしてそれぞれのTLを見ることができる。Mio(15.8.0)で初めて同一インスタンスの複数アカウント同時ログインに対応した。

-   自動更新

Mika (ver.2)<sup>[\[95\]](#cite_note-104)</sup> よりストリーミングに対応し、リアルタイムで表示される。

-   時間表示設定

絶対時間、相対時間の切り替えだけでなく、両方表示したり、当日のトゥートとそれ以前のトゥートで表示を切り替えたりできる。Beta時より実装済み。

-   テーマ

Black/White/Indigo/Brown/Greenの5色から選べる。途中バージョンで初期色がBlackになっている。また、Indigo/Brown/Greenはアイドルマスターシンデレラガールズに関連する別名が存在し、[imastodon.net](/Imastodon.net "Imastodon.net")にログインしているときのみ表示される。

-   TL上でのトゥートカード表示

Mika (ver.2) <sup>[\[96\]](#cite_note-105)</sup>より対応。URLのあるトゥートだけを解析することでAPI制限を抑えている。また、Miho (ver.7)<sup>[\[97\]](#cite_note-106)</sup>よりデフォルトではOffの設定となった。Offの場合でもTL上のURL解析ボタンで同様に利用可能。Mio (15.8.0)よりカラム削除時に全てのカラムのURL解析がオフになる仕様に変更された。<sup>[\[注釈 10\]](#cite_note-107)</sup>Mastodon 2.6より、トゥートカードがTL上のデータに含まれるようになったため、Miria (17.0.0)からURL解析はデフォルトでOnとなり、すべてTL上のデータを参照する。また、非対応インスタンスや設定がOffの場合は通常通りCards APIを使用して表示する。MisskeyのURL解析も自動となる。

-   通知の画面内ポップアップ

表示する秒数は設定により変更できる。0に設定すれば表示されない。いずれの設定でも、新規の通知があれば通知アイコンの色が変わるようになっている。なお、Mika (ver.1) <sup>[\[98\]](#cite_note-108)</sup>まではポップアップ機能自体はあった(設定に項目があった)が利用できなかった。

-   長文トゥート自動折りたたみ機能

Mika (ver.3)<sup>[\[99\]](#cite_note-109)</sup> より対応。行数で指定する。またRiina (ver.4)より文字数でも指定できる。

-   オートサジェスト

Mika (ver.3)<sup>[\[100\]](#cite_note-110)</sup>より対応。投稿ボックスにハッシュタグやアットマークを入れてその後に文字を入れると候補となる情報を表示する。

-   [Mastodon Instances](/Mastodon_Instances "Mastodon Instances")連携

Mika (ver.3)<sup>[\[101\]](#cite_note-111)</sup> より、[Mastodon Instances](/Mastodon_Instances "Mastodon Instances")を使用して現在ログインしているインスタンスの主なデータを取得できる。また、Miho (ver.8)<sup>[\[102\]](#cite_note-112)</sup>より、ログインしようとしているインスタンスのURLのサジェストができる。

-   Markdown/[BBCode](/BBCode "BBCode")エディタ

Uzuki (ver.4)<sup>[\[103\]](#cite_note-113)</sup>よりBBCodeエディタ実装。Miho (ver.1)<sup>[\[104\]](#cite_note-114)</sup>よりMarkdownエディタを実装。プレビュー機能を備える。対応インスタンスのみで利用可能。Miho (ver.8)より対応インスタンス以外では入力もできなくなった。

-   イメージビューワー

随時バージョンアップ。マウスホイールによる拡大縮小や、複数画像の添付時には矢印キー等で切り替えられる等の機能がある。

-   アスタルテ暇人ランキング

Croudia時に投稿ランキングとして存在したものをCutls Pが[kirishima.cloud](/Kirishima.cloud "Kirishima.cloud")用に作ったもの。Miho (ver.8)<sup>[\[105\]](#cite_note-115)</sup>と同日リリース。こちらはオープンソースではない。TheDeskでは[kirishima.cloud](/Kirishima.cloud "Kirishima.cloud")にログインしている場合にのみワンクリックでランキング等の解析データを表示できる。

-   ラジオ機能

Miho (ver.10)<sup>[\[106\]](#cite_note-116)</sup>より対応。~~Webストリーミングラジオを聴くことができる。<a href="https://listen.moe" rel="nofollow">Listen.moe</a>などプリセットされた7局<sup>[\[注釈 11\]](#cite_note-117)</sup>の他に自分でURLを入力して再生できる。再生可能フォーマットはChrome 59のaudioタグで再生できるファイルである。~~Mio (ver.1)よりこの機能は廃止された。

-   画像ダウンローダー

Miho (ver.12)<sup>[\[107\]](#cite_note-118)</sup>より対応。画像をワンクリックでPictures/TheDeskに保存できる。

-   メディアフィルター

Miho (ver.13)<sup>[\[108\]](#cite_note-119)</sup>より対応。各TL(通知を除く)の画像トゥートのみを表示する機能。(正確には画像のないトゥートを隠す機能)公式にメディアTLがサポートされてからも機能は残されている。

-   ワンクリックコピー

Miho (ver.13)<sup>[\[109\]](#cite_note-120)</sup>/Riina(ver.1-2)より対応。各トゥートの時間をクリックするとURLがコピーされる。またトゥート詳細情報ボタンからは埋め込みHTMLもコピーできる。Airi (ver.9)より本文もコピーできるようになった(公開範囲表示ボタンをクリック)。

-   画像自動変換

Riina (ver.3)<sup>[\[110\]](#cite_note-121)</sup>より実装。一般的に貼り付けられないbmpイメージも自動でPNGに変換して貼り付ける。Node.jsのJimpを内部で利用している。

-   Web魚拓機能

Airi (ver.1)<sup>[\[111\]](#cite_note-122)</sup>より実装。トゥートのスクリーンショットを簡単に撮影できる。一緒に画像も保存でき、Pictures/TheDesk/Screenshotsに保存される。そのトゥートが消される前に詳細表示ボタンを押していたのであれば、基本的にスクリーンショットを撮影できる。

-   強調/ミュート機能

Airi (ver.1)<sup>[\[112\]](#cite_note-123)</sup>より実装。特定のワードを含むまたはクライアントから投稿されたトゥートを非表示にしたりできる。強調した場合クライアントは背景色変化で、ワードの場合は下線と太字で知らせる。

-   よく使うタグ

Airi (ver.1)<sup>[\[113\]](#cite_note-124)</sup>より実装。タグをトゥートボックスの下にピン留めして、すぐに入力できるようにできる。

-   Nanoモード

Airi (ver.1)<sup>[\[114\]](#cite_note-125)</sup>より実装。常に小さなボックスが画面の最前面に出て最新トゥートを表示する。そこからトゥートもできる。この機能はCroDeskにあったものを復刻させたものである。

-   ながら観モード

Airi (ver.1)<sup>[\[115\]](#cite_note-126)</sup>より実装。埋め込みYouTubeなどを画面の隅に常に表示させておける機能。動画を観ながらタイムラインを閲覧できる。

-   URLスキーム機能

Airi (ver.1)<sup>[\[116\]](#cite_note-127)</sup>より実装。thedesk://share?code=\[文字列\]のリンクを踏むことで、\[文字列\]をTheDeskでトゥートできる。また、Airi (ver.7)<sup>[\[117\]](#cite_note-128)</sup>よりthedesk://user?code=example@example.comでユーザー情報を表示でき、thedesk://tag?code=タグ名(ハッシュタグなし)でタグTLを表示できる。その他いくつかのスキームが内部(特に認証系)で使われている。

-   Spotify NowPlaying機能

Airi (ver.5)<sup>[\[118\]](#cite_note-129)</sup>より実装。 Spotifyで再生中の音楽の情報をワンクリックでトゥートできる。アカウント情報で取得するのでスマートスピーカー等PC上以外で再生していても使用可能。設定よりアカウント連携、テンプレート編集が可能。<sup>[\[注釈 12\]](#cite_note-130)</sup>Windows限定機能だったがMizuki (ver.3)より全てのプラットフォームで利用可能になった。Mio (ver.3)からアートワーク画像も投稿できるようになった。

-   [Tootsearch](/Tootsearch "Tootsearch")

Airi (ver.6)<sup>[\[119\]](#cite_note-131)</sup>よりベータ実装。[Tootsearch](/Tootsearch "Tootsearch")を利用してトゥートを検索できる。

-   Local+ TL

Airi (ver.9)<sup>[\[120\]](#cite_note-132)</sup>より実装。LocalのTLにHomeにあるリプライやブーストを挿入する。Homeで全てのLocalユーザーをフォローしているなら、完全なLocal TLとなる。

-   Glance TL

Airi (ver.9)<sup>[\[121\]](#cite_note-133)</sup>より実装。認証をしなくてもインスタンス名を入れることでローカルタイムラインを見ることが出来る。

-   トゥート翻訳機能

Mizuki (ver.1)<sup>[\[122\]](#cite_note-134)</sup>より実装。日本語でないトゥートをGoogle翻訳を使用して日本語に翻訳する。

-   ネイティブ通知

Mizuki (ver.1)<sup>[\[123\]](#cite_note-135)</sup>より実装。Windows(~~10 April Update以前<sup>[\[注釈 13\]](#cite_note-136)</sup>~~TheDesk Akane (16.1.0)より復活。)/macOSのみの対応。通知をリアルタイムで画面右下に表示。また起動時にまとめて通知件数を表示。

-   Adobeフォトエディタ

Mio (ver.1)<sup>[\[124\]](#cite_note-137)</sup>より実装。Adobeが提供するSDKを用いて画像をアップロードする前に画像を編集できる。なお編集後のデータはAdobeに送信される。専用のウィンドウが開いている間のみAdobeと通信を行う。

-   エアリプ・ブーストチェッカー

Mio (ver.1)<sup>[\[125\]](#cite_note-138)</sup>より実装。あるトゥートの前のローカルタイムラインやユーザータイムラインを簡単に表示できる。ローカルタイムラインを見ることでエアリプが、ユーザータイムラインを見ることでブーストの言及元が表示できる。

-   iTunes NowPlaying機能

Mio (ver.3)<sup>[\[126\]](#cite_note-139)</sup>より実装。macOS限定の機能。17.1.0より後述のNowPlaying機能に統一された。

-   ワンタッチ文字入力

Mio (15.6.0)<sup>[\[127\]](#cite_note-140)</sup>より実装。Ctrl+Shift+1/2/3で設定した任意の文字(絵文字や「\>BT」など)をすぐ入力できる。

-   フォローレコメンデーション

Mio (15.7.0)<sup>[\[128\]](#cite_note-141)</sup>より[マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング")による検索機能を搭載している。また、Mio (15.8.0)より、Mastodon 2.4.3より使える予定の[フォローレコメンデーション (マストドンの機能)](/%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%AC%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3_(%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%81%AE%E6%A9%9F%E8%83%BD) "フォローレコメンデーション (マストドンの機能)")での検索ができる。

-   音声読み上げ

Mio (15.10.0)<sup>[\[129\]](#cite_note-142)</sup>より、TLの内容の音声読み上げに対応している。速度やピッチの調整にも対応している。

-   TheDesk Tips

Akane (16.0.0)<sup>[\[130\]](#cite_note-143)</sup>より実装。画面左下の余白に様々な情報を表示しておける。バージョン情報やRAM使用量、時計、Spotifyの再生状況などが表示できる。

-   自動CW

指定した文字数・行数以上の投稿をしようとしたときに警告が発せられ、その場でCWをつけて投稿できる。警告文はトゥートの最初の10文字となっている。

-   Twitter機能

TweetDeckをTJDeckでカスタムしたものを1つのカラムに表示できる。Miria (17.0.1)より横幅をTweetDeckだけ変更できる機能が搭載された。

-   セカンダリートゥートボタン

「トゥート」ボタンの横に、公開範囲を変えてトゥートできるボタンを付けたもの。Usamin (18.0.0)より、Alt+Enterでもトゥート可能である。

-   [Mastodon \#InstanceTicker](/Mastodon_InstanceTicker "Mastodon InstanceTicker")

[Mastodon \#InstanceTicker](/Mastodon_InstanceTicker "Mastodon InstanceTicker") APIのJSON版キャッシュ([Cutls P](/Cutls_P "Cutls P")が作成しキャッシュしている)を使用し、ほぼ同等の機能を備えているが、ログインしているインスタンスのステッカーは表示されない。

-   カスタムテーマ

[Misskey](/Misskey "Misskey")のテーマコードと仕様を合わせたテーマ機能を備える。相互利用が可能だが、保証されるものではない<sup>[\[131\]](#cite_note-144)</sup>。

-   NowPlaying

これまでmacOS限定であったNowPlayingをMiria (17.2.0)より段階的にWindowsにも対応させた。Linuxには非対応。AIMP、その他CAD系のNowPlayingができるようになったが要プラグインのソフトもある。ほぼ同時期に、iTunes(macOS)でアルバムアートワーク付きのNowPlayingができるようになった。

-   実況

特定タグを常に入力しておける機能。

-   カラムを縦に並べられる

文字通りの機能。

-   通知音

通知の種類(ふぁぼやブーストなど)によってカスタムの通知音が設定できる。また、デフォルトで音源が用意されている。

-   [notestock](/Notestock "Notestock")

Notestockの公開設定をしているユーザーのプロフィールにはリンクが表示される。

### 特筆すべき機能

#### TheDeskお知らせ

Akane (16.0.10)より実装。WebSocketを利用し、サーバー(thedesk.top)とソフトがリアルタイム通信を行うことで、デベロッパーからのお知らせを受け取ることができる機能。お知らせ送信時に起動していなかった場合、起動時に未読分を表示する。

受信したデータは左下にポップアップされる。仕様ではテキストとトゥートのURLを受信できる。SHOWボタンを押すとトゥートが表示される。

特定のバージョンや特定のインスタンスにログインしているTheDeskのみポップアップする機能も備えるため、TheDeskのアップデート告知や、インスタンス管理人がメンテナンス通知等を行うことも可能である。

また、WebSocketの接続数を出すことでTheDeskのリアルタイムユーザー数を表示できる。Akane (16.0.11)より画面サイズが大きいとき、TheDesk Tipsのバージョン情報で確認できる。

Akane (16.0.10)がリリースされた2018年8月24日の午後7時頃に脆弱性が発見されそれに関する緊急情報がこの機能を使用し発信された。機能を実装したその日のうちに使用することとなった。

### 他言語展開

Akane (16.0.0)より英語に対応している。また、Akane (16.1.0)より、標準でシステムの既定言語で表示するようになった。同時に、Crowdinで各国語の翻訳プロジェクトが始まった<sup>[\[132\]](#cite_note-145)</sup>。

## 関連項目

-   [votedon](/Votedon "Votedon") - TheDesk同様Cutls Pによるプロダクト

## 外部リンク

-   <a href="https://thedesk.top/" rel="nofollow">公式サイト</a>
-   <a href="https://docs.thedesk.top/" rel="nofollow">公式ドキュメント</a>

## 注釈

<div>

1.  [↑](#cite_ref-1) GUIとしては筆者調べで世界初/唯一である。なお8月22日に[Subway Tooter](/Subway_Tooter "Subway Tooter")が対応したため現在は唯一ではない。
2.  [↑](#cite_ref-2) アプリ認証をコードで行うモード。Windowsはコードを一切コピーすることなしに認証できる。最近のTheDeskではLinux/macOSの場合、コードセットアップはオンがデフォルトになっている。
3.  [↑](#cite_ref-3) .exeによるインストーラーの配布
4.  [↑](#cite_ref-4) これはCroudiaDeskがCroudiaDeckと呼ばれるCutls Pによるブラウザ向けマルチカラムクライアントをデスクトップ向けにシングルカラムに作り直したためである。
5.  [↑](#cite_ref-7) アイドルの名前は内部バージョンと連動している。例えば内部バージョンが10であれば<a href="http://columbia.jp/idolmaster/cinderella/COCC-16628.html" rel="nofollow">THE IDOLM@STER CINDERELLA MASTER 010 島村卯月</a>なのでUzukiとなる。内部バージョンはソフトの設定画面の「このソフトについて」で見ることができる。なお、バージョン9は存在しないが、名前に採用されていないアイドルは001-010までにいない。これはCroDeskがサーバーとソフトとブラウザアプリでバージョンを変えていた(サーバーはクールアイドル、ブラウザはキュートアイドル、ソフトウェアはパッションアイドル)ためである。
6.  [↑](#cite_ref-71) 楽曲「みなぎれ！ボボボンバー」(日野茜(CV:赤﨑千夏))(作詞:夕野ヨシミ(IOSYS)/作曲:ARM(IOSYS))中の歌詞、「胸のうちそっと秘めた 私の乙女心」からインスパイアされて命名。<a href="https://imastodon.net/@Cutls/100455748424955608" rel="nofollow">@Cutls@imastodon.netのトゥート (100455748424955608)</a>
7.  [↑](#cite_ref-90) 曲名:Romantic Now/赤城みりあ(CV:黒沢ともよ)/作詞:BNSI(MC TC)/作曲:BNSI(Taku Inoue)
8.  [↑](#cite_ref-97) 該当インスタンスのwikiである<a href="https://library.kemono-friends.info/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E7%94%A8%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%BD%E3%83%95%E3%83%88" rel="nofollow">ますとどんちほー図書館</a>にも表記されている。
9.  [↑](#cite_ref-101) 一番右のメニューバーの長さは含まない
10. [↑](#cite_ref-107) カラム削除時にコンフリクトが生じ本来意図しないカラムにURL解析が行われ、API制限を受ける可能性が報告されたため。
11. [↑](#cite_ref-117) Listen.moe,AnimeNfo Radio,LoFi hip hop Radio,Linn Classical,Lihn Jazz\[Riina (ver.8)で追加\],canal-jazz.eu\[Riina (ver.8)で追加\],Jazz FM\[Miho (ver.12)で追加\]の5局
12. [↑](#cite_ref-130) SpotifyのAPIが60分制限で、60分以降はリフレッシュトークンを使用しなければならない関係上、thedesk.top(TheDeskサーバー)を経由して取得している。
13. [↑](#cite_ref-136) April Update以降仕様変更により利用できなくなっていた。

</div>

## 出典

<div>

1.  [↑](#cite_ref-5) <a href="https://kirishima.cloud/@Cutls/99779110935546201" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99779110935546201)</a>
2.  [↑](#cite_ref-6) <a href="https://kirishima.cloud/@Cutls/101821824604936255" rel="nofollow">@Cutls@kirishima.cloudのトゥート (101821824604936255)</a>
3.  [↑](#cite_ref-8) <a href="https://kirishima.cloud/@Cutls/99340831080989958" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99340831080989958)</a>
4.  [↑](#cite_ref-9) <a href="https://kirishima.cloud/@Cutls/99343497028940284" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99343497028940284)</a>
5.  [↑](#cite_ref-10) <a href="https://kirishima.cloud/@Cutls/99351765061669440" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99351765061669440)</a>
6.  [↑](#cite_ref-11) <a href="https://kirishima.cloud/@Cutls/99355128837285131" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99355128837285131)</a>
7.  [↑](#cite_ref-12) <a href="https://kirishima.cloud/@Cutls/99370399582358614" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99370399582358614)</a>
8.  [↑](#cite_ref-13) <a href="https://kirishima.cloud/@Cutls/99372321494800438" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99372321494800438)</a>
9.  [↑](#cite_ref-14) <a href="https://kirishima.cloud/@Cutls/99377687829195565" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99377687829195565)</a>
10. [↑](#cite_ref-15) <a href="https://kirishima.cloud/@Cutls/99384166904607153" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99384166904607153)</a>
11. [↑](#cite_ref-16) <a href="https://kirishima.cloud/@Cutls/99384209846984217" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99384209846984217)</a>
12. [↑](#cite_ref-17) <a href="https://kirishima.cloud/@Cutls/99384454598639090" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99384454598639090)</a>
13. [↑](#cite_ref-18) <a href="https://kirishima.cloud/@Cutls/99386622181440710" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99386622181440710)</a>
14. [↑](#cite_ref-19) <a href="https://kirishima.cloud/@Cutls/99386919419407336" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99386919419407336)</a>
15. [↑](#cite_ref-20) <a href="https://kirishima.cloud/@Cutls/99387525618865536" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99387525618865536)</a>
16. [↑](#cite_ref-21) <a href="https://kirishima.cloud/@Cutls/99393762304512407" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99393762304512407)</a>
17. [↑](#cite_ref-22) <a href="https://kirishima.cloud/@Cutls/99394088130787571" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99394088130787571)</a>
18. [↑](#cite_ref-23) <a href="https://kirishima.cloud/@Cutls/99400074283074396" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99400074283074396)</a>
19. [↑](#cite_ref-24) <a href="https://kirishima.cloud/@Cutls/99411212169345313" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99411212169345313)</a>
20. [↑](#cite_ref-25) <a href="https://kirishima.cloud/@Cutls/99416920776189034" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99416920776189034)</a>
21. [↑](#cite_ref-26) <a href="https://kirishima.cloud/@Cutls/99427716324680173" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99427716324680173)</a>
22. [↑](#cite_ref-27) <a href="https://kirishima.cloud/@Cutls/99439790772311181" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99439790772311181)</a>
23. [↑](#cite_ref-28) <a href="https://kirishima.cloud/@Cutls/99444879333030643" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99444879333030643)</a>
24. [↑](#cite_ref-29) <a href="https://kirishima.cloud/@Cutls/99467732924983524" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99467732924983524)</a>
25. [↑](#cite_ref-30) <a href="https://kirishima.cloud/@Cutls/99490797237550877" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99490797237550877)</a>
26. [↑](#cite_ref-31) <a href="https://kirishima.cloud/@Cutls/99496184760614705" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99496184760614705)</a>
27. [↑](#cite_ref-32) <a href="https://kirishima.cloud/@Cutls/99514006824545949" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99514006824545949)</a>
28. [↑](#cite_ref-33) <a href="https://kirishima.cloud/@Cutls/99518963966491914" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99518963966491914)</a>
29. [↑](#cite_ref-34) <a href="https://kirishima.cloud/@Cutls/99535223941610224" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99535223941610224)</a>
30. [↑](#cite_ref-35) <a href="https://kirishima.cloud/@Cutls/99541707996242411" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99541707996242411)</a>
31. [↑](#cite_ref-36) <a href="https://kirishima.cloud/@Cutls/99544791922436697" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99544791922436697)</a>
32. [↑](#cite_ref-37) <a href="https://kirishima.cloud/@Cutls/99544838480404184" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99544838480404184)</a>
33. [↑](#cite_ref-38) <a href="https://kirishima.cloud/@Cutls/99545164145738319" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99545164145738319)</a>
34. [↑](#cite_ref-39) <a href="https://kirishima.cloud/@Cutls/99547583877159246" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99547583877159246)</a>
35. [↑](#cite_ref-40) <a href="https://kirishima.cloud/@Cutls/99575504403256697" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99575504403256697)</a>
36. [↑](#cite_ref-41) <a href="https://kirishima.cloud/@Cutls/99581166420771058" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99581166420771058)</a>
37. [↑](#cite_ref-42) <a href="https://kirishima.cloud/@Cutls/99584808313731098" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99584808313731098)</a>
38. [↑](#cite_ref-43) <a href="https://kirishima.cloud/@Cutls/99585110057533042" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99585110057533042)</a>
39. [↑](#cite_ref-44) <a href="https://kirishima.cloud/@Cutls/99586283742933830" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99586283742933830)</a>
40. [↑](#cite_ref-45) <a href="https://kirishima.cloud/@Cutls/99586711676087706" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99586711676087706)</a>
41. [↑](#cite_ref-46) <a href="https://kirishima.cloud/@Cutls/99659959119943073" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99659959119943073)</a>
42. [↑](#cite_ref-47) <a href="https://kirishima.cloud/@Cutls/99672165445492659" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99672165445492659)</a>
43. [↑](#cite_ref-48) <a href="https://kirishima.cloud/@Cutls/99678112371853455" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99678112371853455)</a>
44. [↑](#cite_ref-49) <a href="https://kirishima.cloud/@Cutls/99681074062064845" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99681074062064845)</a>
45. [↑](#cite_ref-50) <a href="https://kirishima.cloud/@Cutls/99683981955646272" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99683981955646272)</a>
46. [↑](#cite_ref-51) <a href="https://kirishima.cloud/@Cutls/99699845250185162" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99699845250185162)</a>
47. [↑](#cite_ref-52) <a href="https://kirishima.cloud/@Cutls/99714470599339273" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99714470599339273)</a>
48. [↑](#cite_ref-53) <a href="https://kirishima.cloud/@Cutls/99720258906601075" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99720258906601075)</a>
49. [↑](#cite_ref-54) <a href="https://kirishima.cloud/@Cutls/99753554286172019" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99753554286172019)</a>
50. [↑](#cite_ref-55) <a href="https://kirishima.cloud/@Cutls/99776280199886582" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99776280199886582)</a>
51. [↑](#cite_ref-56) <a href="https://kirishima.cloud/@Cutls/99778903571938670" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99778903571938670)</a>
52. [↑](#cite_ref-57) <a href="https://kirishima.cloud/@Cutls/99780540800919858" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99780540800919858)</a>
53. [↑](#cite_ref-58) <a href="https://kirishima.cloud/@Cutls/99816235315778567" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99816235315778567)</a>
54. [↑](#cite_ref-59) <a href="https://kirishima.cloud/@Cutls/99824240545779379" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99824240545779379)</a>
55. [↑](#cite_ref-60) <a href="https://kirishima.cloud/@Cutls/99862475423909002" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99862475423909002)</a>
56. [↑](#cite_ref-61) <a href="https://kirishima.cloud/@Cutls/99870219160048972" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99870219160048972)</a>
57. [↑](#cite_ref-62) <a href="https://kirishima.cloud/@Cutls/100000114985085860" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100000114985085860)</a>
58. [↑](#cite_ref-63) <a href="https://kirishima.cloud/@Cutls/100012024555544459" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100012024555544459)</a>
59. [↑](#cite_ref-64) <a href="https://kirishima.cloud/@Cutls/100060424703893598" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100060424703893598)</a>
60. [↑](#cite_ref-65) <a href="https://kirishima.cloud/@Cutls/100091629492148708" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100091629492148708)</a>
61. [↑](#cite_ref-66) <a href="https://kirishima.cloud/@Cutls/100187214560861540" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100187214560861540)</a>。未だ(ver.x)表記である。
62. [↑](#cite_ref-67) <a href="https://kirishima.cloud/@Cutls/100220846074652325" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100220846074652325)</a>。未だ(ver.x)表記である。
63. [↑](#cite_ref-68) <a href="https://kirishima.cloud/@Cutls/100329271680489033" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100329271680489033)</a>
64. [↑](#cite_ref-69) <a href="https://kirishima.cloud/@Cutls/100396774002462094" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100396774002462094)</a>
65. [↑](#cite_ref-70) <a href="https://kirishima.cloud/@Cutls/100418553856486893" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100418553856486893)</a>
66. [↑](#cite_ref-72) <a href="https://kirishima.cloud/@Cutls/100463367670415176" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100463367670415176)</a>
67. [↑](#cite_ref-73) <a href="https://kirishima.cloud/@Cutls/100492924178751744" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100492924178751744)</a>
68. [↑](#cite_ref-74) <a href="https://kirishima.cloud/@Cutls/100495957409144919" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100495957409144919)</a>
69. [↑](#cite_ref-75) <a href="https://kirishima.cloud/@Cutls/100500681668954883" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100500681668954883)</a>
70. [↑](#cite_ref-76) <a href="https://kirishima.cloud/@Cutls/100520944992830083" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100520944992830083)</a>
71. [↑](#cite_ref-77) <a href="https://kirishima.cloud/@Cutls/100526810336329305" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100526810336329305)</a>
72. [↑](#cite_ref-78) <a href="https://kirishima.cloud/@Cutls/100526810336329305" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100526810336329305)</a>
73. [↑](#cite_ref-79) <a href="https://kirishima.cloud/@Cutls/100526810336329305" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100526810336329305)</a>
74. [↑](#cite_ref-80) <a href="https://kirishima.cloud/@Cutls/100557134495236262" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100557134495236262)</a>
75. [↑](#cite_ref-81) <a href="https://kirishima.cloud/@Cutls/100595112992851567" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100595112992851567)</a>
76. [↑](#cite_ref-82) <a href="https://kirishima.cloud/@Cutls/100600186993496090" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100600186993496090)</a>
77. [↑](#cite_ref-83) <a href="https://kirishima.cloud/@Cutls/100605651546221689" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100605651546221689)</a>
78. [↑](#cite_ref-84) <a href="https://kirishima.cloud/@Cutls/100703150634814228" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100703150634814228)</a>
79. [↑](#cite_ref-85) <a href="https://kirishima.cloud/@Cutls/100707992052365833" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100707992052365833)</a>
80. [↑](#cite_ref-86) <a href="https://kirishima.cloud/@Cutls/100708409163001230" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100708409163001230)</a>
81. [↑](#cite_ref-87) <a href="https://kirishima.cloud/@Cutls/100740969036097384" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100740969036097384)</a>
82. [↑](#cite_ref-88) <a href="https://kirishima.cloud/@Cutls/100747791240691208" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100747791240691208)</a>
83. [↑](#cite_ref-89) <a href="https://kirishima.cloud/@Cutls/100753066449479636" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100753066449479636)</a>
84. [↑](#cite_ref-91) <a href="https://kirishima.cloud/@Cutls/101208485650187778" rel="nofollow">@Cutls@kirishima.cloudのトゥート (101208485650187778)</a>
85. [↑](#cite_ref-92) <a href="https://kirishima.cloud/@Cutls/101661684258224807" rel="nofollow">@Cutls@kirishima.cloudのトゥート (101661684258224807)</a>
86. [↑](#cite_ref-93) <a href="https://kirishima.cloud/@Cutls/101703785789645357" rel="nofollow">@Cutls@kirishima.cloudのトゥート (101703785789645357)</a>
87. [↑](#cite_ref-94) <a href="https://kirishima.cloud/@Cutls/101718164822125148" rel="nofollow">@Cutls@kirishima.cloudのトゥート (101718164822125148)</a>
88. [↑](#cite_ref-95) <a href="https://kirishima.cloud/@Cutls/101425165584777270" rel="nofollow">@Cutls@kirishima.cloudのトゥート (101425165584777270)</a>
89. [↑](#cite_ref-96) <a href="https://kirishima.cloud/@Kirishimalab21/99386678369823539" rel="nofollow">@Kirishimalab21@kirishima.cloudのトゥート (99386678369823539)</a>。インスタンスの詳細情報にもこの旨が表記されている。
90. [↑](#cite_ref-98) <a href="https://kirishima.cloud/@Cutls/99467732924983524" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99467732924983524)</a>
91. [↑](#cite_ref-99) <a href="https://kirishima.cloud/@Cutls/99340831080989958" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99340831080989958)</a>
92. [↑](#cite_ref-100) <a href="https://kirishima.cloud/@Cutls/99384166904607153" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99384166904607153)</a>
93. [↑](#cite_ref-102) <a href="https://kirishima.cloud/@Cutls/99370399582358614" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99370399582358614)</a>
94. [↑](#cite_ref-103) <a href="https://kirishima.cloud/@Cutls/99384166904607153" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99384166904607153)</a>
95. [↑](#cite_ref-104) <a href="https://kirishima.cloud/@Cutls/99372321494800438" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99372321494800438)</a>
96. [↑](#cite_ref-105) <a href="https://kirishima.cloud/@Cutls/99372321494800438" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99372321494800438)</a>
97. [↑](#cite_ref-106) <a href="https://kirishima.cloud/@Cutls/99467732924983524" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99467732924983524)</a>
98. [↑](#cite_ref-108) <a href="https://kirishima.cloud/@Cutls/99370399582358614" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99370399582358614)</a>
99. [↑](#cite_ref-109) <a href="https://kirishima.cloud/@Cutls/99377687829195565" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99377687829195565)</a>
100. [↑](#cite_ref-110) <a href="https://kirishima.cloud/@Cutls/99377687829195565" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99377687829195565)</a>
101. [↑](#cite_ref-111) <a href="https://kirishima.cloud/@Cutls/99377687829195565" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99377687829195565)</a>
102. [↑](#cite_ref-112) <a href="https://kirishima.cloud/@Cutls/99490797237550877" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99490797237550877)</a>
103. [↑](#cite_ref-113) <a href="https://kirishima.cloud/@Cutls/99387525618865536" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99387525618865536)</a>
104. [↑](#cite_ref-114) <a href="https://kirishima.cloud/@Cutls/99411212169345313" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99411212169345313)</a>
105. [↑](#cite_ref-115) <a href="https://kirishima.cloud/@Cutls/99490797237550877" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99490797237550877)</a>
106. [↑](#cite_ref-116) <a href="https://kirishima.cloud/@Cutls/99514006824545949" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99514006824545949)</a>
107. [↑](#cite_ref-118) <a href="https://kirishima.cloud/@Cutls/99535223941610224" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99535223941610224)</a>
108. [↑](#cite_ref-119) <a href="https://kirishima.cloud/@Cutls/99541707996242411" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99541707996242411)</a>
109. [↑](#cite_ref-120) <a href="https://kirishima.cloud/@Cutls/99541707996242411" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99541707996242411)</a>
110. [↑](#cite_ref-121) <a href="https://kirishima.cloud/@Cutls/99547583877159246" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99547583877159246)</a>
111. [↑](#cite_ref-122) <a href="https://kirishima.cloud/@Cutls/99659959119943073" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99659959119943073)</a>
112. [↑](#cite_ref-123) <a href="https://kirishima.cloud/@Cutls/99659959119943073" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99659959119943073)</a>
113. [↑](#cite_ref-124) <a href="https://kirishima.cloud/@Cutls/99659959119943073" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99659959119943073)</a>
114. [↑](#cite_ref-125) <a href="https://kirishima.cloud/@Cutls/99659959119943073" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99659959119943073)</a>
115. [↑](#cite_ref-126) <a href="https://kirishima.cloud/@Cutls/99659959119943073" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99659959119943073)</a>
116. [↑](#cite_ref-127) <a href="https://kirishima.cloud/@Cutls/99659959119943073" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99659959119943073)</a>
117. [↑](#cite_ref-128) <a href="https://kirishima.cloud/@Cutls/99714470599339273" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99714470599339273)</a>
118. [↑](#cite_ref-129) <a href="https://kirishima.cloud/@Cutls/99683981955646272" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99683981955646272)</a>
119. [↑](#cite_ref-131) <a href="https://kirishima.cloud/@Cutls/99699845250185162" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99699845250185162)</a>
120. [↑](#cite_ref-132) <a href="https://kirishima.cloud/@Cutls/99753554286172019" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99753554286172019)</a>
121. [↑](#cite_ref-133) <a href="https://kirishima.cloud/@Cutls/99753554286172019" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99753554286172019)</a>
122. [↑](#cite_ref-134) <a href="https://kirishima.cloud/@Cutls/99776280199886582" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99776280199886582)</a>
123. [↑](#cite_ref-135) <a href="https://kirishima.cloud/@Cutls/99776280199886582" rel="nofollow">@Cutls@kirishima.cloudのトゥート (99776280199886582)</a>
124. [↑](#cite_ref-137) <a href="https://kirishima.cloud/@Cutls/100000114985085860" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100000114985085860)</a>
125. [↑](#cite_ref-138) <a href="https://kirishima.cloud/@Cutls/100000114985085860" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100000114985085860)</a>
126. [↑](#cite_ref-139) <a href="https://kirishima.cloud/@Cutls/100060424703893598" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100060424703893598)</a>
127. [↑](#cite_ref-140) <a href="https://kirishima.cloud/@Cutls/100187214560861540" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100187214560861540)</a>
128. [↑](#cite_ref-141) <a href="https://kirishima.cloud/@Cutls/100220846074652325" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100220846074652325)</a>
129. [↑](#cite_ref-142) <a href="https://kirishima.cloud/@Cutls/100418553856486893" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100418553856486893)</a>
130. [↑](#cite_ref-143) <a href="https://kirishima.cloud/@Cutls/100463367670415176" rel="nofollow">@Cutls@kirishima.cloudのトゥート (100463367670415176)</a>
131. [↑](#cite_ref-144) <a href="https://thedesk.top/mias.html" rel="nofollow">https://thedesk.top/mias.html</a>
132. [↑](#cite_ref-145) <a href="https://translate.thedesk.top" rel="nofollow">https://translate.thedesk.top</a>

</div>

</div>
