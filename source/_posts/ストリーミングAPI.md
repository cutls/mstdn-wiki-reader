---
title: ストリーミングAPI.md
---
<div>

|                        |                                                                                                                                                                                                                                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル               | ストリーミングAPI                                                                                                                                                                                                                                                                                      |
| 画像                   | [<img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png "Mastodon") |
| 実装バージョン         | 1.0                                                                                                                                                                                                                                                                                                    |
| APIエンドポイント      | `GET /api/v1/streaming/userGET /api/v1/streaming/publicGET /api/v1/streaming/public/localGET /api/v1/streaming/hashtagGET /api/v1/streaming/listGET /api/v1/streaming/direct`                                                                                                                          |
| 利用可能なインスタンス | 全てのインスタンス                                                                                                                                                                                                                                                                                     |
| リンク                 | <a href="https://github.com/tootsuite/mastodon/releases/tag/v1.0" rel="nofollow">実装されたリリース</a><sup>[\[1\]](#cite_note-1)</sup>                                                                                                                                                                |

  
**ストリーミングAPI**（英：Streaming API）とは、[Mastodon](/Mastodon "Mastodon")における[API](/API "API (存在しないページ)")の一種。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [3 外部リンク](#.E5.A4.96.E9.83.A8.E3.83.AA.E3.83.B3.E3.82.AF)
-   [4 脚注](#.E8.84.9A.E6.B3.A8)

</div>

## 概要

ストリーミング（Streaming）とはリアルタイムでデータをダウンロードしながら表示していくインターネット上でのデータ配信方法の一種を指す語であり、Mastodonにおけるストリーミングは、タイムラインをリアルタイムで表示する機能である。WebSocketの技術を使用している。また全ての通信でTLSによる暗号化がなされるため、URIのスキームはwssとなる。

Mastodonには複数種類の[タイムライン](/%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3 "タイムライン")が存在するが、そのいずれでも利用できる。逆に、トゥートの一覧であってもタイムラインではないものにはストリーミングAPIは存在しない。(ユーザーのトゥート一覧やお気に入り登録したトゥート一覧など)

以前から同種の機能を持つソーシャル・ネットワーキング・サービスとして[Twitter](/Twitter "Twitter")が挙げられたが、2018年8月に廃止されている。

## 関連項目

-   [タイムライン](/%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3 "タイムライン")

## 外部リンク

-   <a href="https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md" rel="nofollow">公式ドキュメント</a>

## 脚注

<div>

1.  [↑](#cite_ref-1) user,public,hashtagのみ。

</div>

</div>
