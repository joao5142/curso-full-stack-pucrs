const soap = require("soap");
const url =
  "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";

soap.createClient(url, function (err, client) {
  //   console.log(client.describe().AtendeClienteService.AtendeClientePort);
  if (err) {
    console.log(err);
  } else {
    client.consultaCEP(
      {
        cep: "55920000",
      },
      (err, res) => {
        console.log(res);
      }
    );
  }
  // console.log('DESCRIBE -->', client.describe().AtendeClienteService.AtendeClientePort )
});
