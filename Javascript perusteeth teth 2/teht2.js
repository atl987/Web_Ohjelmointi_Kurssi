
/* Tee puhelinluettelo.
Puhelinluetteloon lisäät taulukkoon objekteja (eli henkilöitä joilla nimi ja puhelinnumero).
Käyttäjältä kysytään henkilön nimi ja puhelinnumero.
Henkilön poisto -toimintoa ei tarvitse tässä versiossa olla.

Tee hakutoiminto jossa haet nimen perusteella puhelinnumeron.

Tee puhelinnumeron haku funktioksi.
Funktion parametrina on taulukko josta haetaan ja henkilön nimi.
Funktio palauttaa puhelinnumeron.
Kutsu funktiota.

Käyttöliittymän voit tehdä millaiseksi haluat (komentokehoite -pohjainen kuitenkin)
*/
//käytetään puhelinnumero-nimi parien tallennukseen karttaa
const phoneNumbers = new Array();
//kerrotaan ohjelman tarkoitus
console.log("Tervetuloa puhelinluetteloon!\n")
while(true){
//require ottaa kirjastpon käyttöön
var input = require('readline-sync')

//luetaan käyttäjältä syöte muuttujaan
console.log("1)Lisää numero \n 2)Tulosta kaikki numerot\n 3)Hae numeroa nimellä\n");
var userChoice = input.question(); 
switch(userChoice)
{
    case '1':

        var name = input.question("Anna nimi: ");

        var number = input.question("Anna puhelinumero: ");
        var person = new Person(name,number);
        phoneNumbers[phoneNumbers.length] = person;
        break;
    case '2':
        if(phoneNumbers.size!=0)
        {
            for(var i=0;i<phoneNumbers.length;i++){
                var person = phoneNumbers[i]
                console.log(person.nimi + ": "+ person.numero)
            }
        }
        else
        {
            console.log("Puhelinluettelo on tyhjä\n")    
        }
        break;
    case '3':
        var name = input.question("Anna nimi: ");
        var number = Search(phoneNumbers, name);
        if(number!=null)
        {
            console.log(name+": "+ number);
        }
        else
        {
            console.log("puhelinnumeroa nimellä "+name+" ei löytynyt");
        }
        break;
    default:
    console.log("Väärä syöte \n")
    console.log("Tervetuloa puhelinluetteloon!\n 1)Lisää numero \n 2)Hae numeroa nimellä\n")
    userChoice = input.question(); 
}
}
function Person(nimi, numero) 
{
this.nimi=nimi;
this.numero=numero;
}
function Search(array, name)
{
var person = array.find(o=> o.nimi === name);
if(person !=null){
    return person.numero;}
    else{
        return null;
    }
}

