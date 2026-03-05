const questions = [

{
q:"서핑하러 가면 나는?",
a:"친구들과 같이 탄다",
b:"혼자 파도 즐긴다",
typeA:"social",
typeB:"chill"
},

{
q:"좋은 파도를 보면?",
a:"바로 도전한다",
b:"조금 관찰한다",
typeA:"challenge",
typeB:"strategy"
},

{
q:"서핑의 매력은?",
a:"액션과 스릴",
b:"바다 분위기",
typeA:"challenge",
typeB:"emotion"
},

{
q:"서핑 여행 스타일",
a:"계획 세움",
b:"즉흥 출발",
typeA:"strategy",
typeB:"freedom"
},

{
q:"넘어졌을 때",
a:"다시 도전",
b:"잠깐 쉬기",
typeA:"challenge",
typeB:"emotion"
},

{
q:"동아리 활동에서 중요한 것",
a:"사람들과 재미",
b:"실력 향상",
typeA:"social",
typeB:"strategy"
}

]

let index=0

let score={
challenge:0,
emotion:0,
social:0,
strategy:0,
freedom:0,
chill:0
}

function showQuestion(){

let q=questions[index]

document.getElementById("question").innerText=q.q

document.getElementById("answers").innerHTML=`

<button onclick="answer('A')">${q.a}</button>
<button onclick="answer('B')">${q.b}</button>

`

}

function answer(type){

let q=questions[index]

if(type=="A"){
score[q.typeA]++
}else{
score[q.typeB]++
}

index++

if(index<questions.length){
showQuestion()
}else{
showResult()
}

}

function showResult(){

let maxType=Object.keys(score).reduce((a,b)=>score[a]>score[b]?a:b)

let result=""

if(maxType=="challenge") result="🌊 파도 헌터"
if(maxType=="emotion") result="🌿 힐링 서퍼"
if(maxType=="social") result="🔥 에너지 라이더"
if(maxType=="strategy") result="🧭 전략 서퍼"
if(maxType=="freedom") result="🏄 자유 라이더"
if(maxType=="chill") result="🌅 선셋 서퍼"

document.getElementById("quiz").innerHTML=`

<h2>당신의 서퍼 유형</h2>
<h1>${result}</h1>

<p>우리 서핑 동아리에서 같이 파도 타요!</p>

<button onclick="location.reload()">다시 테스트</button>

`

}

showQuestion()
