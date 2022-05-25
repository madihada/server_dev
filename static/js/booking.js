const swup = new Swup();

console.log(document.getElementsByClassName(".fitstContent"))



document.querySelector('.nextButton').addEventListener('click',() => {
    document.querySelector('.firstContent').classList.add("hidden")
    document.querySelector('.secondContent').classList.remove("hidden")
    document.querySelector('.nextButton').classList.add("hidden")
    document.querySelector('.nextButton2').classList.remove("hidden")
    document.querySelector('.beforeButton').classList.add("hidden")
    document.querySelector('.beforeButton2').classList.remove("hidden")
});
document.querySelector('.nextButton2').addEventListener('click',() => {
    document.querySelector('.secondContent').classList.add("hidden")
    document.querySelector('.thirdContent').classList.remove("hidden")
    document.querySelector('.nextButton2').classList.add("hidden")
    document.querySelector('.nextButton3').classList.remove("hidden")
    document.querySelector('.beforeButton2').classList.add("hidden")
    document.querySelector('.beforeButton3').classList.remove("hidden")
});
document.querySelector('.nextButton3').addEventListener('click',() => {
    document.querySelector('.thirdContent').classList.add("hidden")
    document.querySelector('.fourthContent').classList.remove("hidden")
    document.querySelector('.nextButton3').classList.add("hidden")
    document.querySelector('.nextButton4').classList.remove("hidden")
    document.querySelector('.beforeButton3').classList.add("hidden")
    document.querySelector('.beforeButton4').classList.remove("hidden")
});
document.querySelector('.beforeButton2').addEventListener('click',() => {
    document.querySelector('.firstContent').classList.remove("hidden")
    document.querySelector('.secondContent').classList.add("hidden")
    document.querySelector('.nextButton2').classList.add("hidden")
    document.querySelector('.beforeButton2').classList.add("hidden")
    document.querySelector('.nextButton').classList.remove("hidden")
    document.querySelector('.beforeButton').classList.remove("hidden")
});
document.querySelector('.beforeButton3').addEventListener('click',() => {
    document.querySelector('.secondContent').classList.remove("hidden")
    document.querySelector('.thirdContent').classList.add("hidden")
    document.querySelector('.nextButton3').classList.add("hidden")
    document.querySelector('.beforeButton3').classList.add("hidden")
    document.querySelector('.nextButton2').classList.remove("hidden")
    document.querySelector('.beforeButton2').classList.remove("hidden")
});
document.querySelector('.beforeButton4').addEventListener('click',() => {
    document.querySelector('.thirdContent').classList.remove("hidden")
    document.querySelector('.fourthContent').classList.add("hidden")
    document.querySelector('.nextButton4').classList.add("hidden")
    document.querySelector('.beforeButton4').classList.add("hidden")
    document.querySelector('.nextButton3').classList.remove("hidden")
    document.querySelector('.beforeButton3').classList.remove("hidden")
});

document.querySelector('select').addEventListener('click',() => {
    document.querySelector('.firstContent').classList.add("hidden")
    document.querySelector('.secondContent').classList.remove("hidden")
    document.querySelector('.nextButton').classList.add("hidden")
    document.querySelector('.nextButton2').classList.remove("hidden")
    document.querySelector('.beforeButton').classList.add("hidden")
    document.querySelector('.beforeButton2').classList.remove("hidden")
});

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


function familyFrame(clickedPhoto){
    /// 선택한 사진,가격 HTML에 전송
    document.querySelector('.bookingInfo h2').innerHTML
    = clickedPhoto;

    /// 총 비용 보여주기
    /// 1. 가격 가져오기
    const photoInfo = clickedPhoto;
    const photoinfomation = photoInfo.split(',');
    photoPrice = photoinfomation[1];
    document.querySelector('.framePrice').innerHTML
    = photoPrice;
        
    /// 2. 가격들 더하기
    existPrice = document.getElementById("photoPrice").innerHTML;
    photoPrice = document.getElementById("framePrice").innerHTML;
    const totalPrice = Number(existPrice) + Number(photoPrice);

    /// 3. 가격 보여주기
    document.querySelector('.fprice').innerHTML
    = totalPrice;

    
}

function familyBW(clickedPhoto){
    document.querySelector('.bookingInfo h3').innerHTML
    = clickedPhoto;

    /// 총 비용 보여주기
    /// 1. 가격 가져오기
    const photoInfo = clickedPhoto;
    const photoinfomation = photoInfo.split(',');
    photoPrice = photoinfomation[1];
    document.querySelector('.BWPrice').innerHTML
    = photoPrice;
        
    /// 2. 가격들 더하기
    existPrice2 = document.getElementById("BWPrice").innerHTML;
    existPrice1 = document.getElementById("photoPrice").innerHTML;
    photoPrice = document.getElementById("framePrice").innerHTML;
    const totalPrice = Number(existPrice2) + Number(existPrice) + Number(photoPrice);

    /// 3. 가격 보여주기
    document.querySelector('.fprice').innerHTML
    = totalPrice;
    
}
function familyBWFrame(clickedPhoto){
    document.querySelector('.bookingInfo h4').innerHTML
    = clickedPhoto;

    /// 총 비용 보여주기
    /// 1. 가격 가져오기
    const photoInfo = clickedPhoto;
    const photoinfomation = photoInfo.split(',');
    photoPrice = photoinfomation[1];
    document.querySelector('.BWFramePrice').innerHTML
    = photoPrice;
        
    /// 2. 가격들 더하기
    existPrice3 = document.getElementById("BWFramePrice").innerHTML;
    existPrice2 = document.getElementById("BWPrice").innerHTML;
    existPrice1 = document.getElementById("photoPrice").innerHTML;
    photoPrice = document.getElementById("framePrice").innerHTML;
    const totalPrice = Number(existPrice3) + Number(existPrice2) + Number(existPrice) + Number(photoPrice);

    /// 3. 가격 보여주기
    document.querySelector('.fprice').innerHTML
    = totalPrice;
}


/// 최종가격 가져오기
function finalPrice(){
    /// 1. 액자 가격만 변수에 담기
    const frameInfo = clickedFrame;
    const frameInfomation = frameInfo.split(',');
    framePrice = frameInfomation[1];
    /// 2. 기존가격과 액자가격 더하기
    let photoPrice = document.getElementsByClassName("fprice")[0].innerHTML;
    let totalPrice = Number(framePrice)+Number(photoPrice);
    /// 3. 더한가격 보여주기
    document.querySelector('.fprice').innerHTML
    = totalPrice;
};





/// 선택완료 버튼 선택 시, 최종 데이터로 post 함수 호출
function getResData(){
    let fphoto = document.querySelector('.bookingInfo h1').innerHTML
    let fframe = document.querySelector('.bookingInfo h2').innerHTML
    let fbw = document.querySelector('.bookingInfo h3').innerHTML
    let fbwframe = document.querySelector('.bookingInfo h4').innerHTML
    updateFamilyData(fphoto, fframe, fbw, fbwframe)
    alert(`${fphoto}\n${fframe}\n${fbw}\n${fbwframe}`)
}


// Post Data
function updateFamilyData(fphoto, fframe, fbw, fbwframe){
    console.log('posting data..')

    let url = '/process_familydata/'
    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'fphoto':fphoto, 'fframe':fframe, 'fbw':fbw, 'fbwframe':fbwframe})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        // location.reload();
    })
}

let obj = '{{resInfomations}}'
let obj2 = JSON.parse(obj.replace(/&quot;/g,'"'));
let resInfomations = [];
for (let i=0; i<obj2.length; i++){
    let obj3 = JSON.parse(obj2[i].replace(/&#39;/g,'"'));
    resInfomations.push(obj3)
}

