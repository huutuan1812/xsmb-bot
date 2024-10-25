const fs = require("fs");
const path = require("path");
const { sendMessage, formatMessage } = require("../../utils");
const poeticVerses = require("../../constants/constants");

module.exports = {
  execute: async (client, event, args) => {
    try {
      const numberToCheck = args[0];
      if (!numberToCheck || isNaN(numberToCheck) || numberToCheck.length > 2) {
        return sendMessage(client, event, "```*thongke XX```");
      }

      const dataFilePath = path.join(__dirname, "../../data/lottery_data.json");
      const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();
      const targetNumber = numberToCheck.padStart(2, "0");
      const verse = poeticVerses[parseInt(targetNumber)];

      const filteredData = Object.entries(data).filter(([date]) => {
        const [, month, year] = date.split("/").map(Number);
        return month === currentMonth && year === currentYear;
      });

      let count = 0,
        maxMissDays = 0,
        currentMissDays = 0;
      let lastWinDateIndex = -1,
        totalInterval = 0;

      filteredData.forEach(([_, prizes], index) => {
        const isPresent = prizes.some((prize) =>
          prize
            .split(",")
            .some(
              (prizeNumber) => prizeNumber.trim().slice(-2) === targetNumber
            )
        );

        if (isPresent) {
          count++;
          if (lastWinDateIndex >= 0) {
            totalInterval += index - lastWinDateIndex;
          }
          lastWinDateIndex = index;
          maxMissDays = Math.max(maxMissDays, currentMissDays);
          currentMissDays = 0;
        } else {
          currentMissDays++;
        }
      });

      maxMissDays = Math.max(maxMissDays, currentMissDays);
      const averageInterval =
        count > 1 ? (totalInterval / (count - 1)).toFixed(2) : "Xui lắm";

      const frequencyScore =
        count === 0 ? 0 : Math.min(10, 4 + (count - 1) * 0.5);
      const intervalScore =
        count > 1 ? Math.min(10, Math.max(2, 10 - averageInterval / 2)) : 2;
      const missDaysScore = Math.max(1, 10 - maxMissDays / 3);
      const overallScore = (
        (frequencyScore + intervalScore + missDaysScore) /
        3
      ).toFixed(2);

      const formattedResult =
        "```" +
        verse +
        "\n" +
        "Thống kê cho số " +
        targetNumber +
        " trong tháng " +
        currentMonth +
        "/" +
        currentYear +
        ":\n" +
        "- Số lần về trong tháng: " +
        count +
        " lần.\n" +
        "- Số ngày không về dài nhất: " +
        maxMissDays +
        " ngày.\n" +
        "- Chu kỳ trung bình: " +
        averageInterval +
        " ngày.\n" +
        "- Hợp mệnh: " +
        overallScore +
        "/10.\n" +
        "```";

      sendMessage(client, event, formattedResult);
    } catch (error) {
      sendMessage(client, event, `Không tìm thấy kết quả cho số ${args[0]}.`);
    }
  },
};
