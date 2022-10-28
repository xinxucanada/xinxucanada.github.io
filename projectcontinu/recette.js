let video_choix = document.querySelector("#recettes");

        var player;
        function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '800',
          width: '400',
        //   videoId: video_choix,
          videoId: video_choix.value,
          events: {
            'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      video_choix.addEventListener('change', function(){
        player.loadVideoById(video_choix.value, 1, "large")
        onPlayerReady()
      }

      )