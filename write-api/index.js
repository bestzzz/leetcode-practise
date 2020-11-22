/**
 * 防抖
 * 思路：每次点击清空上次的定时器
 * @param {Function} cb 
 * @param {Number} delay 
 */
const debounce = (cb, delay) => {
  let timer = null;
  
  return function(...arg) {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      cb(...arg);
      clearTimeout(timer);
    }, delay);
  }
};

/**
 * 节流
 * 思路：加锁
 * @param {*} cb 
 * @param {*} delay 
 */
const throttle = (cb, delay) => {
  let timer = null;
  let lock = false;

  return function(...arg) {
    if (lock) {
      return;
    }
    lock = true;

    timer = setTimeout(() => {
      cb(...arg);
      lock = false;
      clearTimeout(timer);
    }, delay);
  };
};

/**
 * 数组去重
 * @param {Array} arr 
 */
const unique = (arr) => [...new Set(arr)];

/**
 * 柯里化
 * @param {Function} fn 
 * @param  {...any} args 
 */
const currying = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...arguments) => currying(fn, ...args, ...arguments);
  } else {
    return fn(...args);
  }
};
// const a = (a,b,c) => a+b+c;
// var add = currying(a);
// var res = add(4)(5)(6);
// console.log(res);

/**
 * flat 多维数组降维
 * @param {Array} arr 
 */
const flat = (arr) => arr.reduce((res, cur) => {
  if (Array.isArray(cur)) {
    return [...res, ...flat(cur)];
  } else {
    return [...res, cur];
  }
}, []);
// console.log(flat([[1,2,3], 4, 5, [6, 7, [8, 9, 10]]]));

/**
 * 深拷贝
 * @param {*} obj 
 */
const deepClone = (obj) => {
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (typeof obj !== 'object') {
    return obj;
  };

  let res = Array.isArray(obj) ? [] : {};
  if (Array.isArray(obj)) {
    obj.forEach(item => {
      res.push(deepClone(item));
    });
  } else {
    for (let key in obj) {
      res[key] = deepClone(obj[key]);
    }
  }

  return res;
};

/**
 * 校验类型
 * @param {*} obj 
 */
const checkType = (obj) => Object.prototype.toString.call(obj);
// console.log(checkType([]));

/**
 * call
 * @param {Object} target 
 * @param  {...any} args 
 */
Function.prototype.callTest = function(target, ...args) {
  const fn = this;
  target.fn = fn;
  const res = target.fn(...args);
  delete target.fn;

  return res;
};

/**
 * bind
 * @param {Object} target 
 * @param  {...any} args 
 */
Function.prototype.bindTest = function(target, ...args) {
  return () => {
    return this.call(target, ...args);
  };
};

/**
 * new
 * @param {Function} cons 
 * @param  {...any} args 
 */
function newTest(cons, ...args) {
  const obj = {};
  obj.__proto__ = cons.prototype;
  const res = cons.call(obj, ...args);

  if (typeof res === 'function' || typeof res === 'object') {
    return res;
  }
  return obj;
}

/**
 * instanceof
 * @param {*} left 
 * @param {Function} right 
 */
function instanceofTest(left, right) {
  const leftProto = left.__proto__;
  const rightProtoType = right.prototype;
  while(leftProto) {
    if (leftProto === rightProtoType) {
      return true;
    }

    leftProto = leftProto.__proto__;
  }
  return false;
};

/**
 * reduce
 * @param {*} fn 
 * @param {*} initial 
 */
Array.prototype.reduceTest = function(fn, initial) {
  const arr = this;
  let res = initial;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && initial === undefined) {
      res = arr[i];
      i++;
    };
    const cur = arr[i];
    res = fn(res, cur);
  }

  return res;
};
// console.log([1,2,3,4].reduceTest((res, cur) => res + cur));

/**
 * 继承
 * @param {Function} childClass 
 * @param {Function} fatherClass 
 */
function extendsTest(childClass, fatherClass) {
  childClass.prototype = Object.create(fatherClass.prototype);
  childClass.prototype.constructor = childClass;
};

/**
 * Object.create
 * @param {Object} obj 
 */
function ceate(obj) {
  function F() {};
  F.prototype = obj;
  F.prototype.constructor = F;
  return new F();
};
