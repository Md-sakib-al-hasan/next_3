export async function fetchMongoData() {
    try {
        const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-fnodtzy/endpoint/data/v1/action/find', {
            headers: {
                'Content-Type': 'application/json',
                'API-Key': process.env.DATA_API_KEY,
            },
            method: 'POST',
            body: JSON.stringify({
                dataSource: 'Cluster0', // Your cluster name
                database: 'sk', // Your database name
                collection: 'uk', // Your collection name
                filter: {}, // Your filter criteria, empty object means no filter
            }),
            next: { revalidate: 60 }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
}
