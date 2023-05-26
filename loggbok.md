#### FRE 2023-04-28
Idag har jag planerat hur min databas ska se ut och vilka delar den behöver ha. 
Jag kom fram till att jag behöver en tabell för frågorna och sedan en tabell för alla svaren
där de kopplas till frågan med ett id, sen står det svaret och sedan om svaret är korrekt eller inte.
Jag har skapat tabellerna och lagt in en test fråga. sedan har jag börjat med att ladda ner allting jag
behöver för att köra programmet. 

Nästa lektion ska jag försöka starta programmet och koppla den till databasen så den kan visa den första frågan.






#### TIS 2023-05-02
Jag har laddat ner de saker jag tror jag kommer behöva som express och mysql. 
Jag har kopplat databasen till programmet så jag borde kunna komma åt datan.
Jag har skrivit en router function för att försöka visa frågan men jag får inte programmet att starta med mitt "start" script.

Nästa lektion ska jag försöka få fram frågorna så man kan se dom och så man kan se de olika svaren.








#### TIS 2023-05-09
Jag har lyckats få fram sidan på localhost så jag kan faktiskt se den.
Jag har fått fram så att den första frågan visas men inte så alla svarsalternativen visas korrekt.


Nästa lektion ska jag försöka visa alla svaren och frågan och lägga till knappar till svaren så man kan välja en av dem.




#### FRE 2023-05-12
Jag har fått fram alla svaren till en fråga i formen av en formulär med radio-knappar så man kan välja en och sedan submita.
Dock gör det ingenting att svara än eftersom det är ingen funktion till den. 

Jag måste på något sätt komma åt just det svarets value eftersom det visar om svaret är korrekt eller inte och sedan rätta frågan.
Jag måste även kunna visa upp nästa fråga.





#### TIS 2023-05-16
Typ ingeting fungerar.

Det jag behöver få att fungera är att den visar rätt förslag svar istället för alla av förslagen.
Jag behöver kunna välja en radiobutton och sen kunna se vilken radiobutton som var vald när man klickar "answer".
jag vet inte hur man ska göra det med dataserver och get och post funktioner.



#### TIS 2023-05-23

Jag kan gå fram genom frågorna och alternativen står på rätt plats


nästa lektion ska jag försöka titta vilken radioknapp som är vald för att kunna se om de svarar rätt eller fel.


#### FRE 2023-05-26
Nu kan man kör programmet.
Man kan gå igenom alla frågor och man får poäng om man gissar rätt.

Nästa sak jag ska göra är att lägga till mer frågor, göra ett slut till quizen och städa up console.logs m.m