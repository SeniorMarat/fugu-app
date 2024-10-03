// Replace with import.meta.glob after https://github.com/unjs/nitro/issues/1671
export const migrations = {
  "0001_user": () => import("./0001_user"),
}
