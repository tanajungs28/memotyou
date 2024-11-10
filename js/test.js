
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
        //HTMLのlistに返す(JSON形式⇒配列に戻したので配列形式で個別にデータを取得)
        const html = `
        <li>
          <p>${name}</p>                      
          <p>${data.day}</p>                  
          <p>${data.classification}</p>
          <p>${data.phenomenon}</p>
          <p>${data.situation}</p>
        </li>
        `;
       $("#list").append(html); 
      }