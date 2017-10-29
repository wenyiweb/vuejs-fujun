import * as types from './mutation-types';

/**
 * mutation是一个对象，封装多个mutation操作
 * 可以接收两个参数state和提交的payload
 * @type {{}}
 */
const mutations = {
  [types.SET_TRYITEM](state, tryItem) {
    state.tryItem = tryItem;
  }
};

export default mutations;
