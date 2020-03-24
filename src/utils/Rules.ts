/**
 * 表单验证规则
 */

import { RuleItem } from 'async-validator';
import Regexps from '@/utils/Regexps';

type Item = RuleItem | RuleItem[];

// 手机或邮箱
const mobileOrEmail: Item = {
  validator: (rule, value, callback) => {
    if (value) {
      if (
        Regexps.mobile.pattern.test(value) ||
        Regexps.email.pattern.test(value)
      ) {
        callback();
      } else {
        callback('手机或邮箱格式错误');
      }
    }
    callback();
  },
};

export default {
  ...Regexps,
  mobileOrEmail,
};
