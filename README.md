# ①課題番号-プロダクト名

品質ダッシュボード

## ②課題内容（どんな作品か）

- ローカルストレージを活用し、入力フォーマットに入力した製品の故障件数をカウントしてくれるアプリ

## ③DEMO
https://tanajungs28.github.io/memotyou/
https://tanajungs28.github.io/memotyou/

## ④作ったアプリケーション用のIDまたはPasswordがある場合

- ID: なし
- PW: なし

## ⑤工夫した点・こだわった点

- ローカルストレージに値を格納し、いずれの値も残しておきたかったのでkeyデータはカウンターにした
- 実際の現場でも活用できるように、「故障」と分類したものは月別にグラフへ反映できるようにした


## ⑥難しかった点・次回トライしたいこと(又は機能)

- 難しかった点：
  * 発想の問題だが、製品名を起点に不具合件数をカウント・グラフ化したかったが、製品名をkeyデータにしていたため件数の積み重ねができなかった。keyデータが上書きされないようにカウンターにすればよいだけの話だったが、気づくのに時間がかかった。
  * グラフ作成時、chart.jsのバージョンによって軸に関するコードの記載方法が異なり、見ているサイトが古いバージョンで記載されているので気づくのに時間がかかった。
  * フォーマットへのデータ入力を行い「セーブ」を押した段階では入力した順番通りに表示されるが、ブラウザ更新を行った際、ローカルストレージのkeyの順番が保証されないために順番が勝手に入れ替わってしまう点が気づけずに時間を要した。
- 次回トライしたいこと：
  * 車種選択で選択した車ごとに故障件数が見えるようにグラフを修正
  * ページ内にタブを追加し、選択したタブごとに異なるデータの集計が見えるように切り替えたい
  * 実際の現場でも活用しやすいよう、エクセルやcsvファイルの読み込みでグラフに即時反映させたい


## ⑦質問・疑問・感想、シェアしたいこと等なんでも

- [質問]特になし


- [感想]ローカルストレージの使用方法、積み上げたいデータの格納は実装できたので大まかな構造は理解できたと考えています。chart.js


- [参考記事]
  - 1.localStorageデータ操作あれこれ（保存、取得、更新、削除など）
  　※localstorageにデータを複数格納するためにJSONに変換する方法
   [https://qiita.com/shiho97797/items/30c1475363c587b60a75]
    
  - 2.ブラウザにデータを保存するlocalStorage（ローカルストレージ）の使い方
    ※JSON形式のデータをjavascript形式で見れるように戻す方法
   [https://www.granfairs.com/blog/entry-3191/]

  - 3.[jQuery]LocalStorageを使ってテーブルに追加したレコードを保存するサンプル
   [https://notepad-blog.com/content/130/]

  - 4.日付の入力欄を作成する
   [https://catnose.me/learning/html/input-date]

  - 5.【JavaScript入門】substrで文字列を切り出す方法(substring/slice)
   [https://www.sejuku.net/blog/50543]
    
  - 6.JSONでデータを返すAPIは構造の意味を持たせつつArrayを返そう
  　※JSON形式のデータをJSON.parse()してJaveScriptで使えるオブジェクトに戻した場合、キーの順番は保証されない
   [https://aligach.net/diary/2019/0123/]

  - 7.JavaScriptで配列内の値を昇順・降順に並び替える方法
   [https://zenn.dev/tk4/articles/0dcfdd76b862202b217c]
