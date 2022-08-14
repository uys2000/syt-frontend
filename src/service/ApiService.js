const url = "http://localhost:3001/api";

export const getInfoVideo = function (id) {
  return fetch(url + "/info/video/" + id, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Origin: "http://localhost:8080",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }).then((res) => res.json());
};

export const downloadVideoFromOurServer = function (id, formatId) {
  return url + `/download/video/${id}/${formatId}`;
};
export const downloadVideoFromGoogle = function (videoData, formatId) {
  console.log(videoData, formatId);
  const formatIndex = videoData.formats.findIndex(
    (formatItem) =>
      formatItem.formatId.replace(" ", "") == formatId.replace(" ", "")
  );
  console.log(formatIndex);
  if (formatIndex != -1) return videoData.formats[formatIndex].url;
  else return "";
};
