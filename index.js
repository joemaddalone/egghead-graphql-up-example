const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const client = new Lokka({
  transport: new Transport(
    'YOUR_API_ENDPOINT'
   )
});

function getItems() {
  return client.query(`
      {
      allPersons {
        id
        name
        tasks {
          id
          description
        }
      }
    }
    
  `)
}

getItems().then(d => console.log(JSON.stringify(d)))