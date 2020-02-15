const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://editsync:1234567890@hackthevalley-mbz5f.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});