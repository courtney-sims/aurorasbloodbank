import { getCloudflareContext } from "@opennextjs/cloudflare";
import { z } from "zod/v4";

const Cat = z.object({
    //should this be a uuid instead? when and why do those matter?
    CatId: z.number(),
    CatName: z.string(),
    LastDonated: z.date(),
});

type Cat = z.infer<typeof Cat>;

const CatGetResponse = z.record(z.string(), Cat)


export async function fetchReadyCats(): Promise<string[]>{
    const myDB = (await getCloudflareContext()).env.PROD_DB;
    
    const data = await myDB.prepare(
        `SELECT CatName FROM Cats WHERE LastDonated<date('now', '-56 days') or LastDonated is NULL;`
    ).run();
    console.log(data);

    const validatedResp = CatGetResponse.safeParse(data.results);
    if (!validatedResp.success) {
        console.log(`Ready cats parsing error: ${validatedResp.error}`);
        return [];
    }
    
    const readyCats: string[] = []
    for (const row in validatedResp.data){
        readyCats.push(validatedResp.data[row]["CatName"])
    }
    return readyCats
}
