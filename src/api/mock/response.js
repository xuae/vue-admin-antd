const responseOk = (data = null, length = 0) => {
  if (length) {
    return {
      code: '200',
      msg: 'OK',
      [`data|${length}`]: [data],
    };
  }
  return {
    code: '200',
    msg: 'OK',
    data: data,
  };
};

const responseError = (msg = 'Error') => {
  return {
    code: '500',
    msg: msg,
    data: null,
  };
};

const responseList = (config, item = { id: '@id' }) => {
  const { pageSize = 10, pageNo = 1 } = config.body;
  const total = pageSize * 3.5;
  const listSize =
    total / pageNo > pageSize ? pageSize : total - pageSize * (pageNo - 1);

  return responseOk({
    total: total,
    pageNo: pageNo,
    pageSize: pageSize,
    size: listSize,
    [`list|${listSize}`]: [item],
  });
};

export default {
  ok: responseOk,
  error: responseError,
  list: responseList,
};
