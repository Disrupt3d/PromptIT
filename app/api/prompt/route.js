import { connectToDB } from "@app/utils/database";
import Prompt from "@app/models/prompt";

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {

    return new Response("cannot get the data from the  back please try again "), {
        status: 500,

    }

  }
};
