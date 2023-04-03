let pitch_menu = document.querySelector('.sub-header-pitch');
let tips_menu = document.querySelector('.sub-header-tips');
let tips_page = document.querySelector('.tips-page');



let bottom_caps_input = document.querySelector('.input-caption');
let bottom_caps_copy = document.querySelector('.preview-bottom-caption');

let tags_input = document.querySelector('.input-tag');
let tags_copy = document.querySelector('.tags');


let attachment_tips = document.querySelector('.attachment-tips');
let post_picture= document.querySelector('.tips-preview-content-image');

bottom_caps_input.addEventListener('input',function(e){
    //alert("TESTER");
    bottom_caps_copy.innerText= bottom_caps_input.value;
});
tags_input.addEventListener('input',function(e){
    //alert("ASSDASDSA");
    let string = tags_input.value;
    if(string.charAt(0) != '@') {
        string = '@' + string;
    }
    string = string.replace(/ /g,' @');
    string = string.replace(/\n/g,'\n@');
    tags_copy.innerText = string;
    // tags_copy.innerText = tags_input.value;
    // if(tags_input.value.charAt(tags_input.value.length()-1).equals(" ")){
    //     tags_copy.innerText = tags_input.value + '@';
    // }
});

$(document).ready(function(){
  $('#txt-caption').emojioneArea({
      pickerPosition:'top'
  });


});

/*
attachment_tips.addEventListener('change',function(e){
    let reader = new FileReader();
    reader.readAsDataURL(attachment_tips.files[0]);
    reader.addEventListener('load',function(e){
        post_picture.innerHTML = "<img src=${reader.result} alt=''/>";
    });
});
*/
/*
let imageInput = document.getElementById('.attachment-tips');
let imagePreview = document.getElementById('.tips-preview-content-image');

imageInput.addEventListener('change', function() {
  const file = this.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      const image = new Image();
      image.src = reader.result;
      imagePreview.innerHTML = '';
      imagePreview.appendChild(image);
    });
    reader.readAsDataURL(file);
  }
});*/
