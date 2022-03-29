---
title: Libsocialnet.md
---
<div>

|                    |                                                                                                                                                                                                                                                                                                        |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル           | libsocialnet                                                                                                                                                                                                                                                                                           |
| 画像               | [<img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png "Mastodon") |
| 開発者             | [墓場人夜](/%E5%A2%93%E5%A0%B4%E4%BA%BA%E5%A4%9C "墓場人夜")                                                                                                                                                                                                                                           |
| プラットホーム     | Linux (DebianまたはUbuntu推奨)                                                                                                                                                                                                                                                                         |
| プログラミング言語 | C++                                                                                                                                                                                                                                                                                                    |
| サービス開始日     | 2018年9月23日                                                                                                                                                                                                                                                                                          |
| ライセンス         | [GNU Affero General Public License](/GNU_Affero_General_Public_License "GNU Affero General Public License")                                                                                                                                                                                            |

  
**libsocialnet**は、[GNU social](/GNU_social "GNU social")、[Mastodon](/Mastodon "Mastodon")、[Pleroma](/Pleroma "Pleroma")、[microblog.pub](/Microblog.pub "Microblog.pub")など (正確なリストは後述) の公開情報 (認証せずに取得できる情報) を取得する、C++用のライブラリ。動作環境はDebianまたはUbuntuを推奨している。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 対応する実装](#.E5.AF.BE.E5.BF.9C.E3.81.99.E3.82.8B.E5.AE.9F.E8.A3.85)
-   [2 可能な操作](#.E5.8F.AF.E8.83.BD.E3.81.AA.E6.93.8D.E4.BD.9C)
-   [3 沿革](#.E6.B2.BF.E9.9D.A9)
-   [4 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [5 脚注](#.E8.84.9A.E6.B3.A8)

</div>

## 対応する実装

-   [Dolphin](/Dolphin "Dolphin")
-   [Friendica](/Friendica "Friendica")
-   [Gab](/Gab "Gab") - マストドンとほとんど同じだが、libsocialnetでは区別される。
-   [GNU social](/GNU_social "GNU social")
-   [Misskey](/Misskey "Misskey") 11
-   [Kibou](/Kibou "Kibou")
-   [Mastodon](/Mastodon "Mastodon")
-   [PixelFed](/PixelFed "PixelFed")
-   [Pleroma](/Pleroma "Pleroma")
-   Misskey 10からフォークして[めいめい](/%E3%82%81%E3%81%84%E3%82%81%E3%81%84 "めいめい")がメンテナンスしている実装<sup>[\[1\]](#cite_note-1)</sup>。Misskey 11とは別の実装として扱われている。めいめいによるフォークではないMisskey 10は非対応である。
-   シングルユーザー - [microblog.pub](/Microblog.pub "Microblog.pub")、[Write.as](/Write.as "Write.as")などの[お一人様インスタンス](/%E3%81%8A%E4%B8%80%E4%BA%BA%E6%A7%98%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "お一人様インスタンス")。
-   [Socialhome](/Socialhome "Socialhome")

## 可能な操作

ホストの実装 (GNU social, Mastodon, Pleroma, microblog.pubなどの別) を自動判別する機能を持つ。

任意のホストから以下の情報を取得できる。

-   [インスタンス](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "インスタンス")の名称、説明文、サムネイル画像のURL
-   [ローカルタイムライン](/%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3 "ローカルタイムライン")
-   ユーザーの[表示名](/%E8%A1%A8%E7%A4%BA%E5%90%8D "表示名")、[プロフィール](/%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB "プロフィール")、[アイコン](/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3 "アイコン")画像のURL、タイプ ([ボット](/Bot "Bot")と人間の別)
-   ユーザータイムライン
-   ユーザーのフォロー

タイムライン (ローカルタイムラインとユーザータイムライン) はステータスの列である。ステータスは以下の要素を持つ。

-   ホスト名
-   ユーザー名
-   タイムスタンプ (ステータスが作成された日時)
-   内容 (文字列)
-   ユーザーのタイムスタンプ (ユーザーが作成された日時)

## 沿革

-   2018年9月頃、実用的な水準に達する。対応する実装は[GNU social](/GNU_social "GNU social")、[マストドン](/Mastodon "Mastodon")、[Pleroma](/Pleroma "Pleroma")、[Misskey](/Misskey "Misskey")であった。
-   2018年12月17日<sup>[\[2\]](#cite_note-2)</sup>、[microblog.pub](/Microblog.pub "Microblog.pub")に対応した。また、[お一人様インスタンス](/%E3%81%8A%E4%B8%80%E4%BA%BA%E6%A7%98%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "お一人様インスタンス")に限り、[Write.as](/Write.as "Write.as")と[Write Freely](/Write_Freely "Write Freely")に対応した。
-   2019年5月16日、[Misskey](/Misskey "Misskey")の対応を廃止。
-   2019年6月上旬、Misskeyの対応を再開。Misskey 11と、[めいめい](/%E3%82%81%E3%81%84%E3%82%81%E3%81%84 "めいめい")によるフォーク<sup>[\[3\]](#cite_note-3)</sup>を区別するようになった。
-   2019年7月6日、[Kibou](/Kibou "Kibou")に対応。
-   2019年7月7日、[Gab](/Gab "Gab")を[Mastodon](/Mastodon "Mastodon")から区別するようになった。
-   2019年10月10日、[PixelFed](/PixelFed "PixelFed")に対応。
-   2019年12月7日、[Dolphin](/Dolphin "Dolphin")に対応。
-   2020年2月頃、[Friendica](/Friendica "Friendica")に対応。
-   2020年3月頃、[Socialhome](/Socialhome "Socialhome")に対応。
-   2020年3月頃、開発終了。

## 関連項目

-   [分散SNSフォーラム](/%E5%88%86%E6%95%A3SNS%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A9%E3%83%A0 "分散SNSフォーラム")
-   [マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング")
-   [Recommendation Fairness Warrior](/Recommendation_Fairness_Warrior "Recommendation Fairness Warrior")
-   [Fediverse Observer](/Fediverse_Observer "Fediverse Observer")

## 脚注

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/mei23/misskey" rel="nofollow">https://github.com/mei23/misskey</a>
2.  [↑](#cite_ref-2) <a href="https://gitlab.com/distsn/libsocialnet/issues/8" rel="nofollow">https://gitlab.com/distsn/libsocialnet/issues/8</a>
3.  [↑](#cite_ref-3) <a href="https://github.com/mei23/misskey" rel="nofollow">https://github.com/mei23/misskey</a>

</div>

</div>
