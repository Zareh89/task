

const target = {a: 1, b: 2, c: 3,}


const Store = {
    prop1: { prop1: 1 },
    prop2: function() {},
    prop3: {
      prop1: {
        prop1: {
          prop1: [0, 1, { prop1: 'Hello' }],
          prop2: target,
          prop3: {
            prop1: Math.random
          }
        }
      }
    }
  }

const contains = (obj, val) => {
    const queue = [obj];
    for (let i = 0; queue.length > 0; i++){
        const currentObj = queue.shift();
        if (currentObj === val) {
          return true;
        }
        const keys = currentObj instanceof Object ? Object.keys(currentObj) : [];
        keys.forEach((e) => {
            const objVal = currentObj[e];
          queue.push(objVal);
        })
    } 
      return false;
    }
    




  console.log(contains(Store, target)) // true
  console.log(contains(Store, 'Hello')) // true
  console.log(contains(Store, Object)) // false