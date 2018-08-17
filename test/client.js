const net = require('net');
const PORT = 7000;
const HOST = '127.0.0.1';

let length = 100000;

const socket = net.connect({
    port: PORT,
    host: HOST
});
socket.setEncoding('utf8');

socket.on('connect', (a, b) => {
    console.log('连接成功');
    if (length === 1) return;
    socket.write('x'.repeat(length) + '\r\n');
    length = length / 10;
});

socket.on('data', (data) => {
    console.log(data);
    
    if (length === 1) return;
    socket.write('x'.repeat(length) + '\r\n');
    length = length / 10;
});

socket.on('end', () => {
    console.log('FIN');
});

socket.on('close', () => {
    console.log('close');
});
// socket.unref();
// setInterval(() => console.log('.'), 2000);