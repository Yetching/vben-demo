export function logEnvConfig() {
  console.log(import.meta.env.DEV);
  console.log(import.meta.env.PROD);
  console.log(import.meta.env.MODE);
  console.log(import.meta.env.VITE_PORT);
  console.log(import.meta.env.VITE_USE_MOCK);
  console.log("get env");
}
