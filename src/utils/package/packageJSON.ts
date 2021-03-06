import packagejson from "packagejson";

export default function getPackageJSON() {
  return new Promise<any>((resolve, reject) => {
    packagejson(__dirname, (err: any, data: any) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}
