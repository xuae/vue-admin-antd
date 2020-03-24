/**
 * 正则表达式
 * 可直接用于表单验证规则
 */

interface Item {
  pattern: RegExp; // 正则表达式
  message: string; // 错误提示信息
}

// 用户名
const userName: Item = {
  pattern: /[A-Za-z0-9_\-\u4e00-\u9fa5]{4,}/,
  message: '至少 4 位字符，可含字母、数字、中文、下划线',
};

// 密码
const password: Item = {
  pattern: /^[a-zA-Z0-9_]{6,}$/,
  message: '至少 6 位密码，可含字母、数字、下划线',
}; //^[A-Za-z0-9]{6,}$/
// 8位及以上的新密码，至少包含字母、数字、特殊字符中的两种 /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?:;,./]+)$)^[\w~!@#$%^&*?:;,./]{8,}$/

// 手机号
const mobile: Item = {
  pattern: /^1[3456789]\d{9}$/,
  message: '手机号格式错误',
};

// 座机号，固定电话
const fixedPhone: Item = {
  pattern: /^((0[0-9]{2,3}-)+([0-9]{7,8})+(-[0-9]{1,4})?$)/,
  message: '座机号格式错误',
};

// 邮箱
const email: Item = {
  pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  message: '邮箱格式错误',
};

// 网址
const url: Item = {
  pattern: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
  message: '可含字母、数字、中文、下划线',
};

// IP 地址
const ip: Item = {
  pattern: /(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/,
  message: 'IP 地址格式错误',
};

// 身份证号
const idCard: Item = {
  pattern: /\d{17}[\d|x]|\d{15}/,
  message: '身份证号格式错误',
};

// 中文字符
const chinese: Item = { pattern: /[\u4e00-\u9fa5]/, message: '仅含中文字符' };

// QQ 号
const qq: Item = { pattern: /[1-9]([0-9]{5;11})/, message: 'QQ 号格式错误' };

// 整数
const int: Item = { pattern: /-?[1-9]\d*/, message: '请输入整数' };

// 正整数
const plusInt: Item = { pattern: /[1-9]\d*/, message: '请输入正整数' };

// 负整数
const minusInt: Item = { pattern: /-[1-9]\d*/, message: '请输入负整数' };

// 2位小数
const float2: Item = {
  pattern: /^(-)?(0|[1-9]\d*)(\s|$|\.\d{1,2}\b)/,
  message: '只能输入数字，最多两位小数',
};

export default {
  userName,
  password,
  mobile,
  fixedPhone,
  email,
  url,
  ip,
  idCard,
  chinese,
  qq,
  int,
  plusInt,
  minusInt,
  float2,
};
