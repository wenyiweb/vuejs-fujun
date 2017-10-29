/**
 * 解析URL参数
 * @example ?id=12345&a=b
 * @return Object {id: 12345, a:'b'}
 */
export function urlParse() {
  let search = window.location.search;
  let obj = {};
  // 正则
  let reg = /[?&][^?&]+=[^?&]+]/g;
  // match方法可以在字符串内检索指定的值，返回一个或多个正则表达式的匹配
  let arr = search.match(reg); // 返回 ["?id=12345", "&a=b"]
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      // decodeURIComponent() 函数可对 dencodeURIComponent() 函数编码的 URI 进行解码。
      let key = decodeURIComponent(tempArr[0]);
      let value = decodeURIComponent(tempArr[1]);

      obj[key] = value;
    });
  }
  return obj;
}
