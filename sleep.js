const sleep = wait =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, wait);
  });

async function run() {
  console.log("Hello");
  await sleep(500);
  console.log("this");
  await sleep(500);
  console.log("is");
  await sleep(500);
  console.log("me");
}

run();
