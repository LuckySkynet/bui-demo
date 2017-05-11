$('#baidu').on('click', function () {
    if (top.topManager) {
        top.topManager.openPage({
            id: 'baidu',
            href: 'http://www.baidu.com',
            title: '百度页面'
        })
    }
})

$('#menu').on('click', function () {
    if (top.topManager) {
        top.topManager.openPage({
            id: 'code',
        })
    }
})

$('#test2').on('click', function () {
    if (top.topManager) {
        top.topManager.openPage({
            id: 'test2',
            href: 'main/test2.html',
            title: '未配置的页面'
        })
    }
})

$('#close1').on('click', function () {
    if (top.topManager) {
        top.topManager.closePage();
    }
})

$('#close2').on('click', function () {
    if (top.topManager) {
        top.topManager.closePage("test2")
    }
})

$('#close3').on('click', function () {
    if (top.topManager) {
        top.topManager.openPage({
            id: 'code',
            isClose: true
        })
    }
})