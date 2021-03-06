import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 使用 storage 的值初始化 state
import {getStorage} from './local';

const state = getStorage() || {
    totalTime: 0, // 总时间
    planList: [] // 每个计划数据
}

// actions 和 mutations 都是对象，提供函数
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';

export const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});