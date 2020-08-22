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
        locales: {
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '最后更新于',
                sidebar: [
                    ['/', '主页'],
                ]
            },
        },

    }
}