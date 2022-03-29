---
title: Pub-relay.md
---
<div>

|                    |                                                                                                                                                                                                                                                                                                        |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル           | pub-relay                                                                                                                                                                                                                                                                                              |
| 画像               | [<img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png "Mastodon") |
| 開発者             | <a href="https://source.joinmastodon.org/RX14" rel="nofollow">Chris Hobbs</a>                                                                                                                                                                                                                          |
| ソースコード       | <a href="https://source.joinmastodon.org/mastodon/pub-relay" rel="nofollow">https://source.joinmastodon.org/mastodon/pub-relay</a>                                                                                                                                                                     |
| プログラミング言語 | Crystal                                                                                                                                                                                                                                                                                                |
| ライセンス         | [GNU Affero General Public License](/GNU_Affero_General_Public_License "GNU Affero General Public License")                                                                                                                                                                                            |

  
**pub-relay**は、[ActivityPub](/ActivityPub "ActivityPub")のアクションを中継するサーバー。pub-relayのinboxにActivityPubのアクション (Create, Update, Delete, Announce, Undo) を送ると、pub-relayのフォロワーにそのアクションが送られる。pub-relayをフォローするには、`https://www.w3.org/ns/activitystreams#Public`をsubscribeするアクションを送ればよい。

マストドンの公式プロジェクトとみなされており、[マストドン公式リポジトリ](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E5%85%AC%E5%BC%8F%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA "マストドン公式リポジトリ")に置かれている。

## インスタンス

-   <a href="https://relay.toot.yukimochi.jp/" rel="nofollow">YUKIMOCHI Toot Relay Service</a> ([雪餅](/%E9%9B%AA%E9%A4%85 "雪餅")が運営しているインスタンス。現在は[Activity-Relay](/Activity-Relay "Activity-Relay")に変更されている。)
-   <a href="https://pub-relay.hama3.net/" rel="nofollow">h3zjp pub-relay Server</a> ([h3zjp](/H3zjp "H3zjp (存在しないページ)")が運営しているインスタンス)
-   <a href="https://relay.mstdn-jp.site/" rel="nofollow">Enjoy Fediverse</a> (ランランが運営しているインスタンス)
-   <a href="https://relay.taruntarun.net/" rel="nofollow">taruntarun relay</a> (mayaehが運営しているインスタンス)

## ハッシュタグリレー

**ハッシュタグリレー**は、pub-relayのフォーク。[ハッシュタグ](/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0 "ハッシュタグ")が付いた投稿のみをリレーするよう改造されている。インスタンスは <a href="https://hashtag-relay.dtp-mstdn.jp" rel="nofollow">https://hashtag-relay.dtp-mstdn.jp</a> に置かれている。

## 外部リンク

-   <a href="https://source.joinmastodon.org/mastodon/pub-relay" rel="nofollow">https://source.joinmastodon.org/mastodon/pub-relay</a>

</div>
