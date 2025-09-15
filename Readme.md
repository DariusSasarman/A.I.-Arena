# A.I. Arena

"Got a question for an AI and don't know which one to ask? Ask them all at once!"

This project is a **front-end and server prototype that lets you query multiple instances at once**. (for now)

## Here's a video (of what it would be like) in action :

https://github.com/user-attachments/assets/819bce45-a7af-498b-8229-8b882b2aa9c1

**Note:** The entire AI system is only an ideea as of yet - what you see is the front-end and a mockup back-end reply.

## Here's how it works :

  1. You add your favourite A.I.s
  2. Save the settings
  3. Ask the question using the "Master Input"
  4. See what replies you get
  5. Choose the winner and keep the conversation going.

## Project Highlights

- **Front-end prototype:** Interactive layout for multiple AI instances
- **Server request handling:** Supports OpenAI, Claude, and DeepSeek APIs via API keys  
- **Settings modal:** Add/edit details, upload representational images, and set API keys  
- **Simultaneous querying:** Send the same prompt to multiple AI instances at once
- **Individual querying:** Send a prompt to a single AI instance
## TODO

- [ ] Add conversation history for any AI instance
- [ ] Add error/feedback messages for any requests
- [ ] Modify JS function "openAIModal" such that the "save button" actually sends a requsest
- [ ] Back-end functionality that handles said "save button" request
- [ ] Modify PY "ProcessPrompt" function such that it provides a general API call procedure
- [ ] Provide actual security settings such that sensitive endpoints like "domain.com/A.I.s" doesn't actually provide data
- [ ] Implement a database and implement website communication

I'll keep looking for "free student APIs", but since I found no free AI APIs, this endeavour had to come to a indefinite halt. I'm open to colaborations. 
