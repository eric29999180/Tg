export default {
  async fetch(request, env) {
    const TOKEN = "8511594769:AAE4nlDJFGThO2J39oLklPjrHCSihBavzmo";
    if (request.method === "POST") {
      try {
        const payload = await request.json();
        if (payload.message && payload.message.chat) {
          const chatId = payload.message.chat.id;
          const text = payload.message.text || "";

          let reply = "😑😑😑Serverless 雲端回覆測試成功！";
          if (text === "測") reply = "收到測試指令，連線正常。";

          await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: reply })
          });
        }
      } catch (e) {}
    }
    return new Response("OK");
  }
};
