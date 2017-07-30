import * as types from './types';

export const mutations = {
    // 提交到mutation后，该改状态了
    // state 代表当前容器中的状态
    [types.ADD_PLAN](state,plan){
        state.planList.push(plan);
    },
    [types.ST_PLAN_TOTAL_TIME_INCREMENT](state,timeSpand) {
        state.totalTime += timeSpand;
    },
    [types.ST_PLAN_LIST_DELETE](state, plan) {
        state.planList = state.planList.filter(item => item != plan);
        // 返回 false 丢弃，返回 true 保留。
    },
    [types.ST_PLAN_TOTAL_TIME_DECREMENT](state, timeSpend) {
        state.totalTime -= timeSpend;
    }
};
