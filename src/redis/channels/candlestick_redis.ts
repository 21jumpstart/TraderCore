import { Emitter } from '../../emitter';

import { RedisPub } from '../redis';

// Broadcast final candle updates
Emitter.on('CandleUpdateFinal', (exchange, interval, candle) => {
  setImmediate(() => {
    RedisPub.publish('CandleUpdateFinal', JSON.stringify({ exchange, interval, candle }));
  });
});

/* Receive code */
/*
const { Redis } = require("../index")


Redis.subscribe("CandleUpdate", function(err, count) {
  console.log("Redis pub/sub channel subscribed count", count)
})

Redis.on("message", function(channel, message) {
  console.log("Receive message %s from channel %s", message, channel)
})
*/
