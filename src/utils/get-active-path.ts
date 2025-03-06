import { closest } from "fastest-levenshtein";

export const getActivePath = (
  path: string,
  paths: string[],
  ignorePaths?: string[]
) => {
  const closesPath = closest(path, paths.concat(ignorePaths || []));
  const index = paths.indexOf(closesPath);

  return { active: closesPath, activeIndex: index };
};
