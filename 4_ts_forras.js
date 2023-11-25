var szamok;
function osszesOszto(szamok) {
    var oszthatoTomb = [];
    for (var i = 0; i <= szamok; i++) {
        if (szamok[i] % 1 == 0) {
            oszthatoTomb.push(szamok[i]);
        }
    }
    return oszthatoTomb;
}
function parosDarab(szamok) {
    var parosTomb = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            parosTomb++;
        }
    }
    return parosTomb;
}
function fuggvenyhivasPalindrom() {
    return true;
}
console.log(osszesOszto(szamok));
console.log(parosDarab(szamok));
console.log(fuggvenyhivasPalindrom());
//
