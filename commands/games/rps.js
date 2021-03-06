/**
 * @file rps command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = async (Bastion, message, args) => {
  let outcomes = [
    'ROCK',
    'PAPER',
    'SCISSOR'
  ];
  let userOutcome = args.join(' ').toUpperCase();

  if (!outcomes.includes(userOutcome)) {
    return Bastion.emit('commandUsage', message, this.help);
  }

  let botOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

  let result = 'I win! :yum:';
  if (userOutcome === botOutcome) {
    result = 'Oh darn! It\'s a draw, dude. :confused:';
  }
  else if (userOutcome === 'ROCK') {
    if (botOutcome === 'SCISSOR') {
      result = 'You win. :clap:';
    }
  }
  else if (userOutcome === 'PAPER') {
    if (botOutcome === 'ROCK') {
      result = 'You win. :clap:';
    }
  }
  else if (userOutcome === 'SCISSOR') {
    if (botOutcome === 'PAPER') {
      result = 'You win. :clap:';
    }
  }

  await message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: `You chose **${userOutcome}**, I chose **${botOutcome}**. *${result}*`
    }
  });
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'rps',
  description: 'Play the classic *rock paper scissor* game with %bastion%.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'rps <rock|paper|scissor>',
  example: [ 'rps Rock' ]
};
