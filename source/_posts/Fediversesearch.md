---
title: Fediversesearch.md
---
<div>

|                    |                                                                                                                                                                                                                                                                                                        |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル           | Fediversesearch                                                                                                                                                                                                                                                                                        |
| 画像               | [<img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png "Mastodon") |
| 開発者             | [Hidenori Sekine](/Hidenori_Sekine "Hidenori Sekine (存在しないページ)")                                                                                                                                                                                                                               |
| ソースコード       | <a href="https://github.com/kaias1jp/fediversesearch" rel="nofollow">GitHub</a>                                                                                                                                                                                                                        |
| プラットホーム     | web                                                                                                                                                                                                                                                                                                    |
| プログラミング言語 | Ruby                                                                                                                                                                                                                                                                                                   |
| サービス開始日     | 2021年2月13日                                                                                                                                                                                                                                                                                          |
| ライセンス         | [MITライセンス](/MIT%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9 "MITライセンス")                                                                                                                                                                                                                     |
| Webサイト          | <a href="https://www.fediversesearch.com" rel="nofollow">公開サイト</a>                                                                                                                                                                                                                                |

  

[分散SNS](/%E5%88%86%E6%95%A3SNS "分散SNS")のサーバ・インスタンスのみの検索に特化したサイトである。

mstdn.jpなどで公開されている[Peers API](/Peers_API "Peers API")で取得できるサーバ一覧を取得して、それを元にサーバのインスタンス情報を収集してDBに保存。それを基にキーワードによる検索ができるようになっている。

取得したデータのうち、titleが取得できていないサーバについては検索結果に表示されないようになっている。これは、すでに分散SNSとしては存在しないサーバにアクセスしたときに詐欺サイトにつながる可能性などを考慮したものである。

インスタンス情報はmastodon API系とmisskey系を取得している。そのため、現時点では[Mastodon](/Mastodon "Mastodon")、[Pleroma](/Pleroma "Pleroma")、[PixelFed](/PixelFed "PixelFed")、[Misskey](/Misskey "Misskey")のデータが検索できる。

検索機能は貧弱であるが、単純なキーワードで分散SNSのサーバのみ結果に出るので分散SNSのサーバを探しやすい。

今後は、misskey系のpeer情報を取得できるようにしてデータの拡充を図る予定である。

</div>
