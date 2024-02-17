const {
    default: axios
} = require("axios")

const token = "bot6531448436:AAF-icHeCcGcVJ-sydVKaiROrO-u9wGyThI"
const message = "HELLO%20PENIPU%20"
const chatId = "5801319391"

const url = `https://api.telegram.org/${token}/sendMessage?parse_mode=markdown&chat_id=${chatId}&text=${message}`



async function sendMessage() {
    try {
        while (true) {
            await axios.get(url)
                .then((response) => {
                    if (response.status = 200) {
                        console.log(response.statusText)
                    } else {
                        console.log("message failed!")
                    }
                })
        }
    } catch (error) {
        sendMessage()
    }
}
var i = 0
while (i < 1000) {
    sendMessage()
    i++
}