---
title: 分散SNSフォーラム.md
---
<div>

|                |                                                                                                                                                                                                                                                                            |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル       | 分散SNSフォーラム                                                                                                                                                                                                                                                          |
| 画像           | [<img src="/images/thumb/8/8a/Naraha.png/120px-Naraha.png" srcset="/images/thumb/8/8a/Naraha.png/180px-Naraha.png 1.5x, /images/thumb/8/8a/Naraha.png/240px-Naraha.png 2x" width="120" height="120" alt="Naraha.png" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Naraha.png) |
| 開発者         | [墓場人夜](/%E5%A2%93%E5%A0%B4%E4%BA%BA%E5%A4%9C "墓場人夜")                                                                                                                                                                                                               |
| プラットホーム | ウェブ                                                                                                                                                                                                                                                                     |
| サービス開始日 | 2017年7月12日                                                                                                                                                                                                                                                              |
| Webサイト      | <a href="https://distsn.org/" rel="nofollow">https://distsn.org/</a>                                                                                                                                                                                                       |

  
**分散SNSフォーラム**は、マストドンを含む分散SNSを題材とする勉強会形式のイベント。また、そのイベントの主催者によるウェブサイト。

本稿ではウェブサイトについて説明する。イベントについては <a href="https://distsn.connpass.com/" rel="nofollow">分散SNSフォーラム</a> を参照。

<a href="https://distsn.org/" rel="nofollow">分散SNSフォーラム</a> は、[Mastodon](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3 "マストドン")と[Pleroma](/Pleroma "Pleroma")を観測した結果を表示する複数のウェブアプリケーションから構成されるウェブサイトである。当初はマストドン推奨ユーザーリストを提供することを目的に開設された。現在、そのコンセプトは[マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング")に引き継がれており、分散SNSフォーラムは[インスタンス一覧](/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%81%AE%E4%B8%80%E8%A6%A7%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8B%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88 "インスタンスの一覧を提供するウェブサイト")を提供している。

分散SNSフォーラムのウェブサイトに設置されているウェブアプリケーションは[AGPL](/GNU_Affero_General_Public_License "GNU Affero General Public License")で提供されている。ソースコードはGitHubで公開されている<sup>[\[1\]](#cite_note-1)</sup>。

観測対象となるインスタンスは[Peers API](/Peers_API "Peers API")を再帰的に探索することで自動的に取得している<sup>[\[2\]](#cite_note-2)</sup>。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 名称について](#.E5.90.8D.E7.A7.B0.E3.81.AB.E3.81.A4.E3.81.84.E3.81.A6)
-   [2 機能](#.E6.A9.9F.E8.83.BD)
    -   [2.1 Pleromaインスタンス一覧](#Pleroma.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7)
    -   [2.2 流速順インスタンス一覧](#.E6.B5.81.E9.80.9F.E9.A0.86.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7)
    -   [2.3 インスタンスのリストのAPI](#.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E3.81.AE.E3.83.AA.E3.82.B9.E3.83.88.E3.81.AEAPI)
-   [3 廃止された機能](#.E5.BB.83.E6.AD.A2.E3.81.95.E3.82.8C.E3.81.9F.E6.A9.9F.E8.83.BD)
    -   [3.1 マストドン推奨ユーザーリスト](#.E3.83.9E.E3.82.B9.E3.83.88.E3.83.89.E3.83.B3.E6.8E.A8.E5.A5.A8.E3.83.A6.E3.83.BC.E3.82.B6.E3.83.BC.E3.83.AA.E3.82.B9.E3.83.88)
    -   [3.2 マストドン流速順ユーザーリスト](#.E3.83.9E.E3.82.B9.E3.83.88.E3.83.89.E3.83.B3.E6.B5.81.E9.80.9F.E9.A0.86.E3.83.A6.E3.83.BC.E3.82.B6.E3.83.BC.E3.83.AA.E3.82.B9.E3.83.88)
    -   [3.3 マストドン インスタンスのローカルタイムラインのプレビュー](#.E3.83.9E.E3.82.B9.E3.83.88.E3.83.89.E3.83.B3_.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E3.81.AE.E3.83.AD.E3.83.BC.E3.82.AB.E3.83.AB.E3.82.BF.E3.82.A4.E3.83.A0.E3.83.A9.E3.82.A4.E3.83.B3.E3.81.AE.E3.83.97.E3.83.AC.E3.83.93.E3.83.A5.E3.83.BC)
    -   [3.4 マストドンクライアント一覧](#.E3.83.9E.E3.82.B9.E3.83.88.E3.83.89.E3.83.B3.E3.82.AF.E3.83.A9.E3.82.A4.E3.82.A2.E3.83.B3.E3.83.88.E4.B8.80.E8.A6.A7)
    -   [3.5 Misskeyインスタンス一覧](#Misskey.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7)
    -   [3.6 GNU socialインスタンス一覧](#GNU_social.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7)
    -   [3.7 新着順マストドンインスタンス一覧](#.E6.96.B0.E7.9D.80.E9.A0.86.E3.83.9E.E3.82.B9.E3.83.88.E3.83.89.E3.83.B3.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7)
    -   [3.8 流速順マストドンインスタンス一覧](#.E6.B5.81.E9.80.9F.E9.A0.86.E3.83.9E.E3.82.B9.E3.83.88.E3.83.89.E3.83.B3.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9.E4.B8.80.E8.A6.A7)
-   [4 関連するウェブサイト](#.E9.96.A2.E9.80.A3.E3.81.99.E3.82.8B.E3.82.A6.E3.82.A7.E3.83.96.E3.82.B5.E3.82.A4.E3.83.88)
    -   [4.1 マストドンユーザーマッチング](#.E3.83.9E.E3.82.B9.E3.83.88.E3.83.89.E3.83.B3.E3.83.A6.E3.83.BC.E3.82.B6.E3.83.BC.E3.83.9E.E3.83.83.E3.83.81.E3.83.B3.E3.82.B0)
    -   [4.2 直営インスタンス](#.E7.9B.B4.E5.96.B6.E3.82.A4.E3.83.B3.E3.82.B9.E3.82.BF.E3.83.B3.E3.82.B9)
-   [5 沿革](#.E6.B2.BF.E9.9D.A9)
-   [6 脚注](#.E8.84.9A.E6.B3.A8)
-   [7 関連項目](#.E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE)
-   [8 外部リンク](#.E5.A4.96.E9.83.A8.E3.83.AA.E3.83.B3.E3.82.AF)

</div>

## 名称について

当初は**分散SNSフォーラム**という名称のウェブサイトとして開設された。2019年7月3日、ウェブUIは[Recommendation Fairness Warrior](/Recommendation_Fairness_Warrior "Recommendation Fairness Warrior")に移行し、本項に記載された諸機能はAPIで提供されている。2020年2月23日より[Fediverse Observer](/Fediverse_Observer "Fediverse Observer")に移行。ウェブフロントエンド、APIともにURLが変更になった。

## 機能

### Pleromaインスタンス一覧

[Pleroma](/Pleroma "Pleroma")インスタンスのリスト。ホスト名のアルファベット順に配列されている。インスタンスごとに登録の可否と機能の有無を表示している。

### 流速順インスタンス一覧

[GNU social](/GNU_social "GNU social")、[Mastodon](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3 "マストドン")、[Pleroma](/Pleroma "Pleroma")、[microblog.pub](/Microblog.pub "Microblog.pub")など<sup>[\[3\]](#cite_note-3)</sup>のインスタンスを流速順に表示するリスト。ここで流速とは、1日あたりの投稿数のことである。[ローカルタイムライン](/%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3 "ローカルタイムライン")を計測しているため、[トゥート](/%E6%9C%AA%E5%8F%8E%E8%BC%89 "未収載")など公開範囲に制限のある投稿は計測されない。

### インスタンスのリストのAPI

2018年1月6日より、観測可能なインスタンスのリストをAPIで提供している。APIは <a href="https://distsn.org/cgi-bin/collect-peers-api.cgi" rel="nofollow">https://distsn.org/cgi-bin/collect-peers-api.cgi</a> 、ソースコードは <a href="https://github.com/distsn/collect-peers" rel="nofollow">https://github.com/distsn/collect-peers</a> に置かれている。このリストは[Peers API](/Peers_API "Peers API")を再帰的に探索することにより作成しているため、インスタンスを登録する手続きが不要であり、自動的に更新される。2018年9月20日より、[GNU social](/GNU_social "GNU social")、[マストドン](/Mastodon "Mastodon")、[Pleroma](/Pleroma "Pleroma")、[Misskey](/Misskey "Misskey")のインスタンス<sup>[\[4\]](#cite_note-4)</sup>を収集するようになった。

## 廃止された機能

### マストドン推奨ユーザーリスト

「マストドン推奨ユーザーリスト」は「マストドン流速順ユーザーリスト」に名称が変更された。

### マストドン流速順ユーザーリスト

マストドン流速順ユーザーリストは2017年12月30日に廃止された。[マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング")に同等な機能が実装されたため。

### マストドン インスタンスのローカルタイムラインのプレビュー

[タイムラインビューア](/%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3%E3%83%93%E3%83%A5%E3%83%BC%E3%82%A2 "タイムラインビューア")。ウェブサイト内部の流速順マストドンインスタンス一覧と新着順マストドンインスタンス一覧からリンクされているほか、独立したプレビューアとして、任意のインスタンスをプレビューするために使用できる。

このプレビューアには、インスタンスの名称、説明文、アプリケーション (クライアント) のシェア、ローカルタイムラインのトゥートが表示される。ローカルタイムラインのトゥートの数は40、400、1000から選択できる。トゥートに添付されている画像もプレビューされる。

2017年12月8日に「ランダム」ボタンが設置された。これにより、ランダムなインスタンスのプレビューを次々に見ることができる。ランダム表示の対象になるインスタンスは、流速が0.1トゥート／時以上のものに限られる。

2018年9月21日に廃止された。かわりに、マストドンインスタンス一覧は[mstpubapi](/Mstpubapi "Mstpubapi")にリンクするようになった。

### マストドンクライアント一覧

[マストドンのクライアント](/%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA:%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%81%AE%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88 "カテゴリ:マストドンのクライアント")のリスト。観測可能なすべてのインスタンスの[ローカルタイムライン](/%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3 "ローカルタイムライン")をもとに収集しており、自動的に更新される。この機能が導入された動機は、マストドン公式のクライアント一覧<sup>[\[5\]](#cite_note-5)</sup>が更新されなくなり、代替のクライアント一覧<sup>[\[6\]](#cite_note-6)</sup>は[Eugen Rochko](/Gargron "Gargron")が恣意的に掲載を選択しているためである。

### Misskeyインスタンス一覧

Misskeyインスタンスのリスト。ホスト名のアルファベット順に配列されている。インスタンスのホスト名、名称、バナー画像、機能一覧が表示される。

### GNU socialインスタンス一覧

GNU socialインスタンスのリスト。ホスト名のアルファベット順に配列されている。インスタンスのバナー画像が表示されているように見えるが、すべてGNU socialのロゴである。

### 新着順マストドンインスタンス一覧

マストドンのインスタンスを、現存する最古のトゥートの日時順に表示するリスト。他のウェブサイトのインスタンスの一覧における新着順はインスタンスがそのウェブサイトに登録された日時の順を意味することがほとんどであるのに対して、この方式はインスタンスが開設された時期を正確に反映していると考えられている。ただし、データベースがリセットされたインスタンス、古いトゥートを自動的に削除するインスタンス<sup>[\[7\]](#cite_note-7)</sup>では、インスタンスが開設された時期を意味しない。[Pleroma](/Pleroma "Pleroma")のインスタンスは、古い投稿がローカルタイムラインに現れないため、新着順インスタンス一覧から除かれている。

### 流速順マストドンインスタンス一覧

マストドンのインスタンスを流速順に表示するリスト。ここで流速とは、週間トゥート数のことである。/api/v1/instance/activity を使用しているため、このAPIを提供しているインスタンスのみが表示される。

## 関連するウェブサイト

### マストドンユーザーマッチング

[マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング")は、当初は分散SNSフォーラムの一部として開設された。現在は、[Recommendation Fairness Warrior](/Recommendation_Fairness_Warrior "Recommendation Fairness Warrior")がウェブサイトとウェブUIを提供し、分散SNSフォーラムとマストドンユーザーマッチングがAPIを提供する構成になっている。

### 直営インスタンス

[2.distsn.org](/2.distsn.org "2.distsn.org") は分散SNSフォーラムの「直営インスタンス」であると説明されていた。現在は運用を終了している。

## 沿革

2017年7月9日、マストドン流速順ユーザーリストの提供を開始。

2017年7月10日、マストドン流速順ユーザーリストが[マストドン速報](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E9%80%9F%E5%A0%B1 "マストドン速報")に掲載された<sup>[\[8\]](#cite_note-8)</sup>。

2017年7月12日、マストドン推奨ユーザーリストの提供を開始。

2017年7月16日、流速順マストドンインスタンス一覧の提供を開始。同日マストドン速報に掲載された<sup>[\[9\]](#cite_note-9)</sup>。

2017年7月17日、インスタンスの流速の過去ログの提供を開始。

2017年7月25日、新着順マストドンインスタンス一覧の提供を開始。現存する最古のトゥートの日時をインスタンスの開設日時とみなす仕様で、この仕様は現在も同じである。

2017年8月15日、ほとんどすべての機能で、流速の数値が誤っていたことが判明。不具合は修正された<sup>[\[10\]](#cite_note-10)</sup>ものの、修正前の流速は修正後の流速と比較できなくなった。

2017年11月6日、[Pleroma](/Pleroma "Pleroma")のインスタンスを観測対象に追加。

2017年11月25日、マストドン推奨ユーザーリストにユーザーの[アイコン](/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3 "アイコン")を表示するようになった。

2017年12月12日、マストドン推奨ユーザーリストをマストドン流速順ユーザーリストに改称。

2017年12月1日、流速順マストドンインスタンス一覧と新着順マストドンインスタンス一覧にインスタンスのサムネイル画像を表示するようになった。

2017年12月31日、マストドン流速順ユーザーリストを廃止。同等の機能が[マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング")に引き継がれた。

2018年1月1日、観測対象となるインスタンスを、独自のリストから[Mastodon Instances](/Mastodon_Instances "Mastodon Instances")に変更。

2018年1月2日、インスタンスの流速の取得方法を /api/v1/instance/activity に変更。それまではローカルタイムラインの流速を自前で計測していた。

2018年1月14日、インスタンスの取得方法を[Peers API](/Peers_API "Peers API")を再帰的に探索する方法に変更。

2018年1月17日、Pleromaインスタンス一覧の提供を開始。

2018年2月24日、Pleromaインスタンス一覧が[マストドンつまみ食い日記](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%81%A4%E3%81%BE%E3%81%BF%E9%A3%9F%E3%81%84%E6%97%A5%E8%A8%98 "マストドンつまみ食い日記")に掲載された<sup>[\[11\]](#cite_note-11)</sup>。

2018年3月14日、Pleromaインスタンス一覧が[マストドン速報](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E9%80%9F%E5%A0%B1 "マストドン速報")に掲載された<sup>[\[12\]](#cite_note-12)</sup>。

2018年6月25日<sup>[\[13\]](#cite_note-13)</sup>、Pleromaインスタンス一覧がインスタンスごとに機能の有無を表示するようになった。

2018年7月19日、新着順インスタンス一覧に[Pleroma](/Pleroma "Pleroma")インスタンスを表示しないようになった。

2018年9月21日、マストドンインスタンスのプレビューアが廃止された。

2018年9月23日、GNU socialインスタンス一覧とMisskeyインスタンス一覧が追加された。

2018年11月11日、マストドンクライアント一覧の提供を開始。

2019年5月16日、[Misskey](/Misskey "Misskey")の対応を廃止。

2019年5月24日、マストドンクライアント一覧、GNU socialインスタンス一覧、新着順マストドンインスタンス一覧、流速順マストドンインスタンス一覧を廃止。流速順インスタンス一覧の提供を開始。

2019年6月上旬、Misskeyの対応を再開。

2019年7月3日、ウェブUIを[Recommendation Fairness Warrior](/Recommendation_Fairness_Warrior "Recommendation Fairness Warrior")に移行。

2020年2月23日、[Fediverse Observer](/Fediverse_Observer "Fediverse Observer")に移行。ウェブフロントエンド、APIともにURLが変更になった。分散SNSフォーラムの機能のうち、流速順インスタンス一覧のみが引き継がれた。

2020年3月頃、閉鎖。

## 脚注

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/distsn/follow-recommendation" rel="nofollow">https://github.com/distsn/follow-recommendation</a>
2.  [↑](#cite_ref-2) これは2017年1月14日以降の仕様である。開設当初は、GitHubを通してプルリクエストを送ることで追加を申請する必要があった。2017年1月1日からは、[Mastodon Instances](/Mastodon_Instances "Mastodon Instances")に登録されているすべてのインスタンスを自動的に取得するほか、複数の[Pleroma](/Pleroma "Pleroma")インスタンスが手動で追加されていた。
3.  [↑](#cite_ref-3) 対応している実装の正確なリストは[libsocialnet](/Libsocialnet "Libsocialnet")を参照。
4.  [↑](#cite_ref-4) その後に追加された対応する実装については[libsocialnet](/Libsocialnet "Libsocialnet")を参照。
5.  [↑](#cite_ref-5) <a href="https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/Apps.md" rel="nofollow">https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/Apps.md</a>
6.  [↑](#cite_ref-6) <a href="https://joinmastodon.org/apps" rel="nofollow">https://joinmastodon.org/apps</a>
7.  [↑](#cite_ref-7) [ephemeral.glitch.social](/Ephemeral.glitch.social "Ephemeral.glitch.social")を参照。
8.  [↑](#cite_ref-8) <a href="https://masto.news/2017/07/10/sokuteiki/" rel="nofollow">「マストドン流速順ユーザーリスト」登場</a>
9.  [↑](#cite_ref-9) <a href="https://masto.news/2017/07/16/ryusoku-instance/" rel="nofollow">「マストドン流速順インスタンスリスト」登場</a>
10. [↑](#cite_ref-10) <a href="https://github.com/distsn/follow-recommendation/commit/ac29aa4197c6f7d1563f6affb78d7a442886a142" rel="nofollow">https://github.com/distsn/follow-recommendation/commit/ac29aa4197c6f7d1563f6affb78d7a442886a142</a>
11. [↑](#cite_ref-11) <a href="http://www.itmedia.co.jp/news/articles/1802/24/news033.html" rel="nofollow">Pleromaサーバのよいところ</a>
12. [↑](#cite_ref-12) <a href="https://masto.news/2018/03/14/pleroma-instances" rel="nofollow">Pleromaインスタンスの一覧「Pleroma Instances」</a>
13. [↑](#cite_ref-13) <a href="https://github.com/distsn/follow-recommendation/issues/48" rel="nofollow">https://github.com/distsn/follow-recommendation/issues/48</a>

</div>

## 関連項目

-   [Recommendation Fairness Warrior](/Recommendation_Fairness_Warrior "Recommendation Fairness Warrior")
-   [マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング")
-   [ミステリーポスト](/%E3%83%9F%E3%82%B9%E3%83%86%E3%83%AA%E3%83%BC%E3%83%9D%E3%82%B9%E3%83%88 "ミステリーポスト")
-   [libsocialnet](/Libsocialnet "Libsocialnet")

## 外部リンク

-   <a href="https://distsn.org" rel="nofollow">https://distsn.org</a>
-   <a href="https://gitlab.com/distsn/distsn-fe" rel="nofollow">https://gitlab.com/distsn/distsn-fe</a>
-   <a href="https://github.com/distsn/fediverse-observer" rel="nofollow">https://github.com/distsn/fediverse-observer</a>

</div>
