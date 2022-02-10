// Async
// Event Loop

const timeout = setTimeout(() => {
  console.log('After Timeout');
}, 2500);

clearTimeout(timeout);

// const interval = setInterval(() => {
//   console.log('Interval');
// }, 1000);

// clearInterval(interval);

const delay = (callback, wait = 2000) => {
  setTimeout(callback, wait);
};

delay(() => {
  console.log('After one second');
}, 1000);

// Promises
// new Promise ((resolve, reject) => {})

const delay2 = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve();
      reject('Something went wrong. Try again');
    }, wait);
  });
  return promise;
};

delay2(2500)
  .then(() => {
    console.log('After 2 seconds');
  })
  .catch((err) => console.error('Error', err))
  .finally(() => console.log('Finally'));

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

getData().then((data) => {
  console.log(data);
});

async function asyncExample() {
  try {
    await delay2(3000);
    const data = await getData();
    console.log('Data', data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('Finally');
  }
}

asyncExample();
