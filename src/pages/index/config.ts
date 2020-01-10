const isH5 = process.env.CLIENT_ENV === "h5";
// const HOST = "http://api.juheapi.com";
// const HOST_M = "http://api.juheapi.com";

// let host = isH5 ? '"/api"' : HOST;
// let host_m = isH5 ? '"/api-m"' : HOST_M;
console.log("isH5===================", process.env.NODE_ENV);
// pic
export const CDN = "https://yanxuan.nosdn.127.net";

export default {
  getLists: `/api/japi/toh` // 获取历史上的今天接口
};
