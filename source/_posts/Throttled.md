---
title: Throttled.md
---
<div>

|          |                  |
|----------|------------------|
| タイトル | Throttled        |
| ふりがな | Throttled        |
| 品詞     | 過去形・過去分詞 |

  
**Throttled**または**リクエストの制限に達しました**は、Mastodonにおけるエラーメッセージの一つ。

## 概要

Mastodonの英語のインスタンスにおいて、APIの制限を超えたときに表示される短いエラーメッセージ。このときのHTTPステータスコードは **429** である。

2018年1月10日リリースの Mastodon 2.1.3 より前の初期設定では[ログイン](/%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3 "ログイン")時のAPI制限がとても厳しく、ログインに 5分で 5回失敗すると “Throttled” になってしまっていたが、5分で 25回に緩和された<sup>[\[1\]](#cite_note-1)</sup>。

当初は日本語のインスタンスでも英語でこれが表示されていたが、2017年5月29日リリースの Mastodon 1.4.1 から国際化されて日本語では「**リクエストの制限に達しました**」となっている<sup>[\[2\]](#cite_note-2)</sup>。

ちなみに、HTTPステータスコードの 429 は **Too Many Requests** で、ユーザーが時間内に大量のリクエストを送信したことをあらわす<sup>[\[3\]](#cite_note-3)</sup>。

## 脚注

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/tootsuite/mastodon/commit/921b78190912b3cd74cea62fc3e773c56e8f609e" rel="nofollow">Increase rate limit on protected paths (#6229) · tootsuite/mastodon@921b781</a>
2.  [↑](#cite_ref-2) <a href="https://github.com/tootsuite/mastodon/commit/db92eec876efc2d5b450b0c9c70d78091762fc4b" rel="nofollow">Localize 'throttled' (#2755) · tootsuite/mastodon@db92eec</a>
3.  [↑](#cite_ref-3) <a href="https://developer.mozilla.org/ja/docs/Web/HTTP/Status" rel="nofollow">HTTP レスポンスステータスコード - HTTP | MDN</a>

</div>

</div>
