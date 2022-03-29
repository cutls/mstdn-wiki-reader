---
title: Profile directory.md
---
<div class="mw-parser-output">

**Profile directory**は、[マストドン](/Mastodon "Mastodon")の機能。ある[インスタンス](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9 "インスタンス")のユーザーの一覧を表示する。また、ユーザーの[プロフィール](/%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB "プロフィール")に[ハッシュタグ](/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0 "ハッシュタグ")が含まれている場合、ハッシュタグごとにユーザーの一覧を見ることができる。

日本語ロケールでの表記は**ディレクトリ**または**興味のある人を見つけよう**である。

マストドンのウェブUIで使用できる。APIでは提供されない。デスクトップ用ウェブUIでは、[ユーザープロフィールページ](/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%9A%E3%83%BC%E3%82%B8 "ユーザープロフィールページ")からProfile Directoryにリンクが設けられている。スマートフォン用ウェブUIでは、Profile directoryに到達するリンクが存在しないようである。いずれにせよ、パス /explore をアドレスバーに入力することでアクセスすることができる。

Profile directoryのユーザー一覧は、最近[トゥート](/%E3%83%88%E3%82%A5%E3%83%BC%E3%83%88 "トゥート")した順に配列される。ただし、10人以上のフォロワーを持つユーザーのみが掲載される。この仕様はスパム防止のためである<sup>[\[1\]](#cite_note-1)</sup>と説明されている。しかし、新規ユーザーが10人のフォロワーを獲得するのは容易ではなく、Profile directoryに掲載される見込みは薄い<sup>[\[2\]](#cite_note-2)[\[3\]](#cite_note-3)</sup>という批判がある。

ユーザーがProfile directoryに掲載されるかどうかはユーザー自身が選択することができ、オプトインである。設定画面の**List this account on the directory** (日本語の文言は**ディレクトリに掲載する**) でオプトインできる。

<div class="toc">

<div class="toctitle" lang="ja" dir="ltr">

## 目次

</div>

-   1
    2019年8月以降の仕様
-   2
    他の分散SNSとの関係
-   3
    関連項目
-   4
    外部リンク
-   5
    脚注

</div>

2019年8月以降の仕様

Profile directoryの仕様は、2019年8月30日頃<sup>[\[4\]](#cite_note-4)[\[5\]](#cite_note-5)</sup>に大きく変更された。この変更はマストドン3.0のリリースに反映される見込みである。

新しい仕様では、ローカルな (インスタンス内部の) ユーザーだけでなく、リモートの (他のインスタンスの) ユーザーも掲載されるようになった。Profile directoryに掲載されるリモートのユーザーとは、そのインスタンスですでに観測されているユーザー (典型的には、そのインスタンスのユーザーに[リモートフォロー](/%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC "リモートフォロー")されているユーザー) である。

ユーザーがProfile directoryに掲載されるかどうかはオプトインであり、ユーザーがこれをオプトインしているかどうかは、[ActivityPub](/ActivityPub "ActivityPub")の独自拡張 ([discoverable](/Discoverable "Discoverable")) で他のインスタンスに伝達されるようになった。

Profile directoryを表示する際には、表示する範囲として、ローカルまたはリモートを選択できる。また、配列の順序は、最近トゥートした順か、新しいユーザーの順を選択できる。リモートのユーザーにとって、新しいユーザーの順とは、アカウントが作成された日時ではなく、そのインスタンスから観測され始めた日時の順を意味する。

ログインしている状態でProfile directoryを表示すると、ログインしているユーザーがブロックまたはドメインブロックしているユーザーは、Profile directoryに出現しない。ログインしていない状態でProfile directoryを表示することも可能であり、この場合には、ユーザー単位でのブロックおよびドメインブロックは当然ながら反映されない。

Profile directoryのAPIのエンドポイントは /api/v1/directory となった。

ウェブUIのURLは /web/directory または /explore である。/explore では、ローカルなユーザーの最近トゥートした順のリストのみが表示される。

ハッシュタグでユーザーを絞り込む機能は削除される見通しである。

10人以上のフォロワーを持つユーザーのみが掲載されるという制限は廃止された。

他の分散SNSとの関係

[Misskey](/Misskey "Misskey")の**みつける**は、ローカルなユーザーの一覧である。公式アカウント、人気のユーザー、最近投稿したユーザー、新規ユーザーのリストが、この順に表示される。

関連項目

-   [プロフィールで紹介する](/%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%81%A7%E7%B4%B9%E4%BB%8B%E3%81%99%E3%82%8B "プロフィールで紹介する")
-   [フォローレコメンデーション (マストドンの機能)](/%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%83%AC%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3_(%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%81%AE%E6%A9%9F%E8%83%BD) "フォローレコメンデーション (マストドンの機能)")

外部リンク

-   <a href="https://github.com/tootsuite/mastodon/pull/9427" class="external text" rel="nofollow">Add profile directory #9427</a>

脚注

<div class="mw-references-wrap">

1.  [↑](#cite_ref-1)
    <a href="https://github.com/tootsuite/mastodon/pull/9427" class="external text" rel="nofollow">Add profile directory #9427</a>
2.  [↑](#cite_ref-2)
    <a href="https://github.com/tootsuite/mastodon/pull/9427#issuecomment-445108417" class="external free" rel="nofollow">https://github.com/tootsuite/mastodon/pull/9427#issuecomment-445108417</a>
3.  [↑](#cite_ref-3)
    <a href="https://hakabahitoyo.wordpress.com/2018/12/09/profile-directory-is-still-unfair" class="external text" rel="nofollow">Profile directoryのフェアネスはいまひとつ: Gargronはスパムとの戦いに向いてない</a>
4.  [↑](#cite_ref-4)
    <a href="https://github.com/tootsuite/mastodon/pull/11688" class="external text" rel="nofollow">Add profile directory to web UI #11688</a>
5.  [↑](#cite_ref-5)
    <a href="https://github.com/tootsuite/mastodon/pull/11705" class="external text" rel="nofollow">Change layout of public profile directory to be the same as in web UI #11705</a>

</div>

</div>
