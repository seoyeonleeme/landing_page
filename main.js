//커서 깜빡임 효과

let target = document.querySelector('#dynamic');

function blink() {
    target.classList.toggle('active');
}
//toggle method로 active라는 클래스가 추가됐다가 빠졌다가 반복하게 함(on,off)

setInterval(blink, 500);
//반복 함수 0.5초 간격



//한글자씩 텍스트 출력

let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript",
    "Learn to Ruby", "Learn to Python"];

let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
//Math.floor: 소수점을 버리게 하는 method, stringArr.length는 5므로 그 이하로만 나옴

let selectStringArr = selectString.split("");
//split: 해당문자열을 ""의 기준을 이용해서 배열로 분리시켜라
//단어 하나하나가 알파벳으로 쪼개져서 배열로 들어감

console.log(selectString);
console.log(selectStringArr);

function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift(); //+=🧡
        setTimeout(function () {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}
//shift: 배열의 앞의 값부터 밖으로 빼내서 출력함
//randomArr이 0보다 클 때는 dynamic함수가 반복적으로 실행됨

dynamic(randomString());

//타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

function randomString() {
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript",
        "Learn to React"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}