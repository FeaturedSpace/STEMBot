/**
 * @file support command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = async (Bastion, message) => {
  await message.channel.send({
    embed: {
      color: Bastion.colors.GOLD,
      title: 'STEM Discord',
      url: 'https://tinyurl.com/stemdiscord',
      description: 'Need help or support with STEMBot?\nAsk Noah for help; or do some command or something!',
      fields: [
        {
          name: 'Website',
          value: 'https://featuredspace.com/stembot'
        }
      ]
    }
  });
};

exports.config = {
  aliases: [ 'ss' ],
  enabled: true
};

exports.help = {
  name: 'support',
  description: 'Sends the invite link to Bastion HQ.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'support',
  example: []
};
