$(document).ready(function () {
  let time = 0
  let oTimer = setInterval(() => {

    let tagNode = $('.audit-state-tag')
    if (tagNode.length !== 0) {
      let text= tagNode.eq(0).text()
      chrome.runtime.sendMessage({
        msg: `开始检测审核状态是否变更，当前状态为：${text} `
      });
      clearInterval(oTimer)
    }

    time++
    if (time > 20) {
      chrome.runtime.sendMessage({
        msg: `找不到检测节点，到 Github 查看插件新版本`
      });
      clearInterval(oTimer)
    }
  }, 500)

  setInterval(() => {
    checkStatus()
    window.location.reload()
  }, 20*60*1000)
});

function checkStatus() {
  let tag = $('.audit-state-tag').eq(0)
  if (tag.text() !== '审核中') {
    // 创建一个简单的文本通知：
    chrome.runtime.sendMessage({
      msg: `当前状态为：${tag.text()}`
    }, function (response) {
    });
  }
}