
// 默认全局配置
const defaultConfig = {
    appId:"test",
    userId:"test",
    reportUrl: 'http://localhost:3000/report',
    env: 'dev',
    ua:navigator.userAgent,
    vueConfig:{
        app:null,
        router:null,
        store:null,
    }
}

export default defaultConfig;


export const setConfig = (config) => {
    Object.assign(defaultConfig,config)
}

