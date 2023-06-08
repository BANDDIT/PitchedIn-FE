let heart = document.querySelectorAll('.heart');
for(let i=0;i<heart.length;i++){
    heart[i].addEventListener('click',function(e){
        if(heart[i].getAttribute("src")==="../Asset/heart-noLike.png"){
            heart[i].setAttribute("src","../Asset/heart-Like.png");
        }
        else{
            heart[i].setAttribute("src","../Asset/heart-noLike.png");
        }
    });
}

let input_forum = document.querySelector('.input_forum');
let numberOfChar = document.querySelector('.numberOfChar');
let input_forum_length = input_forum.value.length;
if(input_forum_length>200){
    input_forum.value = input_forum.value.substring(0,200);
}
else{
    numberOfChar.innerHTML = input_forum_length.toString() + "/200";
}
input_forum.addEventListener('input',function(e){
    input_forum_length = input_forum.value.length;
    if(input_forum_length>200){
        input_forum.value = input_forum.value.substring(0,200);
    }
    else{
        numberOfChar.innerHTML = input_forum_length.toString() + "/200";
    }
});

let forum_page = document.querySelector('.forum_page');
forum_page.style.height=(window.innerHeight-70)+'px';



let circle_add = document.querySelector('.circle_add');
let responsive_modal = document.querySelector('.forum_page_left_down');
let close_responsive_modal = document.querySelector('.close_forum_page_left');
let scroll_area = document.querySelector('.forum_page_right');
circle_add.addEventListener('click',function(e){
    responsive_modal.style.pointerEvents="auto";
    responsive_modal.style.opacity=1;
    //scroll_area.style.overflow="hidden";
});
close_responsive_modal.addEventListener('click',function(e){
    responsive_modal.style.pointerEvents="none";
    responsive_modal.style.opacity=0;
    //scroll_area.style.overflow="visible";

});


window.addEventListener('resize',function(e){
    e.preventDefault();
    if(window.innerWidth>700){
        responsive_modal.style.pointerEvents="auto";
        responsive_modal.style.opacity=1;
    }
    else{
        responsive_modal.style.pointerEvents="none";
        responsive_modal.style.opacity=0;  
    }
})
/*
let picture = document.getElementById('picture');
let video = document.getElementById('video');
picture.addEventListener('load',function(e){
    e.preventDefault();
});*/
//let input_forum = document.querySelector('.input_forum');
/*
$(document).ready(function(){
    let input_forum = $('.input_forum');
    let numberOfChar = $('.numberOfChar');

    let emojioneArea = input_forum.emojioneArea({
        pickerPosition: 'bottom',
        search: false,
        filters: {
            shortnames: false,
            emoticons: false,
            custom: []
        },
        attributes: {
            style: "height:210px; font-family: 'Poppins'; font-style: normal; font-weight: 500; font-size: 25px; color: #203D3B;"
        }
    });
});*/

/*
$(document).ready(function(){
    let input_forum = $('.input_forum');
    let numberOfChar = $('.numberOfChar');

    let emojioneArea = input_forum.emojioneArea({
        pickerPosition: 'bottom',
        search: false,
        filters: {
            shortnames: false,
            emoticons: false,
            custom: []
        },
        attributes: {
            style: "height:210px; font-family: 'Poppins'; font-style: normal; font-weight: 500; font-size: 25px; color: #203D3B;"
        }
    });

    input_forum.on('input', function() {
        let characterCount = input_forum.val().length;
        numberOfChar.text(characterCount + ' /200');
    });
});
*/



/*
    events: {
            keyup: function (editor, event) {
                //alert("MASOK");
                //let characterCount = input_forum.value.length;
                //numberOfChar.innerHTML = charactercount.toString()+ ' /200';
                //numberOfChar.html(characterCount + ' /200');
            },
            emojibtn_click: function (button, event) {
                //alert("MASOK");

            },
        }
input_forum.addEventListener('keyup',function(e){
    let input_forum_length = input_forum.value.length;
    if(input_forum_length>200){
        input_forum.value = input_forum.value.substring(0,200);
    }
    else{
        numberOfChar.innerHTML = input_forum_length.toString() + " /200";
    }
});

*/

/*
let input_forum = document.querySelector('.input_forum');
let numberOfChar = document.querySelector('.numberOfChar');
$(document).ready(function(){
    let emojioneArea = $('.input_forum').emojioneArea({
        pickerPosition: 'bottom',
        search: false,
        filters: {
            shortnames: false,
            emoticons: false,
            custom: []
        },
        attributes: {
            style: "height:210px; font-family: 'Poppins'; font-style: normal; font-weight: 500; font-size: 25px; color: #203D3B;"
        }
    });
    $('.input_forum').on('input', function() {
        let characterCount = $(this).val().length;
        numberOfChar.innerHTML = characterCount.toString() + " /200";
    });
});
*/


/*

$(document).ready(function(){
    let emojioneArea = $('#input_forum').emojioneArea({
        
        pickerPosition: 'bottom',
        search: false,
        filters: {
            shortnames: false,
            emoticons: false,
            custom: []
        },
        events: {
            keyup: function (editor, event) {
                ///alert("ASOPSAOPAOPSD");
                let input_forum_length = input_forum.value.length;
                if(input_forum_length>200){
                    input_forum.value = input_forum.value.substring(0,200);
                }
                else{
                    numberOfChar.innerHTML = input_forum_length.toString() + " /200";
                }
            },
            emojibtn_click: function (button, event) {
                let input_forum_length = input_forum.value.length;
                if(input_forum_length>200){
                    input_forum.value = input_forum.value.substring(0,200);
                }
                else{
                    numberOfChar.innerHTML = input_forum_length.toString() + " /200";
                }
            },
        },
        
    });
});*/