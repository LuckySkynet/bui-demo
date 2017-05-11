BUI.use('common/main', function () {
    //方式一：直接在js中配置菜单数据
    //模块菜单
    // var config = [{
    //     id: 'menu', //模块编号
    //     //collapsed: true, //默认左侧菜单收缩
    //     homepage: 'code', //默认打开的主页
    //     menu: [{ //设置二级菜单：用于分类
    //         text: '首页内容',
    //         items: [ //三级菜单：用于显示页面
    //             {
    //                 id: 'code',
    //                 text: '首页代码',
    //                 href: 'main/menu.html',
    //                 closeable: false //设置不能关闭标签
    //             },
    //             {
    //                 id: 'c',
    //                 text: '标签页',
    //                 href: 'main/test.html'
    //             },
    //             {
    //                 id: 'd',
    //                 text: '窗口变化',
    //                 href: 'main/test.html'
    //             },
    //             {
    //                 id: 'e',
    //                 text: '首页资源文件',
    //                 href: 'main/test.html'
    //             },
    //             {
    //                 id: 'g',
    //                 text: '其他',
    //                 href: 'main/test.html'
    //             }
    //         ]
    //     }]
    // }, {
    //     id: 'menu2', //模块编号
    //     collapsed: true, //默认左侧菜单收缩
    //     homepage: 'code', //默认打开的主页
    //     menu: [{ //设置二级菜单：用于分类
    //         text: '搜索页面',
    //         items: [ //三级菜单：用于显示页面
    //             {
    //                 id: 'code',
    //                 text: '搜索首页',
    //                 href: 'main/menu.html',
    //                 closeable: false //设置不能关闭标签
    //             }
    //         ]
    //     }]
    // }];

    //方式二：访问JSON格式文件
    //1、通过ajax访问json数据
    $.getJSON("../data/config.json", function (data) {
        new PageUtil.MainPage({
            modulesConfig: data.config
        });
    })

    //2、通过fetch访问异步请求json
    // fetch('../data/config.json').then(res => {
    //     res.json().then(function (data) {
    //         new PageUtil.MainPage({
    //             modulesConfig: data.config
    //         })
    //     })
    // })
});