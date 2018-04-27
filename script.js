
var strmod;
var dexmod;
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

	str = document.getElementsByClassName("str");
	dex = document.getElementsByClassName("dex");
	con = document.getElementsByClassName("con");
	int = document.getElementsByClassName("int");
	wis = document.getElementsByClassName("wis");
	cha = document.getElementsByClassName("cha");



var strmodupdate=attmod(strmod, "strmod", str[0].value);
var dexmodupdate=attmod(dexmod, "dexmod", dex[0].value);
var conmodupdate=attmod(conmod, "conmod", con[0].value);
var intmodupdate=attmod(intmod, "intmod", int[0].value);
var wismodupdate=attmod(wismod, "wismod", wis[0].value);
var chamodupdate=attmod(chamod, "chamod", cha[0].value);




function attmod(mod, modclass, att){
mod=Math.floor((att-10)/2);
document.getElementById(modclass).innerHTML=mod;
}

str[0].addEventListener('input', Updatestr);
function Updatestr(){
attmod(strmod, "strmod", str[0].value);
}
dex[0].addEventListener('input', Updatedex);
function Updatedex(){
attmod(dexmod, "dexmod", dex[0].value);
}
con[0].addEventListener('input', Updatecon);
function Updatecon(){
attmod(conmod, "conmod", con[0].value);}
int[0].addEventListener('input', Updateint);
function Updateint(){
attmod(intmod, "intmod", int[0].value);}
wis[0].addEventListener('input', Updatewis);
function Updatewis(){
attmod(wismod, "wismod", wis[0].value);}
cha[0].addEventListener('input', Updatecha);
function Updatecha(){
attmod(chamod, "chamod", cha[0].value);}


