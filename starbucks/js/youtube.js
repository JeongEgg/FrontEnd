/** youtube iframe api
 * https://developers.google.com/youtube/iframe_api_reference?hl=ko
 */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  /* 유튜브의 라이브러리인 iframe_api에서 이 함수를 찾아서 실행하기 때문에
     함수명을 변경해서는 안 된다. */
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', 
    /* 재생하려는 유튜브의 id 
       https://www.youtube.com/watch?v=An6LvWQuj_8
    */
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8" // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
      /* 동영상 플레이어가 준비(onReady)되었을 때, 메서드가 실행됨 */
    }
  });
}

      