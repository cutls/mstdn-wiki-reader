---
title: Scheduled statuses.md
---
<div>

|                        |                                                                                                                                                                                                                                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル               | Scheduled statuses(予約投稿/時間指定投稿)                                                                                                                                                                                                                                                              |
| 画像                   | [<img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png "Mastodon") |
| 実装バージョン         | 2.7.0                                                                                                                                                                                                                                                                                                  |
| APIエンドポイント      | `GET /api/v1/scheduled_statuses (一覧の取得)`                                                                                                                                                                                                                                                          |
| 利用可能なインスタンス | 全てのインスタンス                                                                                                                                                                                                                                                                                     |
| リンク                 | <a href="https://github.com/tootsuite/mastodon/releases/tag/v2.7.0" rel="nofollow">実装されたリリース</a>                                                                                                                                                                                              |

  
**Scheduled statuses**は、2019年1月4日に[マストドン公式リポジトリ](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E5%85%AC%E5%BC%8F%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA "マストドン公式リポジトリ")にマージされ、バージョン2.7.0<sup>[\[1\]](#cite_note-1)</sup>で利用可能になった機能。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 注意](#.E6.B3.A8.E6.84.8F)
-   [3 注釈](#.E6.B3.A8.E9.87.88)
-   [4 出典](#.E5.87.BA.E5.85.B8)

</div>

## 概要

ある時刻までトゥートを投稿しないようにするAPIである。

バージョン2.7.0で提供されたのはAPIのみであり、UIは実装されていない。[Subway Tooter](/Subway_Tooter "Subway Tooter")はバージョン2.6.2<sup>[\[2\]](#cite_note-2)</sup>、[TheDesk](/TheDesk "TheDesk")はMiria (17.0.1)<sup>[\[注釈 1\]](#cite_note-3)[\[3\]](#cite_note-4)</sup>、[星プテラノ](/%E6%98%9F%E3%83%97%E3%83%86%E3%83%A9%E3%83%8E "星プテラノ")はバージョン1.12<sup>[\[4\]](#cite_note-5)</sup>でこの機能のUIを先行して実装している。

なお、日本語では表記揺れが存在する。[Subway Tooter](/Subway_Tooter "Subway Tooter")、[星プテラノ](/%E6%98%9F%E3%83%97%E3%83%86%E3%83%A9%E3%83%8E "星プテラノ")では「予約投稿」、[TheDesk](/TheDesk "TheDesk")では「時間指定投稿」を日本語訳として用いている。WebUIがないため、公式といえる日本語訳は現時点で存在しない。

## 注意

5分以内のトゥートは即時トゥートされる。また、サーバーの時刻設定が正しいという保証はないため、自分が思っていた投稿時刻との差異が発生する可能性がある。

## 注釈

<div>

1.  [↑](#cite_ref-3) LinuxのSnap版のみ公式ページからダウンロード可能。Windows版はGitHub Releasesからベータ版としてダウンロード可能。

</div>

## 出典

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/tootsuite/mastodon/releases/tag/v2.7.0" rel="nofollow">https://github.com/tootsuite/mastodon/releases/tag/v2.7.0</a>
2.  [↑](#cite_ref-2) <a href="https://github.com/tateisu/SubwayTooter/releases/tag/v3.2.4" rel="nofollow">https://github.com/tateisu/SubwayTooter/releases/tag/v3.2.4</a>
3.  [↑](#cite_ref-4) <a href="https://kirishima.cloud/@Cutls/101456928378443353" rel="nofollow">@Cutls@kirishima.cloudのトゥート (101456928378443353)</a>
4.  [↑](#cite_ref-5) <a href="https://handon.club/@pgo/101496897765583816" rel="nofollow">@pgo@handon.clubのトゥート (101496897765583816)</a>

</div>

</div>
