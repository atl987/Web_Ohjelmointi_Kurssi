

/*
 Tee sovellus, joka kysyy syötettävän sanan (merkkijono).
Sovellus testaa onko sana palindromi ts. sana on sama toisinpäin.
Esim. sana saippuakauppias on palindromi.
Luo ratkaisu siten että et käytä valmiita funktioita vaan teet oman algoritmin.

Tehtävässä ei saa köyttää valmiita javascript funktioita joilla voisi kääntää merkkijonon (vaan merkkijonon kääntö on tehtävä itse silmukassa).

Muuta edellinen ratkaisu funktioksi joka palauttaa boolean arvon true, mikäli funktion parametrina oleva sana on palindromi (jos ei, niin palautetaan false).

Kutsu funktiota.

pseudokoodina:

print "tämä ohjelma tarkastaa, onko annettu merkkijono palindromi!"
print "anna merkkijono:"
string palindrome = readline
bool isPalindrome= CheckPalindromity(palindrome)
if isPaldinrome == true
    print "on palindromi"
if isPalindrome == false
    print "ei ole palindromi"
CheckPalindromity(string palindrome)
    int length = palindrome.length
    string reversed = ""
    for int i = length; i>0;i--)
        reversed+=palindrome[i]
    if reversed == palindrome 
        return true
    else 
        retrun false
*/
//reuire ottaa kirjastpon käyttöön
var input = require('readline-sync')
//kerrotaan ohjelman tarkoitus
console.log("Tämä ohjelma tarkistaa, onko antamasi merkkijono palindromi")
//luetaan käyttäjältä syöte muuttujaan
var palindrome = input.question("Anna tarkistettava merkkijono: ");  
//kutsutaan funktiota
var isPalindrome = CheckPalindromity(palindrome);
//jos  funktio palauttaa true
if(isPalindrome)
{
    //oli palindromi
    console.log(palindrome + " on palindromi")
}
//jos funktio palauttaa false
else
{
    //ei ole palindromi
console.log(palindrome + " ei ole palindromi");
}


function CheckPalindromity(pal)
{
    //otetaan merkkijono pituus muuttujaan
    let length = pal.length;
    //alsutetaan tyhjä merkkijono takaperin käännetylle merkkijonolle
    let reversed = "";
    //aloitetaan merkkijonon viimeisestä merkistä, jatektaan ensimmäiseen merkkiin saakka
    for (let i= length-1;i>=0;i--)
    {
         //otetaan merkki indeksissä i
        let char = pal.charAt(i);
        //lisätään merkki reversed muuttujaan
        reversed+=char;
    }
    //jos pal on samam merkkijono kuin reversed
    if(pal==reversed)
    {
        //onm palindromi, palautetaan true
        return true;
    }
    //muussa tapauksessa ei ole palindromi
    else
    {
        //palauettaan false
        return false
    }
}