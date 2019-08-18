///////////////////////////////////////
/// Open-Original-Image by Lobers  ///
/////////////////////////////////////

var Dateiname = activeDocument.name

var Jahr = new Date().getFullYear();

var Vorjahr = new Date().getFullYear()-1;

var Monat = ["01_Januar", "02_Februar", "03_Maerz", "04_April", "05_Mai", "06_Juni", "07_Juli", "08_August", "09_September", "10_Oktober", "11_November", "12_Dezember"];

var ET = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

var originalProduktEins;

var originalProduktZwei;

var Original_da = 0; // "Schalter" kein Original da

var Originalkaputt = 0; // "Schalter" wenn Dateigröße Original = 0kb, Schalter erstmal aus


try { // Wenn die Dateigröße des Originals = 0kb entspricht würde Photoshop eine Fehlermeldung ausgeben. Diese Fehlermeldung wird hier mit try und (ganz am Ende) mit catch abgefangen und stattdessen eine selbst definierte Meldung ausgegeben)


//////////////////////////
/// ORIGINALE AKTUELL /// 
////////////////////////

/// 4C ///
function OriginaleAktuell () {
originalProduktEins = new File("Pfad/Original/Ablageort1/hier/einsetzen/"+Dateiname);

if (originalProduktEins.exists){
	app.open(originalProduktEins);
	Original_da = 1; //"Schalter" Original da 
}

/// SW ///
originalProduktEins = new File("Pfad/Original/Ablageort2/hier/einsetzen/"+Dateiname);

if (originalProduktEins.exists){
	app.open(originalProduktEins);
	Original_da = 1; // "Schalter" Original da 
}
}


//////////////////////
/// ORIGINALE ALT /// 
////////////////////

function loopOriginaleAlt (Monat, Jahr){ // Parameter Monat und Jahr übergeben und in Zielordnerpfad einsetzen
var i;
for (i = 0; i < ET.length; i++){ // Loop durch alle Monate und ETs	
originalProduktEins = new File("Pfad/Original/Ablageort3/hier/einsetzen/"+Monat+"_"+Jahr+"/erledigt/"+ET[i]+"/"+Dateiname); // Generiere Zielordner zur Überprüfung
	
if (originalProduktEins.exists){
	app.open(originalProduktEins);
	Original_da = 1; // "Schalter" Original da 
}
} // End Loop
}// End function


///////////////////////////
/// ORIGINALE ERLEDIGT /// 
/////////////////////////

function loopOriginaleErledigt (Monat, Jahr){ // Parameter Monat und Jahr übergeben und in Zielordnerpfad einsetzen
var i;
for (i = 0; i < ET.length; i++){ // Loop durch alle Monate und ETs	
originalProduktEins = new File("Pfad/Original/Ablageort3/hier/einsetzen/erledigt/"+Monat+"_"+Jahr+"/erledigt/"+ET[i]+"/"+Dateiname); // Generiere Zielordner zur Überprüfung
	
if (originalProduktEins.exists){
	app.open(originalProduktEins);
	Original_da = 1; // "Schalter" Original da 
}
} // End Loop
}// End function


//////////////////////////////
/// ORIGINALE ALT VORJAHR /// 
////////////////////////////

function loopOriginaleAlt (Monat, Vorjahr){ // Parameter Monat und Vorjahr übergeben und in Zielordnerpfad einsetzen
var i;
for (i = 0; i < ET.length; i++){ // Loop durch alle Monate und ETs	
originalProduktEins = new File("Pfad/Original/Ablageort3/hier/einsetzen/"+Monat+"_"+Vorjahr+"/erledigt/"+ET[i]+"/"+Dateiname); // Generiere Zielordner zur Überprüfung
	
if (originalProduktEins.exists){
	app.open(originalProduktEins);
	Original_da = 1; // "Schalter" Original da 
}
} // End Loop
}// End function


///////////////////////////////////
/// ORIGINALE ERLEDIGT VORJAHR /// 
/////////////////////////////////

function loopOriginaleErledigt (Monat, Vorjahr){ // Parameter Monat und Vorjahr übergeben und in Zielordnerpfad einsetzen
var i;
for (i = 0; i < ET.length; i++){ // Loop durch alle Monate und ETs	
originalProduktEins = new File("Pfad/Original/Ablageort3/hier/einsetzen/erledigt/"+Monat+"_"+Vorjahr+"/erledigt/"+ET[i]+"/"+Dateiname); // Generiere Zielordner zur Überprüfung
	
if (originalProduktEins.exists){
	app.open(originalProduktEins);
	Original_da = 1; // "Schalter" Original da 
}
} // End Loop
}// End function


///////////////////////////////
/// ORIGINALE PRODUKT ZWEI /// 
/////////////////////////////

/// AKTUELL ///
function OriginaleProduktZwei () {
originalProduktZwei = new File("Pfad/Original/Ablageort4/hier/einsetzen/"+Dateiname);

if (originalProduktZwei.exists){
	app.open(originalProduktZwei);
	Original_da = 1; // "Schalter" Original da 
}

/// ERLEDIGT ///
originalProduktZwei = new File("Pfad/Original/Ablageort4/hier/einsetzen/ERLEDIGT/"+Dateiname);

if (originalProduktZwei.exists){
	app.open(originalProduktZwei);
	Original_da = 1; // "Schalter" Original da 
}
}

///////////////////////////
/// FUNKTIONEN STARTEN /// 
/////////////////////////

// PRODUKT EINS //
OriginaleAktuell () ;

// PRODUKT EINS JAHR ALT //
for (m = 0; m <= 11; m++){ // Loop ganzes Jahr (m entspricht Index für Monate)
	if (Original_da == 0){ // "Schalter" Original da aus // nur Funtionsausführung/Suchen, solange kein Original gefunden wurde
loopOriginaleAlt (Monat[m], Jahr); // Parameter beachten!
}
}


// PRODUKT EINS JAHR ALT/ERLEDIGT //
for (m = 0; m <= 11; m++){ // Loop ganzes Jahr (m entspricht Index für Monate)
	if (Original_da == 0){ // "Schalter" Original da aus // nur Funtionsausführung/Suchen, solange kein Original gefunden wurde 
loopOriginaleErledigt (Monat[m], Jahr); // Parameter beachten!
}
}


// PRODUKT EINS VORJAHR ALT //
for (m = 0; m <= 11; m++){ // Loop ganzes Vorjahr (m entspricht Index für Monate)
	if (Original_da == 0){ // "Schalter" Original da aus // nur Funtionsausführung/Suchen, solange kein Original gefunden wurde
loopOriginaleAlt (Monat[m], Vorjahr); // Parameter beachten!
}
}


// PRODUKT EINS VORJAHR ALT/ERLEDIGT //
for (m = 0; m <= 11; m++){ // Loop ganzes Vorjahr (m entspricht Index für Monate)
	if (Original_da == 0){ // "Schalter" Original da aus // nur Funtionsausführung/Suchen, solange kein Original gefunden wurde
loopOriginaleErledigt (Monat[m], Vorjahr); // Parameter beachten!
}
}


// PRODUKT ZWEI //
OriginaleProduktZwei ();


///////////////////////////////////////////////////
/// MELDUNG KEIN ORIGINAL BZW. ORIGINAL KAPUTT /// 
/////////////////////////////////////////////////

} // End Try
catch (Error) { // Fehlermeldung, die Photoshop ausgibt, wenn Original kaputt ist, weil Dateigröße nur 0kb beträgt, wird hier mit eigener Meldung abgefangen (beginnt oben bei TRY Befehl)
	Originalkaputt =1;
	alert ("Original ist kaputt und unbrauchbar!"); // Einsetzen nach letzter Funktion
}

if (!Original_da==1 && Originalkaputt ==0){ // Wenn Schalter Original_da NICHT auf 1 (an) UND!!! Schalter "Originalkaputt" auf 0 (es gibt kein kaputtes Original) dann Meldung ausgeben
	alert("Kein Original vorhanden!");
}
