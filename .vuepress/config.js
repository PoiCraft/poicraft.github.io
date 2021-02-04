module.exports = {
    title: 'PoiCraft',
    description: 'PoiCraft Open Source Project',
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-cn',
            description: 'PoiCraft 开源计划'
        },
    },
    themeConfig: {
        sidebarDepth: 2,
        repo: 'PoiCraft/PoiCraft_About',
        editLinks: true,
        smoothScroll: true,
        locales: {
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                repoLabel: '查看源码',
                nav: [
                    { text: '大事记', link: '/timeline' },
                    { text: '手册', link: '/guide'},
                    { text: '相关项目', link: '/proj/' },
                    { text: '捐赠', link: '/donate'}
                ],
                sidebar: {
                    '/proj/': [
                        ['/proj/', '概述'],
                        {
                            title: '使用的项目',
                            children: [
                                ['/proj/depend/open', '使用的开源项目'],
                                ['/proj/depend/close', '使用的闭源软件']
                            ]
                        },
                        {
                            title: '衍生项目',
                            children: [
                                ['/proj/poi/bot', '机器人']
                            ]
                        }
                    ]
                }
            },
        },

    }
}
