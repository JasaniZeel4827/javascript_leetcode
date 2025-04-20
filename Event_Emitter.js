class EventEmitter {

    constructor() {
      this.events = {};  
  }
  
  subscribe(eventName, callback) {
      
      if (!this.events[eventName]) {
       this.events[eventName] = []
      }

      this.events[eventName].push(callback)

      return {
          unsubscribe: () => {
              this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
              if (this.events[eventName].length === 0) {
                 delete this.events[eventName]
              }
          }
      };
  }
  
  emit(eventName, args = []) {
      if (!this.events[eventName]) {
          return []
      }

      return this.events[eventName].map(callback => callback(...args))
  }
}

/**
* const emitter = new EventEmitter();
*
* // Subscribe to the onClick event with onClickCallback
* function onClickCallback() { return 99 }
* const sub = emitter.subscribe('onClick', onClickCallback);
*
* emitter.emit('onClick'); // [99]
* sub.unsubscribe(); // undefined
* emitter.emit('onClick'); // []
*/
