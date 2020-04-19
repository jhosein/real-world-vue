import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//Neccessary for Auto Global Registration
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

//Begin Auto Global Registration

//Webpack feature
//1. directory to look ing
//2. look in sub-directories?
//3. looking for components that start with Base and end with .vue or .js
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

//Aray of each file picked up above
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
//End Auto Global Registration

//Registers component as a global component. This eliminates the need for local component registration
//Vue.component("BaseIcon", BaseIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
