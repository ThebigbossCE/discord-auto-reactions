# Discord auto reactions

Auto adds emojis to all messages sent on a specific discord channel. Running on discord.js v13, with node.js version 16

## Installation

Use the package manager npm to install all required packages.

```bash
npm i
```

## Requirements

Open the config.js file and edit it to add your discord bot [token](https://www.writebots.com/discord-bot-token/), and your bot prefix.

```bash
{
    "token": "YOUR_TOKEN", 
    "prefix": "YOUR_PREFIX"
}
```
You can create commands. Go to the ```commands/``` folder and edit the example command```react.js```. You can  create more commands by checking this example.

To make the bot auto react on messages sent to a specific channel, go to the ```events/``` folder and locate the file called ```message.js``` and edit the following line:
```bash 
if (message.channel.name == 'YOUR_CHANNEL') return message.react('✅');
```
Edit ```YOUR_CHANNEL``` by your channel name. To use a channel id instead, replace ```message.channel.name``` by ```message.channel.id``` and don't forget to add the channel id instead of the channel name. 
Edit the reaction by changing ```✅``` with the reaction you want. You can add more reactions by doing this: 
```bash 
if (message.channel.name == 'YOUR_CHANNEL') return message.react('✅'), message.react('❌');
```

## Start the project

```python
node index
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/) | Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
