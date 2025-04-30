const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const app = express();
const port = 3000;

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', (qr) => {
    // Display QR code in terminal for user to scan
    qrcode.generate(qr, { small: true });
    console.log('Scan this QR code in WhatsApp');
});

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', async (message) => {
    const chat = await message.getChat();
    const sender = message.from;

    // Salamu ya awali
    if (message.body.toLowerCase() === 'hi' || message.body.toLowerCase() === 'mambo' || message.body.toLowerCase() === 'habari' || message.body.toLowerCase() === 'boost' || message.body.toLowerCase() === 'kadili' || message.body.toLowerCase() === 'boss' || message.body.toLowerCase() === 'oy') {
        client.sendMessage(sender, 'Karibu kwa KADILI BOOST! Hapa tunatoa huduma za boost kwa TikTok, Instagram, na YouTube. Chagua huduma unayotaka:\n1. TikTok\n2. Instagram\n3. YouTube\n\nIandike TikTok, Instagram, au YouTube ili kuchagua huduma.');

    } else if (message.body.toLowerCase() === 'tiktok') {
        client.sendMessage(sender, 'Chagua huduma za TikTok:\n1. TikTok Followers\n2. TikTok Views + Likes');

    } else if (message.body.toLowerCase() === '1') {
        client.sendMessage(sender, 'Bei ya TikTok Followers ni Tsh 12000 kwa 1k. Kuendelea bonyeza 1.');

    } else if (message.body.toLowerCase() === '2') {
        client.sendMessage(sender, 'Bei ya TikTok Views na Likes ni Tsh 8000 kwa 1k. Kuendelea bonyeza 2.');

    } else if (message.body.toLowerCase() === 'instagram') {
        client.sendMessage(sender, 'Chagua huduma za Instagram:\n1. Instagram Followers\n2. Instagram Likes');

    } else if (message.body.toLowerCase() === '1') {
        client.sendMessage(sender, 'Bei ya Instagram Followers ni Tsh 6000 kwa 1k. Kuendelea bonyeza 3.');

    } else if (message.body.toLowerCase() === '2') {
        client.sendMessage(sender, 'Bei ya Instagram Likes ni Tsh 1000 kwa 1k. Kuendelea bonyeza 4.');

    } else if (message.body.toLowerCase() === 'youtube') {
        client.sendMessage(sender, 'Chagua huduma za YouTube:\n1. YouTube Subscribers\n2. YouTube Views\n3. YouTube Watching Hours');

    } else if (message.body.toLowerCase() === '1') {
        client.sendMessage(sender, 'Bei ya YouTube Subscribers ni Tsh 20000 kwa 1k. Kuendelea bonyeza 5.');

    } else if (message.body.toLowerCase() === '2') {
        client.sendMessage(sender, 'Bei ya YouTube Views ni Tsh 5000 kwa 1k. Kuendelea bonyeza 6.');

    } else if (message.body.toLowerCase() === '3') {
        client.sendMessage(sender, 'Bei ya YouTube Watching Hours ni Tsh 40000 kwa 1k. Kuendelea bonyeza 7.');

    } else if (message.body.toLowerCase() === 'about') {
        client.sendMessage(sender, 'Kadili Boost ni huduma inayotoa boost za TikTok, Instagram, na YouTube. Contact details:\nEmail: your-email@example.com\nPhone: 0618240534');

    } else {
        client.sendMessage(sender, 'Samahani, hatujui hiyo. Tafadhali chagua huduma sahihi.');
    }
});

client.initialize();

// Start Express server for pairing and session management
app.get('/', (req, res) => {
    res.send('Kadili Boost WhatsApp Bot is running!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
