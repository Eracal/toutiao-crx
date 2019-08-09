$('#notice').click(() => {
  chrome.notifications.create(null, {
    type: 'basic',
    iconUrl: 'img/logo.png',
    title: '（模拟）审查状态：',
    message: '当前状态为：审核中',
    requireInteraction: true
  });
})