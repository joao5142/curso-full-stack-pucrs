const soap = require("soap");
const url = "http://www.dneonline.com/calculator.asmx?wsdl";

soap.createClient(url, function (err, client) {
  console.log(client.describe().Calculator.CalculatorSoap);

  client.Add({ intA: 1, intB: 4 }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result.AddResult);
    }
  });
});
