const fs = require("fs");
const path = require("path");
const { sendMessage } = require("../../utils");

module.exports = {
  execute: async (client, event, args) => {
    try {
      const dateArg = args[0];
      if (!dateArg) {
        return sendMessage(
          client,
          event?.clan_id,
          event?.channel_id,
          event?.is_public,
          { t: "```Vui lòng cung cấp ngày theo định dạng: *xsmb DD/MM/YYYY```" }
        );
      }

      const [day, month, year] = dateArg.split("/");
      const formattedDate = `${year}-${month}-${day}`;

      const dataFilePath = path.join(__dirname, "../../data/lottery_data.json");
      const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

      const result = data.find((entry) => entry.date === formattedDate);

      if (result) {
        const formattedResult = `\`\`\`
        Kết quả XSMB ngày ${dateArg}:
        G.DB: ${result.data[0]}
        G.1:  ${result.data[1]}
        G.2:  ${result.data[2].split(",").join(" - ")}
        G.3:  ${result.data[3].split(",").join(" - ")}
        G.4:  ${result.data[4].split(",").join(" - ")}
        G.5:  ${result.data[5].split(",").join(" - ")}
        G.6:  ${result.data[6].split(",").join(" - ")}
        G.7:  ${result.data[7].split(",").join(" - ")}
      \`\`\``;
        sendMessage(
          client,
          event?.clan_id,
          event?.channel_id,
          event?.is_public,
          {
            t: formattedResult,
            mk: [{ type: "t", s: 0, e: formattedResult.length }],
          }
        );
      } else {
        sendMessage(
          client,
          event?.clan_id,
          event?.channel_id,
          event?.is_public,
          { t: `Không tìm thấy kết quả cho ngày ${dateArg}.` }
        );
      }
    } catch (error) {
      console.error(`Error in xsmb command:`, error);
    }
  },
};
