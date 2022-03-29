---
title: Halcyon.md
---
<div>

|                    |                                                                                                                                                                                                                                                                                          |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| タイトル           | Halcyon                                                                                                                                                                                                                                                                                  |
| 画像               | [<img src="/images/thumb/e/ed/Halcyon.png/120px-Halcyon.png" srcset="/images/thumb/e/ed/Halcyon.png/180px-Halcyon.png 1.5x, /images/thumb/e/ed/Halcyon.png/240px-Halcyon.png 2x" width="120" height="120" alt="Halcyon" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Halcyon.png "Halcyon") |
| 開発者             | [新都心](/%E6%96%B0%E9%83%BD%E5%BF%83 "新都心"), <a href="https://github.com/nipos" rel="nofollow">Niklas Poslovski</a>                                                                                                                                                                  |
| ソースコード       | <a href="https://notabug.org/halcyon-suite/halcyon" rel="nofollow">https://notabug.org/halcyon-suite/halcyon</a>                                                                                                                                                                         |
| プラットホーム     | Webブラウザー                                                                                                                                                                                                                                                                            |
| プログラミング言語 | PHP, JavaScript                                                                                                                                                                                                                                                                          |
| サービス開始日     | 2017年5月28日                                                                                                                                                                                                                                                                            |
| ライセンス         | [GNU Affero General Public License](/GNU_Affero_General_Public_License "GNU Affero General Public License")                                                                                                                                                                              |
| Webサイト          | <a href="https://www.halcyon.social/" rel="nofollow">https://www.halcyon.social/</a>                                                                                                                                                                                                     |

  
Halcyonとは、オープンソースのソーシャルネットワーク[Mastodon](/Mastodon "Mastodon")のWebブラウザー向けクライアントである。

<div>

<div lang="ja" dir="ltr">

## 目次

</div>

-   [1 概要](#.E6.A6.82.E8.A6.81)
-   [2 開発者の交代](#.E9.96.8B.E7.99.BA.E8.80.85.E3.81.AE.E4.BA.A4.E4.BB.A3)
-   [3 デプロイ](#.E3.83.87.E3.83.97.E3.83.AD.E3.82.A4)
-   [4 他の分散SNSとの関係](#.E4.BB.96.E3.81.AE.E5.88.86.E6.95.A3SNS.E3.81.A8.E3.81.AE.E9.96.A2.E4.BF.82)
-   [5 出典](#.E5.87.BA.E5.85.B8)

</div>

## 概要

[Twitter](/Twitter "Twitter")を模倣したユーザーインターフェースが特徴。

<div>

<div>

[<img src="/images/thumb/4/4f/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-05-28_16.27.55.jpg/300px-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-05-28_16.27.55.jpg" srcset="/images/thumb/4/4f/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-05-28_16.27.55.jpg/450px-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-05-28_16.27.55.jpg 1.5x, /images/4/4f/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-05-28_16.27.55.jpg 2x" width="300" height="177" />](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-05-28_16.27.55.jpg)

<div>

<div>

[](/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2017-05-28_16.27.55.jpg "拡大")

</div>

Halcyon for Mastodon

</div>

</div>

</div>

2018年5月20日<sup>[\[1\]](#cite_note-1)</sup>より、[マストドンユーザーマッチング](/%E3%83%9E%E3%82%B9%E3%83%88%E3%83%89%E3%83%B3%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0 "マストドンユーザーマッチング")のアルゴリズムをWho to followパネルに用いるようになった。ユーザーのプライバシーのため、オプトインを得てから通信を開始する仕様である。2020年2月<sup>[\[2\]](#cite_note-2)</sup>、マストドンユーザーマッチングの閉鎖にともない、vinayaka.tsia.de をWho to followパネルに用いるようになった。ただし、2021年4月の時点で vinayaka.tsia.de は常に空の配列を返す動作となっており、HalcyonのWho to followパネルには何も表示されない状態である。

2018年8月4日のバージョン2.0.0で多言語化され、英語、ドイツ語、ポルトガル語のUIが利用できるようになった。同年8月21日のバージョン2.0.1では、日本語、ポーランド語、韓国語が追加された。その後も言語の追加が続けられている。

## 開発者の交代

Halcyonは、2017年5月に[新都心](/%E6%96%B0%E9%83%BD%E5%BF%83 "新都心")氏によってリリースされ<sup>[\[3\]](#cite_note-3)</sup>、2018年2月に開発の終了が発表された<sup>[\[4\]](#cite_note-4)</sup>。

2018年2月27日よりNiklas Poslovski<sup>[\[5\]](#cite_note-5)</sup>が開発を引き継いだ。ソースコードは引き続き <a href="https://github.com/halcyon-suite/halcyon" rel="nofollow">https://github.com/halcyon-suite/halcyon</a> に置かれたが、過去の履歴は削除された。その後、公式レポジトリは <a href="https://notabug.org/halcyon-suite/halcyon" rel="nofollow">https://notabug.org/halcyon-suite/halcyon</a> に移動した。

## デプロイ

Halcyonをデプロイしているサーバーのリストは <a href="https://www.halcyon.social/instances.php" rel="nofollow">https://www.halcyon.social/instances.php</a> に置かれている。

## 他の分散SNSとの関係

バージョン1.1.7より[Pleroma](/Pleroma "Pleroma")に対応した。

## 出典

<div>

1.  [↑](#cite_ref-1) <a href="https://github.com/halcyon-suite/halcyon/commit/523c1fab2f5caf782519c6880298265291908b58" rel="nofollow">https://github.com/halcyon-suite/halcyon/commit/523c1fab2f5caf782519c6880298265291908b58</a>
2.  [↑](#cite_ref-2) <a href="https://notabug.org/halcyon-suite/halcyon/commit/aadcb94355b000c3288d80988ce29aa68d1454e8" rel="nofollow">https://notabug.org/halcyon-suite/halcyon/commit/aadcb94355b000c3288d80988ce29aa68d1454e8</a>
3.  [↑](#cite_ref-3) <a href="https://mastodon.cloud/@neet/11192632" rel="nofollow">https://mastodon.cloud/@neet/11192632</a>
4.  [↑](#cite_ref-4) <a href="https://mastodon.social/@neet/99591566457511542" rel="nofollow">https://mastodon.social/@neet/99591566457511542</a>
5.  [↑](#cite_ref-5) <a href="https://github.com/nipos" rel="nofollow">https://github.com/nipos</a>

</div>

</div>
