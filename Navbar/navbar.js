let dropDown_circle = document.getElementById('dropDown-circle');
// let showDrop = document.getElementById('showDrop');
let dropDown_img = document.getElementById('dropDown-img');
let showDrop = document.querySelector('.dropDown-konten-group');

dropDown_circle.addEventListener('click',function(e){
    e.preventDefault();
    if(showDrop.style.opacity==0){
        showDrop.style.opacity=1;
        showDrop.style.pointerEvents='auto';
        dropDown_img.style.transform = 'rotate(180deg)';
        dropDown_img.style.transition = '1s';
    }
    else{
        showDrop.style.opacity=0;
        showDrop.style.pointerEvents='none';
        dropDown_img.style.transform = 'rotate(0deg)';
        dropDown_img.style.transition = '1s';
    }
});

// box.addEventListener('click',function(e){
//     if(count%2==0){
//         box.style.transform = 'rotate(45deg)';
//         showDrop.style.opacity='1';

//         count = count+1;
//     }
//     else{
//         showDrop.style.opacity='0';

//         box.style.transform = 'rotate(-45deg)';
//         count = count+1;
//     }
// });

