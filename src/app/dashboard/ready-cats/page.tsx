
import { fetchReadyCats } from '@/app/lib/data';
import CatDonationForm from '@/app/dashboard/ready-cats/ui/CatDonationForm'
export default async function Page(){
    const readyCats: Record<string, unknown>[] = await fetchReadyCats();
    console.log(readyCats.length)
    return (
        <>
            <p>Ready to donate:</p>
            {readyCats.map(function(cat, i){
                return <CatDonationForm key={cat["CatId"]} id={cat["CatId"]} name={cat["CatName"]} lastDonated={cat["LastDonated"]}/>;
            })}
        </>
    )
}

