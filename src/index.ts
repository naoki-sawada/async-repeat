interface IRepeatOptions {
  defaultResult?: any;
  delay?: number;
  maxCount?: number;
}

export default function repeat(
  callback: any,
  options?: IRepeatOptions,
): Promise<any> {
  return new Promise((resolve, reject) => {
    options = options || {};
    options.maxCount = options.maxCount || 60;
    options.delay = options.delay || 3000;
    options.defaultResult = options.defaultResult || null;

    const { maxCount, delay, defaultResult } = options;
    let count = 0;
    const intervalId = setInterval(() => {
      if (maxCount < count) {
        clearInterval(intervalId);
        resolve(defaultResult);
      } else {
        count++;
        callback(utils.resolve, utils);
      }
    }, delay);

    const utils = {
      checkCount: () => {
        return count <= maxCount;
      },
      reject: (err: any) => {
        clearInterval(intervalId);
        reject(err);
      },
      resolve: (data: any) => {
        clearInterval(intervalId);
        resolve(data);
      },
    };
  });
}
