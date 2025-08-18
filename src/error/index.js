import defaultConfig from "../config";

export function errorMonitor() {
    // 监听资源错误
    window.addEventListener('error', (event) => {
        console.log('监听资源错误', event);
    },{capture:true});
    // 监听promise报错
    window.addEventListener('unhandledrejection', (event) => {
        console.log('监听promise报错', event.reason);
    });
    // vue中的相关错误
    if(defaultConfig.vueConfig?.app){
        defaultConfig.vueConfig.app.config.errorHandler = (err, instance, info) => {
            console.log("监听vue中的报错", err, instance, info)
        }
    }

}