

require("dotenv").config();
import Anthropic from "@anthropic-ai/sdk";
import { BASE_PROMPT, getSystemPrompt } from "./prompt";
import express from 'express';
import { TextBlock } from "@anthropic-ai/sdk/resources";
import {basePrompt as nodebasePrompt } from "./defaults/node";
import {basePrompt as reactbasePrompt } from "./defaults/react";
import cors from "cors"



const anthropic = new Anthropic();
const app = express()
app.use(cors())
app.use(express.json())
app.post('/template',async(req,res)=>{
   const prompt = req.body.prompt;

   const response = await anthropic.messages.create({
    messages: [{
        role: 'user', content: prompt
    }],
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 200,
    system: "Return either node or react based on what do you think this project should be. Only return a single word either 'node' or 'react'. Do not return anything extra"
});
const answer = (response.content[0] as TextBlock).text;  // react or node
if(answer == "react" ){
   res.json({
    prompts: [BASE_PROMPT, `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactbasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`],
    uiPrompts:[reactbasePrompt]
   })
   return
}
if(answer == "node"){
    res.json({
        prompts:[`Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${nodebasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`],
        uiPrompts:[nodebasePrompt]
    })
    return
}
res.status(403).json({
    message:"You can't access this ",
  })
  return;
})
app.post('/chat',async(req,res)=>{
    const messages = req.body.messages;
    const response = await anthropic.messages.create({
        messages: messages,
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 8000,
        system: getSystemPrompt()
    });
  console.log(response);

  res.json({
    response: (response.content[0] as TextBlock)?.text
  });
})
app.listen(process.env.PORT||4000,()=>{
  console.log("server connected")
})












// async function main() {
//     anthropic.messages.stream({
//         messages: [{role: 'user', content: "Create a Todo app"}],
//         model: 'claude-3-5-sonnet-20241022',
//         max_tokens: 1024,
//         system: getSystemPrompt()
//     }).on('text', (text) => {
//         console.log(text);
//     });
// }
// main()
