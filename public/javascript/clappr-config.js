var playerElement = document.getElementById("player-wrapper");

var player = new Clappr.Player({
  source: 'http://clappr.io/highline.mp4',
  poster: 'http://clappr.io/poster.png',
  height: 360,
  width: 640,
  plugins: [ContextMenuPlugin]
});

player.attachTo(playerElement);
