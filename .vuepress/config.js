module.exports = {
    title: 'PoiCraft',
    description: 'PoiCraft Open Source Project',
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            description: 'PoiCraft 开源计划'
        },
    },
    themeConfig: {
        sidebarDepth: 2,
        repo: 'PoiCraft/PoiCraft_Open',
        smoothScroll: true,
        locales: {
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                repoLabel: '查看源码',
                lastUpdated: '最后更新于',
                sidebar: [
                    ['/', '主页'],
                    ['/timeline', '大事记'],
                    {
                        title: '使用的项目',
                        children: [
                            ['/depend/open', '使用的开源项目'],
                            ['/depend/close', '使用的闭源软件']
                        ]
                    }
                ]
            },
        },

    }
}