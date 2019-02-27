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
//直播服务 条件组合配置
export let darenCateTypeList = [701, 704];//直播
export let TWCateTypeList = [801]; //图文
export let darenFansCountList = ['100万以上', '50-100万', '30-50万', '10-30万', '10万以下'];
export let darenRoleList = ['美搭', '美妆个护', '居家', '美食', '母婴', '型男', '数码科技', '运动', '汽车', '文化娱乐', '萌宠', '园艺', '动漫', '星座', '摄影', '游戏', '旅游', '其他'];
export let darenChannel = ['微淘','淘宝头条','有好货','必买清单','ifashion','每日好店','装备天地','酷玩星球','全球时尚','美妆学院','极有家','汇吃']
// console.log(process.env.NODE_ENV,willbeServer)
//视频服务 条件组合配置
export let cateType = [602,601,603,604]; //video
export let vedioCateType = ['店铺故事','使用评测','清单盘点','教程教学']

export default config;
