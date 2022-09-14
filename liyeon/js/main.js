var panoWrap=$('.pano_wrap');
var listWrap=panoWrap.children('.list');//children은 css에서의 >와 같다.
var item=listWrap.children('li');
var itemWidth= item.width();//300
var itemLength= item.lenth;//10
var listWidth = itemWidth * itemLength;//3000
var controls = $('.controls');
var listClone = null;
var move=0;
var timer;

var init = function (){
    panoWrap.css({width: listWidth * 2 + "px"});//6000
    listWrap.css({width: listWidth + "px"});//3000

    listWrap.clone().appendTo(panoWrap);
    //listWrap를 복사하여 panoWrap의 내부끝에 추가첨부한다.
    listClone = panoWrap.children();//ul두개
    render();
    add();
    event();
}


var render= function(){
        move += 1; //move = move + 1;
        listClone.css({transform:'translateX(' + -move + 'px)'})
        //setInterval(실행문,시간)
        timer = window.requestAnimationFrame(render)
}
var add= function(){
    setInterval(function(){
        listWrap.clone().appendTo(panoWrap);
        listClone = panoWrap.children('.list');

    }, 10000)
}
var event = function(){
   controls.find('a.play_on').click(function(e){
             e.preventDefault();
             if($(this).hasClass('active')){
                clear();
                $(this).removeClass('active');
             }else{
                $(this).addClass('active');
                render();
             }
   });
}

var clear= function (){
    window.cancelAnimationFrame(timer)
}

init();


