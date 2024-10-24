module.exports = {
  sendMessage: (client, clanId, channelId, isPublic, messageContent) => {
    client.sendMessage(
      clanId,
      channelId,
      2,
      isPublic,
      messageContent,
      [],
      [],
      []
    );
  },
};
