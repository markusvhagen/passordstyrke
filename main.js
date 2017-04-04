var styrke_output = document.getElementById("styrke");
var smaa_bokstaver = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var store_bokstaver = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var siffer = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var styrke_maaler = 0;
var styrke_resultat;
var lengde_sjekk = false;

function sjekk_styrke() {
    /*
        Algoritmen rangerer hvor bra et passord er utifra visse faktorer.
        For hver faktor som blir oppfylt vil styrke_maaler øke med 1.
        Følgende faktorer bestememr styrke_maaler:
            1. Lengden på passordet; 8 eller mer tegn vil gi 1 poeng.
            2. Store bokstaver; 2 eller mer store bokstaver vil gi 1 poeng.
            3. Siffer; 2 eller mer siffer gir 1 poeng.
    */


    // Mottar passord og splitter passordet til en liste med alle de inviduelle tegnene i strengen. Definerer samt variabelen for lengde
    var passord = document.getElementById("passord").value;
    var passord_split = passord.split("");
    var lengde = passord.length;

    // Lengden på passord
    if (lengde >= 8 && lengde_sjekk == false) {
        styrke_maaler += 1;
        lengde_sjekk = true; // Unngår med denne at man kan gå fram og tilbake mellom 8 for å legge til 1 på styrkemåleren.
    }

    switch(styrke_maaler) {
        case 1:
            styrke_resultat = "Svakt";
            break;
        case 2:
            styrke_resultat = "Middels";
            break;
        case 3:
            styrke_resultat = "Sterkt";
            break;
        default:
            styrke_resultat = "Skriv et passord";
    }

    styrke_output.innerHTML = styrke_svar;
    console.log(styrke_maaler + " " + lengde)
}
