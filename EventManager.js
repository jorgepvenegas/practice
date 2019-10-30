// Implement an EventManager class
//
// There should be three methods on this class:
//
// 1. subscribe(eventType: string, listener: Function)
// 2. unsubscribe(eventType: string, listener: Function)
// 3. publish(eventType: string, data: any)

class EventManager {
  constructor() {
      this.events = {};
  }
  
  subscribe(event, cb) {
      if(this.events[event]) {
          let cbArr = this.events[event];
          cbArr.push(cb);
          this.events[event] = cbArr;
      }
      else{
          this.events[event] = [cb];    
      }
  }
  
  publish(event, data) {
      if(this.events[event]) {
          let cbArr = this.events[event];
          cbArr.forEach( cb => {
              cb(data);
          })
      }
      else {
          throw new Error(`Event ${event} doesn't exist`);
      }
  }
  
  unsubscribe(event, cb) {
      this.events[event] = this.events[event].filter(e => e !== cb);
  }
}


const channel = new EventManager();

const callback1 = data => console.log('Callback 1:', data);
const callback2 = data => console.log('Callback 2:', data);
const callback3 = data => console.log('Callback 3:', data);

channel.subscribe('request.error', callback1);
channel.subscribe('request.error', callback2);
channel.subscribe('request.success', callback3);

channel.publish('request.error', { foo: 'bar' });
channel.publish('request.success', { lorem: 'ipsum' });

// Callback 1: { foo: 'bar' }
// Callback 2: { foo: 'bar' }
// Callback 3: { lorem: 'ipsum' }

channel.unsubscribe('request.error', callback1);
channel.publish('request.error', { bar: 'baz' });

// Callback 2: { bar: 'baz' }


