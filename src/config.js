let willbeServer = 'http://47.107.35.8:8281/spider-oper';
// console.log(process.env.NODE_ENV,willbeServer)
if (process.env.NODE_ENV == "development") {
  willbeServer = 'http://spider.ittun.com/spider-oper'
} else if (process.env.NODE_ENV == 'local') {
  willbeServer = 'http://spider.ittun.com/spider-oper'
}
let config = {
  token: 'KE923jddu#@(DFDJiw1dI$*FYHHHHH',
  willbeServer: willbeServer
}
export let darenCateTypeList = [701, 704];
export let darenFansCountList = ['100万以上', '50-100万', '30-50万', '10-30万', '10万以下'];
export let darenRoleList = ['美搭', '美妆个护', '居家', '美食', '母婴', '型男', '数码科技', '运动', '汽车', '文化娱乐', '萌宠', '园艺', '动漫', '星座', '摄影', '游戏', '旅游', '其他'];
// console.log(process.env.NODE_ENV,willbeServer)

export default config;