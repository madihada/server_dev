const date = new Date();


// 기본 claendar html
const renderCalendar = () => {
    const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    const fullWeekdays = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    document.querySelector('.date h1').innerHTML
    = months[date.getMonth()];
    document.querySelector('.date p').innerHTML
    = date.getFullYear()+"년 "+ months[date.getMonth()] + " "+ date.getDate()+"일 " + fullWeekdays[date.getDay()];

    let days = "";
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
    for(let i = 1; i<=lastDay; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div id="${i}" class="today" onclick="changeColor(this.id)">${i}</div>`
        }
        else{
            days += `<div id="${i}" onclick="changeColor(this.id)">${i}</div>`+ ``
        }
    }
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};


// 기본 day HTML
const renderDay = () => {
    let times = `<div class="morning">
        <div id="t1" onclick="changeColor2(this.id)">10:00</div>
        <div id="t2" onclick="changeColor2(this.id)">10:30</div>
        <div id="t3" onclick="changeColor2(this.id)">11:00</div>
        <div id="t4" onclick="changeColor2(this.id)">11:30</div>
    </div>

    <div class="afternoon">
        <div id="t5" onclick="changeColor2(this.id)">12:00</div>
        <div id="t6" onclick="changeColor2(this.id)">12:30</div>
        <div id="t7" onclick="changeColor2(this.id)">1:00</div>
        <div id="t8" onclick="changeColor2(this.id)">1:30</div>
        <div id="t9" onclick="changeColor2(this.id)">2:00</div>
        <div id="t10" onclick="changeColor2(this.id)">2:30</div>
        <div id="t11" onclick="changeColor2(this.id)">3:00</div>
        <div id="t12" onclick="changeColor2(this.id)">3:30</div>
        <div id="t13" onclick="changeColor2(this.id)">4:00</div>
        <div id="t14" onclick="changeColor2(this.id)">4:30</div>
    </div>
    <div class="evening">
        <div id="t15" onclick="changeColor2(this.id)">5:00</div>
        <div id="t16" onclick="changeColor2(this.id)">5:30</div>
        <div id="t17" onclick="changeColor2(this.id)">6:00</div>
        <div id="t18" onclick="changeColor2(this.id)">6:30</div>
    </div>`

    let time = document.getElementById('timeId')
    time.innerHTML = times;
};



// 날짜 클릭 시 작동되는 함수
function changeColor(clickedId){
    renderCalendar()

    /// 날짜 클릭 시, 정보(년,월,일,요일) 보여주기
    const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const fullWeekdays = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일","월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일","월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일","월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일","월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const dayIndex = firstDayIndex + parseInt(clickedId) - 2;
    document.querySelector('.date p').innerHTML
    = date.getFullYear()+"년 "+ months[date.getMonth()] + "월 "+ clickedId + "일 " + fullWeekdays[dayIndex];
    renderDay();
    document.querySelector('.day').classList.remove("hidden");
    let click = document.getElementById(clickedId);
    click.classList.add('selectedDay');

    /// 날짜 클릭 > 예약 테스트(2020.7.20:1시 1시간30분, 2020.8.25:5시 1시간)
    let resInfo = [{'year':2020, 'month':7, 'day':20, 'time':7, 'duStart':-2 , 'duEnd':0}, {'year':2020, 'month':8, 'day':25, 'time':15, 'duStart':-1, 'duEnd':-1}, {'year':2020, 'month':8, 'day':1, 'time':10, 'duStart':-1, 'duEnd':-1}]
    for (j=0; j<resInfo.length; j++){
        if (date.getFullYear() == resInfo[j].year && months[date.getMonth()] == resInfo[j].month && clickedId == resInfo[j].day) {
            for (let i=resInfo[j].duStart; i<3+resInfo[j].duEnd; i++) {
                let resTime = document.getElementById(`t${resInfo[j].time + i}`);
                resTime.classList.add('reservedTime');
            }        
        }
    }

    /// 클릭한 년,월,일 html에 전송
    document.querySelector('.date h2').innerHTML
    = clickedId;
    document.querySelector('.date h3').innerHTML
    = months[date.getMonth()];    
    document.querySelector('.date h4').innerHTML
    = date.getFullYear();
}



// 시간 클릭 시 작동되는 함수
function changeColor2(clickedTime){
    /// 다른 시간 선택 시 초기화 역할
    renderDay()

    /// 시간 클릭 > 예약 테스트(2020.7.20:1시 1시간30분, 2020.8.25:5시 1시간)
    let resInfo = [{'year':2020, 'month':7, 'day':20, 'time':7, 'duStart':-2 , 'duEnd':0}, {'year':2020, 'month':8, 'day':25, 'time':15, 'duStart':-1, 'duEnd':-1}, {'year':2020, 'month':8, 'day':1, 'time':10, 'duStart':-1, 'duEnd':-1}]
    let selectedDate = document.querySelector('.date h2').innerHTML;
    let selectedMonth = document.querySelector('.date h3').innerHTML;
    let selectedYear = document.querySelector('.date h4').innerHTML;
    for (j=0; j<resInfo.length; j++){
        if (selectedYear == resInfo[j].year && selectedMonth == resInfo[j].month && selectedDate == resInfo[j].day){
            for (let i=resInfo[j].duStart; i<3+resInfo[j].duEnd; i++) {
                let resTime = document.getElementById(`t${resInfo[j].time + i}`);
                resTime.classList.add('reservedTime');
            };
        };
    }

    // 시간 선택
    let click = document.getElementById(clickedTime);
    click.classList.add('selectedTime');
    console.log(click)

    // 최종 데이터(년,월,일,시간)
    document.querySelector('.date h5').innerHTML
    = clickedTime;
    document.querySelector('.date h2').innerHTML
    = selectedDate;
    document.querySelector('.date h3').innerHTML
    = selectedMonth;
    document.querySelector('.date h4').innerHTML
    = selectedYear;

};

function getResData(){
  let selectedTime = document.querySelector('.date h5').innerHTML;
  let selectedDate = document.querySelector('.date h2').innerHTML;
  let selectedMonth = document.querySelector('.date h3').innerHTML;
  let selectedYear = document.querySelector('.date h4').innerHTML;
  alert(selectedYear + selectedMonth + selectedDate + selectedTime)
  renderCalendar();

}




// 월 변경 시 실행되는 함수
renderCalendar();
document.querySelector('.prev').addEventListener('click',() => {
    date.setMonth(date.getMonth()-1);
    renderCalendar();

});
document.querySelector('.next').addEventListener('click',() => {
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});