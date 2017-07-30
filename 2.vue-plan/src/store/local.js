// 存储本地数据
export const setStorage = function(data) { // data 为要存储的数据
    localStorage.setItem('data', JSON.stringify(data));
}

// 获取数据
export const getStorage = function() {
    return JSON.parse(localStorage.getItem('data'));
}