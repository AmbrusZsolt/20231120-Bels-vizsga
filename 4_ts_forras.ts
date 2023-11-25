 var szamok;
function osszesOszto(szamok:number):number[]{
    var oszthatoTomb:number[]=[];
    
    for(var i:number=0;i<=szamok;i++){
        if(szamok[i] % 1==0){
            oszthatoTomb.push(szamok[i]);
        }
    }
    return oszthatoTomb;
}
function  parosDarab(szamok:number[]):number{
    var parosTomb:number=0;
for(var i:number=0;i<szamok.length;i++){
    if(szamok[i] % 2==0){
        parosTomb++;
    }
}
return parosTomb;
}


function fuggvenyhivasPalindrom():boolean{


    return true;
   

}

console.log(osszesOszto(szamok));
console.log(parosDarab(szamok));
console.log(fuggvenyhivasPalindrom());