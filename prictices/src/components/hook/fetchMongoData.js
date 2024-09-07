// utils/fetchMongoData.js

export async function insertDocument(document) {
    console.log(document)
    try {
        const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-fnodtzy/endpoint/data/v1/action/insertOne', {
            headers: {
                'Content-Type': 'application/json',
                'API-Key': process.env.DATA_API_KEY,
            },
            method: 'POST',
            body: JSON.stringify({
                dataSource: 'Cluster0', // Your cluster name
                database: 'sk', // Your database name
                collection: 'uk', // Your collection name
                document: document, // The document you want to insert
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(`Failed to insert data: ${error.message}`);
    }
}
