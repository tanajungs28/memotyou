//グラフ作成用のjsファイル


// var ctx = document.getElementById("chart").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: "bar",    // ★必須　グラフの種類
//     data: {
//         labels:  ["1年", "2年", "3年", "4年", "5年"],  // Ｘ軸のラベル
//         datasets: [
//             {
//                 label: "系列Ａ",                            // 系列名
//                 data: [10, 22, 10, 9, 12] ,                  // ★必須　系列Ａのデータ
//                 backgroundColor: "blue",
//             },     
//         ]
//     },
// options: {                       // オプション
//         responsive: true,  // canvasサイズ自動設定機能を使わない。HTMLで指定したサイズに固定
//         scales: {                          // 軸設定
//             xAxes: [{                       // Ｘ軸設定
//             }],
//             yAxes: [{
//                     display: true,                 // 表示の有無
//                     ticks: {                       // 目盛り
//                         min: 0,                        // 最小値
//                         max: 30,                       // 最大値
//                     },
//             }],
//         },
//     }
// });