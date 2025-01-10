'use client';

import { fetchReadyCats, updateCatDonationDate } from '@/app/lib/data';
import { useEffect, useState } from 'react';
export default function Page(){
    const [inputVal, setInputVal] = useState('YYY-MM-DD');
    const [readyCats, setReadyCats] = useState(['']);

    useEffect(() => {
        const fetchData = async () =>{

            const readyCats: string[] = await fetchReadyCats();

            setReadyCats(readyCats);
        }

        fetchData();
    }, [])

    const markCatDonated = (cat: string) => {
        updateCatDonationDate(cat, inputVal)
    }

    return (
        <>
            <div style={{display: "flex", marginBottom: "10px"}} className='text-xl'>
                <h1>Ready to donate:</h1>
            </div>
            
                {readyCats.map(function(cat: string){
                    return (
                        <p key={cat} className='text-white'> {cat}</p>
                    );
                })}
            
        </>
    )
}


