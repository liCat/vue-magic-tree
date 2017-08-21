/**
 * Created by licat on 2017/8/18.
 */
import vueMagicTree from './src/main.js';

/* istanbul ignore next */
vueMagicTree.install = function(Vue) {
  Vue.component(vueMagicTree.name, vueMagicTree);
};

export default vueMagicTree;
