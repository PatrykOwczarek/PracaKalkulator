function sumatrzechliczb(){
    const liczba1 = parseInt(prompt('Pierwsza liczba: '));
    const liczba2 = parseInt(prompt('Druga liczba: '));
    const liczba3 = parseInt(prompt('Trzecia liczba: '));
    const suma = liczba1 + liczba2 + liczba3;
document.getElementById("odp").innerHTML ="SUMA TYCH TRZECH LICZB TO: "+suma;
}

function sredniatrzechliczb(){
    const liczba1 = parseInt(prompt('Pierwsza liczba: '));
    const liczba2 = parseInt(prompt('Druga liczba: '));
    const liczba3 = parseInt(prompt('Trzecia liczba: '));
    const srednia = (liczba1 + liczba2 + liczba3)/3;
    document.getElementById("odp").innerHTML ="ŚREDNIA TYCH TRZECH LICZB TO: "+srednia;
}

function sumaroznicailoczyn(){
    const liczba1 = parseInt(prompt('Pierwsza liczba: '));
    const liczba2 = parseInt(prompt('Druga liczba: '));
    const suma = liczba1 + liczba2;
    const roznica = liczba1 - liczba2;
    const iloczyn = liczba1 * liczba2;
    document.getElementById("odp").innerHTML ="SUMA LICZB: "+suma+"<br>"+"RÓŻNICA LICZB: "+roznica+"<br>"+"ILOCZYN LICZB: "+iloczyn;
}

function pierwiastek(){
    const liczba1 = parseInt(prompt('Wpisz liczbe, z ktorej chcesz uzyskac pierwiatek: '));
    const pierw = Math.sqrt(liczba1);
    document.getElementById("odp").innerHTML = 'PIERWIASTEK Z LICZBY TO: '+pierw;
}

function polekwadratu(){
    const liczba1 = parseInt(prompt('Liczba w cm: '));
    const pole = liczba1 * liczba1;
    document.getElementById("odp").innerHTML = 'POLE KWADRATU Z LICZBY TO: '+pole+"cm2";
}

function poleprostopadloscianu(){
    const liczba1 = parseInt(prompt('Liczba w cm: '));
    const liczba2 = parseInt(prompt('Liczba w cm: '));
    const liczba3= parseInt(prompt('Liczba w cm: '));
    document.getElementById('odp').innerHTML = "POLE PROSTOPADŁOŚCIANU: " + (((liczba1 * 2) * liczba2) + ((liczba2 * 2) * liczba3) + ((liczba2 * 2) * liczba3))+"cm";
}

function polekola(){
    const liczba = parseInt(prompt('Promień: '))
    const pole = Math.PI*(liczba*liczba);
    const obwod = (Math.PI*2)*liczba;

    document.getElementById("odp").innerHTML = "POLE KOŁA WYNOSI: "+pole+"<br>"+"OBWÓD KOŁA WYNOSI: "+obwod;
}

function gdanskszczecin(){
    const cenapaliwa = parseInt(prompt('Cena paliwa: '));
    const inf1 = 100/8;
    const inf2 = 360/inf1;
    const cena = inf2*cenapaliwa;
    document.getElementById("odp").innerHTML = "PRZEJAZD Z GDAŃSKA DO SZCZECINA BĘDZIE KOSZTOWAŁ: "+cena+"zł";
}

function kosztprzejazdu(){
    const cenapaliwa = parseInt(prompt('Cena paliwa: '));
    const dlugosctrasy = parseInt(prompt('Długość trasy: '));
    const spalanie = parseInt(prompt('Spalanie auta: '));
    const inf1 = 100/spalanie;
    const inf2 = dlugosctrasy/inf1;
    const cena = inf2*cenapaliwa;
    document.getElementById("odp").innerHTML = "PRZEJAZD BĘDZIE KOSZTOWAŁ: "+cena+"zł";
}

function zyskzlokaty(){
    const inf1 = parseInt(prompt('Kwota do obliczenia lokaty: '));
    const inf2 = (((inf1 * 1.08) - inf1) * 0.81);
    document.getElementById("odp").innerHTML = "ZYSK Z LOKATY TO: "+inf2;
}
