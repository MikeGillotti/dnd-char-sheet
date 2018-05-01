var dexmod;
var strmod;
var conmod;
var intmod;
var wismod;
var chamod;

var str;
var dex;
var con;
var int;
var wis;
var cha;

var check =
[

["Acrobatics-check","dexMod","acrobaticsPB"],
["animalHandling-check","wisMod","animalHandlingPB"],
["Arcana-check","intMod","arcanaPB"],
["Athletics-check","strMod","athleticsPB"],
["Deception-check","dexMod","deceptionPB"],
["History-check","chaMod","historyPB"],
["Insight-check","wisMod","insightPB"],
["Intimidation-check","chaMod","intimidationPB"],
["Investigation-check","intMod","investigationPB"],
["Medicine-check","wisMod","medicinePB"],
["Nature-check","intMod","naturePB"],
["Perception-check","wisMod","perceptionPB"],
["Performance-check","chaMod","performancePB"],
["Persuasion-check","chaMod","persuasionPB"],
["Religion-check","intMod","religionPB"],
["sleightOfHand-check","dexMod","sleightofhandPB"],
["Stealth-check","dexMod","stealthPB"],
["Survival-check","wisMod","survivalPB"],

]



var probono =parseInt(document.getElementById("pro-bonus").value,10);
	str = document.getElementsByClassName("str");
	dex = document.getElementsByClassName("dex");
	con = document.getElementsByClassName("con");
	int = document.getElementsByClassName("int");
	wis = document.getElementsByClassName("wis");
	cha = document.getElementsByClassName("cha");

var Acrobatics;
var animalHandling;
var Arcana;
var Deception;
var History;
var Insight;
var Intimidation;
var Investigation;
var Medicine;
var Nature;
var Perception;
var Performance;
var Persuasion;
var Religion;
var sleightOfHand;
var Stealth;
var Survival;

//dexmod=Math.floor((dex[0].value-10)/2);
//document.getElementById("dexmod").innerHTML=dexmod;
//Acrobatics=dexmod;
//document.getElementById("Acrobatics").innerHTML=Acrobatics;
var pb={

	acrobaticsPB:0,
	arcanaPB:0,
	animalHandlingPB:0,
	athleticsPB:0,
	deceptionPB:0,
	historyPB:0,
	insightPB:0,
	intimidationPB:0,
	investigationPB:0,
	medicinePB:0,
	naturePB:0,
	perceptionPB:0,
	performancePB:0,
	persuasionPB:0,
	religionPB:0,
	sleightofhandPB:0,
	stealthPB:0,
	survivalPB:0,

}
var attribute =
{
	
	strMod:0,
	dexMod:0,
	conMod:0,
	intMod:0,
	wisMod:0,
	chaMod:0



};
var a1=0;
var a2=0;
var a3=0;
var a4=0;
var a5=0;
var a6=0;
var a7=0;
var a8=0;
var a9=0;
var a10=0;
var a11=0;
var a12=0;
var a13=0;
var a14=0;
var a15=0;
var a16=0;
var a17=0;
var a18=0;
var a19=0;
var a20=0;
var total=0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
for(var i in check){

function skillcheck2(x,y,z){

document.getElementById("skill-check-button").addEventListener("click", skillcheck);

function skillcheck(){



console.log("Test");
if (document.getElementById("skill-select").value==x){
var d20=getRandomIntInclusive(1,20);
if (d20==1){

	 a1++;
	document.getElementById("1").innerHTML=a1;
}
if (d20==2){
	 a2++;
	document.getElementById("2").innerHTML=a2;
}
if (d20==3){
	 a3++;
	document.getElementById("3").innerHTML=a3;

}
if (d20==4){
	 a4++;
	document.getElementById("4").innerHTML=a4;
}
if (d20==5){
	 a5++;
	document.getElementById("5").innerHTML=a5;
}
if (d20==6){
	 a6 ++;
	document.getElementById("6").innerHTML=a6;

}
if (d20==7){
	 a7 ++;
	document.getElementById("7").innerHTML=a7;

}
if (d20==8){
	 a8++;
	document.getElementById("8").innerHTML=a8;

}
if (d20==9){

	 a9++;
	document.getElementById("9").innerHTML=a9;	
}
if (d20==10){
	 a10++;
	document.getElementById("10").innerHTML=a10;	
}
if (d20==11){
	 a11++;
	document.getElementById("11").innerHTML=a11;	
}
if (d20==12){
	 a12++;
	document.getElementById("12").innerHTML=a12;	
}
if (d20==13){
	 a13++;
	document.getElementById("13").innerHTML=a13;	
}
if (d20==14){
	 a14 ++;
	document.getElementById("14").innerHTML=a14;	
}
if (d20==15){
	 a15 ++;
	document.getElementById("15").innerHTML=a15;	
}
if (d20==16){
	 a16++;
	document.getElementById("16").innerHTML=a16;	
}
if (d20==17){
	 a17 ++;
	document.getElementById("17").innerHTML=a17;	
}
if (d20==18){
	 a18++;
	document.getElementById("18").innerHTML=a18;	
}
if (d20==19){
	 a19 ++;
	document.getElementById("19").innerHTML=a19;	
}
if (d20==20){
	 a20 ++;
	document.getElementById("20").innerHTML=a20;	
}

	 total++;
	document.getElementById("total").innerHTML=total;


if (d20==1){
	document.getElementById("skill-check-output").innerHTML="Critical Fail!";

	} else if (d20==20){

	document.getElementById("skill-check-output").innerHTML="NAT 20!!!";


	}else{
	document.getElementById("skill-check-output").innerHTML=d20+attribute[y]+pb[z];
}
}

}



}
skillcheck2(check[i][0], check[i][1],check[i][2]);

}

function conmod(mod, modclass, att){
attribute[mod]=Math.floor((att-10)/2);
document.getElementById(modclass).innerHTML=attribute[mod];
}

function attmod(mod, modclass, att, skillclass, skill, p){
attribute[mod]=Math.floor((att-10)/2);
document.getElementById(modclass).innerHTML=attribute[mod];
skill=attribute[mod]+pb[p];
document.getElementById(skillclass).innerHTML=skill;
}


str[0].addEventListener('input', Updatestr);
function Updatestr(){
attmod("strMod", "strmod", str[0].value, "Athletics", Athletics, "athleticsPB");
}
Updatestr();
dex[0].addEventListener('input', Updatedex);
function Updatedex(){
attmod("dexMod", "dexmod", dex[0].value, "Acrobatics", Acrobatics, "acrobaticsPB");
attmod("dexMod", "dexmod", dex[0].value, "sleightOfHand", sleightOfHand, "sleightofhandPB");
attmod("dexMod", "dexmod", dex[0].value, "Stealth", Stealth, "stealthPB");
}
Updatedex();
con[0].addEventListener('input', Updatecon);
function Updatecon(){
conmod("conMod", "conmod", con[0].value);
}
Updatecon();
int[0].addEventListener('input', Updateint);
function Updateint(){
attmod("intMod", "intmod", int[0].value, "Arcana", Arcana, "arcanaPB");
attmod("intMod", "intmod", int[0].value, "History", History, "historyPB");
attmod("intMod", "intmod", int[0].value, "Investigation", Investigation, "investigationPB");
attmod("intMod", "intmod", int[0].value, "Nature", Nature, "naturePB");
attmod("intMod", "intmod", int[0].value, "Religion", Religion, "religionPB");
}
Updateint();
wis[0].addEventListener('input', Updatewis);
function Updatewis(){
attmod("wisMod", "wismod", wis[0].value, "animalHandling", animalHandling, "animalHandlingPB");
attmod("wisMod", "wismod", wis[0].value, "Insight", Insight, "insightPB");
attmod("wisMod", "wismod", wis[0].value, "Medicine", Medicine, "medicinePB");
attmod("wisMod", "wismod", wis[0].value, "Perception", Perception, "perceptionPB");
attmod("wisMod", "wismod", wis[0].value, "Survival", Survival, "survivalPB");
}
Updatewis();
cha[0].addEventListener('input', Updatecha);
function Updatecha(){
	attmod("chaMod", "chamod", cha[0].value, "Deception", Deception, "deceptionPB");

attmod("chaMod", "chamod", cha[0].value, "Intimidation", Intimidation, "intimidationPB");
attmod("chaMod", "chamod", cha[0].value, "Performance", Performance, "performancePB");
attmod("chaMod", "chamod", cha[0].value, "Persuasion", Persuasion, "persuasionPB");
}
Updatecha();

prof=[

["Acrobatics-prof", "Acrobatics-expert", "Acrobatics", "dexMod", "acrobaticsPB"],
["Arcana-prof", "Arcana-expert", "Arcana", "intMod", "arcanaPB"],
["animalHandling-prof", "animalHandling-expert", "animalHandling", "wisMod", "animalHandlingPB"],
["Athletics-prof", "Athletics-expert", "Athletics", "strMod", "athleticsPB"],
["Deception-prof", "Deception-expert", "Deception", "chaMod", "deceptionPB"],
["History-prof", "History-expert", "History", "intMod", "historyPB"],
["Insight-prof", "Insight-expert", "Insight", "wisMod", "insightPB"],
["Intimidation-prof", "Intimidation-expert", "Intimidation", "chaMod", "intimidationPB"],
["Investigation-prof", "Investigation-expert", "Investigation", "intMod", "investigationPB"],
["Medicine-prof", "Medicine-expert", "Medicine", "wisMod", "medicinePB"],
["Nature-prof", "Nature-expert", "Nature", "intMod", "naturePB"],
["Perception-prof", "Perception-expert", "Perception", "wisMod", "perceptionPB"],
["Performance-prof", "Performance-expert", "Performance", "chaMod", "performancePB"],
["Persuasion-prof", "Persuasion-expert", "Persuasion", "chaMod", "persuasionPB"],
["Religion-prof", "Religion-expert", "Religion", "intMod", "religionPB"],
["sleightOfHand-prof", "sleightOfHand-expert", "sleightOfHand", "dexMod", "sleightofhandPB"],
["Stealth-prof", "Stealth-expert", "Stealth", "dexMod", "stealthPB"],
["Survival-prof", "Survival-expert", "Survival", "wisMod", "survivalPB"],



]
var acrobaticsProf;
for(var i in prof){
 prof[i][0] = document.getElementById(prof[i][0]); 
 prof[i][1] = document.getElementById(prof[i][1]);
 prof[i][2] = document.getElementById(prof[i][2]);
 prof[i][3] = prof[i][3];
 //console.log(prof[i][2]);
	//console.log(prof[i][0]);
	//console.log(prof[i][1]);

	//console.log(prof[i]);

/*
var acrobaticsProf=document.getElementById("Acrobatics-prof");
var acrobaticsExpert=document.getElementById("Acrobatics-expert");
var animalHandlingProf=document.getElementById("animalHandling-prof");
var animalHandlingExpert=document.getElementById("animalHandling-expert");
*/

function ProfExpert(x,y,z,a,b){
document.getElementById("pro-bonus").addEventListener('input', UpdateProf);


x.addEventListener('input', UpdateProf);
y.addEventListener('input', UpdateProf);



function UpdateProf(){
var probono =parseInt(document.getElementById("pro-bonus").value,10);

if (x.checked==true){
	pb[b]=probono;
	y.style.visibility="visible";

	if(y.checked==true){

		pb[b]=probono*2;

	}else{

		pb[b]=probono;
	}
	console.log(y.checked);
	}else{
	y.checked=false;
	y.style.visibility="hidden";
	pb[b]=0;

	}

	z.innerHTML=attribute[a]+pb[b];
}
UpdateProf();
}	

ProfExpert(prof[i][0], prof[i][1], prof[i][2], prof[i][3], prof[i][4]);


}

