import Anthropic from "@anthropic-ai/sdk"
const anthropic_key = import.meta.env.VITE_ANTHROPIC_API_KEY

const SYSTEM_PROMPT = `
You are an assistant that receives a list of technological details or requirements 
from a user and suggests an engineering project they could build based on some or all of that input.
You don't need to use every detail they mention in your suggestion. The project can include additional 
components or technologies not mentioned, but try to minimize unnecessary extras.
Format your response in Markdown to make it easy to render to a web page.
`

const anthropic = new Anthropic({
    apiKey: anthropic_key,

    dangerouslyAllowBrowser: true,
})

export async function getProjectFromEngMaster(detailsArr) {
    const detailsString = detailsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${detailsString}. Please give me an engineering project
            you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}