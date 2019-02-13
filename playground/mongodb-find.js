const { MongoClient, ObjectID } = require('mongodb')

const dbName = 'TodoApp'

MongoClient.connect(`mongodb://localhost:27017/${dbName}`, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.')
    }

    console.log('Connected to MongoDB server.')

    const db = client.db(dbName)

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c63eede9c17eeb2a069986a')
    // }).toArray().then(docs => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, err => {
    //     console.log(`Unable to fetch Todos`, err)
    // })

    db.collection('Todos').find().count().then(count => {
        console.log('Todos count: ' + count)
    }, err => {
        console.log(`Unable to fetch Todos count`, err)
    })

    client.close()
});