// Async
// Event Loop

const timeout = setTimeout(() => {
    console.log('After Timeout');
}, 2500);

clearTimeout(timeout);