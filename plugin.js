{
  "moduleId" : "mapman100/Bing",
  "title" : "Bing",
  "subtitle" : "Map from bing.com",

  "backButton" : false,
  "enableGPS" : true,
  "zoomControl" : false,
  "screenLockRot" : false,
  "reload" : true,

  "shouldOverrideUrlLoading1" : "https://www.bing.com/maps",
  "shouldOverrideUrlLoading2" : "http://www.bing.com/maps",

  "browserLaunchLink" : "http://www.bing.com/maps",
  "userAgent" : "Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36",

  "loadDataWithBaseUrl1" : "https://m.here.com",
  "loadDataWithBaseUrl3" : "text/html",
  "loadDataWithBaseUrl4" : "utf-8",
  "loadDataWithBaseUrl5" : null,

  "loadDataWithBaseUrl2" :
  "
  <!DOCTYPE html>
  <html>
  <head>
  <title>Bing Map</title>
  <meta charset='utf-8' />
  <style>
  #myMap {
  height: 100%;
}
html, body {
height: 100%;
margin: 0;
padding: 0;
}
</style>
</head>

<body>
<div id='myMap'></div>

<script type='text/javascript'>

function GetMap() {
map = new Microsoft.Maps.Map('#myMap', {
credentials: 'AhkgsWH-oZMhs7IGU-e2-dXChk6Qrda-r2d19wH13C8RZjtempyQSce3hsY4rtuU',
center: new Microsoft.Maps.Location(#lat#, #lng#),
zoom: #zoom#
});
Microsoft.Maps.loadModule('Microsoft.Maps.Traffic', function () {
var manager = new Microsoft.Maps.Traffic.TrafficManager(map);
manager.show();
});
}
</script>

<script type='text/javascript'
src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap' async defer>
</script>
</body>
</html>
"

}
