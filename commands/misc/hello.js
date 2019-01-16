/**
 * @file hello command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = async (Bastion, message) => {
  await message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: 'Hi! I\'m **STEMBot**. \u{1F609}\n' +
                   'I\'m a BOT that is going to make your time in this Discord Server amazing!',
      footer: {
        text: `Type ${message.guild.prefix[0]}help to find out more about me.`
      }
    }
  });
};

exports.config = {
  aliases: [ 'hi' ],
  enabled: true
};

exports.help = {
  name: 'hello',
  description: 'Get greetings from %bastion%.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'hello',
  example: []
};
