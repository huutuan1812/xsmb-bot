const fs = require("fs");
const path = require("path");

module.exports = {
  execute: async (client, event) => {
    try {
      const filePath = path.join(__dirname, "../../data/lottery_data.json");
      const fileContent = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(fileContent);

      const args = event?.content?.t.split(" ");
      let dateArg = args[1];

      let targetDate;
      if (dateArg) {
        const [day, month, year] = dateArg.split("/");
        targetDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
          2,
          "0"
        )}`;
      } else {
        targetDate = new Date().toISOString().split("T")[0];
      }

      const targetData = data.find((item) => item.date === targetDate);

      if (targetData) {
        await client.sendMessage(
          event?.clan_id,
          event?.channel_id,
          2,
          event?.is_public,
          {
            t: `Kết quả XSMB của ngày ${dateArg || "today"}: ${JSON.stringify(
              targetData.data
            )}`,
          },
          [],
          [],
          [
            {
              message_id: "",
              message_ref_id: event.message_id,
              ref_type: 0,
              message_sender_id: event.sender_id,
              message_sender_username: event.username,
              mesages_sender_avatar: event.avatar,
              message_sender_clan_nick: event.clan_nick,
              message_sender_display_name: event.display_name,
              content: JSON.stringify(event.content),
              has_attachment: false,
            },
          ]
        );
      } else {
        await client.sendMessage(
          event?.clan_id,
          event?.channel_id,
          2,
          event?.is_public,
          { t: `Không có kết quả XSMB của ngày ${dateArg || "hôm nay"}.` },
          [],
          [],
          [
            {
              message_id: "",
              message_ref_id: event.message_id,
              ref_type: 0,
              message_sender_id: event.sender_id,
              message_sender_username: event.username,
              mesages_sender_avatar: event.avatar,
              message_sender_clan_nick: event.clan_nick,
              message_sender_display_name: event.display_name,
              content: JSON.stringify(event.content),
              has_attachment: false,
            },
          ]
        );
      }
    } catch (error) {
      console.error("Error reading data or responding:", error);
    }
  },
};
