import { getCloudflareContext } from "@opennextjs/cloudflare";


export async function fetchReadyCats(): Promise<string[]>{
    const myDB = (await getCloudflareContext()).env.PROD_DB;
    
    //If for some reason .run returns only 1 result when there should be more, .all might be what's needed
    //8 weeks is 56 days
    const data = await myDB.prepare(
        `SELECT CatName FROM Cats WHERE LastDonated<date('now','-56 days') or LastDonated is NULL;`
    ).run();
    console.log("got here!");
    const readyCats: string[] = []
    for (const row in data.results){
        readyCats.push(data.results[row]["CatName"])
    }
    return ["hi", "hello"]
}

export async function updateCatDonationDate(catName: string, donationDate: string){
    const myDB = (await getCloudflareContext()).env.PROD_DB;

    //TODO: date validation: 4digyear-month-day hour:min:sec
    if (donationDate === null) {
        return
    }

    const data = await myDB.prepare(
        `UPDATE Cats SET LastDonated=? WHERE CatName=?`
    ).bind(
        donationDate,
        catName
    ).run();
}