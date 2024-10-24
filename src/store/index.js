import getters from "./getters";

import { createStore } from "vuex";

const modulesFiles = import.meta.globEager("./modules/*.js");

const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, "$1");
  const value = modulesFiles[modulePath];
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = createStore({
  modules,
  getters,
});

export default store;
