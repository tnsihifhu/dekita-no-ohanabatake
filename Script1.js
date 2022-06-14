// JavaScript source code
function exec() {

    var textbox = document.getElementById('message').value;
    if (textbox.trim().length == 0) {
        alert("できたことを入力してください");
        return;
    }

    let flowers = [
        "./image/flower/hibiscus_blue.png",
        "./image/flower/hibiscus_green.png",
        "./image/flower/hibiscus_orange.png",
        "./image/flower/hibiscus_pinnk.png",
        "./image/flower/hibiscus_purple.png",
        "./image/flower/hibiscus_red.png",
        "./image/flower/hibiscus_skyblue.png",
        "./image/flower/hibiscus_yellow.png",
        "./image/flower/ohanagami1_blue.png",
        "./image/flower/ohanagami2_pink.png",
        "./image/flower/ohanagami3_purple.png",
        "./image/flower/ohanagami4_green.png",
        "./image/flower/ohanagami5_yellow.png",
        "./image/flower/ohanagami6_orange.png",
        "./image/flower/small_flower_blue.png",
        "./image/flower/small_flower_brown.png",
        "./image/flower/small_flower_green.png",
        "./image/flower/small_flower_orange.png",
        "./image/flower/small_flower_pink.png",
        "./image/flower/small_flower_purple.png",
        "./image/flower/small_flower_red.png",
        "./image/flower/small_flower_skyblue.png",
        "./image/flower/small_flower_yellow.png",
    ]
    var selectnum = Math.floor(Math.random() * flowers.length);
    var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 100);

    // id属性で要素を取得
    var textbox_element = document.getElementById('output');

    // 新しいHTML要素を作成
    var new_element = document.createElement('img');
    new_element.src = flowers[selectnum];
    new_element.style.top = y + "%";
    new_element.style.left = x + "%";
    new_element.title = textbox;

    // 指定した要素の中の末尾に挿入
    textbox_element.appendChild(new_element);
}
