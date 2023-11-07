
import { connectToDB } from "@app/utils/database";
import Prompt from "@app/models/prompt";



export const POST = async (req, res) => {
const {userId, prompt, tag } = await req.json();


try {
    await connectToDB();
    const newPrompt = new Prompt({
        creator: userId,
        prompt,
        tag
    })

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 })
    // on confirme la bonne création du prompt  avec le statut 201.

} catch (error) {
    return new Response("Failed to create a new prompt", { status: 500})

}


}