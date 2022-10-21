// Declare exposed contextBridge functions on the window object project-wide.
// This ensures TypeScript doesn't complain about the functions not existing.
interface Window {
  app: {
    getCurrentPort(): number;
  };
}
