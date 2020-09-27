export function orderReady(onDone: () => void) {
    setTimeout(function() {
        onDone();
    }, 5000)    
}