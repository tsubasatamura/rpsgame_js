'use strict'

const myHandText=document.getElementById('myHandResult');
const cpuHandText=document.getElementById('cpuHandResult');
const resultText=document.getElementById('result');
const judge=['あなたの勝ちです','CPUの勝ちです','あいこです'];
const judgeTable=[[2,0,1],
				  [1,2,0],
				  [0,1,2]];
const hand=["グー","チョキ","パー"];

$('.btn').on('click',function(){
	const myHand = $(this).val();
	const cpuHand=Math.floor(Math.random()*3);
	
	myHandText.textContent=`あなたの手は${hand[myHand]}です`;
	cpuHandText.textContent=`CPUの手は${hand[cpuHand]}です`;
	resultText.textContent=judge[judgeTable[myHand][cpuHand]];
	if(resultText.textContent==='あなたの勝ちです'){
		resultText.classList.remove('text-danger');
		resultText.classList.add('text-primary');
	}else if(resultText.textContent==='CPUの勝ちです'){
		resultText.classList.remove('text-primary');
		resultText.classList.add('text-danger');
	}else{
		resultText.classList.remove('text-primary','text-danger');
	}
});