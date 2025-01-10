import { getCloudflareContext } from "@opennextjs/cloudflare";


export async function fetchReadyCats(): Promise<string[]>{
    const myDB = (await getCloudflareContext()).env.PROD_DB;
    
    const data = await myDB.prepare(
        `SELECT CatName FROM Cats WHERE LastDonated<date('now', '-56 days') or LastDonated is NULL;`
    ).run();
    console.log(data);
    const readyCats: string[] = []
    for (const row in data.results){
        //TODO: don't ignore. parse into type
        // @ts-ignore
        readyCats.push(data.results[row]["CatName"])
    }
    return readyCats
}