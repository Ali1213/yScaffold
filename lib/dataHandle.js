const _toTwo = function (x) {
        x = x + '';
        return ('00' + x).substring(x.length);
};

const formatDate = function (date, fmt) {
        return fmt.replace(/(y+)/i, ($$, $1) => {
                return (date.getFullYear() + '').substring(4 - $1.length);
        }).replace(/mm/i, () => {
                return _toTwo(date.getMonth() + 1);
        }).replace(/dd/i, () => {
                return _toTwo(date.getDate());
        }).replace(/hh/i, () => {
                return _toTwo(date.getHours());
        }).replace(/mm/i, () => {
                return _toTwo(date.getMinutes());
        }).replace(/ss/i, () => {
                return _toTwo(date.getSeconds());
        });
};

const _charCode = function (code, num) {
        return String.fromCharCode(code + parseInt(num));
};

const numberToUpperCase = function (num) {
        return num / 26 >= 1 ? charCode(65, num / 26 - 1) + numberToUpperCase(num % 26) : charCode(65, num % 26);
};


modules.export = {
        _toTwo,
        _charCode,
        formatDate,
        numberToUpperCase
};