const {kafka} = require('./clients');
const group = process.argv[2];

async function init(){
    const consumer = kafka.consumer({groupId: group});
    consumer.connect();
    console.log('consumer connected...');

    await consumer.subscribe({
        topics:['rider-updates'],fromBeginning: true
    });

    await consumer.run({
        eachMessage: async ({topic,partition,message,heartbeat,pause}) => {
            console.log(`Group:${group},[${topic}] : PART:${partition}`, message.value.toString() );
        }
    });
}

init();