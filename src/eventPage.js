// 入口
import config from './config'
import util from './util'
import {
  darenCateTypeList,
  darenFansCountList,
  darenRoleList,
  vedioCateType,
  cateType,
  TWCateTypeList,
  darenChannel
} from './config'
// console.log('safd',vedioCateType,cateType)
//设置refer
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    if (details.type === 'xmlhttprequest') {
      var exists = false;
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'Referer') {
          exists = true;
          details.requestHeaders[i].value = 'https://v.taobao.com/';
          break;
        }
      }

      if (!exists) {
        details.requestHeaders.push({
          name: 'Referer',
          value: 'https://v.taobao.com/'
        });
      }

      return {
        requestHeaders: details.requestHeaders
      };
    }
  }, {
    urls: ['https://*.taobao.com/*']
  }, ["blocking", "requestHeaders", "extraHeaders"]
);
let darenPageUrl = [];
//VSC 第二次V任务功能前缀
let VSCpage = 1;
let VSCpagesize = 20;
let VSCtotalpage = -1;
let VSCtoken = 'KE923jddudk3FYjWedkHH';
let VSCtab;

chrome.browserAction.onClicked.addListener(function(tab) {
  main();
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.greeting === "sendDarenPage") {
    if (!darenPageUrl.includes(request.darenPageUrl)) {
      darenPageUrl = [...darenPageUrl, request.darenPageUrl];
    }
    if (request.islast) {
      //开始打开达人首页爬数据
      console.log(`开始打开达人首页爬数据.共有${darenPageUrl.length}个达人`)
      darenPageUrl.forEach((darenPage, ind) => {
        chrome.tabs.getSelected(null, async function(tab) {
          util.sleep(3000)
          var _id = tab.id;
          chrome.tabs.update(_id, {
            'url': darenPage,
            'selected': true
          });
          util.sleep(300)
        });
      })
    }
    sendResponse({
      jj: 'kjdsjfd'
    })
  }
  if (request.greeting == "postDarenData") {
    $.ajax({
      url: config.willbeServer + '/tb/v/syncVTaskDetail.wb',
      type: 'post',
      data: request.data,
      success: function(res) {
        console.log('post 达人首页数据 结果：' + res)
      }
    })
  }
  if (request.greeting == 'VSCmission') {
    if (VSCpage > 1) {
      util.sleep(1000)
    }
    chrome.tabs.getSelected(null, function(tab) {
      if (!VSCtab) {
        VSCtab = tab.id;
      }
      getDarenId(VSCpage, VSCpagesize).then((data) => {
        data.result.list.forEach(async (item, key) => {
          let needTurnpage = (key == (data.result.list.length - 1));
          // console.log('needTurnpage', needTurnpage)
          // console.log('each',key,needTurnpage,key == data.result.list.length - 1)

          let initParam = {
            darenId: item.darenId,
            darenName: item.darenName,
            vUrl: ''
          }
          let initFans = {
            darenId: item.darenId,
          }
          let sevenDays = {
            darenId: item.darenId,
            statType: 1
          }
          let thirtyDays = {
            darenId: item.darenId,
            statType: 2
          }
          let ninetyDays = {
            darenId: item.darenId,
            statType: 3
          }

          // console.log('daren id:'+item.darenId)
          let darenMain = await getDarenMain(item.darenId);
          if (darenMain) {
            initParam.fansCount = darenMain ? darenMain.fansCount : 0
            initParam.agencyName = darenMain && darenMain.darenAgency && darenMain.darenAgency.agencyName ? darenMain.darenAgency.agencyName : 0
            initParam.agencyUrl = darenMain && darenMain.darenAgency && darenMain.darenAgency.agencyID ? `https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.6a6f6b6fpgjIgW&userId=${darenMain.darenAgency.agencyID}` : ""
            initParam.scoreDarenCapacity = darenMain ? darenMain.darenScore : 0
            initParam.orderTakingRate = darenMain && darenMain.darenMissionData && darenMain.darenMissionData.receiveRate ? darenMain.darenMissionData.receiveRate : ""
            initParam.orderTakingResponseTime = darenMain && darenMain.darenMissionData && darenMain.darenMissionData.responseTime ? darenMain.darenMissionData.responseTime : ""
            initParam.serviceTotalCustomer = darenMain && darenMain.darenMissionData && darenMain.darenMissionData.cooperateSellerCount ? darenMain.darenMissionData.cooperateSellerCount : 0
            initParam.serviceTotalQuantity = darenMain && darenMain.darenMissionData && darenMain.darenMissionData.completeMission ? darenMain.darenMissionData.completeMission : ""
            initParam.serviceType = darenMain && darenMain.darenMissionData && darenMain.darenMissionData.servType ? darenMain.darenMissionData.servType : ""
            initParam.serviceDomain = darenMain ? darenMain.area : 0

            initParam.introduction = ""
            if (darenMain && darenMain.desc) {
              if (darenMain.desc.match(/^{(.*)}$/)) {
                for (let item of JSON.parse(darenMain.desc).blocks) {
                  initParam.introduction += item.text;
                }
              } else {
                initParam.introduction += darenMain.desc
              }
            } else {
              console.log(key + " unexpected in json")
            }

            initParam.identityType = "" // todo : not founded this item
            initParam.serviceScore = darenMain && darenMain.darenMissionData && darenMain.darenMissionData.avgScore ? darenMain.darenMissionData.avgScore : ""
            initParam.orderTakingFinishRate = darenMain && darenMain.darenMissionData && darenMain.darenMissionData.completeRate ? darenMain.darenMissionData.completeRate : "";

            let darenContent7 = await getDarenContent(item.darenId);

            initParam.contentPub7Days = darenContent7.result && darenContent7.result.publish ? darenContent7.result.publish : 0;
            initParam.contentBrowse7Days = darenContent7.result && darenContent7.result.text_pv ? darenContent7.result.text_pv : 0;
            initParam.contentGuide7Days = darenContent7.result && darenContent7.result.ipv ? darenContent7.result.ipv : 0;
            initParam.contentLiveBrowse7Days = darenContent7.result && darenContent7.result.live_pv ? darenContent7.result.live_pv : 0;
            initParam.contentVideoBrowse7Days = darenContent7.result && darenContent7.result.video_pv ? darenContent7.result.video_pv : 0;

            // sevenDays.statDate = util.getDateRange(7);
            sevenDays.contentPub = darenContent7.result && darenContent7.result.publish ? darenContent7.result.publish : 0;
            sevenDays.contentBrowse = darenContent7.result && darenContent7.result.text_pv ? darenContent7.result.text_pv : 0;
            sevenDays.contentGuide = darenContent7.result && darenContent7.result.ipv ? darenContent7.result.ipv : 0;
            sevenDays.contentLiveBrowse = darenContent7.result && darenContent7.result.live_pv ? darenContent7.result.live_pv : 0;
            sevenDays.contentVideoBrowse = darenContent7.result && darenContent7.result.video_pv ? darenContent7.result.video_pv : 0;

            let darenContent30 = await getDarenContent(item.darenId, 30);
            initParam.contentPub30Days = darenContent30.result && darenContent30.result.publish ? darenContent30.result.publish : 0;
            initParam.contentBrowse30Days = darenContent30.result && darenContent30.result.text_pv ? darenContent30.result.text_pv : 0;
            initParam.contentGuide30Days = darenContent30.result && darenContent30.result.ipv ? darenContent30.result.ipv : 0;
            initParam.contentLiveBrowse30Days = darenContent30.result && darenContent30.result.live_pv ? darenContent30.result.live_pv : 0;
            initParam.contentVideoBrowse30Days = darenContent30.result && darenContent30.result.video_pv ? darenContent30.result.video_pv : 0;

            // thirtyDays.statDate = util.getDateRange(30);
            thirtyDays.contentPub = darenContent30.result && darenContent30.result.publish ? darenContent30.result.publish : 0;
            thirtyDays.contentBrowse = darenContent30.result && darenContent30.result.text_pv ? darenContent30.result.text_pv : 0;
            thirtyDays.contentGuide = darenContent30.result && darenContent30.result.ipv ? darenContent30.result.ipv : 0;
            thirtyDays.contentLiveBrowse = darenContent30.result && darenContent30.result.live_pv ? darenContent30.result.live_pv : 0;
            thirtyDays.contentVideoBrowse = darenContent30.result && darenContent30.result.video_pv ? darenContent30.result.video_pv : 0;

            let darenContent90 = await getDarenContent(item.darenId, 90);
            initParam.contentPub90Days = darenContent90.result && darenContent90.result.publish ? darenContent90.result.publish : 0;
            initParam.contentBrowse90Days = darenContent90.result && darenContent90.result.text_pv ? darenContent90.result.text_pv : 0;
            initParam.contentGuide90Days = darenContent90.result && darenContent90.result.ipv ? darenContent90.result.ipv : 0;
            initParam.contentLiveBrowse90Days = darenContent90.result && darenContent90.result.live_pv ? darenContent90.result.live_pv : 0;
            initParam.contentVideoBrowse90Days = darenContent90.result && darenContent90.result.video_pv ? darenContent90.result.video_pv : 0;

            // ninetyDays.statDate = util.getDateRange(90);
            ninetyDays.contentPub = darenContent90.result && darenContent90.result.publish ? darenContent90.result.publish : 0;
            ninetyDays.contentBrowse = darenContent90.result && darenContent90.result.text_pv ? darenContent90.result.text_pv : 0;
            ninetyDays.contentGuide = darenContent90.result && darenContent90.result.ipv ? darenContent90.result.ipv : 0;
            ninetyDays.contentLiveBrowse = darenContent90.result && darenContent90.result.live_pv ? darenContent90.result.live_pv : 0;
            ninetyDays.contentVideoBrowse = darenContent90.result && darenContent90.result.video_pv ? darenContent90.result.video_pv : 0;


            let qryFans = await getQryFans(item.darenId);
            initFans = Object.assign({}, initFans, qryFans)

            await postVmission(initParam, initFans, sevenDays, thirtyDays, ninetyDays, needTurnpage)
          } else if (needTurnpage) {

            if (VSCpage < VSCtotalpage) {
              VSCpage++;
              chrome.tabs.sendRequest(VSCtab, {
                greeting: "vm-turnpage",
                page: VSCpage
              })
            } else if (VSCpage == VSCtotalpage) {
              VSCpage = 1;
              VSCtotalpage = -1;
            }
          }

        })
      }).catch((data) => {
        console.log('getDarenId error', data)
      })
    })

  }
  if (request.greeting == 'VSCdarenIdmission') {

  }
})

//获取抓取v任务的达人id
function getAllVTaskDarenIds(page) {
  let _time = Math.random() * (2000 - 200) + 200
  util.sleep(_time)
  var _page = page || 1;
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: config.willbeServer + '/tb/v/getAllVTaskDarenIds.wb?page=' + _page + '&pageSize=500',
      beforeSend: function(XMLHttpRequest) {
        XMLHttpRequest.setRequestHeader("token", config.token);
      },
      success: function(res) {
        resolve(res);
      }
    })
  })
}


//获取所有未抓取达人数据的文章列表
function getDarenArticleUrl(page) {
  var _page = page || 1;
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `${config.willbeServer}/tb/front/getDarenArticleUrl.wb?page=${_page}&pageSize=20`,
      beforeSend: function(XMLHttpRequest) {
        XMLHttpRequest.setRequestHeader("token", config.token);
      },
      success: function(res) {
        resolve(res);
      }
    })
  })
}

async function main() {
  // vFunc()
  fronpageFunc();
}

async function fronpageFunc() {
  //首页达人信息
  let pageOneArtList = [];
  let otherPageList = [];
  let articleList = [];
  let articleAutherPages = [];
  let articleUrles = await getDarenArticleUrl();
  articleList = [...articleList, ...articleUrles.result.list];
  //总页数大于1页做翻页处理
  if (articleUrles.result.maxPage > 1) {
    console.log('turnPage')
    for (let i = 2; i <= articleUrles.result.maxPage; i++) {
      var pageData = await getDarenArticleUrl(i);
      articleList = [...articleList, ...pageData.result.list];
    }
  }
  //浏览器第一次刷新页面时，没法取得这页面的达人首页地址，加个一个第一项就可以 完整取得达人地址
  articleList.splice(1, 0, articleList[0]);

  articleList.forEach((art, ind) => {
    // articleAutherPages = [...articleAutherPages, art.url];
    chrome.tabs.getSelected(null, function(tab) {
      util.sleep(3000)
      var _id = tab.id;
      chrome.tabs.update(_id, {
        'url': art.url,
        'selected': true
      });
      chrome.tabs.sendRequest(_id, {
        greeting: "getArctilUrl",
        isLast: articleList.length == ind + 1
      }, function(response) {
        // console.log('authorPageUrl',)
      });
    });
  })
  return;
}

async function vFunc() {
  //V任务
  // let darenIdList=[];
  var darenIds = await getAllVTaskDarenIds();

  darenIds.result.list.forEach(async (idItem, ind) => {
    let postParam = {};
    let darenrResult = null;
    let _introduction = ""; //自我简介
    await $.ajax({
      url: 'https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId=' + idItem.userId,
      success: function(result) {
        result = JSON.parse(result);
        darenrResult = Object.assign({}, result);
      }
    })
    if (darenrResult.data.desc) {
      let descObj = JSON.parse(darenrResult.data.desc);
      descObj.blocks.forEach((desc, ind) => {
        if (desc.text) {
          _introduction += desc.text
        }
      })
    }
    // console.log('darenrResult-----',darenrResult);
    postParam.darenId = idItem.userId;
    postParam.darenName = darenrResult.data.darenNick;
    postParam.fansCount = darenrResult.data.fansCount;
    postParam.agencyName = darenrResult.data.darenAgency.agencyName; //机构
    postParam.agencyUrl = 'https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.14c46b6fNZot7a&userId=' + darenrResult.data.darenAgency.agencyID;
    postParam.vUrl = 'https://v.taobao.com/v/home/?spm=a21xh.8861523.801.1.5f024accJ0p9KH&userId=' + idItem.userId;
    postParam.scoreDarenCapacity = darenrResult.data.darenScore;
    postParam.orderTakingRate = darenrResult.data.darenMissionData.receiveRate + "%";
    postParam.orderTakingResponseTime = darenrResult.data.darenMissionData.responseTime;
    postParam.serviceTotalCustomer = darenrResult.data.darenMissionData.cooperateSellerCount;
    postParam.serviceTotalQuantity = darenrResult.data.darenMissionData.completeMission;
    postParam.serviceType = darenrResult.data.darenMissionData.servType;
    postParam.serviceDomain = darenrResult.data.userId;
    postParam.introduction = _introduction;
    postParam.identityType = '';
    postParam.serviceScore = darenrResult.data.darenMissionData.avgScore;
    postParam.orderTakingFinishRate = darenrResult.data.darenMissionData.completeRate + "%";
    await $.ajax({
      url: config.willbeServer + '/tb/v/syncVTaskDetail.wb',
      beforeSend: function(XMLHttpRequest) {
        XMLHttpRequest.setRequestHeader("token", config.token);
      },
      type: 'post',
      data: postParam,
      success: function(res) {
        console.log('post', res)
      }
    })
    util.sleep(Math.random() * (800 - 200) + 200);
  })
  return
  // darenIdList = [...darenIdList,...darenIds.result.list];

  //总页数大于1页做翻页处理
  if (darenIds.result.maxPage > 1) {
    for (var i = 1; i <= darenIds.result.maxPage; i++) {
      // for(var i=2; i<=20;i++){
      var pageData = await getAllVTaskDarenIds(i);
      pageData.result.list.forEach(async (idItem, ind) => {
        let postParam = {};
        let darenrResult = null
        await $.ajax({
          url: 'https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId=' + idItem.userId,
          success: function(result) {
            result = JSON.parse(result);
            darenrResult = Object.assign({}, result);
          }
        })
        postParam.darenId = idItem.userId;
        postParam.darenName = darenrResult.data.darenNick;
        postParam.fansCount = darenrResult.data.fansCount;
        postParam.agencyName = darenrResult.data.darenAgency.agencyName; //机构
        postParam.agencyUrl = 'https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.14c46b6fNZot7a&userId=' + darenrResult.data.darenAgency.agencyID;
        postParam.vUrl = '';
        postParam.scoreDarenCapacity = darenrResult.data.darenScore;
        postParam.orderTakingRate = darenrResult.data.darenMissionData.receiveRate + "%";
        postParam.orderTakingResponseTime = darenrResult.data.darenMissionData.responseTime;
        postParam.serviceTotalCustomer = darenrResult.data.darenMissionData.cooperateSellerCount;
        postParam.serviceTotalQuantity = darenrResult.data.darenMissionData.completeMission;
        postParam.serviceType = darenrResult.data.darenMissionData.servType;
        postParam.serviceDomain = darenrResult.data.userId;
        postParam.introduction = '';
        postParam.identityType = '';
        postParam.serviceScore = darenrResult.data.darenMissionData.avgScore;
        postParam.orderTakingFinishRate = darenrResult.data.darenMissionData.completeRate + "%";
        await $.ajax({
          url: config.willbeServer + '/tb/v/syncVTaskDetail.wb',
          beforeSend: function(XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("token", config.token);
          },
          type: 'post',
          data: postParam,
          success: function(res) {
            console.log('post', res)
          }
        })
        // util.sleep(Math.random()*(2000-200)+200)
        // console.log('postParam',postParam)
      })
      if (i == darenIds.result.maxPage) {
        console.log('v task done, maxPage is ' + darenIds.result.maxPage)
      }
    }
  } else {
    console.log('v task done, maxPage is 1')
  }
}

// VSC mission function
let getDarenId = (page = 1, pageSize = 20) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${config.willbeServer}/tb/v/getAllVTaskDarenIds.wb`,
      headers: {
        token: VSCtoken
      },
      // async:false,
      data: {
        page,
        pageSize
      },
      success: function(data) {
        if (data.status == 0) {
          if (VSCtotalpage <= 0) {
            VSCtotalpage = data.result.maxPage
          }
          resolve(data);
        } else {
          VSCtotalpage = -1;
          reject(data.msg)
        }
      },
      erroe: function(data) {
        VSCtotalpage = -1;
        reject(data.msg)
      }
    })
  })
}
let getDarenMain = darenId => {
  return new Promise((resolve, reject) => {
    try {
      $.ajax({
        url: `https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId=${darenId}&spm=a21xh.11312869.industryArea_0_30008_darenCol.2.75a8627fK87XrV&_ksTS=1550107520153_17`,
        // async:false,
        success(data) {
          data = JSON.parse(data); //jsonp 字符串
          if (data.status == 0) {
            resolve(data.data)
          } else {
            resolve(null)
          }
        },
        error(data) {
          resolve(null)
        }
      })
    } catch (err) {
      reject(err)
    }
  })
}
let getDarenContent = (darenId, day = 7) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://v.taobao.com/micromission/GetDarenContentStatistic.do?userId=${darenId}&cycle=${day}&_ksTS=1548233873983_143`,
      // async:false,
      success(data) {
        data = JSON.parse(data); //jsonp 字符串
        if (data.status == 0) {
          resolve(data.data)
        } else {
          reject(data.msg)
        }
      },
      error(data) {
        reject(data.msg)
      }
    })
  })
}
let postVmission = (param, fasnObj, sevenDays, thirtyDays, ninetyDays, turnpage = false) => {
  util.sleep(500)
  $.ajax({
    url: `${config.willbeServer}/tb/v/syncVTaskDetail.wb`,
    type: 'post',
    async: false,
    headers: {
      token: VSCtoken,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: param,
    success(response) {
      // console.log(response)
    }
  })
  util.sleep(500)
  $.ajax({
    url: `${config.willbeServer}/tb/v/syncVTaskFans.wb`,
    type: 'post',
    async: false,
    headers: {
      token: VSCtoken,
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(fasnObj),
    success(response) {
      // console.log(response)
    }
  })
  util.sleep(500)
  $.ajax({
    url: `${config.willbeServer}/tb/v/syncVTaskStat.wb`,
    type: 'post',
    async: false,
    headers: {
      token: VSCtoken,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: sevenDays,
    success(response) {
      // console.log(response)
    }
  })
  util.sleep(500)
  $.ajax({
    url: `${config.willbeServer}/tb/v/syncVTaskStat.wb`,
    type: 'post',
    async: false,
    headers: {
      token: VSCtoken,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: thirtyDays,
    success(response) {
      // console.log(response)
    }
  })
  util.sleep(500)
  $.ajax({
    url: `${config.willbeServer}/tb/v/syncVTaskStat.wb`,
    type: 'post',
    async: false,
    headers: {
      token: VSCtoken,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: ninetyDays,
    success(response) {
      // console.log('syncVTaskStat response', turnpage, VSCpage, VSCtotalpage)
    },
    error() {
      // console.log('skjdaldjlfkl')
    }
  })
  if (turnpage && VSCpage < VSCtotalpage) {
    VSCpage++;
    chrome.tabs.sendRequest(VSCtab, {
      greeting: "vm-turnpage",
      page: VSCpage
    })
  } else if (turnpage && VSCpage == VSCtotalpage) {
    VSCpage = 1;
    VSCtotalpage = -1;
  }
}
let getQryFans = darenId => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://v.taobao.com/micromission/daren/qry_fans_portrait.do?userId=${darenId}&_ksTS=1548399407613_101`,
      // async:false,
      success(data) {
        data = JSON.parse(data);
        if (data.status == 0) {
          resolve(data.data.fansFeature)
        } else {
          reject(data.msg)
        }
      },
      error(data) {
        reject(data.msg)
      }
    })
  })
}

// VSC mission functio -- get daren id function
let mainAnchor = (cateType, fansCount, role, currentPage = 1) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://v.taobao.com/micromission/req/selectCreatorV3.do`,
      data: {
        cateType,
        fansCount,
        currentPage,
        role,
        _ksTS: '1550732344164_101',
        _output_charset: 'UTF-8',
        _input_charset: 'UTF-8'
      },
      success(res) {
        res = JSON.parse(res)
        if (res.status == 0) {
          resolve(res.data)
        } else {
          resolve(null)
        }
      },
      error() {
        resolve(null)
      }
    })
  })
}
let vedioDaren = (cateType,videoCateType, currentPage = 1)=>{
  return new Promise((resolve, reject) => {
    let param = {
      cateType,
      videoCateType,
      currentPage,
      _ksTS: '1551253834204_269',
      _output_charset: 'UTF-8',
      _input_charset: 'UTF-8'
    };
    if(!videoCateType){
      delete param.videoCateType
    }
    $.ajax({
      url: `https://v.taobao.com/micromission/req/selectCreatorV3.do`,
      data: param,
      success(res) {
        res = JSON.parse(res)
        if (res.status == 0) {
          resolve(res.data)
        } else {
          resolve(null)
        }
      },
      error() {
        resolve(null)
      }
    })
  })
}
let tuwenDaren = (cateType, fansCount, role, channelName,currentPage = 1)=>{
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://v.taobao.com/micromission/req/selectCreatorV3.do`,
      data: {
        cateType,
        fansCount,
        currentPage,
        role,
        channelName,
        _ksTS: '1551259112356_465',
        _output_charset: 'UTF-8',
        _input_charset: 'UTF-8'
      },
      success(res) {
        res = JSON.parse(res)
        if (res.status == 0) {
          resolve(res.data)
        } else {
          resolve(null)
        }
      },
      error() {
        resolve(null)
      }
    })
  })
}
let activityDaren = (subjectId, currentPage = 1,pageSize=30) => {
  return new Promise((resolve,reject)=>{
    $.ajax({
      url:'https://v.taobao.com/micromission/select_micro_mission_subject_daren_v2.do',
      data:{
        subjectId:subjectId,
        page:currentPage,
        pageSize:pageSize,
        _ksTS: '1551321913629_31',
        _input_charset: 'utf-8',
        _output_charset: 'utf-8'
      },
      success(res) {
        res = JSON.parse(res)
        if (res.status == 0) {
          resolve(res.data)
        } else {
          resolve(null)
        }
      },
      error() {
        resolve(null)
      }
    })
  })
}
let postDarenData=(darenPageData)=>{
  darenPageData.forEach(item=>{
    $.ajax({
      url:`${config.willbeServer}/tb/v/syncSingleRecordDarenIdsAndName.wb`,
      type:'post',
      async:false,
      headers: {
        token: VSCtoken
      },
      data:{darenId:item.userId,darenName:item.nick},
      success(data){
        console.log('k',data)
      }
    })
  })

}
//获取直播服务的达人数据
let getAnchorData = async () => {
  let interfaceParamList = [];
  darenCateTypeList.forEach(async (darenCateType) => {
    darenFansCountList.forEach(async (darenFansCount) => {
      darenRoleList.forEach(async (darenRole) => {
        interfaceParamList.push([darenCateType, darenFansCount, darenRole])
        // console.log(darenCateType, darenFansCount, darenRole)
      })
    })
  })
  console.log('darenCateType, darenFansCount, darenRole', interfaceParamList)

  for (let ind = 0; ind < interfaceParamList.length; ind++) {
    await forEachMainAnchor(interfaceParamList[ind][0], interfaceParamList[ind][1], interfaceParamList[ind][2]);
  }

  // index++;
  // forEachMainAnchor(interfaceParamList[index][0], interfaceParamList[index][1], interfaceParamList[index][2]);

}
let forEachMainAnchor = async (cateType, fansCount, role) => {
  let data = await mainAnchor(cateType, fansCount, role); //先运行一页，取得总页数
  let totalPage = data.totalCounts?Math.ceil(data.totalCounts / 20):0;
  // util.sleep(30);
  data.result&&postDarenData(data.result)
  // console.log('mock post', 'totalPage=' + totalPage, 'page=1', cateType, fansCount, role,data )
  if (totalPage > 1) {
    for (let page = 2; page <= totalPage; page++) {
      let data = await mainAnchor(cateType, fansCount, role, page);
      data.result&&postDarenData(data.result)
      // util.sleep(30);
      // console.log('mock post,page=' + page, cateType, fansCount, role, )
    }
  }
}
// getAnchorData();//trigger
//获取视频服务的达人数据
let forEachVedio = async (vedioDataItem)=>{
  let data = await vedioDaren(vedioDataItem.cateType,vedioDataItem.vedioCateType||'');
  // console.log(data)
  let totalPage = data.totalCounts?Math.ceil(data.totalCounts / 20):0;
  // console.log('page=',totalPage)
  data.result&&postDarenData(data.result)
  if (totalPage > 1) {
    for (let page = 2; page <= totalPage; page++) {
      let data = await vedioDaren(vedioDataItem.cateType,vedioDataItem.vedioCateType||'', page);
      data.result&&postDarenData(data.result)
      // console.log('mock post,page=' + page, cateType, fansCount, role, )
    }
  }
}
let getVedioData = async (vedioCateType,cateType)=>{
  // console.log(vedioCateType,cateType)
  let vedioDataList = [];//条件组合 List
  cateType.forEach(item=>{
      if(item=='602'){ // only 哇哦内容型视频 has attribute vedioCateType
        vedioCateType.forEach(vedioCata=>{
          vedioDataList.push({cateType:item,vedioCateType:vedioCata})
        })
      }else{
        vedioDataList.push({cateType:item})
      }
  })
  for(let item of vedioDataList){
    let data = await forEachVedio(item)
  }
}
// getVedioData(vedioCateType,cateType);//trigger
//获取图文服务的达人数据
let forEachTuwen = async (tuwenDataItem)=>{
  let data = await tuwenDaren(tuwenDataItem.cateType,tuwenDataItem.fansCount,tuwenDataItem.role,tuwenDataItem.channelName);
  let totalPage = data.totalCounts?Math.ceil(data.totalCounts / 20):0;
  data.result&&postDarenData(data.result)
  if (totalPage > 1) {
    for (let page = 2; page <= totalPage; page++) {
      let data = await tuwenDaren(tuwenDataItem.cateType,tuwenDataItem.fansCount,tuwenDataItem.role,tuwenDataItem.channelName, page);
      data.result&&postDarenData(data.result)
      // console.log('mock post,page=' + page, cateType, fansCount, role, )
    }
  }
}
let getTuwenData = async (cateType,fansCount,role,channelName)=>{
  let tuwenDataList = [];//条件组合 List
  cateType.forEach(item=>{
    fansCount.forEach(fansCountItem=>{
      role.forEach(roleItem=>{
        channelName.forEach(channelNameItem=>{
          tuwenDataList.push({cateType:item,fansCount:fansCountItem,role:roleItem,channelName:channelNameItem})
        })
      })
    })
  })
  for(let item of tuwenDataList){
    let data = await forEachTuwen(item)
  }
}
// getTuwenData(TWCateTypeList,darenFansCountList,darenRoleList,darenChannel); //trigger
//获取活动服务的达人数据
let getSubjectData=(page=1,pageSize=12)=>{
  return new Promise((resolve,reject)=>{
    $.ajax({
      url:'https://v.taobao.com/micromission/subjectPageV2.do',
      data:{
        tabKey:0,
        pageSize:pageSize,
        current_page:page,
        channel: '全部',
        subject_scene: '全部',
        _ksTS: '1551321708603_255',
        _input_charset: 'utf-8',
        _output_charset: 'UTF-8'
      },
      success(data){
        data=JSON.parse(data);
        if(data.status==0){
            let {subjects,total,pageSize}=data.data
            resolve({subjects,total,pageSize})
          }else{
            resolve(null)
          }
      },
      error(err){
        console.log('error:',err)
        resolve(null)
      }
    })
  })
}
let getSubjectIdList = async ()=>{
  let totalPages=1;
  let subjectIdList=[];

  let data = await getSubjectData();
  totalPages = Math.ceil(data.total/data.pageSize)
  data.subjects.forEach(item=>{
    subjectIdList.push(item.id)
  })

  for(let page=2;page<=totalPages;page++){
    let data = await getSubjectData(page);
    data.subjects.forEach(item=>{
      subjectIdList.push(item.id)
    })
  }
  return new Promise((resolve,reject)=>{
    resolve(subjectIdList)
  })
}

let getActivityDarenList = async ()=>{
  getSubjectIdList().then((data)=>{
    let page=1;
    data.forEach(async item=>{
      let activity = await activityDaren(item,page,30);
      let totalPage = Math.ceil(activity.total/30);
      activity.dataList && postDarenData(activity.dataList);
      if(totalPage>page){
        for(let p=2; p<=totalPage;p++){
          let activity = await activityDaren(item,p,30);
          activity.dataList && postDarenData(activity.dataList);
        }
      }
    })
  })
}

getAnchorData();//trigger
getVedioData(vedioCateType,cateType);//trigger
getTuwenData(TWCateTypeList,darenFansCountList,darenRoleList,darenChannel); //trigger
getActivityDarenList();//trigger
