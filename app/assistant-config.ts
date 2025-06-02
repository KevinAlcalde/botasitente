export let assistantId = "asst_yPTmQH4hs8CL8e5lFdYrO6o8
"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
