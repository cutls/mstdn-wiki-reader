---
title: Polls.md
---
<div>

|                        |                                                                                                                                                                                                                                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル               | Polls                                                                                                                                                                                                                                                                                                  |
| 画像                   | [<img src="/images/thumb/0/00/Mastodon_logo.png/120px-Mastodon_logo.png" srcset="/images/thumb/0/00/Mastodon_logo.png/180px-Mastodon_logo.png 1.5x, /images/0/00/Mastodon_logo.png 2x" width="120" height="120" alt="Mastodon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Mastodon_logo.png "Mastodon") |
| 実装バージョン         | 2.8.0                                                                                                                                                                                                                                                                                                  |
| APIエンドポイント      | `GET /api/v1/polls/ など`                                                                                                                                                                                                                                                                              |
| 利用可能なインスタンス | 全てのインスタンス                                                                                                                                                                                                                                                                                     |
| リンク                 | <a href="https://github.com/tootsuite/mastodon/commit/230a012f0090c496fc5cdb011bcc8ed732fd0f5c" rel="nofollow">実装されたコミット</a>                                                                                                                                                                  |

  
**Polls**または**アンケート**または**投票**は、[Mastodon](/Mastodon "Mastodon")の機能。2019年3月4日に[マストドン公式リポジトリ](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E5%85%AC%E5%BC%8F%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA "マストドン公式リポジトリ")のmasterブランチにコミットされ、master追従をすれば利用可能になった。期待度の高い機能の1つであったため、多くのインスタンスがmaster追従を行った。

4月11日に2.8.0として正式版となった。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 互換性](#.E4.BA.92.E6.8F.9B.E6.80.A7)
-   [2 日本語表記](#.E6.97.A5.E6.9C.AC.E8.AA.9E.E8.A1.A8.E8.A8.98)
-   [3 機能](#.E6.A9.9F.E8.83.BD)
    -   [3.1 投票の作成](#.E6.8A.95.E7.A5.A8.E3.81.AE.E4.BD.9C.E6.88.90)
        -   [3.1.1 選択肢](#.E9.81.B8.E6.8A.9E.E8.82.A2)
        -   [3.1.2 有効期限](#.E6.9C.89.E5.8A.B9.E6.9C.9F.E9.99.90)
        -   [3.1.3 複数選択](#.E8.A4.87.E6.95.B0.E9.81.B8.E6.8A.9E)
-   [4 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [5 脚注](#.E8.84.9A.E6.B3.A8)

</div>

## 互換性

[ActivityPub](/ActivityPub "ActivityPub")上で[連合](/%E9%80%A3%E5%90%88 "連合")を形成できる[Misskey](/Misskey "Misskey")と互換性が存在し、相互に作成したアンケートに回答できる。[friends.nico](/Friends.nico "Friends.nico")のアンケート機能と互換性はなく、[friends.nico](/Friends.nico "Friends.nico")上のアンケートを他のインスタンスで回答したり、その逆はできない。

## 日本語表記

masterではまだ日本語の翻訳がないので、Pollsと表記されていた。[Subway Tooter](/Subway_Tooter "Subway Tooter")は「投票」、[TheDesk](/TheDesk "TheDesk")やプロトコル上互換性のある[Misskey](/Misskey "Misskey")は「アンケート」と表記されている関係上、日本語訳についても議論があった。[Fedeloper forum](/Fedeloper_forum "Fedeloper forum")にトピック<sup>[\[1\]](#cite_note-1)</sup>が立ち、また、直接翻訳を担当していたWeblateでも同様であった。

議論を重ね、「アンケートは既に終了しました」など、Pollとしてひとまとめには「アンケート」を、行為として(Vote)は「投票」に落ち着いている。

## 機能

### 投票の作成

#### 選択肢

4つまで追加できる。最低2つ必要。[Misskey](/Misskey "Misskey")は10個まで作れる他、独自改造で増やしているインスタンスも見られる。

#### 有効期限

初期値は「1 day(1日:24時間)」になっている。5分(300秒)の設定は選択肢上に存在するものの、選択して投稿するとエラーが発生する状態がしばらく続いていたが、(2.8.0 rc3リリース前まで)[クライアント](/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88 "クライアント")で301秒を設定すると投稿可能であった。

#### 複数選択

「複数選択可」にする機能である。当初(マージされた当時)はWebUIが存在しなかったため、[Mastodon Glitch Edition](/Glitch-soc "Glitch-soc")や[Subway Tooter](/Subway_Tooter "Subway Tooter")、[TheDesk](/TheDesk "TheDesk")などの一部[クライアント](/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88 "クライアント")上でしか投稿できなかった。当初より全て投票はすべてのMastodonで複数選択が可能である。2.8.1より選択肢の左の図形をクリックして切り替えられる。丸型なら1つのみ、四角形なら複数の選択が可能となる。

## 関連項目

-   [votedon.](/Votedon "Votedon") - サードパーティのウェブアプリケーションで投票を実現していた。

## 脚注

<div>

1.  [↑](#cite_ref-1) <a href="https://forum.fedeloper.jp/t/topic/48/11" rel="nofollow">「アンケート」か「投票」か</a>

</div>

</div>
