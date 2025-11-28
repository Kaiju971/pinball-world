export function runLoop(callback: () => void) {
  function loop() {
    callback();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}
