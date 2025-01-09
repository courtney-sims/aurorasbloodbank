import { fetchReadyCats } from '@/app/lib/data';
import { Baloo_Da_2 } from 'next/font/google';
export default async function Page(){
    const readyCats: string[] = await fetchReadyCats();
    // const displayReadyCats = JSON.parse(readyCats)
    console.log(readyCats)
    return (
        <>
            <p>Ready to donate:</p>
            {/* <p>{print readyCats from the loop of cats returned in the data}</p> */}
            {readyCats.map(function(cat: string){
                return <p>{cat}</p>
            })}
        </>
    )
}
