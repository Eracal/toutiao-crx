// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{

  chrome.notifications.create(null, {
    type: 'basic',
    iconUrl: 'img/logo.png',
    title: '审查状态：',
    message: request.msg,
    requireInteraction: true
  });
});