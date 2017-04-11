/*
 * Copyright (C) 2017 Sankarsan Kampa
 *                    https://sankarsankampa.com/contact
 *
 * This file is a part of Bastion Discord BOT.
 *                        https://github.com/snkrsnkampa/Bastion
 *
 * This code is licensed under the SNKRSN Shared License. It is free to
 * download, copy, compile, use, study and refer under the terms of the
 * SNKRSN Shared License. You can modify the code only for personal or
 * internal use only. However, you can not redistribute the code without
 * explicitly getting permission fot it.
 *
 * Bastion BOT is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY. See the SNKRSN Shared License for
 * more details.
 *
 * You should have received a copy of the SNKRSN Shared License along
 * with this program. If not, see <https://github.com/snkrsnkampa/Bastion/LICENSE>.
 */

const sql = require('sqlite');
sql.open('./data/Bastion.sqlite');

exports.run = (Bastion, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return Bastion.log.info('You don\'t have permissions to use this command.');
  if (args.length < 1) {
    return message.channel.sendMessage('', {embed: {
      color: 15451167,
      title: 'Usage',
      description: `\`${Bastion.config.prefix}${this.help.usage}\``
    }}).catch(e => {
      Bastion.log.error(e.stack);
    });
  }

  for (let i = 0; i < args.length; i++) {
    if (!/^[0-9]{18}$/.test(args[i])) {
      args.splice(args.indexOf(args[i]), 1);
    }
  }
  sql.get(`SELECT selfAssignableRoles FROM guildSettings WHERE guildID=${message.guild.id}`).then(row => {
    let roles = JSON.parse(row.selfAssignableRoles);
    roles = roles.concat(args);
    sql.run(`UPDATE guildSettings SET selfAssignableRoles='${JSON.stringify(roles)}' WHERE guildID=${message.guild.id}`).then(() => {
      let roleNames = [];
      for (let i = 0; i < roles.length; i++) {
        roleNames.push(message.guild.roles.get(roles[i]).name);
      }
      message.channel.sendMessage('', {embed: {
        color: 5088314,
        title: 'Added self assignable roles',
        description: roleNames.join(', ')
      }}).catch(e => {
        Bastion.log.error(e.stack);
      });
    }).catch(e => {
      Bastion.log.error(e.stack);
    });
  }).catch(e => {
    Bastion.log.error(e.stack);
  });
};

exports.config = {
  aliases: ['asar']
};

exports.help = {
  name: 'addselfassignableroles',
  description: 'Adds roles, specified by role ID, to self assignable roles category, so that anyone could use `iam`/`iamnot` command to assign these roles to themselves.',
  permission: '',
  usage: 'addSelfAssignableRoles <RoleID> [RoleID] [RoleID]',
  example: ['addSelfAssignableRoles 443322110055998877 778899550011223344']
};
