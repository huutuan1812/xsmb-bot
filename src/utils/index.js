module.exports = {
  sendMessage: (client, event, messageContent) => {
    client.sendMessage(
      event?.clan_id,
      event?.channel_id,
      2,
      event?.is_public,
      {
        t: messageContent,
        mk: [{ type: "t", s: 0, e: messageContent.length }],
      },
      [],
      [],
      []
    );
  },
};
