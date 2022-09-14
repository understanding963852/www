var player1;
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('player1', {//html에서의 유튜브가 재생할 영역의 부모의 id
    videoId: 'aqcerntagO4',//최초 재생할 유튜브영상의 ID
    playerVars: { 
        autoplay: true, 
        loop:true,//반복재생유무
        playlist:'aqcerntagO4'//반복재생할 유튜브영상 ID
        //loop:true일때는 반복할 목록을 다시한번 적어주어야한다.
    },
    events: {
        //영상이 준비되면 함수가 실행된다
      'onReady': function (event) {
        //event.target.mute();//음소거, target은 영상 자체
      },
      
    }
  });


  var player2;
  player2 = new YT.Player('player2', {//html에서의 유튜브가 재생할 영역의 부모의 id
    videoId: 'n2I5mubCajU',//최초 재생할 유튜브영상의 ID
    playerVars: { 
        autoplay: true, 
        loop:true,//반복재생유무
        playlist:'n2I5mubCajU'//반복재생할 유튜브영상 ID
        //loop:true일때는 반복할 목록을 다시한번 적어주어야한다.
    },
    events: {
        //영상이 준비되면 함수가 실행된다
      'onReady': function (event) {
        event.target.mute();//음소거, target은 영상 자체
      },
      
    }
  });
}


