/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const d = new Date(100000000000);
    const t=d.getTime();
    var sum=0;
    for(var i=0;i<n;i++)
    {
     sum+=i+1;
    }
    const d2 = new Date(100000000000);
    console.log(d2.getTime()-t);
    console.log(d.getTime());
    return d2.getTime()-d.getTime();
    return ;
}
calculateTime(10000000000)