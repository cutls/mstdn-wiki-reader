---
title: Fediverse Observer (Poduptime).md
---
<div>

[Fediverse Observer (曖昧さ回避)](/Fediverse_Observer "Fediverse Observer")

|                    |                                                                                                                                                                                                                                                    |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル           | Fediverse Observer                                                                                                                                                                                                                                 |
| 画像               | [<img src="/images/thumb/e/e3/Fediverse-observer.png/60px-Fediverse-observer.png" srcset="/images/e/e3/Fediverse-observer.png 1.5x" width="60" height="60" alt="Amaroq" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Fediverse-observer.png "Amaroq") |
| ソースコード       | <a href="https://gitlab.com/diasporg/poduptime" rel="nofollow">https://gitlab.com/diasporg/poduptime</a>                                                                                                                                           |
| プラットホーム     | ウェブ                                                                                                                                                                                                                                             |
| プログラミング言語 | PHP                                                                                                                                                                                                                                                |
| 寄付               | <a href="https://donorbox.org/fediverse-observer" rel="nofollow">https://donorbox.org/fediverse-observer</a>                                                                                                                                       |
| ライセンス         | [GNU Affero General Public License](/GNU_Affero_General_Public_License "GNU Affero General Public License")                                                                                                                                        |
| Webサイト          | <a href="https://fediverse.observer/" rel="nofollow">https://fediverse.observer/</a>                                                                                                                                                               |

  

**Fediverse Observer**は、[分散SNS](/%E5%88%86%E6%95%A3SNS "分散SNS")の[インスタンス](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "インスタンス")の物理的な位置を示す地図と、インスタンスの一覧を提供しているウェブサイト。多数の分散SNS実装に対応している。インスタンスは自動的に収集される。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 名称について](#.E5.90.8D.E7.A7.B0.E3.81.AB.E3.81.A4.E3.81.84.E3.81.A6)
-   [2 機能](#.E6.A9.9F.E8.83.BD)
    -   [2.1 地図](#.E5.9C.B0.E5.9B.B3)
    -   [2.2 リスト](#.E3.83.AA.E3.82.B9.E3.83.88)
    -   [2.3 自動選択](#.E8.87.AA.E5.8B.95.E9.81.B8.E6.8A.9E)
    -   [2.4 ウィザード](#.E3.82.A6.E3.82.A3.E3.82.B6.E3.83.BC.E3.83.89)
-   [3 脚注](#.E8.84.9A.E6.B3.A8)

</div>

## 名称について

GitLabでのリポジトリ名は**Poduptime**である。

## 機能

### 地図

インスタンスの物理的な位置が地図上に表示される。

### リスト

デフォルトの並び順は稼働率 (Uptime)。多数の並び順を選択できる。

### 自動選択

**Auto pick**ボタンを押すと、ランダムなインスタンスにジャンプする。分散SNS実装とドメイン名のブラックリスト<sup>[\[1\]](#cite_note-1)[\[2\]](#cite_note-2)</sup>が運用されている。

### ウィザード

**Use wizard**ボタンを押すと、インスタンスを選択するウィザードが開始される。順に分散SNS実装、国、ユーザー数の最小値、月間ユーザー数の最小値を選択する。推奨する分散SNS実装として[Diaspora](/Diaspora "Diaspora (存在しないページ)")、[Friendica](/Friendica "Friendica")、[Mastodon](/Mastodon "Mastodon")を挙げており、他の実装は選択できない。

## 脚注

<div>

1.  [↑](#cite_ref-1) <a href="https://gitlab.com/diasporg/poduptime/-/blob/develop/config/blacklistsoftware.txt" rel="nofollow">https://gitlab.com/diasporg/poduptime/-/blob/develop/config/blacklistsoftware.txt</a>
2.  [↑](#cite_ref-2) <a href="https://gitlab.com/diasporg/poduptime/-/blob/develop/config/blacklistdomains.txt" rel="nofollow">https://gitlab.com/diasporg/poduptime/-/blob/develop/config/blacklistdomains.txt</a>

</div>

</div>
