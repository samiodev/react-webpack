chrome.runtime.sendMessage("Hello from content", (res) => {
  console.log(res)
})