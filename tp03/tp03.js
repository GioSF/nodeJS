var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener(){
    console.log('listener1 exeuted');
}

var listener2 = function listener(){
    console.log('listener2 executed');
}

eventEmitter.on('connection', listener1);
eventEmitter.on('connection', listener2);

var listenerCounter = require('events').EventEmitter.listenerCount
(eventEmitter,'connection')
console.log(listenerCounter + " listeners to connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 won\'t listen now');

eventEmitter.emit('connection');

listenerCounter = require('events').EventEmitter.listenerCount
(eventEmitter, 'connection');

console.log(listenerCounter + " listeners listens to connection event");
console.log('Finito');