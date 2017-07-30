import * as types from './types';

export const actions = {
    // [types.ADD_PLAN] 将 addPlan 作为key
    // () ： actions 做的事情是提交，所以 () 的第一个参数是一个对象，承载一个“提交”。 item 代表要添加的内容 。
    // 首先 item 的机构为 {time,date,commit} ，页面上的 item 还少 name 和 avatar 。 action中可以写逻辑，这两个值先定死。
    [types.ADD_PLAN]({commit},item) {
        // 在 action 可以做逻辑操作，将操作好的结果发给 mutation
        let plan = {
            name: 'xhy',
            avatar: 'https://b-ssl.duitang.com/uploads/item/201601/13/20160113143016_Lnhwf.jpeg',
            ...item // 合并对象
        };

        // 将 plan 提交给 mutation 的 addPlan 方法
        commit(types.ADD_PLAN, plan);
    },
    [types.ST_PLAN_TOTAL_TIME_INCREMENT]({commit},timeSpend) {
        commit(types.ST_PLAN_TOTAL_TIME_INCREMENT, timeSpend);
    },
    [types.ST_PLAN_LIST_DELETE]({commit}, plan) {
        commit(types.ST_PLAN_LIST_DELETE, plan);
    },
    [types.ST_PLAN_TOTAL_TIME_DECREMENT]({commit}, timeSpend) {
        commit(types.ST_PLAN_TOTAL_TIME_DECREMENT, timeSpend);
    }
};