const { kafka } = require('./clients');


async function init() {
    const admin = kafka.admin();
    console.log('admin connecting...')
    admin.connect();
    console.log('admin connected');
    console.log('createing topics');
    await admin.createTopics({
        topics : [{
            topic: 'rider-updates',
            numPartitions: 2,

        }]
    })
    console.log('Topics created');

    console.log('disconnecting admin');
    await admin.disconnect();
    console.log('admin disconnected');

}

init();