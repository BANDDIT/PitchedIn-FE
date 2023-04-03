let fullname_copy = document.querySelector('.head-pitch-preview-content-judul-h2-1');
let bisnisName_copy = document.querySelector('.head-pitch-preview-content-judul-h2-2');
let fullname_input = document.querySelector('.input-fullname');
let bisnisName_input = document.querySelector('.input-businessproduct');

let firstCateg_input = document.querySelector('.first-category');
let secCateg_input = document.querySelector('.second-category');
let firstCateg_copy = document.querySelector('.first-category-container');
let secCateg_copy = document.querySelector('.second-category-container');

let generalDesc_input = document.querySelector('.input-generaldesc');
let generalDesc_copy = document.querySelector('.opening-content');

let offer_input = document.querySelector('.input-offerdetails');
let offer_copy = document.querySelector('.caption-content');

let attachment = document.getElementById('attachment');

//Menu Pitch dan Tips
/*
pitch_menu.addEventListener('click',function(e){
    //alert("PITCH DIKLIK");
    pitch_menu.style.color= "#203D3B";
    pitch_menu.style.textDecoration = "underline";
    tips_menu.style.color= "#447270";
    tips_menu.style.textDecoration = "none";

    pitch_page.style.display="flex";
    pitch_page.style.pointerEvents="auto";
    tips_page.style.display="none";
    tips_page.style.pointerEvents="none";
});
tips_menu.addEventListener('click',function(e){
    //alert("TIPS DIKLIK");
    pitch_menu.style.color= "#447270";
    pitch_menu.style.textDecoration = "none";
    tips_menu.style.color= "#203D3B";
    tips_menu.style.textDecoration = "underline";

    pitch_page.style.display="none";
    pitch_page.style.pointerEvents="none";
    tips_page.style.display="flex";
    tips_page.style.pointerEvents="auto";
});
*/

//Pitch 
//Copas input ke preview
fullname_input.addEventListener('input',function(e){
    fullname_copy.innerText = fullname_input.value;
});
bisnisName_input.addEventListener('input',function(e){
    bisnisName_copy.innerText= bisnisName_input.value;
});
firstCateg_input.addEventListener('input',function(e){
    //alert("KLoK");
    firstCateg_copy.innerText = firstCateg_input.value;
    //firstCateg_copy.innerText = firstCateg_input.value;
});
secCateg_input.addEventListener('input',function(e){
    secCateg_copy.innerText = secCateg_input.value;
});
/*
generalDesc_input.addEventListener('input',function(e){
    generalDesc_copy.innerText = generalDesc_input.value;
});*/
offer_input.addEventListener('input',function(e){
    offer_copy.innerText = offer_input.value;
    //offer_copy.
});
/*
$(document).ready(function(){
    let emojioneArea = $('#txt-offerdetails').emojioneArea({
        pickerPosition: 'bottom',
        search: true,
        filters: {
            shortnames: false,
            emoticons: false,
            custom: []
        },
        events: {
            keyup: function (editor, event) {
                offer_copy.innerHTML = emojioneArea[0].emojioneArea.getText();
            },
            emojibtn_click: function (button, event) {
                offer_copy.innerHTML = emojioneArea[0].emojioneArea.getText();
            },
        },
    });
    $('.input-generaldesc').on('input',function(){
        generalDesc_copy.innerText = generalDesc_input.value;
    });
});*/
/*
$(document).ready(function(){
    let emojioneArea = $('#txt-offerdetails').emojioneArea({
        pickerPosition: 'bottom',
        search: true,
        filters: {
            shortnames: false,
            emoticons: false,
            custom: []
        },
        events: {
            keyup: function (editor, event) {
                if (event.key === 'Enter') {
                    //offer_copy.innerHTML += '<br>';
                    editor.insert('\n');
                }
                else{
                    offer_copy.innerHTML = emojioneArea[0].emojioneArea.getText();
                }
            },
            emojibtn_click: function (button, event) {
                offer_copy.innerHTML = emojioneArea[0].emojioneArea.getText();
            },
        },
    });

    $('#txt-offerdetails').on('keypress', function(event) {
        if (event.key === 'Enter') {
            offer_copy.innerHTML += '<br>';
        }
    });
});*/

$(document).ready(function(){
    let emojioneArea = $('#txt-offerdetails').emojioneArea({
        pickerPosition: 'bottom',
        search: false,
        filters: {
            shortnames: false,
            emoticons: false,
            custom: []
        },
        events: {
            keyup: function (editor, event) {
                let texts = emojioneArea[0].emojioneArea.getText();
                texts = texts.replace(/\n/g,"<br>");
                if (event.key === 'Enter') {
                    offer_copy.innerHTML += '<br>';
                    event.preventDefault();
                } else {
                    offer_copy.innerHTML = texts;
                }
            },
            emojibtn_click: function (button, event) {
                let texts = emojioneArea[0].emojioneArea.getText();
                texts = texts.replace(/\n/g,"<br>");
                offer_copy.innerHTML = texts;

            },
        },
    });
});


  


let imageUpload = document.getElementById('picture-general');
//let imagePreview = document.querySelector('.banner');
let close_banner = document.querySelector('.banner img');
let banner_div = document.querySelector('.banner-div');
imageUpload.addEventListener('change',function(){
	let file = this.files[0];
    //imagePreview.style.display="flex";
    if(file){
        let reader = new FileReader();

		reader.addEventListener('load', function() {
			//imagePreview.innerHTML = '<img src="' + this.result + '" />';
            //alert("TESTETS");
            let elemen = document.createElement('div');
            elemen.classList.add('banner');
            elemen.style.backgroundImage= "url('" + reader.result + "')";
            
            let pict = document.createElement('img');
            pict.src="../Asset/close_banner.png";
            pict.classList.add('close_banner');

            elemen.appendChild(pict);
            banner_div.appendChild(elemen);
            /*
            imagePreview.style.backgroundImage = "url('" + reader.result + "')";
            close_banner.style.display="flex";*/
		});

		reader.readAsDataURL(file);        
    }
});

/*
imageUpload.addEventListener('change', function() {
	let file = this.files[0];
    imagePreview.style.display="flex";
	//alert("ASDJASOIJDAS");
	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function() {
			//imagePreview.innerHTML = '<img src="' + this.result + '" />';
            imagePreview.style.backgroundImage = "url('" + reader.result + "')";
            close_banner.style.display="flex";
		});

		reader.readAsDataURL(file);
	}
});

close_banner.addEventListener('click',function(e){
    close_banner.style.display="none";
    imagePreview.style.display="none";

});*/


let pitch_preview = document.querySelector('.pitch-preview-content');
let close_link = document.querySelector('.link-box-close');
attachment.addEventListener('change',function(){
    //alert("SADASD");
    let elemen = document.createElement('div');
    elemen.classList.add('link-box');

    let input = document.getElementById("attachment");
    let file = input.files[0];
    let url = URL.createObjectURL(file);
    let link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", file.name);
    link.innerHTML = file.name;
    elemen.appendChild(link);

    
    let pict = document.createElement('img');
    pict.classList.add('link-box-close');
    pict.src="../Asset/close.png";
    elemen.appendChild(pict);

    pitch_preview.appendChild(elemen);
});


pitch_preview.addEventListener('click', function(e) {
    let obj = e.target;
    if (obj.classList.contains('link-box-close')||obj.classList.contains('close_banner')) {
      obj.parentElement.remove();
    }

});



/*
let pitch_menu = document.querySelector('.sub-header-pitch');
let tips_menu = document.querySelector('.sub-header-tips');
let pitch_page = document.querySelector('.pitch-page');
let tips_page = document.querySelector('.tips-page');

let fullname_copy = document.querySelector('.head-pitch-preview-content-judul-h2-1');
let bisnisName_copy = document.querySelector('.head-pitch-preview-content-judul-h2-2');
let fullname_input = document.querySelector('.input-fullname');
let bisnisName_input = document.querySelector('.input-businessproduct');

let firstCateg_input = document.querySelector('.first-category');
let secCateg_input = document.querySelector('.second-category');
let firstCateg_copy = document.querySelector('.first-category-container');
let secCateg_copy = document.querySelector('.second-category-container');

let generalDesc_input = document.querySelector('.input-generaldesc');
let generalDesc_copy = document.querySelector('.opening-content');

let offer_input = document.querySelector('.input-offerdetails');
let offer_copy = document.querySelector('.caption-content');

let attachment = document.getElementById('attachment');

let bottom_caps_input = document.querySelector('.input-caption');
let bottom_caps_copy = document.querySelector('.preview-bottom-caption');

let tags_input = document.querySelector('.input-tag');
let tags_copy = document.querySelector('.tags');


let attachment_tips = document.querySelector('.attachment-tips');
let post_picture= document.querySelector('.tips-preview-content-image');

//Menu Pitch dan Tips
pitch_menu.addEventListener('click',function(e){
    //alert("PITCH DIKLIK");
    pitch_menu.style.color= "#203D3B";
    pitch_menu.style.textDecoration = "underline";
    tips_menu.style.color= "#447270";
    tips_menu.style.textDecoration = "none";

    pitch_page.style.display="flex";
    pitch_page.style.pointerEvents="auto";
    tips_page.style.display="none";
    tips_page.style.pointerEvents="none";
});
tips_menu.addEventListener('click',function(e){
    //alert("TIPS DIKLIK");
    pitch_menu.style.color= "#447270";
    pitch_menu.style.textDecoration = "none";
    tips_menu.style.color= "#203D3B";
    tips_menu.style.textDecoration = "underline";

    pitch_page.style.display="none";
    pitch_page.style.pointerEvents="none";
    tips_page.style.display="flex";
    tips_page.style.pointerEvents="auto";
});


//Pitch 
//Copas input ke preview
fullname_input.addEventListener('input',function(e){
    fullname_copy.innerText = fullname_input.value;
});
bisnisName_input.addEventListener('input',function(e){
    bisnisName_copy.innerText= bisnisName_input.value;
});
firstCateg_input.addEventListener('input',function(e){
    //alert("KLoK");
    firstCateg_copy.innerText = firstCateg_input.value;
    //firstCateg_copy.innerText = firstCateg_input.value;
});
secCateg_input.addEventListener('input',function(e){
    secCateg_copy.innerText = secCateg_input.value;
});
generalDesc_input.addEventListener('input',function(e){
    generalDesc_copy.innerText = generalDesc_input.value;
});
offer_input.addEventListener('input',function(e){
    offer_copy.innerText = offer_input.value;
    //offer_copy.
});
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
});
*/