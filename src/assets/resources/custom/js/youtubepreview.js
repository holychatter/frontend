var hc_players = {}
var hc_playersAreVisible = {}

function hc_loadYoutubeVideo(id, youtubeId, listenStr, stopStr) {

    if (hc_playersAreVisible[id] == null) {
      hc_players[id] = new YT.Player('hc-youtube-video-placeholder-id-'.concat(id), {
          videoId: youtubeId,
          playerVars: {
              'rel': 0
          },
          events: {
              onReady: hc_onPlayYoutube.bind(null, id, stopStr)
          }
      });
      hc_playersAreVisible[id] = 1;
    } else if (hc_playersAreVisible[id] == 1) {
      document.getElementById('hc-youtube-video-placeholder-id-'.concat(id)).style.display = 'none';
      document.getElementById('hc-youtube-video-view-id-'.concat(id)).style.display = 'block';
      hc_players[id].pauseVideo();
      document.getElementById('hc-youtube-video-link-id-'.concat(id)).innerHTML = listenStr;
      hc_playersAreVisible[id] = 0;
    } else {
      hc_onPlayYoutube(id, stopStr);
      hc_playersAreVisible[id] = 1;
    }
}

function hc_onPlayYoutube(id, stopStr) {
  let videoPlaceholder = document.getElementById('hc-youtube-video-placeholder-id-'.concat(id));
  videoPlaceholder.style.display = 'block';
  videoPlaceholder.classList.add('hc-big-button-search-width');
  videoPlaceholder.classList.add('hc-big-button-search-height');
  document.getElementById('hc-youtube-video-view-id-'.concat(id)).style.display = 'none';
  hc_players[id].playVideo();
  document.getElementById('hc-youtube-video-link-id-'.concat(id)).innerHTML = stopStr;
}
