<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Xiao" src="https://i.goopics.net/PO1L4.png">

# [Insta.js](https://npmjs.com/@arashgh/insta.js)

💬 Object-oriented library to interact with Instagram! Based on **[instagram-private-api](https://github.com/dilame/instagram-private-api)**, it is very similiar to **[discord.js](https://npmjs.com/discord.js)**.

## Installation
```
npm install @androz2091/insta.js
```

## Example

Here is a simple ping command made with the library:

```js
const Insta = require('@arashgh/insta.js');

const client = new Insta.Client();

client.on('connected', () => {
    console.log(`Logged in as ${client.user.username}`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return

    message.markSeen();

    if (message.content === '!ping') {
        message.reply('!pong');
    }
});

client.login('username', 'password');
```

## Credits

🧡 Big thanks to **[Nerixyz](https://github.com/Nerixyz)** and **[dilame](https://github.com/dilame)** and **[Androz](https://github.com/Androz2091)** for their libraries.
