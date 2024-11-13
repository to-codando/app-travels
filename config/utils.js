import { glob } from "glob";
import { pubsubFactory } from "iares";

export const timer = () => {
  let time = 0;
  let counter = null;

  const start = () => {
    counter = setTimeout(() => {
      time += 1;
    }, 1000);
  };

  const log = () => console.log("execution fished after", `${counter} miliseconds`);

  const stop = () => clearTimeout(counter);

  return { start, stop, log };
};

export const getFiles = async (pattern = [""]) => {
  return await glob(pattern);
};

export const versionFactory = () => {
  let _version = 0;
  const increment = () => {
    _version = _version + 1;
  };
  const version = () => JSON.stringify(_version);
  return { version, increment };
};
