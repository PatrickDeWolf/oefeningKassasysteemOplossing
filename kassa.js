const expr = window.prompt("wat heb je gekocht");
const prompt2 = window.prompt("aantal");
var result;
var unitPrijs;

switch(expr) {
    case 'appelsien':
    unitPrijs = 0.59;
    result = prompt2 * unitPrijs;
    break;

    case 'papayas':
    unitPrijs = 2.49;
    result = prompt2 * unitPrijs;
    break;

    case 'banaan':
    unitPrijs = 0.49;
    result = prompt2 * unitPrijs;
    break;

    default:
    unitPrijs = 0;
    result=0;
}

      document.write("<b>Product: </b>" + expr + " (&euro; " +  unitPrijs + ") <b>aantal:</b> " + prompt2 + " <b>Totaal: </b> &euro; " +result);
