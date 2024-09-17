const base = {
    get() {
        return {
            url : "http://localhost:8080/yiyuanhoutaiguanli/",
            name: "yiyuanhoutaiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yiyuanhoutaiguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医院后台管理系统"
        } 
    }
}
export default base
