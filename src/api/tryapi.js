import jsonp from 'common/js/jsonp';
import {commonParams, options} from './config';

export function getTryList(pageNum, status) {
  const url = 'https://tryapi.yoka.com/yokatry/gettrylist';
  const data = Object.assign({}, commonParams, {
    status: status,
    page: pageNum
  });
  return jsonp(url, data, options);
};

export function getTryDetail(status, id) {
  const url = 'https://tryapi.yoka.com/trydetail/gettrydetail';
  const data = Object.assign({}, commonParams, {
    status: status,
    try_id: id
  });

  return jsonp(url, data, options);
};

export function getApplyList(pageNum, type, id) {
  const url = 'http://tryapi.yoka.com/yokatry/getuserlist';
  const data = Object.assign({}, commonParams, {
    page: pageNum,
    type: type,
    try_id: id
  });

  return jsonp(url, data, options);
};
