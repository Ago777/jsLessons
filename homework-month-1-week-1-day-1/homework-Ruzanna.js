//Exercise  1.4. Ինչ կարտատպվի*/
// var name='Some Name';
// let name='Some Other Name';
// console.log(name)://Ոչինչ չի արտատպվի քանի որ չենք կարող նույն փոփոխականին 2 տիպ տալ;


// Exercise  1.5 Ինչ կարտատպվի
// const age=15;
// age=45;
// console.log(age);//Ոչինչ չի արտատպվի քանի որ const-ով հայտարարված փոփոխականների արժեքներ փոխել հնարավոր չէ;

// Exercise  1.6 Ինչ կարտատպվի
// let   person='developer';
// const newPerson='newdeveloper';
// console.log(developer);//Ոչինչ չի արտատպվի քանի որ փակաքծում պետք է գրել փոփոխականի անվանում այլ ոչ թե արժեք;


// Exercise  1.7 Ինչ կարտատպվի
// let isGood=true;
// isGood=false;
// let isBest=isGood;
// console.log(isBest);//Ունենք փոփոխական`'isGood' որ true է՝ փոխելով իր արժեք դարձել է false;ավելացել է նոր փոփոխական՝ 'isBest'`ՈՐԻ ԱՐԺԵՔ ՀԱՎԱՍԱՐ Է 'ISGOOD'-ԻՆ:Կարտատպվի false:

// Exercise  1.10 Ինչ կարտատպվի
// let age=45;
// console.log(age);//Կարտատպվի 45, քանի որ ունենք փոփոխական՝ 'age' որից՛է արժեք հավասար 45-ի:
// console.log("age");// Կարտատպվի age  բառ՝ ՔԱՆԻ ՈՐ ԱՅՍՏԵՂ ՓՈՓՈԽԱԿԱՆԻ ԱՐԺԵՔ STRING է:
// age=55;
// console.log(age);// Կարտատպվի 55`քանի որ փոփոխականի արժեք փոխվել է 55-ի:

// Exercise  1.11 Ինչ կարտատպվի
// let color;
// let otherColor=color;
// console.log(color,otherColor);//1.Կարտատպվի "underfined underfined" `ՔԱՆԻ ՈՐ ՄԵՐ ԱՌԱՋԻՆ ՓՈՓՈԽԱԿԱՆ ԱՐԺԵՔ ՉՈՒՆԻ ԵՐԿՐՈՐԴ ՀԱՎԱՍԱՐ Է ԱՌԱՋԻՆԻՆ;
// color="green";
// console.log(color,otherColor);//2.Կարտատպվի "green underfined";
// oterColor=null;
// console.log(color,otherColor);//3.Կարտատպվի "green null";
// color=otherColor;
// console.log(color,otherColor);//4.Կարտատպվի "null null";

// Exercise  1.12 Ինչ կարտատպվի
// let ourPlanet='earth';
// let anotherPlanet=null;
// let isOurPlanetEarth=true;
// ourPlanet=anotherPlanet;
// anotherPlanet='mercury';
// isOurPlanetEarth='yes our planet is earth';
// console.log(ourPlanet,anotherPlanet,isOurPlanetEarth);//1.Կարտատպվի " 'null' 'mercury' 'yes our planet is earth' ";
// console.log(newPlanet);//2.ՈՉԻՆՉ ՉԻ ԱՐՏԱՏՊՎԻ քանի որ մենք չունենք փոփոխական, որի անուն 'newPlanet' է:
//STOP CODE
// let newPlanet='Earth';
// ourPlanet=newPlanet;
// console.log(ourPlanet,newPlanet);//3.Կարտատպվի " 'Earth' 'Earth' ";

// Exercise  1.12 Ինչ կարտատպվի
// let isJavascriptGood=true;
// console.log(isJavascriptGood);//1.Կարտատպվի "true";
// console.log(`is javascript Good ? $(isJavascriptGood)`); ?
// console.log(`is javascript Good ? $("isJavascriptGood")`); ?

// Exercise 2.6 Ինչ կարտատպվի
// let isDeveloper=true;
// isDeveloper='Yes';
// console.log(`typeof isDeveloper $(typeof is Developer)`)://?