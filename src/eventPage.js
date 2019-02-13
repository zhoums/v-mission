// 入口
import config from './config'
import util from './util'

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
let VSCpagesize = 200;
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
    // getDarenMain('2662685830')
    // getDarenMain('2662685830')
    // return;
    chrome.tabs.getSelected(null, function(tab) {
      if (!VSCtab) {
        VSCtab = tab.id;
      }
      getDarenId(VSCpage, VSCpagesize).then((data) => {

        console.log('getid res', VSCpage, data);
        data.result.list.forEach(async (item, key) => {
          let needTurnpage = (key == (data.result.list.length - 1));
          if (VSCpage == 8) {
            console.log('needTurnpage88888', key, needTurnpage)
          }
          // console.log('needTurnpage', needTurnpage)
          // console.log('each',key,needTurnpage,key == data.result.list.length - 1)
          let daren_main = false,
            qry_fans = false,
            get_price = false,
            getDrCon7 = false,
            getDrCon30 = false,
            getDrCon90 = false;
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
          if (VSCpage == 8 && key == 19) {
            console.log('8&&19=====', key, needTurnpage)
          }
          let darenMain = null;
          darenMain = await getDarenMain(item.darenId);
          if (VSCpage == 8 && key == 19) {
            console.log('8&&19+++++', key, darenMain)
          }
          initParam.fansCount = darenMain.fansCount || 0
          initParam.agencyName = darenMain.darenAgency && darenMain.darenAgency.agencyName ? darenMain.darenAgency.agencyName : 0
          initParam.agencyUrl = darenMain.darenAgency && darenMain.darenAgency.agencyID ? `https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.6a6f6b6fpgjIgW&userId=${darenMain.darenAgency.agencyID}` : ""
          initParam.scoreDarenCapacity = darenMain.darenScore || 0
          initParam.orderTakingRate = darenMain.darenMissionData && darenMain.darenMissionData.receiveRate ? darenMain.darenMissionData.receiveRate : ""
          initParam.orderTakingResponseTime = darenMain.darenMissionData && darenMain.darenMissionData.responseTime ? darenMain.darenMissionData.responseTime : ""
          initParam.serviceTotalCustomer = darenMain.darenMissionData && darenMain.darenMissionData.cooperateSellerCount ? darenMain.darenMissionData.cooperateSellerCount : 0
          initParam.serviceTotalQuantity = darenMain.darenMissionData && darenMain.darenMissionData.completeMission ? darenMain.darenMissionData.completeMission : ""
          initParam.serviceType = darenMain.darenMissionData && darenMain.darenMissionData.servType ? darenMain.darenMissionData.servType : ""
          initParam.serviceDomain = darenMain.area || 0
          initParam.introduction = ""

          if (darenMain.desc) {
            if (darenMain.desc.match(/^{(.*)}$/)) {
              for (let item of JSON.parse(darenMain.desc).blocks) {
                initParam.introduction += item.text;
              }
            } else {
              initParam.introduction += darenMain.desc
            }
          } else {
            // console.log(key + " unexpected in json") test
          }

          initParam.identityType = "" // todo : not founded this item
          initParam.serviceScore = darenMain.darenMissionData && darenMain.darenMissionData.avgScore ? darenMain.darenMissionData.avgScore : ""
          initParam.orderTakingFinishRate = darenMain.darenMissionData && darenMain.darenMissionData.completeRate ? darenMain.darenMissionData.completeRate : "";

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
          console.log('postVmission begin')
          if (VSCpage == 8) {
            console.log('needTurnpage99999', initParam, initFans, sevenDays, thirtyDays, ninetyDays, needTurnpage, key)
          }
          await postVmission(initParam, initFans, sevenDays, thirtyDays, ninetyDays, needTurnpage, key)
        })
      }).catch((data) => {
        console.log('getDarenId error', data)
      })
    })

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
let getDarenId = (page = 1, pageSize = 1000) => {
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
        url: `https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId=${darenId}&_ksTS=1548232314754_17`,
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
          console.log('llllll', data)
          reject(data.msg)
        }
      })
    } catch (err) {
      console.log('errerrerrerr')
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
let postVmission = (param, fasnObj, sevenDays, thirtyDays, ninetyDays, turnpage = false, key) => {
  // $.ajax({
  //   url: `${config.willbeServer}/tb/v/syncVTaskDetail.wb`,
  //   type: 'post',
  //   async: false,
  //   headers: {
  //     token: VSCtoken,
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   data: param,
  //   success(response) {
  //     // console.log(response)
  //   }
  // })
  // $.ajax({
  //   url: `${config.willbeServer}/tb/v/syncVTaskFans.wb`,
  //   type: 'post',
  //   async: false,
  //   headers: {
  //     token: VSCtoken,
  //     'Content-Type': 'application/json'
  //   },
  //   data: JSON.stringify(fasnObj),
  //   success(response) {
  //     // console.log(response)
  //   }
  // })
  // $.ajax({
  //   url: `${config.willbeServer}/tb/v/syncVTaskStat.wb`,
  //   type: 'post',
  //   async: false,
  //   headers: {
  //     token: VSCtoken,
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   data: sevenDays,
  //   success(response) {
  //     // console.log(response)
  //   }
  // })
  // $.ajax({
  //   url: `${config.willbeServer}/tb/v/syncVTaskStat.wb`,
  //   type: 'post',
  //   async: false,
  //   headers: {
  //     token: VSCtoken,
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   data: thirtyDays,
  //   success(response) {
  //     // console.log(response)
  //   }
  // })
  // $.ajax({
  //   url: `${config.willbeServer}/tb/v/syncVTaskStat.wb`,
  //   type: 'post',
  //   async: false,
  //   headers: {
  //     token: VSCtoken,
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   data: ninetyDays,
  //   success(response) {
  //     console.log('syncVTaskStat response', turnpage, VSCpage, VSCtotalpage)
  //   },
  //   error() {
  //     console.log('skjdaldjlfkl')
  //   }
  // })
  console.log('test ii', VSCpage, VSCtotalpage, turnpage, key)
  if (turnpage && VSCpage < VSCtotalpage) {
    console.log('turn', turnpage, VSCpage, VSCtotalpage)
    VSCpage++;
    chrome.tabs.sendRequest(VSCtab, {
      greeting: "vm-turnpage",
      page: VSCpage
    })
  } else if (turnpage && VSCpage == VSCtotalpage) {
    console.log('turn ELSE', turnpage, VSCpage, VSCtotalpage)
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