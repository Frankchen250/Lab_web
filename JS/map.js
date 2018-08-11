function initialize() {
  var mp = new BMap.Map('map-container-5');
  var point=new BMap.Point(120.127884, 30.265275);
  mp.centerAndZoom(point, 20);
  var marker = new BMap.Marker(point); // 创建标注    
  mp.addOverlay(marker);
}

function loadScript() {
  var script = document.createElement("script");
  script.src = "http://api.map.baidu.com/api?v=2.0&ak=q9by4DG38DnvMK9plWudZu4ZPEtqYspA&callback=initialize";
  document.body.appendChild(script);
}
window.onload = loadScript;