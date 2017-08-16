const formatDate = function (dt, fmt) {
  if(!fmt){
       fmt = dt;
       dt = new Date();
  }
  let o = {
    "M+": dt.getMonth() + 1, //月份
    "d+": dt.getDate(), //日
    "h+": dt.getHours(), //小时
    "m+": dt.getMinutes(), //分
    "s+": dt.getSeconds(), //秒
    "q+": Math.floor((dt.getMonth() + 3) / 3), //季度
    "S": dt.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (dt.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};

const _charCode = function (code, num) {
        return String.fromCharCode(code + parseInt(num));
};

const numberToUpperCase = function (num) {
        return num / 26 >= 1 ? charCode(65, num / 26 - 1) + numberToUpperCase(num % 26) : charCode(65, num % 26);
};


modules.export = {
        _charCode,
        formatDate,
        numberToUpperCase
};