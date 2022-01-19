import Context from "@packi_/settings";

type S = {};

const context = new Context<S>({
  settingFilename: ".<%= projectName %>.json",
  defaultSettings: {}
});

export function read() {
  return context.read();
}

export function write(data: S) {
  return context.write(data);
}
