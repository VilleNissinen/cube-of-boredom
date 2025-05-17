export const initializeWebGPU = async () => {
  // check if the user's browser can use WebGPU.
  if (!navigator.gpu) {
    throw new Error("WebGPU not supported on this browser.");
  }
  // initializing WebGPU
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw new Error("No appropriate GPUAdapter found.");
  }
  const device = await adapter.requestDevice();
  return device;
};
