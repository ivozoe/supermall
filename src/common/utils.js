export function formatDate(date, fmt) {
    //1.获取年份
    //y+：不确定用户会传过来多少个y
    if (/(y+)/.test(fmt)) {
        //根据用户传进来的y的个数，来截取subster
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    //2.
    //M+：正则表达式中的一个规则
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
//当时间位数不足两位时，前面要添加0
function padLeftZero(str) {
    //str=4
    // return ('00' + 4).substr(1);   =>  04
    return ('00' + str).substr(str.length);
};