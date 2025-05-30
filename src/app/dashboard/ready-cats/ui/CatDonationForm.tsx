'use client'
import { updateCatDonationDate } from "@/app/lib/data";
import {useRouter} from 'next/navigation';

export default function CatDonationForm(props) {
    const router = useRouter();

    async function handleSubmit(formData: FormData) {

        //if this is successful, rerender this component
        //const res = await updateCatDonationDate(props.name, formData.get('inputDate'))
        const response = await fetch('/api/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //should this request be a PATCH and then we get back the new full data for the cat?
            //then how do I go about replacing the data where it's being pulled from props with the update?
            //could just trigger a page refresh and then the data pulls again via get or something on the ready-cats page
            //right now this just stays what you typed in, but what if the db isn't updated for some reason? need a way to ensure this is the correct date and error handle if the date can't be set
            body: JSON.stringify({name: props.name, date: formData.get('inputDate')})
        });
        const data = await response.json();
        //window.location.reload();

    }
    return (
        // <h1>Cat {props.name} id {props.id} is ready to donate</h1>
        <form action={handleSubmit}>
            <label> {props.name}
                <input
                    name="inputDate"
                    className='text-black'
                    type="text"
                    defaultValue={props.lastDonated}
                />
            </label>
            <button type="submit"> Submit</button>
        </form>
    );
}

