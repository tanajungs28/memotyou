//変数の定義
var key_count = -1;                                                    //ローカルストレージに保存するデータNo
console.log("localStorage.length===",localStorage.length)
if(localStorage.length > 0){
  key_count = localStorage.length;
}else{
}

// カウントしたい文字列を指定
const searchString = '故障';
// グラフ表示用のカウンター初期化
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;
let count11 = 0;
let count12 = 0;


    //1.Save クリックイベント
    $("#save").on("click",function(){
      key_count++
      console.log("key_countをカウントアップ")
      console.log("key_count:",key_count)                             //ローカルストレージのkeyを重複させないためのカウンター
      const name = $("#select_car").val();                            //製品名の取得（セレクトボックスから選択）
      const day = $("#day").val();                                    //日付情報を取得
      const classification = $("#select_classification").val();       //分類の取得
      const phenomenon = $("#phenomenon").val();                      //事象の取得
      const situation = $("#select_situation").val();                 //日付情報を取得
      const num = key_count;
      let data = {name,day,classification, phenomenon, situation,num}     //オブジェクト{}としてデータを複数格納
      const jsonString = JSON.stringify(data);                        //JSON形式へ変換（valueに複数データを格納するため）
        localStorage.setItem(key_count, jsonString);                  //カウンタとそのほかのデータをローカルストレージに格納(製品名をkeyに設定)
        console.log("localStorage.key(key_count)===",localStorage.key(key_count))
        console.log("localStorage.getItem(key_count)===",localStorage.getItem(key_count))
        console.log("localStorage.length===",localStorage.length)
        //HTMLの表に追記するためにlistに返す
        const html = `
        <tr>
          <td>${name}</td>
          <td>${day}</td>
          <td>${classification}</td>
          <td>${phenomenon}</td>
          <td>${situation}</td>
        </tr>
        `;
        $("#list").append(html);

        //入力欄をクリアにする
          $("#select_car").val("")
          $("#day").val("")
          $("#select_classification").val("")
          $("#phenomenon").val("")
      $("#select_situation").val("")
      location.reload();
      });
  
      //2.clear クリックイベント
        $("#clear").on("click", function () {
          localStorage.clear();
          $("#list").empty();
        });    
  
        // 更新を押した際、keyカウントの最後のものから表示してしまう誤動作ありのため修正必要
        let array = []; //並び変えるための配列準備
        let hikaku = [];//data内の並び替えを図るためのカウンターを格納する箱
        // for(let m= 0; m < key_count; m++){

      //3.ページ読み込み：保存データ取得表示
      for(let i = 0; i < localStorage.length; i++){
        console.log("i===",i)
        console.log("localStorage.key(i)===",localStorage.key(i))
        const key_count = localStorage.key(i);
        const getjson_data = localStorage.getItem(key_count);
        const data = JSON.parse(getjson_data);                  //JSON形式で取得した値をJSON.parse()してJaveScriptで使えるオブジェクトに戻す
        console.log(data.classification)
        const redata = {key_count,data}
        // console.log("i:",i)
        // console.log("day:",data.day)
        var month = data.day.substr(5,2);                     //yyyy-mm-dd表記の中でmm部分を抽出する
        // console.log("month:",month)
        console.log("key_count:",key_count)

        //ブラウザ更新時に入力した順番に表示するための
        array.push(data);
        hikaku.push(data.num);
        console.log("array===",array)
        console.log("array[i]===",array[i])
        console.log("hikaku[i]===",hikaku[i])

        //グラフに特定の文字列の件数を積み重ねるためのカウンター
        if(data.classification === "故障"){
            if(month === "01"){
              count1++
              console.log("count1：",count1)
            } else if(month === "02"){
              count2++
              console.log("count2：",count2)
            } else if(month === "03"){
              count3++
              console.log("count3：",count3)
            } else if(month === "04"){
              count4++
              console.log("count4：",count4)
            } else if(month === "05"){
              count5++
              console.log("count5：",count5)
            } else if(month === "06"){
              count6++
              console.log("count6：",count6)
            } else if(month === "07"){
              count7++
              console.log("count7：",count7)
            } else if(month === "08"){
              count8++
              console.log("count8：",count8)
            } else if(month === "09"){
              count9++
              console.log("count9：",count9)
            } else if(month === "10"){
              count10++
              console.log("count10：",count10)
            } else if(month === "11"){
              count11++
              console.log("count11：",count11)
            } else if(month === "12"){
              count12++
              console.log("count12：",count12)
            }
        }
        //HTMLのlistに返す(JSON形式⇒配列に戻したので配列形式で個別にデータを取得)
      //   const html = `
      //   <tr>
      //     <td>${data.name}</td>
      //     <td>${data.day}</td>
      //     <td>${data.classification}</td>
      //     <td>${data.phenomenon}</td>
      //     <td>${data.situation}</td>
      //   </tr>
      //   `;
      //  $("#list").append(html); 
      }

      //ブラウザ更新した際に入力した順番通りに表示されるように並び替えを実施
      console.log("hikaku~~~",hikaku)
      const sort = array.sort((a,b) => (a.num - b.num))
      console.log(sort);
      console.log(sort[0])
      console.log(sort[1])
      console.log(sort[2])
      console.log(sort[3])
      console.log("array~~~",array)
      console.log("data~~~",)
      for(let m = 0; m < sort.length; m++){
        const html = `
        <tr>
          <td>${sort[m].name}</td>
          <td>${sort[m].day}</td>
          <td>${sort[m].classification}</td>
          <td>${sort[m].phenomenon}</td>
          <td>${sort[m].situation}</td>
        </tr>
        `;
       $("#list").append(html); 
      }


      //グラフ作成
var m1 = count1;
var m2 = count2;
var m3 = count3;
var m4 = count4;
var m5 = count5;
var m6 = count6;
var m7 = count7;
var m8 = count8;
var m9 = count9;
var m10 = count10;
var m11 = count11;
var m12 = count12;

var defect = {m1, m2, m3 , m4, m5, m6, m7, m8, m9, m10, m11, m12}
console.log("defect:",defect)


var ctx = document.getElementById("chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: "bar",    // ★必須　グラフの種類
    data: {
        labels:  ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],  // Ｘ軸のラベル
        datasets: [
            {
                label: "不具合件数",                            // 系列名
                data: [defect.m1, defect.m2, defect.m3, defect.m4, defect.m5, defect.m6, defect.m7, defect.m8, defect.m9, defect.m10, defect.m11, defect.m12] ,                  // ★必須　系列Ａのデータ
                backgroundColor: "gray",
            },     
        ]
    },
options: {                       // オプション
  responsive: true,  // canvasサイズ自動設定機能を使わない。HTMLで指定したサイズに固定
  scales: {                          // 軸設定
      x: {                       // Ｘ軸設定 (Chart.js v3以降)
          title: {
              display: true,
              text: '月'
          }
      },
      y: {                          // Ｙ軸設定
          display: true,                // 表示の有無
          min: 0,                        // 最小値
          max: 10,                       // 最大値
          ticks: {                       // 目盛り
              stepSize: 1,               // 目盛りの間隔
          },
          title: {
              display: true,
              text: '不具合件数'
          }
      }
  },
}

});