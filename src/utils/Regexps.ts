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
  pattern: /^((0\d{2,3}-)+(\d{7,8})+(-\d{1,4})?$)/,
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

/**
 * 15位身份证号
 *
 * 规则：地址码（6位）+生日码（6位，1967年04月01日是670401）+顺序码（3位，男末尾为单数，女为双数）
 * 样本：6207028009176612，6207028009178871
 * 身份证在线生成器：https://www.googlespeed.cn/idcard/
 */
const idCard15: Item = {
  pattern: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/,
  message: '15位身份证号格式错误',
};

/**
 * 18位身份证号
 *
 * 规则：地址码（6位）+生日码（8位，1967年04月01日是19670401）+顺序码（3位，男末尾为单数，女为双数）+校验码(1位，0-9/x/X)
 * 样本：620702198009176612，62070219800917887X
 * 身份证在线生成器：https://www.googlespeed.cn/idcard/
 */
const idCard18: Item = {
  pattern: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|x|X)$/,
  message: '18位身份证号格式错误',
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

/**
 * 同时支持15位和18位社会信用代码
 */
const socialCreditCode: Item = {
  pattern: /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/,
  message: '格式错误',
};

/**
 * 15位社会信用代码
 *
 * 老的工商注册代码
 */
const socialCreditCode_15: Item = {
  pattern: /^[1-9]\d{15}$/,
  message: '格式错误',
};

/**
 * 18位社会信用代码
 *
 * 统一社会信用代码由18位数字或者大写字母组成，但是字母不包括 I、O、Z、S、V
 * 一共由五部分组成
 * 第一部分：登记管理部门代码1位 (数字或大写英文字母)
 * 第二部分：机构类别代码1位 (数字或大写英文字母)
 * 第三部分：登记管理机关行政区划码6位 (数字)
 * 第四部分：主体标识码（组织机构代码）9位 (数字或大写英文字母)
 * 第五部分：校验码1位 (数字或大写英文字母)
 *
 * 样本：91620105MA71BQEG18
 */
const socialCreditCode_18: Item = {
  pattern: /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/,
  message: '格式错误',
};

export default {
  userName,
  password,
  mobile,
  fixedPhone,
  email,
  url,
  ip,
  idCard15,
  idCard18,
  chinese,
  qq,
  int,
  plusInt,
  minusInt,
  float2,
  socialCreditCode,
  socialCreditCode_15,
  socialCreditCode_18,
};
