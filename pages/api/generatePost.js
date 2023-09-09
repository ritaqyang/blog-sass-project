import { Configuration, OpenAIApi } from 'openai'; 
export default async function handler(req, res) {
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(config); 

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        temperature: 0,  //1 is highest risk 
        max_tokens: 3600,// max is 4000 including the prompt 
        prompt: "Generate a blog post about owning dogs"
    }); 

    console.log('response: ', response); 

    res.status(200).json({ post: response.data.choices }); 
}
