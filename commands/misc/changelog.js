/**
 * @file changelog command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = async (Bastion, message) => {
  const CHANGES = xrequire('./changes.json');

  let changes = [];
  for (let section in CHANGES) {
    if (CHANGES.hasOwnProperty(section)) {
      if (section === 'date' || section === 'image' || !CHANGES[section].length) continue;

      changes.push({
        name: section,
        value: `- ${CHANGES[section].join('\n- ')}`
      });
    }
  }

  changes.push(
    {
      name: '\u200B',
      value: '\u200B'
    },
    {
      name: 'Missed an update?',
      value: 'Ask Noah about new features, giveaways, and more!'
    },
    {
      name: 'Loving STEM?',
      value: 'Why don\'t you invite one of your friends to join our server!'
    },
    {
      name: 'Support STEM Discord\'s Development',
      value: '[Support the development of STEM Discord](https://featuredspace.com/donate) to keep it running forever and get cool rewards!'
    }
  );

  await message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      title: `STEMBot Changelog`,
      url: `https://github.com/FeaturedSpace/STEMBot/changelog.md`,
      fields: changes,
      image: {
        url: CHANGES.image
      },
      footer: {
        text: CHANGES.date
      }
    }
  });
};

exports.config = {
  aliases: [ 'clog', 'changes' ],
  enabled: true
};

exports.help = {
  name: 'changelog',
  description: 'Shows the changes made in the current version of STEMBot.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'changelog',
  example: []
};
