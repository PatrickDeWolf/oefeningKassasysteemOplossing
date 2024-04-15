const expr = window.prompt("wat heb je gekocht");
const prompt2 = window.prompt("aantal");
var result;
var unitPrijs;

switch(expr) {
    case 'appelsien':
    //document.write('Een appelsien kosten 0,59 euro per stuk.');
    unitPrijs = 0.59;
    result = prompt2 * unitPrijs;
    break;

    case 'papayas':
    //document.write('Mangoes and Papayas kosten 2,49 euro per stuk.');
    unitPrijs = 2.49;
    result = prompt2 * unitPrijs;
    break;

    case 'banaan':
    //document.write('een Banaan is krom en kost 0,49 euro per stuk.');
    unitPrijs = 0.49;
    result = prompt2 * unitPrijs;
    break;

    default:
    //document.write('Sorry, we konden jou product niet weervinden.');
    result="We konden je product niet weervinden";
}

      document.write("<b>Product: </b>" + expr + " (&euro; " +  unitPrijs + ") <b>aantal:</b> " + prompt2 + " <b>Totaal: </b> &euro; " +result);
