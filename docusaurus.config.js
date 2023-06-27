// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'XS\'S Blog',
    tagline: 'Never Knows Best',
    url: 'https://tonycody.github.io/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'tonycody', // Usually your GitHub org/user name.
    projectName: 'tonycody.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    plugins: ['@docusaurus/theme-live-codeblock'],
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {

                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    head: [
        ['script', {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5371920954002379',
            async: true,
            crossorigin: 'anonymous'
        }]
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            docs: {
                sidebar: {
                    hideable: true,
                },
            },
            announcementBar: {
                id: 'support_us',
                content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/tonycody">GitHub</a>',
                backgroundColor: '#fafbfc',
                textColor: '#091E42',
                isCloseable: true,
            },
            navbar: {
                title: 'XS\'S Blog',
                hideOnScroll: true,
                items: [
                    // {
                    //   type: 'search',
                    //   position: 'right',
                    // },
                    // {
                    //   href: 'https://github.com/messiahhh/blog',
                    //   label: 'GitHub',
                    //   position: 'right',
                    // },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                defaultLanguage: 'javascript',
            },
            colorMode: {
                respectPrefersColorScheme: true
            },
            algolia: {
                // The application ID provided by Algolia
                appId: 'BWG0DEIDEP',

                // Public API key: it is safe to commit it
                apiKey: 'd3f9fff64e1510e7299229fb32996203',

                indexName: 'messiahhh',
            }
        }),
};

module.exports = config;
