 const result = [];
 
   const fn = (x) => x * 5;
   const args = [2], t = 20, cancelTimeMs = 50;
 
   const start = performance.now();
 
   const log = (...argsArr) => {
       const diff = Math.floor(performance.now() - start);
       result.push({"time": diff, "returned": fn(...argsArr)});
   }
