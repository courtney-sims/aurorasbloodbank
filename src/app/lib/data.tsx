import { getCloudflareContext } from "@opennextjs/cloudflare";


export async function fetchReadyCats(): Promise<string[]>{
    const myDB = (await getCloudflareContext()).env.PROD_DB;
    
    const data = await myDB.prepare(
        `SELECT CatName FROM Cats WHERE ReadyToDonate = 1`
    ).run();
    const readyCats: string[] = []
    for (const row in data.results){
        readyCats.push(data.results[row]["CatName"])
    }
    return readyCats
}