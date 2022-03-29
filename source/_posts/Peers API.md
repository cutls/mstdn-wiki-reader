---
title: Peers API.md
---
<div>

**Peers API**または**/api/v1/instance/peers**とは、[マストドン](/Mastodon "Mastodon")のAPIの一つ。あるインスタンスが接続している他のインスタンスのリストをJSON形式で提供する。

マストドンではバージョン2.1.2<sup>[\[1\]](#cite_note-1)</sup>からこのAPIが実装された。

Peers APIを再帰的に探索することで、インスタンスを登録する操作を行うことなく、自動的に[インスタンス一覧](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%81%AE%E4%B8%80%E8%A6%A7%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8B%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88 "インスタンスの一覧を提供するウェブサイト")を作成することができる<sup>[\[2\]](#cite_note-2)</sup>。[Mastodon Instances](/Mastodon_Instances "Mastodon Instances")は、手動で登録されたインスタンスだけでなく、Peers APIで自動的に収集されたインスタンスをリストに加えている<sup>[\[3\]](#cite_note-3)</sup>。

## 他の分散SNSとの関係

[Pleroma](/Pleroma "Pleroma")では2018年1月15日<sup>[\[4\]](#cite_note-4)</sup>に、Peers APIがdevelopブランチにマージされた。

[Misskey](/Misskey "Misskey")では2018年10月16日<sup>[\[5\]](#cite_note-5)</sup>にPeers APIが実装された。Misskeyではマストドン互換APIを削減する決定がなされた<sup>[\[6\]](#cite_note-6)[\[7\]](#cite_note-7)</sup>が、Peers APIは維持されている<sup>[\[8\]](#cite_note-8)</sup>。

## 脚注

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/tootsuite/mastodon/releases/tag/v2.1.2" rel="nofollow">https://github.com/tootsuite/mastodon/releases/tag/v2.1.2</a>
2.  [↑](#cite_ref-2) <a href="https://hakabahitoyo.wordpress.com/2018/01/15/peers-api/" rel="nofollow">マストドンインスタンス一覧を自動で作る – 墓場人夜</a>
3.  [↑](#cite_ref-3) <a href="https://github.com/TheKinrar/mastodon-instances/commit/7d06acfb41a6da0b396badb61d7803a220fb90ee" rel="nofollow">Fetch instances peers and add unknown instances to DB.</a>
4.  [↑](#cite_ref-4) <a href="https://git.pleroma.social/pleroma/pleroma/commit/5a6f54b336c8cca7f6514bb9ce7db5b6c97f296f" rel="nofollow">https://git.pleroma.social/pleroma/pleroma/commit/5a6f54b336c8cca7f6514bb9ce7db5b6c97f296f</a>
5.  [↑](#cite_ref-5) <a href="https://github.com/syuilo/misskey/pull/2913" rel="nofollow">Implement /api/v1/instance/peers #2913</a>
6.  [↑](#cite_ref-6) <a href="https://github.com/syuilo/misskey/issues/3380" rel="nofollow">Mastodon Compatible APIの全面的な廃止 #3380</a>
7.  [↑](#cite_ref-7) <a href="https://github.com/syuilo/misskey/pull/4061" rel="nofollow">Close #3380 #4061</a>
8.  [↑](#cite_ref-8) <a href="https://github.com/syuilo/misskey/pull/4339" rel="nofollow">/api/v1/instance/peers 復活 #4339</a>

</div>

</div>
