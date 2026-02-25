const fastify = require('fastify')({ logger: false });
const crypto = require('crypto');

const token = 'anton123';
const encodingAESKey = 'ZbIdlqAkaZutGiDM5UydiMEI22ReYUIaybJjk6kavhU';
const corpId = 'wwe77990d4179900b5';

// ВРЕМЕННАЯ ЗАГЛУШКА
function decryptWeCom(echostr) {
    console.log('Получен echostr:', echostr);
    return echostr; // просто возвращаем как есть
}

fastify.get('/', async (request, reply) => {
    const { msg_signature, timestamp, nonce, echostr } = request.query;
    console.log('GET от WeCom:', request.query);
    
    const decrypted = decryptWeCom(echostr);
    return reply.send(decrypted);
});

fastify.post('/', async (request, reply) => {
    console.log('Сообщение:', request.body);
    return reply.send('ok');
});

const start = async () => {
    try {
        await fastify.listen({ port: 5000, host: '0.0.0.0' });
        console.log('✅ Сервер запущен на порту 5000');
    } catch (err) {
        console.error('❌ Ошибка:', err);
    }
};

start();