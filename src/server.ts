import path from 'path';
import Fastify from 'fastify';
import serveStatic from 'serve-static';

import cookie from 'fastify-cookie';

const PORT = 3000;

const fastify = Fastify({
  logger: true
});

// @ts-ignore
fastify.use('/', serveStatic('assets', { index: ['index.html'] }));
fastify.register(cookie);

fastify.listen(PORT, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
