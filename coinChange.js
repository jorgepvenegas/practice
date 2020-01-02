const coins = [3,5,2];
const target = 6;


function getMinCoinChange(coins, target) {
  let memo = Array(target + 1).fill(Infinity);
  memo[0] = 0;

  for(let v = 1; v <= target; v++) {
    for(let c = 0; c < coins.length; c++) {
      let coin = coins[c];
      if(coin <= v) {
        memo[v] = Math.min(memo[v], 1 + memo[v - coin]);
      }
    }
  }

  return memo[target] === Infinity ? -1 : memo[target];
}

console.log(getMinCoinChange(coins, target))


// let dp = Array(target + 1);
// dp.fill(Infinity);
// dp[0] = 0;
// for(let i = 1; i <= target; i++) {
//   for(let c = 0; c < coins.length; c++) {
//     if(coins[c] <= i) {
//       dp[i] = Math.min(dp[i], 1 + dp[i - coins[c]]);
//     }
//   }
// }

// return dp[target] !== Infinity ? dp[target] : -1;
// }