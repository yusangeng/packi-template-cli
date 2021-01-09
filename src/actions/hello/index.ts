import cah from "command-arguments-helper";
import { debug, info, warn, error, declareAction } from "packi-print";

export default function hello(cwd: string, appName: string, ...rest: string[]) {
  const realArgs = cah<[string]>(["name"], rest);

  return make_(cwd, appName, ...realArgs);
}

async function make_(cwd: string, appName: string, name: string): Promise<number> {
  declareAction("hello", "hello action");

  debug(`Hello ${name}.`);
  info(`Hello ${name}.`);
  warn(`Hello ${name}.`);
  error(`Hello ${name}.`);

  return 0;
}
