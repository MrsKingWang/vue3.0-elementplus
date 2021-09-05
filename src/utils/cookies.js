// 写cookies
export function setCookie(name, value) {
  const Days = 30;
  const exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toUTCString();
}

export function getCookie(name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr) { return unescape(arr[2]); } else { return null; }
}

export function delCookie(name) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const coal = getCookie(name);
  if (coal != null) { document.cookie = name + '=' + coal + ';expires=' + exp.toUTCString(); }
}
