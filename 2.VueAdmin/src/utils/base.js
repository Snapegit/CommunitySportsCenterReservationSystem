const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1p95h88y/",
            name: "springboot1p95h88y",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1p95h88y/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SpringBoot的小区运动中心预约管理系统的设计与实现"
        } 
    }
}
export default base
