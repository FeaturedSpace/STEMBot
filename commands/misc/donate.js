/**
 * @file donate command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = async (Bastion, message) => {
  await message.channel.send({
    embed: {
      color: Bastion.colors.DARK_GREEN,
      title: 'Support STEM Discord\'s development',
      url: 'https://featuredspace.com/donate',
      description: '**Share your appreciation and get cool rewards!**' +
                   '\nDonate to support the development of STEM Discord and keep it running forever.' +
                   '\n\nYou can donate via the methods below and get the rewards as mentioned in the Patreon tiers.',
      fields: [
        {
          name: 'Patreon',
          value: 'You can pledge for STEM Discord on Patreon:'
                + '\nhttps://patreon.com/stemdiscord'
        },
        {
          name: 'PayPal',
          value: 'You can send one-off donations via PayPal:'
                + '\nhttps://paypal.me/featuredspaceyt'
        },
        {
          name: 'Cryptocurrencies',
          value: 'You can send one-off donations with Cryptocurrencies:'
                + '\nhttps://commerce.coinbase.com/checkout/ff8b08ec-5d39-4910-89cd-8267cd5c3c54'
        }
      ],
      footer: {
        text: 'If everyone in STEM gave $1, we could keep STEM Discord thriving for years to come.'
      }
    }
  });
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'donate',
  description: 'Instructions on how to financially support the development of the STEM Discord.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'donate',
  example: []
};
