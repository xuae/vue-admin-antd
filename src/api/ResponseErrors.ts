/**
 * 请求返回的提示信息
 */
export default class ResponseErrors {
  static UNKNOWN_ERROR: ResponseError = {
    code: -1,
    message: 'Unknown ResponseError',
  };
  static OK: ResponseError = {
    code: 0,
    message: 'Ok',
  };
  static FAILED: ResponseError = {
    code: 1,
    message: 'Failed',
  };
  static NOT_LOGIN: ResponseError = {
    code: 10001,
    message: "Haven't Login",
  };
  static INVALID_ACCOUNT: ResponseError = {
    code: 10011,
    message: 'Invalid Account',
  };
  static INVALID_PASSWORD = {
    code: 10012,
    message: 'Invalid Password',
  };
  static NOT_IDENTITY: ResponseError = {
    code: 10013,
    message: "Haven't Identity",
  };
  static NOT_FOUND: ResponseError = {
    code: 11001,
    message: 'Not Found',
  };
  static NOT_ALLOWED: ResponseError = {
    code: 11002,
    message: 'No allowed',
  };
  static NOT_OWNER: ResponseError = {
    code: 11003,
    message: 'Not owner',
  };
  static NO_VALIDATION: ResponseError = {
    code: 11004,
    message: 'No validation',
  };
  static EXCEPTION: ResponseError = {
    code: 2,
    message: 'Unnamed exception',
  };
  static EXPIRED: ResponseError = {
    code: 3,
    message: 'Out of time',
  };
  static TOO_MANY_REQUEST: ResponseError = {
    code: 4,
    message: 'Too Many Requests',
  };
  static RUN_OUT: ResponseError = {
    code: 40001,
    message: 'Something Has run out',
  };
  static NOT_EMPTY: ResponseError = {
    code: 5,
    message: 'Content can not be empty',
  };
  static FREEZE_WALLET: ResponseError = {
    code: 50001,
    message: 'Wallet is Froze, allowed payment for the time being',
  };
  static ACTION_ALREADY_BE_DONE: ResponseError = {
    code: 6,
    message: 'The action you request already be done by other admin',
  };
  static NON_COMPLIANCE: ResponseError = {
    code: 7,
    message: 'The case of non-compliance',
  };
  static NOT_IMPLEMENT: ResponseError = {
    code: 8,
    message: 'Function not implement',
  };
  static TARGET_FORBIDDEN: ResponseError = {
    code: 9,
    message: 'Target be forbidden',
  };

  /**
   * 获取 message
   * @param error
   */
  static getMessage(error: ResponseError) {
    let message = '';
    if (error) {
      message = error['message'];
    }
    return message;
  }

  /**
   * 获取 code
   * @param error
   */
  static getCode(error: ResponseError) {
    let code: number = 0;
    if (error) {
      code = error['code'];
    }
    return code;
  }
}

/**
 * 提示类型
 */
export interface ResponseError {
  code: number;
  message: string;
}
