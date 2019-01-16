/**
 * @file guide command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = async (Bastion, message) => {
  await message.channel.send({
    embed: {
      color: Bastion.colors.GOLD,
      title: 'STEMBot',
      url: 'https://featuredspace.com/',
      description: 'Oh yeah. Some sort of guide, required? Just go here instead. I\'ts my random website.',
      fields: [
        {
          name: 'STEMBot',
          value: 'https://docs.featuredspace.com/'
        },
        {
          name: 'STEM Discord',
          value: 'https://tinyurl.com/stemdiscord'
        }
      ]
    }
  });
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'guide',
  description: 'Shows you the guide on how to setup and install Private STEMBot. And links to anywhere.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'guide',
  example: []
};
