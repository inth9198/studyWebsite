/*
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function btnClick()
{
    const userName = loginInput.value;
    if (userName === "")
    {
        alert("plz write name");
    }else if(userName.length > 15)
    {
        alert("too long");
    }

}
loginButton.addEventListener("click",btnClick);
*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden"//스트링 저장시 관습
const USERNAME_KEY = "username";

function onSubmit(event)
{
    event.preventDefault();//브라우저의 기본동작을 막는거임
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(userName);
    localStorage.setItem(USERNAME_KEY,userName);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onSubmit);//자바스크립트는
    //똑똑해서 onSubmit()로 바로 호출하는게 아니라 내가 필요한정보를 첫번째 인수로
    //줘서 알려줌 진짜 똑띠하네
} else
{
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //greeting.innerText  = "hello " + userName;//못생김
    greeting.innerText  = `안녕하세요 ${savedUsername}님`;//1왼쪽에 있음
}

function handel(event)
{
    event.preventDefault();
    console.log(event);
}
const link=document.querySelector("a");
link.addEventListener("click",handel);
//유저 이름 저장하기
//local storage
//localStorage.setItem("username","minho")
//localStorage.getItem("username")