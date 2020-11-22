/**
 * 手写Promise
 * 参考链接：https://juejin.im/post/5f0ee634f265da22d95db408
 */


// Promise的三个状态
const STATUS = {
  FULFILLED: 'fulfilled', // 成功
  REJECTED: 'rejected', // 失败
  PENDDING: 'pendding' // 等待
};

// Promise实现
class PromiseTest {

  /**
   * 返回一个成功后的promise实例，如果传进来的value是一个promise实例，则将promise成功后的值取出作为返回promise成功回调的参数
   * @param {*} value 
   */
  static resolve(value) {
    if (value instanceof PromiseTest) {
      return value.then();
    } else {
      return new PromiseTest(resolve => {
        resolve(value);
      });
    }
  }

  static all(promiseList) {
    return new PromiseTest((resolve, reject) => {
      const resList = [];
      let index = 0;

      function pushResList(value) {
        resList.push(value);
        if (index === promiseList.length - 1) {
          resolve(resList);
        }
      }
      
      promiseList.forEach((promiseIns) => {
        promiseIns.then(res => {
          pushResList(res);
          index++;
        });
      });
    });
  }

  static race(promiseList) {
    return new PromiseTest((resolve, reject) => {
      promiseList.forEach(promiseIns => {
        promiseIns.then(res => {
          resolve(res);
        });
      });
    });
  }

  constructor (executor) {
    this.status = STATUS.PENDDING; // 此属性用于记录promise实例的状态
    this.value = null; // 此属性用于存放成功后的值
    this.reason = null; // 此属性用于存放失败后的原因

    // 发布订阅模式 用于存放订阅的函数
    this.resolveCbList = [];
    this.rejectCbList = [];

    // 成功后的回调
    const resolve = (value) => {
      // 这个判断用于确保之前的状态为等待态
      if (this.status === STATUS.PENDDING) {
        this.status = STATUS.FULFILLED;
        this.value = value;

        // 发布订阅的事件
        this.resolveCbList.forEach(fn => fn());
      }
    };

    // 失败后的回调
    const reject = (reason) => {
      if (this.status === STATUS.PENDDING) {
        this.status = STATUS.REJECTED;
        this.reason = reason;
        this.rejectCbList.forEach(fn => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  /**
   * then
   * 注1: then中所有的try/catch都是在两个回调执行阶段布置的，原因是如果回调报错，则报错原因会作为新promise的reject的参数(reason)传递到下个then中
   * 注2: setTimeout的原因 todo
   * @param {*} onFulfilled 成功的回调
   * @param {*} onReject 失败的回调
   */
  then(onFulfilled, onReject) {
    // 对 onFulfilled/onReject 进行非空校验
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onReject = typeof onReject === 'function' ? onReject : reason => { throw Error(reason) };

    // 声明要返回的promise实例
    let promise2;

    //如果执行then时的状态为成功态，则证明Promise.resolve已执行，此时的this.value是有值的，所以这时只需要执行then的成功回调并处理新promise即可。
    if (this.status === STATUS.FULFILLED) {
      promise2 = new PromiseTest((resolve, reject) => {
        try {
          // 此时this.value的值是可以拿到的
          const x = onFulfilled(this.value);
          // 处理新promise
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }

    // 失败态同上
    if (this.status === STATUS.REJECTED) {
      promise2 = new PromiseTest((resolve, reject) => {
        try {
          const x = onReject(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }

    // 当执行then时的状态仍然为初始化的等待态时，说明Promise.resolve是异步的(此时在任务队列中还未执行)
    // 则需要借助发布订阅模式，此时需要做的就是将then的回调函数放到订阅队列中，等到异步resolve执行的时候再将其发布(执行)
    if (this.status === STATUS.PENDDING) {
      promise2 = new PromiseTest((resolve, reject) => {
        // 将执行回调函数和处理新promise的操作 放入订阅队列中
        this.resolveCbList.push(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        this.rejectCbList.push(() => {
          try {
            const x = onReject(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
    }

    return promise2;
  }

  catch(errCallback) {
    return this.then(null, errCallback);
  }
}

/**
 * 处理then返回的新promise实例(将上一次then的执行结果 作为参数赋予新promise实例的回调)
 * 如果上一次then的执行结果为promise实例，则需要将promise实例的resolve结果传递给下一个then
 * @param {*} promise2 新promise
 * @param {*} x 上个then执行的结果，需要作为参数 传递到新promise的resolve中
 * @param {*} resolve 新promise的resolve
 * @param {*} reject 新promise的reject
 */
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw Error('循环引用');
  }

  // 判断x是否为Promise实例或Promise类，如果是，则将promise的结果取出来传递给resolve
  if (!!x && (typeof x === 'object' || typeof x === 'function')) {
    const then = x.then;
    // 判断then是否为函数，如果是函数则调用then，将then回调中的参数(promise的结果)作为参数传递给resolve
    if (then && typeof then === 'function') {
      x.then(res => {
        // 为了防止promise中又返回了promise，递归直到结果为普通数据类型为止
        resolvePromise(promise2, res, resolve, reject);
      }, rej => {
        reject(rej);
      });
    } else {
      // 如果then不是函数则证明x为普通对象，则直接作为参数传递给resolve
      resolve(x);
    }
  } else {
    // 如果x是基本类型，则直接作为参数传递给resolve
    resolve(x);
  }
};

module.exports = {
  PromiseTest
};
