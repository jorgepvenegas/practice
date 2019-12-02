const coins = [5, 2, 1];
const target = 11;


function getMinCoinChange(coins, target) {
  let dp = Array(target + 1);
  dp.fill(Infinity);
  dp[0] = 0;
  for(let i = 1; i <= target; i++) {
    for(let c = 0; c < coins.length; c++) {
      if(coins[c] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[c]]);
      }
    }
  }

  return dp[target] !== Infinity ? dp[target] : -1;
}

console.log(getMinCoinChange(coins, target))