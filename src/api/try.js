import axios from 'axios';
/**
 * 获取试用列表接口
 * @param pageNum
 * @param status
 * @returns {Promise.<TResult>|*}
 */
export function getTryList(pageNum, status) {
    const url = '/api/getTryList';
    const data = {
        status: status,
        page: pageNum,
        rnd: Math.random(),
        format: 'jsonp',
        callback: 'callback'
    };
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data);
    });
};
/**
 * 获取试用底层页接口
 * @param status
 * @returns {Promise.<TResult>|*}
 */
export function getTryDetail(status, id) {
  const url = 'api/getTryDetail';

  const data = {
    status: status,
    try_id: id,
    rnd: Math.random(),
    format: 'json'
  };

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  });
}
/**
 * 获取申请名单列表
 * @param type
 * @param id
 * @returns {Promise.<TResult>|*}
 */
export function getApplyList(pageNum, type, id) {
  const url = '/api/getApplyList';
  const data = {
    page: pageNum,
    type: type,
    try_id: id,
    rnd: Math.random(),
    format: 'json'
  };

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  });
}
