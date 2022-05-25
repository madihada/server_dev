function familyMain(clickedPhoto){

    /// 선택한 사진,가격 HTML에 전송
    document.querySelector('.bookingInfo h1').innerHTML
    = clickedPhoto;

    /// 총 비용 보여주기
    /// 1. 가격 가져오기
    const photoInfo = clickedPhoto;
    const photoinfomation = photoInfo.split(',');
    photoPrice = photoinfomation[1];
    document.querySelector('.photoPrice').innerHTML
    = photoPrice;

    /// 2. 가격 보여주기
    document.querySelector('.fprice').innerHTML
    = photoPrice;
}

function selectItem(clickedPhoto){
    /// 1. 클릭한 사진의 html tag 가져와서,
    let click = document.getElementById(clickedPhoto);
    /// 2. class에 add, remove 하기.
    let selectClassCollection = document.querySelector('.selectedPhoto');


    if (selectClassCollection){
        click.classList.remove('selectedPhoto');
        document.getElementById('h1').innerHTML = null;

    }else {
        click.classList.add('selectedPhoto');
        let selectClassCollection = document.querySelector('.selectedPhoto');
        let tests = selectClassCollection.getAttribute("id");
        document.getElementById('h1').innerHTML = tests;
    }
}
function selectItem2(clickedPhoto){
    /// 1. 클릭한 사진의 html tag 가져와서,
    let click = document.getElementById(clickedPhoto);
    /// 2. class에 add, remove 하기.
    let selectClassCollection = document.querySelector('.selectedPhoto2');


    if (selectClassCollection){
        click.classList.remove('selectedPhoto2');
        document.getElementById('h2').innerHTML = null;
    }else {
        click.classList.add('selectedPhoto2');
        let selectClassCollection = document.querySelector('.selectedPhoto2');
        let tests = selectClassCollection.getAttribute("id");
        document.getElementById('h2').innerHTML = tests;
    }
}
function selectItem3(clickedPhoto){
    /// 1. 클릭한 사진의 html tag 가져와서,
    let click = document.getElementById(clickedPhoto);
    /// 2. class에 add, remove 하기.
    let selectClassCollection = document.querySelector('.selectedPhoto3');
    if (selectClassCollection){
        click.classList.remove('selectedPhoto3');
        document.getElementById('h3').innerHTML = null;
    }else {
        click.classList.add('selectedPhoto3');
        let selectClassCollection = document.querySelector('.selectedPhoto3');
        let tests = selectClassCollection.getAttribute("id");
        document.getElementById('h3').innerHTML = tests;
    }
}
function selectItem4(clickedPhoto){
    /// 1. 클릭한 사진의 html tag 가져와서,
    let click = document.getElementById(clickedPhoto);
    /// 2. class에 add, remove 하기.
    let selectClassCollection = document.querySelector('.selectedPhoto4');
    if (selectClassCollection){
        click.classList.remove('selectedPhoto4');
        document.getElementById('h4').innerHTML = null;
    }else {
        click.classList.add('selectedPhoto4');
        let selectClassCollection = document.querySelector('.selectedPhoto4');
        let tests = selectClassCollection.getAttribute("id");
        document.getElementById('h4').innerHTML = tests;
    }
}
function selectItem5(clickedPhoto){
    /// 1. 클릭한 사진의 html tag 가져와서,
    let click = document.getElementById(clickedPhoto);
    /// 2. class에 add, remove 하기.
    let selectClassCollection = document.querySelector('.selectedPhoto5');
    if (selectClassCollection){
        click.classList.remove('selectedPhoto5');
        document.getElementById('h5').innerHTML = null;
    }else {
        click.classList.add('selectedPhoto5');
        let selectClassCollection = document.querySelector('.selectedPhoto5');
        let tests = selectClassCollection.getAttribute("id");
        document.getElementById('h5').innerHTML = tests;
    }
}
function selectItem6(clickedPhoto){
    /// 1. 클릭한 사진의 html tag 가져와서,
    let click = document.getElementById(clickedPhoto);
    /// 2. class에 add, remove 하기.
    let selectClassCollection = document.querySelector('.selectedPhoto6');
    if (selectClassCollection){
        click.classList.remove('selectedPhoto6');
        document.getElementById('h6').innerHTML = null;
    }else {
        click.classList.add('selectedPhoto6');
        let selectClassCollection = document.querySelector('.selectedPhoto6');
        let tests = selectClassCollection.getAttribute("id");
        document.getElementById('h6').innerHTML = tests;
    }
}
function selectItem7(clickedPhoto){
    /// 1. 클릭한 사진의 html tag 가져와서,
    let click = document.getElementById(clickedPhoto);
    /// 2. class에 add, remove 하기.
    let selectClassCollection = document.querySelector('.selectedPhoto7');
    if (selectClassCollection){
        click.classList.remove('selectedPhoto7');
        document.getElementById('h7').innerHTML = null;

    }else {
        click.classList.add('selectedPhoto7');
        let selectClassCollection = document.querySelector('.selectedPhoto7');
        let tests = selectClassCollection.getAttribute("id");
        document.getElementById('h7').innerHTML = tests;
    }
}
function selectItem8(clickedPhoto){
    /// 1. 클릭한 사진의 html tag 가져와서,
    let click = document.getElementById(clickedPhoto);
    /// 2. class에 add, remove 하기.
    let selectClassCollection = document.querySelector('.selectedPhoto8');
    if (selectClassCollection){
        click.classList.remove('selectedPhoto8');
        document.getElementById('h8').innerHTML = null;
    }else {
        click.classList.add('selectedPhoto8');
        let selectClassCollection = document.querySelector('.selectedPhoto8');
        let tests = selectClassCollection.getAttribute("id");
        document.getElementById('h8').innerHTML = tests;
    }
}


function sendingInfo() {
    let one = document.querySelector('#h1').innerHTML;
    let two = document.querySelector('#h2').innerHTML;
    let three = document.querySelector('#h3').innerHTML;
    let four = document.querySelector('#h4').innerHTML;
    let five = document.querySelector('#h5').innerHTML;
    let six = document.querySelector('#h6').innerHTML;
    let seven = document.querySelector('#h7').innerHTML;
    let eight = document.querySelector('#h8').innerHTML;

    updatePhotoData(one, two, three, four, five, six, seven, eight)
}
function updatePhotoData(one, two, three, four, five, six, seven, eight){
    console.log('posting data..')

    let url = '/process_resphotodata/'
    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'one':one, 'two':two, 'three':three, 'four':four, 'five':five, 'six':six, 'seven':seven, 'eight':eight})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        // location.reload();
    })
}