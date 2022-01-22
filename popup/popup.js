/** @format */

const sendMessageId = document.getElementById("sendmessageid")
const text_d = document.getElementById("text_d")
if (sendMessageId) {
  sendMessageId.onclick = function () {
    // do something
    console.log("Hello")
    text_d.innerHTML = "Hello"

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url
      text_d.innerHTML = url

      // use `url` here inside the callback because it's asynchronous!
      console.log(url)
    })
  }
}
