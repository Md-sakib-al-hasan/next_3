export async function updateDocumentById(id, updateFields) {
    try {
        const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-fnodtzy/endpoint/data/v1/action/updateOne', {
            headers: {
                'Content-Type': 'application/json',
                'API-Key': process.env.DATA_API_KEY,
            },
            method: 'POST',
            body: JSON.stringify({
                dataSource: 'Cluster0', // Your cluster name
                database: 'sk', // Your database name
                collection: 'uk', // Your collection name
                filter: { _id: { $oid: id } }, // Filter to match the document by _id
                update: { $set: updateFields }, // Fields to update
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(`Failed to update data: ${error.message}`);
    }
}
