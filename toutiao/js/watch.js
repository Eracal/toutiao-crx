$(document).ready(function () {
  
  chrome.runtime.sendMessage({
    msg: `开始运行`,
    status: 'run'
  });

  // 检查是否状态变更
  checkStatus()

  setInterval(() => {
    // 刷新
    window.location.reload()
  }, 20*60*1000)

});

$(window).on("unload", function(e) {
  chrome.runtime.sendMessage({
    msg: ` 退出页面`,
    status: 'stop'
  });
});


function checkStatus() {
  let time = 0
  let oTimer = setInterval(() => {

    let tagNode = $('.audit-state-tag')
    if (tagNode.length !== 0) {
      let text= tagNode.eq(0).text()
      sendNotification(text)
      clearInterval(oTimer)
    }

    // 防止头条后台更新后找不到节点
    time++
    if (time > 10) {
      chrome.runtime.sendMessage({
        msg: `找不到检测节点，到 Github 查看插件新版本`,
        status: `err`
      });
      clearInterval(oTimer)
    }
  }, 1000)
}

function sendNotification(text) {
  if (text !== '审核中') {
    // 创建一个简单的文本通知：
    chrome.runtime.sendMessage({
      msg: `当前状态为：${text}`,
      status: `well`
    }, function (response) {
    });
  }
}