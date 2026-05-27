const {Kafka} = require('kafkajs');

exports.kafka = new Kafka({
    clientId : "my-app",
    brokers : ["<PRIVATE_IP_ADDRESS>:9092"]
})