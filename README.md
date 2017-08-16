# yScaffold
给自己集成的脚手架工具

# `dataHandle`

## formatDate([date,]fmt)

+ date: 为时间对象，默认为new Date();
+ fmt: 字符串，yyyy/yy替换为年,MM替换为月,dd替换为天，hh，mm，ss分别替换为时分秒,q/qq替换为季度,SS替换为毫秒
+ 返回值为处理后的字符串

### 测试要求

+ 将传入的字符串YYYY/YY替换为年,MM替换为月,DD替换为天，hh，mm，ss分别替换为时分秒
+ 如果传入的date不是时间对象，则抛错
+ 如果传入的不是字符串，则返回默认样式例:'2017/06/06'

## numberToUpperCase(number)

+ number 整数
+ 返回值 为将number转换为大写字母，如0->A,26->AA

### 测试要求

+ 返回值为 为将number转换为大写字母，如0->A,26->AA
+ 如果传入的number不是数字，则抛错
+ 如果传入的number不是正数，则抛错
+ 如果传入的number不是整数，则取其整数部分