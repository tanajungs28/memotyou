


    //1.Save クリックイベント
    $("#save").on("click",function(){
        const day = $("#day").val();                            //日付情報を取得
        const name = $("#name").val();                          //製品名の取得
        const classification = $("#classification").val();      //分類の取得
        const phenomenon = $("#phenomenon").val();              //事象の取得
        const situation = $("#situation").val();                //日付情報を取得

        let data = {day,classification, phenomenon, situation}  //オブジェクトとしてデータを複数格納
        const jsonString = JSON.stringify(data);                //JSON形式へ変換（valueに複数データを格納するため）
        localStorage.setItem(name, jsonString);                 //製品名とそのほかのデータをローカルストレージに格納(製品名をkeyに設定)
        const html = `
        <li>
          <p>${name}</p>
          <p>${day}</p>
          <p>${classification}</p>
          <p>${phenomenon}</p>
          <p>${situation}</p>
        </li>
        `;
        $("#list").append(html);
        //入力欄をクリアにする
          $("#name").val("")
          $("#day").val("")
          $("#classification").val("")
          $("#phenomenon").val("")
          $("#situation").val("")
      });
  
      //2.clear クリックイベント
        $("#clear").on("click", function () {
          localStorage.clear();
          $("#list").empty();
        });    
  
  
      //3.ページ読み込み：保存データ取得表示
      for(let i = 0; i < localStorage.length; i++){
        const name = localStorage.key(i);
        const getjson_data = localStorage.getItem(name);
        const data = JSON.parse(getjson_data);                  //JSON形式で取得した値をJSON.parse()してJaveScriptで使えるオブジェクトに戻す
        console.log(data.day)
        console.log(i)
        var count = i;
        //HTMLのlistに返す(JSON形式⇒配列に戻したので配列形式で個別にデータを取得)
        const html = `
        <tr>
          <td>${name}</td>
          <td>${data.day}</td>
          <td>${data.classification}</td>
          <td>${data.phenomenon}</td>
          <td>${data.situation}</td>
        </tr>
        `;
       $("#list").append(html); 
      }


      //グラフ作成
var i = 5; 
var m1 = 10;
var m2 = 1;
var m3 = 1;
var m4 = 1;
var m5 = 1;
var m6 = 1;
var m7 = 1;
var m8 = 1;
var m9 = 1;
var m10 = 1;
var m11 = 1;
var m12 = 1;

var defect = {m1, m2, m3 , m4, m5, m6, m7, m8, m9, m10, m11, m12}

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
            xAxes: [{                       // Ｘ軸設定
            }],
            yAxes: [{
                    display: true,                 // 表示の有無
                    ticks: {                       // 目盛り
                        min: 0,                        // 最小値
                        max: 30,                       // 最大値
                    },
            }],
        },
    }
});
