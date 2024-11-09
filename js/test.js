
    //1.Save クリックイベント
    $("#save").on("click",function(){
        const day = $("#day").val();                            //日付情報を取得
        const name = $("#name").val();                          //製品名の取得
        const classification = $("#classification").val();      //分類の取得
        const phenomenon = $("#phenomenon").val();              //事象の取得
        const situation = $("#situation").val();                //日付情報を取得

        let data = {name,classification, phenomenon, situation}
        localStorage.setItem(day, JSON.stringify(data));        //JSON形式へ変換
        const html = `
        <li>
          <p>${day}</p>
          <p>${name}</p>
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
        const day = localStorage.key(i);
        const name = localStorage.getItem(day);
        const classification = localStorage.getItem(day);
        const phenomenon = localStorage.getItem(day);
        const situation = localStorage.getItem(day);
        const html = `
        <li>
          <p>${day}</p>
          <p>${name}</p>
          <p>${classification}</p>
          <p>${phenomenon}</p>
          <p>${situation}</p>
        </li>
        `;
       $("#list").append(html); 
      }