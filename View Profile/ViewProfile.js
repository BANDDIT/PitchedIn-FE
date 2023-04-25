let up_chat_btn = document.querySelector('.menu_edit_up');
let down_chat_btn = document.querySelector('.menu_edit_down');
let down_chat_div = document.querySelector('.messaging_up_layer_default');
let up_chat_div = document.querySelector('.messaging_up_layer');


let search_bar = document.querySelector('.search_bar');
let search_input = document.querySelector('.search_input');
search_bar.addEventListener('submit',function(e){
    e.preventDefault();
    search_input.value="";
});

up_chat_btn.addEventListener('click',function(e){
    up_chat_div.style.display="flex";
    up_chat_div.style.pointerEvents="auto";
    down_chat_div.style.display="none";
    down_chat_div.style.pointerEvents="none";
    counting_messages = counting_messages + 1;
});

down_chat_btn.addEventListener('click',function(e){
    up_chat_div.style.display="none";
    up_chat_div.style.pointerEvents="none";
    down_chat_div.style.display="flex";
    down_chat_div.style.pointerEvents="auto";
    counting_messages = counting_messages + 1;
});
