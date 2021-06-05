import { document } from "../utils/dynamodbClient";

interface IExample {
    id: string;
    name: string;
    grade: string;
}

export const handler = async (event) => {
    const {
        id,
        name,
        grade,
    } = JSON.parse(event.body) as IExample;

    const savedItem = await document.put({
        TableName: "example_table",
        Item: {
            id,
            name,
            grade, 
        },
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify(savedItem),
        headers: {
            "Content-Type": "application/json",
        },
    };
}
