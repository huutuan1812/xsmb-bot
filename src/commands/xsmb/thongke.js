const fs = require("fs");
const path = require("path");
const { sendMessage } = require("../../utils");

module.exports = {
  execute: async (client, event, args) => {
    try {
      const numberToCheck = args[0];
      if (!numberToCheck || isNaN(numberToCheck) || numberToCheck.length > 2) {
        return sendMessage(
          client,
          event?.clan_id,
          event?.channel_id,
          event?.is_public,
          { t: "```Vui lòng cung cấp một số có 2 chữ số: *thongke XX```" }
        );
      }

      const dataFilePath = path.join(__dirname, "../../data/lottery_data.json");
      const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();
      const targetNumber = numberToCheck.padStart(2, "0");

      const filteredData = data.filter((entry) => {
        const [year, month] = entry.date.split("-");
        return (
          parseInt(month) === currentMonth && parseInt(year) === currentYear
        );
      });

      let count = 0;
      let maxMissDays = 0;
      let currentMissDays = 0;

      filteredData.forEach((entry) => {
        const isPresent = entry.data.some((prize) => {
          const prizeNumbers = prize.split(",");
          return prizeNumbers.some(
            (prizeNumber) => prizeNumber.trim().slice(-2) === targetNumber
          );
        });

        if (isPresent) {
          count++;
          maxMissDays = Math.max(maxMissDays, currentMissDays);
          currentMissDays = 0;
        } else {
          currentMissDays++;
        }
      });

      maxMissDays = Math.max(maxMissDays, currentMissDays);

      const formattedResult = `\`\`\`
        Thống kê cho số ${targetNumber} trong tháng ${currentMonth}/${currentYear}:
        Số lần xuất hiện: ${count} lần.
        Số ngày không về dài nhất: ${maxMissDays} ngày.
      \`\`\``;

      sendMessage(client, event?.clan_id, event?.channel_id, event?.is_public, {
        t: formattedResult,
        mk: [{ type: "t", s: 0, e: formattedResult.length }],
      });
    } catch (error) {
      console.error(`Error in thongke command:`, error);
    }
  },
};
