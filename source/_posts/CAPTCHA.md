---
title: CAPTCHA.md
---
<div>

**CAPTCHA**とは、人間による操作と自動化された操作を区別するためのソフトウェア。[スパム](/%E3%82%B9%E3%83%91%E3%83%A0 "スパム (存在しないページ)")防止などに利用されている。**reCAPTCHA**はCAPTCHAの実装の一つである。

[マストドン公式リポジトリ](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E5%85%AC%E5%BC%8F%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA "マストドン公式リポジトリ")では、CAPTCHAを導入しない<sup>[\[1\]](#cite_note-1)</sup>ことが明言されている。独自機能として複数のインスタンスがreCAPTCHAを導入している。なお、独自機能としてCAPTCHAを導入していても、API経由でのユーザー登録<sup>[\[2\]](#cite_note-2)</sup>が有効になっている場合、CAPTCHAなしでユーザー登録ができてしまうので、注意が必要である。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 導入しているインスタンス](#.E5.B0.8E.E5.85.A5.E3.81.97.E3.81.A6.E3.81.84.E3.82.8B.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9)
-   [2 批判](#.E6.89.B9.E5.88.A4)
-   [3 他の分散SNSとの関係](#.E4.BB.96.E3.81.AE.E5.88.86.E6.95.A3SNS.E3.81.A8.E3.81.AE.E9.96.A2.E4.BF.82)
-   [4 脚注](#.E8.84.9A.E6.B3.A8)

</div>

## 導入しているインスタンス

-   [mstdn.maud.io](/Mstdn.maud.io "Mstdn.maud.io")
-   [yukari.cafe](/Yukari.cafe "Yukari.cafe")

## 批判

CAPTCHAのうち、Googleによる実装であるreCAPTCHA V3では、プライバシーの問題が指摘されている<sup>[\[3\]](#cite_note-3)</sup>。

## 他の分散SNSとの関係

[Misskey](/Misskey "Misskey")は標準でreCAPTCHAを使用できる。

[Pleroma](/Pleroma "Pleroma")は標準でkocaptcha<sup>[\[4\]](#cite_note-4)</sup>を使用できる。kocaptchaはCAPTCHAの実装の一つである。2019年12月からは、独自実装のCAPTCHAがPleromaに内蔵される<sup>[\[5\]](#cite_note-5)</sup>ようになった。

## 脚注

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/tootsuite/mastodon/issues/7601#issuecomment-391342576" rel="nofollow">https://github.com/tootsuite/mastodon/issues/7601#issuecomment-391342576</a>
2.  [↑](#cite_ref-2) <a href="https://github.com/tootsuite/mastodon/pull/9572" rel="nofollow">Add REST API for creating an account #9572</a>
3.  [↑](#cite_ref-3) <a href="https://www.fastcompany.com/90369697/googles-new-recaptcha-has-a-dark-side" rel="nofollow">Google’s new reCAPTCHA has a dark side</a>
4.  [↑](#cite_ref-4) <a href="https://github.com/koto-bank/kocaptcha" rel="nofollow">https://github.com/koto-bank/kocaptcha</a>
5.  [↑](#cite_ref-5) <a href="https://git.pleroma.social/pleroma/pleroma/merge_requests/2060" rel="nofollow">Add native captcha and enable it by default. (!2060)</a>

</div>

</div>
