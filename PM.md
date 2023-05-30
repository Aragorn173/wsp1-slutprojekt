# Slutprojekt

Alvin Liljeström 2023-05-30
## Inledning
Målet med projektet var att ska en webbsida som var en quiz och använde sig av en databas för att hämta informationen om frågorna och alla svarsalternativen. Jag ville göra en form av quiz som använde sig av databser för att göra det på ett annat sätt än hur jag gjorde min sida till mitt gymnasiearbete.

## Bakgrund

Jag började med att installera alla paket som jag visste att jag skulle behöva för projektet. Paket som express, mysql och nunjucks. För att visa innehållet skapade jag njk filer med en layout fil som bas och sedan för de olika sidor som jag behövde. Jag använde mig av routers för att navigera sidan och skriva det funktioner för att programmet skulle fungera. Den första routern är när du kommer till startsidan och på den finns en knapp som tar dig till faktiska quizen. Sedan hade jag en router som kallades quiz som även hade en id parameter. Det använde jag för att veta vilken fråga som ska visas på vilken sida. 

Det fanns flera svarsalternativ för varje fråga och jag använde radiobuttons för att kunna välja vilket svarsalternativ man ville välja. När man har markerat den radioknapp man vill kan man klicka på en knapp. Om du svarade rätt kommer du få ett poäng och om du svarar fel händer inget med dina poäng. Sedan går man vidare till nästa fråga. När man svarat på alla frågorna kommer man till sida där det står hur mycket poäng du fick och du har möjligheten att börja om quizen.

## Positiva erfarenheter

När jag väl förstod hur det fungerade med databserna och hur jag skulle komma åt informationen gick det ganska bra att skriva funktioner till programmet. Det var inga problem med att använda routes och jag känner att jag har en ganska bra förståelse över hur man kan använda get och post funktioner och vad de gör.

## Negativa erfarenheter

Jag hade problem med att få det att fungera med databserna eftersom jag var inte riktigt säker på hur jag skulle komma åt rätt information genom mysql frågor. Detta löste jag henom att fråga efter hjälp vilket gjorde att jag bättre förstod hur jag skulle använda databasen. Jag hade även problem med hosting för jag hade tydligen laddat ner node som ett npm paket vilket gjorde att jag inte kunde hosta. jag löste detta genom att ta bort paketen och sedan installera dom jag faktiskt behövde igen. För att undvika detta i framtiden skulle jag behöva göra en bättre planering över vad jag behöver för projektet.

## Sammanfattning

Jag känner att jag har lärt mig en bra del om hur det går att använda databaser för att spara information och sedan hur man använder den för att skapa program. Det jag kan vidareutveckla på för detta projekt skulle vara frontend med css för att göra att sidan ser bättre ut och blir trevligare att använda. Även att lägga till en funktion på sidan för att lägga in frågor istället för att behöva göra det direkt in i databasen. Skulle också kunna lägga in en login funktion som kan spara hur mycket poäng du fick och göra en leaderboard.