import { updateCatDonationDate } from "../../lib/data";

export async function POST(request: Request) {
    const body = await request.json()
    console.log("hello it's me")
    console.log(body)
    updateCatDonationDate(body.name, body.date)
    return Response.json(true)
}