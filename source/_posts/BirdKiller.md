---
title: BirdKiller.md
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
<th>BirdKiller</th>
</tr>

<tr class="odd">
<th>画像</th>
<td><a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png" title="Mastodon"><img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" /></a></td>
</tr>
<tr class="even">
<th scope="row">開発者</th>
<td><a href="/THE_BOSS" title="THE BOSS">THE BOSS</a></td>
</tr>
<tr class="odd">
<th scope="row">ソースコード</th>
<td><a href="https://github.com/theboss/luckyapps" rel="nofollow">https://github.com/theboss/luckyapps</a>
[
リンク切れ]</td>
</tr>
<tr class="even">
<th scope="row">プラットホーム</th>
<td>ウェブ</td>
</tr>
<tr class="odd">
<th scope="row">プログラミング言語</th>
<td>Javascript</td>
</tr>
<tr class="even">
<th scope="row">ライセンス</th>
<td>MIT License</td>
</tr>
<tr class="odd">
<th scope="row">Webサイト</th>
<td><a href="https://luckyapps.herokuapp.com/" rel="nofollow">https://luckyapps.herokuapp.com/</a>
[
リンク切れ]</td>
</tr>
</tbody>
</table>

  

**BirdKiller**は、[THE BOSS](/THE_BOSS "THE BOSS")氏により公開されているウェブアプリケーションの一つで、[sync.twi2mstdn.space](/Twitter%E2%86%92Mastodon%E3%83%88%E3%82%A5%E3%83%BC%E3%83%88%E5%90%8C%E6%9C%9F%E3%82%A2%E3%83%97%E3%83%AA "Twitter→Mastodonトゥート同期アプリ")をはじめ特定クライアントでトゥートしているユーザーを自動的にミュートする。

## 概要

Mastodon上では、[Twitter](/Twitter "Twitter")と連携するツールを用いてTwitter側の書き込みをそのままトゥートに同期しているユーザーが少なくなかった。

しかしこれは、Twitter上でのやり取りなどをそのまま同期してしまうため、Mastodon上では意味不明であることがしばしばあった。

これを煩わしく感じていたユーザーに向け、自動で連携ユーザーを[ミュート](/%E3%83%9F%E3%83%A5%E3%83%BC%E3%83%88 "ミュート")するツールとして公開されたのがBirdKillerである。

仕組みとしては、[ローカルタイムライン](/%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3 "ローカルタイムライン")を取得・ストリーミングし、流れてきたトゥートの中で特定のクライアントから投稿されたトゥートを検出、自動的にユーザーをミュートするというもの。

ミュートする対象は、当初は「**sync.twi2mstdn.space**」のみであったが、現在では自由にミュートする対象クライアントを追加・変更することが可能となっている。

## 外部リンク

-   <a href="https://luckyapps.herokuapp.com/" rel="nofollow">BirdKiller</a>
    \[
    リンク切れ\]
-   <a href="https://github.com/theboss/luckyapps" rel="nofollow">https://github.com/theboss/luckyapps</a>
    \[
    リンク切れ\]

</div>
