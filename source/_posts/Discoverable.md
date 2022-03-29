---
title: Discoverable.md
---
<div>

**discoverable**は、[ActivityPub](/ActivityPub "ActivityPub")のActorに追加されたフラグ。もとは[マストドン](/Mastodon "Mastodon")による独自拡張で、マストドンの[Profile directory](/Profile_directory "Profile directory")に掲載されることをユーザーが許可しているかどうかを他のインスタンスに伝える<sup>[\[1\]](#cite_note-1)</sup>ために導入された。デフォルトでは無効であり、設定画面の**List this account on the directory** (日本語では**ディレクトリに掲載する**) で有効にすることができる。

## その他の応用

[マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング") (廃止。当該項目参照。) と[Fediverse Observer](/Fediverse_Observer_(%E5%A2%93%E5%A0%B4%E4%BA%BA%E5%A4%9C) "Fediverse Observer (墓場人夜)") (廃止。当該項目参照。) と[Who To Follow For Mastodon & Pleroma](/Who_To_Follow_For_Mastodon_%26_Pleroma "Who To Follow For Mastodon & Pleroma")は、ActivityPubのdiscoverableフラグがfalseであるユーザーを推挙の対象外としている<sup>[\[2\]](#cite_note-2)</sup>。

なお、検索エンジン拒否の意思表示としてdiscoverableフラグを使用することの是非について、[Eugen Rochko](/Gargron "Gargron")は、使えなくもないが微妙に意味が異なる<sup>[\[3\]](#cite_note-3)</sup>という見解である。

## 他の分散SNSとの関係

[Pleroma](/Pleroma "Pleroma")はdiscoverableフラグをActivityPubを通じて送出することができる<sup>[\[4\]](#cite_note-4)</sup>。これは、デフォルトでは無効であり、設定画面の**Allow discovery of this account in search results and other services** (やさしいにほんごでは、**けんさくなどのサービスで、このアカウントをみつけてもよい**) で有効にすることができる。これにより、PleromaのユーザーをマストドンのProfile directoryに出現させることが可能になる。

<div>

[<img src="/images/thumb/3/3a/Pleroma_user_in_mastodons_prodile_directory.png/480px-Pleroma_user_in_mastodons_prodile_directory.png" srcset="/images/thumb/3/3a/Pleroma_user_in_mastodons_prodile_directory.png/720px-Pleroma_user_in_mastodons_prodile_directory.png 1.5x, /images/thumb/3/3a/Pleroma_user_in_mastodons_prodile_directory.png/960px-Pleroma_user_in_mastodons_prodile_directory.png 2x" width="480" height="258" alt="Pleroma user in mastodons prodile directory.png" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Pleroma_user_in_mastodons_prodile_directory.png)

</div>

<span class="small">マストドンインスタンス ([mastodon.social](/Mastodon.social "Mastodon.social")) のProfile directoryにPleromaのユーザー (グリッドの右上、頭にひまわりを乗せた黒人の女の子のアイコンとヘッダー画像) を表示させた例。</span>

## 脚注

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/tootsuite/mastodon/pull/11688" rel="nofollow">Add profile directory to web UI #11688</a>
2.  [↑](#cite_ref-2) <a href="https://whotofollow.tk/" rel="nofollow">https://whotofollow.tk/</a>
3.  [↑](#cite_ref-3) <a href="https://github.com/tootsuite/mastodon/pull/7822#issuecomment-535689472" rel="nofollow">https://github.com/tootsuite/mastodon/pull/7822#issuecomment-535689472</a>
4.  [↑](#cite_ref-4) <a href="https://git.pleroma.social/pleroma/pleroma/merge_requests/1641" rel="nofollow">Activitypub/Add `discoverable` parameter in ActivityPub actor !1641</a>

</div>

</div>
