let count = 0
// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
  // status: run启动定时器 | err发生错误 | well状态变更 | stop退出页面
  if (request.status === 'well' || request.status === 'err') {
    chrome.notifications.create(null, {
      type: 'basic',
      iconUrl: 'img/logo.png',
      title: '审查状态：',
      message: request.msg,
      requireInteraction: true
    });
  }


  chrome.browserAction.setBadgeBackgroundColor({color: '#1ab21e'});
  if (request.status === 'run') {
    count++
    chrome.browserAction.setBadgeText({text: request.status});
  } else if (request.status === 'stop') {
    // 如果退出页面且计数器为 0， 则证明已经不存在任何检测页面，状态变更为 stop
    count--
    if (count === 0) {
      chrome.browserAction.setBadgeText({text: request.status});
    }
  }

  
});