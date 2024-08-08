function fibActual(n) {
    if (n === 0) return [0]
    if (n === 1) return [0,1]
    const arr = fibActual(n - 1)
    return [...arr, arr[n - 1] + arr[n - 2]]
}

function fibReturnNumbers(n) {
    if (n == 1) return 0
    if (n == 2) return 1
    return fibReturnNumbers (n - 1) + fibReturnNumbers (n - 2)
}

function fibIterate(n) {
    if (n <= 0) return [];
    let array = [];
    let fib1 = 0
    let fib2 = 1
    for (let i = 0; i < n; i++) {
        array.push(fib1)
        let sum = fib1 + fib2
        fib1 = fib2
        fib2 = sum
    }
    return array
}