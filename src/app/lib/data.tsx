'use server'

import { getCloudflareContext } from "@opennextjs/cloudflare";


export async function fetchReadyCats(): Promise<Record<string, unknown>[]>{
    const myDB = (await getCloudflareContext()).env.PROD_DB;
    
    //results: [ { CatId: 1, CatName: 'Luna' } ]
    const data = await myDB.prepare(
        `SELECT CatId, CatName, LastDonated FROM Cats WHERE LastDonated<date('now', '-56 days') or LastDonated is NULL;`
    ).run();

    return data.results
}

export async function updateCatDonationDate(catName: string, donationDate: string): Promise<Boolean>{
    const myDB = (await getCloudflareContext()).env.PROD_DB;

    const data = await myDB.prepare(
        'UPDATE Cats SET LastDonated=? WHERE CatName=?'
    ).bind(
        donationDate,
        catName
    ).run();

    //Should return the true result. Is this doing that?
    return data.success
}

