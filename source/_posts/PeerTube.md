---
title: PeerTube.md
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
<th>PeerTube</th>
</tr>

<tr class="odd">
<th>画像</th>
<td><a href="/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Peertube-2017-12-26.png" title="PeerTube"><img src="/images/thumb/5/52/Peertube-2017-12-26.png/120px-Peertube-2017-12-26.png" srcset="/images/thumb/5/52/Peertube-2017-12-26.png/180px-Peertube-2017-12-26.png 1.5x, /images/thumb/5/52/Peertube-2017-12-26.png/240px-Peertube-2017-12-26.png 2x" width="120" height="120" alt="PeerTube" /></a></td>
</tr>
<tr class="even">
<th scope="row">開発者</th>
<td><a href="https://framapiaf.org/@Chocobozzz" rel="nofollow">Chocobozzz</a></td>
</tr>
<tr class="odd">
<th scope="row">ソースコード</th>
<td><a href="https://github.com/Chocobozzz/PeerTube" rel="nofollow">GitHub</a></td>
</tr>
<tr class="even">
<th scope="row">プラットホーム</th>
<td>Web</td>
</tr>
<tr class="odd">
<th scope="row">プログラミング言語</th>
<td>TypeScript (Node.js)</td>
</tr>
<tr class="even">
<th scope="row">寄付</th>
<td><a href="https://soutenir.framasoft.org/en/" rel="nofollow">Framasoft</a></td>
</tr>
<tr class="odd">
<th scope="row">ライセンス</th>
<td><a href="/GNU_Affero_General_Public_License" title="GNU Affero General Public License">GNU Affero General Public License</a> 3.0</td>
</tr>
<tr class="even">
<th scope="row">Webサイト</th>
<td><a href="https://joinpeertube.org/" rel="nofollow">https://joinpeertube.org/</a><br />
<a href="https://peertube.cpy.re" rel="nofollow">開発者によるデモサーバ</a></td>
</tr>
</tbody>
</table>

  
**PeerTube**とは、[WebTorrent](/WebTorrent "WebTorrent (存在しないページ)")を用いたオープンソースの分散型動画ストリーミングプラットフォームである。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 インスタンス一覧](#.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7)
-   [3 エピソード](#.E3.82.A8.E3.83.94.E3.82.BD.E3.83.BC.E3.83.89)
    -   [3.1 Cobaltとの関係](#Cobalt.E3.81.A8.E3.81.AE.E9.96.A2.E4.BF.82)
    -   [3.2 Blenderによるインスタンス開設](#Blender.E3.81.AB.E3.82.88.E3.82.8B.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E9.96.8B.E8.A8.AD)
-   [4 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [5 出典](#.E5.87.BA.E5.85.B8)

</div>

## 概要

PeerTubeは<a href="https://framapiaf.org/@Chocobozzz" rel="nofollow">Chocobozzz</a>氏によってリリースされたP2P(BitTorrent)の動画ストリーミングプラットフォームであり、実装に[WebTorrent](/WebTorrent "WebTorrent (存在しないページ)")及び[ActivityPub](/ActivityPub "ActivityPub")を用いている。

そのためMastodonや他の[ActivityPub](/ActivityPub "ActivityPub")ベースのアプリケーションと[連合](/%E9%80%A3%E5%90%88 "連合")をすることができ、Mastodonもバージョン2.1.0から正式にPeerTubeとの通信を可能にするアップデートが取られた<sup>[\[1\]](#cite_note-1)</sup>。

## インスタンス一覧

PeerTubeのインスタンス一覧を提供するウェブサイトには、公式の提供する<a href="https://instances.joinpeertube.org" rel="nofollow">PeerTube instances</a>がある。

多数の分散SNSのインスタンス一覧の提供やインスタンス監視を行なっている[Fediverse Network](/Fediverse_Network "Fediverse Network")は、PeerTube instancesからデータを取得してインスタンス一覧を<a href="https://fediverse.network/peertube" rel="nofollow">提供している</a>。

## エピソード

### Cobaltとの関係

Mastodonの開発者である[Eugen Rochko](/Eugen_Rochko "Eugen Rochko")氏によって開発されていた[Cobalt](/Cobalt "Cobalt (存在しないページ)")も同様に[WebTorrent](/WebTorrent "WebTorrent (存在しないページ)")実装の分散型動画ストリーミングプラットフォームであったが、従来PeerTubeが[ActivityPub](/ActivityPub "ActivityPub")を実装していなかったことに対して[Cobalt](/Cobalt "Cobalt (存在しないページ)")では実装されていたことに違いがあった。しかしPeerTubeが従来の配信方法から[ActivityPub](/ActivityPub "ActivityPub")ベースの配信方法に切り替えたことでCobaltと同様の機能が実装され、「開発を続ける必要がなくなった」として開発を終了し、以後Mastodonでの互換性向上に努めている<sup>[\[2\]](#cite_note-2)</sup>。

### Blenderによるインスタンス開設

Blender<sup>[\[3\]](#cite_note-3)</sup>は[オープンソース](/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9 "オープンソース")の3Dグラフィックス作成ソフトウェア。BlenderのYouTubeのチャンネルがブロックされたことを受けて、2018年6月19日、PeerTubeのインスタンス<sup>[\[4\]](#cite_note-4)</sup>が開設された<sup>[\[5\]](#cite_note-5)[\[6\]](#cite_note-6)</sup>。

## 関連項目

-   [Mastodon](/Mastodon "Mastodon")
-   [GNU social](/GNU_social "GNU social")

## 出典

<div>

1.  [↑](#cite_ref-1) <a href="http://www.itmedia.co.jp/news/articles/1712/16/news014.html" rel="nofollow">マストドン2.1.0公開　PeerTubeとの統合も - ITmedia NEWS</a>
2.  [↑](#cite_ref-2) <a href="https://www.patreon.com/posts/15635446" rel="nofollow">Mastodon: Update and retrospective</a>
3.  [↑](#cite_ref-3) <a href="https://www.blender.org/" rel="nofollow">https://www.blender.org/</a>
4.  [↑](#cite_ref-4) <a href="https://video.blender.org" rel="nofollow">https://video.blender.org</a>
5.  [↑](#cite_ref-5) <a href="https://www.blender.org/media-exposure/youtube-blocks-blender-videos-worldwide/" rel="nofollow">YouTube Blocks Blender Videos Worldwide</a>
6.  [↑](#cite_ref-6) <a href="https://gigazine.net/news/20180621-blender-switch-youtube-to-peertube/" rel="nofollow">YouTubeが広告なしで動画を公開していたBlenderをブロック、BlenderはP2Pによる無料ストリーミングにチャレンジ</a>

</div>

</div>
