const isValidSetUrl = function (url) {
  if (url.indexOf("https://") == -1) {
    const i = url.indexOf("http://");
    const p = i + 4;
    if (i == -1) return "https://" + url;
    else return [url.slice(0, p), "s", url.slice(p)].join("");
  }
  return url;
};
export const isValid = function (url = "") {
  url = isValidSetUrl(url);
  if (url.indexOf("https://youtu.be/") != -1) return true;
  if (url.indexOf("https://youtube.com/") != -1) return true;
  if (url.indexOf("https://www.youtu.be/") != -1) return true;
  if (url.indexOf("https://www.youtube.com/") != -1) return true;
  return false;
};
export const isList = function (url = "") {
  if (url.indexOf("list=") != -1) return true;
  else return false;
};
export const getVideoID = function (url = "") {
  const i = url.indexOf("v=");
  if (i != -1) {
    const e = url.indexOf("&");
    if (e != -"") return url.substring(i + 2, e);
    else return url.substring(i + 2, url.length);
  } else return url.split("/")[3];
};
export const getListID = function (url = "") {
  const i = url.indexOf("list=");
  const e = url.indexOf("&", i);
  if (e != -1) return url.substring(i + 5, e);
  else return url.substring(i + 5, url.length);
};
