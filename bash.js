process.stdin.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const pwd = require('./pwd')
    const ls = require('./ls')
    if (cmd === 'pwd'){pwd()}
    if (cmd === 'ls'){ls()}

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});


