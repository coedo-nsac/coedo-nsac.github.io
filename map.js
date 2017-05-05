var map = null;
var infowindow = new google.maps.InfoWindow();

function init() {

  //マップの初期状態を設定
  var option = {
  zoom: 13,
  center: new google.maps.LatLng(35.683313827502076, 139.73199081962233),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  disableDefaultUI: true
  };
　
  // 吹き出しを閉じる処理
  map = new google.maps.Map(document.getElementById("map"), option);
  google.maps.event.addListener(map, "click", function() {infowindow.close();});

  // 任意の位置にマーカーを追加
  var point = new google.maps.LatLng(25.108622899999993, 121.84360659999996);
  var marker = create_maker(point, "info", 
  	"<img src='./img/taiwan.BMP' width='300' height='200'><br><p><a href='./webgl_loader_ply2_taiwan.html' target='_blank'>Ah mei tea house</a></p>");

  var point = new google.maps.LatLng(35.68129800000001, 139.7662468999999);
  var marker = create_maker(point, "info", 
  	"<img src='./img/tokyo.BMP' width='300' height='200'><br><p><a href='./webgl_loader_ply2_tokyo.html' target='_blank'>Tokyo Station</a></p>");

  var point = new google.maps.LatLng(35.689629399999994, 139.70058199999997);
  var marker = create_maker(point, "info", 
  	"<img src='./img/shinjuku.BMP' width='300' height='200'><br><p><a href='./webgl_loader_ply2_shinjuku.html' target='_blank'>Shinjuku Station</a></p>");
}

function create_maker(latlng, label, html) {
  // マーカーを生成
  var marker = new google.maps.Marker({position: latlng, map: map, title: label});
  // マーカーをマウスオーバーした時の処理
  google.maps.event.addListener(marker, "mouseover", function() {
  infowindow.setContent(html);
  infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, "load", init);