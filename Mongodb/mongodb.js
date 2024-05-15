const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/test';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();  

        const db = client.db('test');
        const collection = db.collection('Employees');

        // Find all documents in the collection
        const cursor = collection.find({});
        await cursor.forEach(record => {
            console.log(record);
        });

//insertOne
        // const ackResult = await collection.insertOne({
        //     _id: 6,
        //     firstName: 'Johnny',
        //     lastName: 'Steves',
        //     gender: 'male',
        //     email: 'john.steve@abc.com',
        //     salary: 50000,
        //     department: { name: 'Developer' }
        // });

        // console.log("The record inserted into the collection with ID: " + ackResult.insertedId);


 //insertMany      
        // const manyDocumentsToInsert = [
        //     {
        //         _id: 7,
        //         firstName: 'Priya',
        //         lastName: 'dharshini',
        //         gender: 'female',
        //         email: 'priya@gmail.com',
        //         salary: 70000,
        //         department: { name: 'tester' }
        //     },{
        //         _id: 8,
        //         firstName: 'Preetha',
        //         lastName: 'Iyyanar',
        //         gender: 'female',
        //         email: 'preetha@gmail.com',
        //         salary: 60000,
        //         department: { name: 'TN' }
        //     }
        //     // Add more documents as needed
        // ];

        // // Insert many documents
        // const manyAckResult = await collection.insertMany(manyDocumentsToInsert);
        // console.log("The " + manyAckResult.insertedCount + " records inserted into the collection");
//updateOne
        // const updateResult = await collection.updateOne(
        //     { _id: 7 },
        //     { $set: { salary: 90000 } }
        // );
        // console.log("Updated " + updateResult.modifiedCount + " document");
//updateMany
        //  const updateManyResult = await collection.updateMany(
        //     { department: { name: 'Marketing' } }, // Filter: documents with department name 'Marketing'
        //     { $set: { lastName:'Bachan' } } // Update: set salary to 65000
        // );
        // console.log("Updated " + updateManyResult.modifiedCount + " documents");
//deleteOne
        // const deleteResult = await collection.deleteOne({ firstName: 'Kapil' });
        // console.log("Deleted " + deleteResult.deletedCount + " document");
//deleteMany        
        // const deleteManyResult = await collection.deleteMany(
        //     { department: { name: 'HR' } } // Filter: documents with department name 'Sales'
        // );
        // console.log("Deleted " + deleteManyResult.deletedCount + " documents");


        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();