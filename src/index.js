import { setConfig } from "./config";
import { errorMonitor } from "./error";


const monitor = {
  init(options) {
    console.log("前端监控启动",options);
    setConfig(options);
    errorMonitor(); //前端监控
  }

}
export default monitor;

