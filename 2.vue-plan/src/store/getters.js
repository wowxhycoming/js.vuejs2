// 计算 planList 是否有数据

export const getters = {
    isShowAddPlanHint(state) {
        // 1. state.planList.length 获取状态中数据的个数
        // 2. Boolean(...) 转 布尔
        // 3. return 计算属性要 return
        // 有长度 true 没长度 false
        return Boolean(state.planList.length);
    }
};