export default {
    // ==== DT-BootX Default Index Controller ==== //
    indexUsingGET: { method: 'get', url: `/` }, // 根目录Controller

    // ==== 智慧门店 Store Controller ==== //
    getManageOverViewDataUsingGET: { method: 'get', url: `/api/v1/shop/manage-overview-data` }, // 经营概览

    // ==== 智慧门店 - 导购分析 Guider Analysis Controller ==== //
    getGuiderMonthRankUsingGET: { method: 'get', url: `/api/v1/guider-analysis/month-rank` }, // 导购销售月排名
    getTodaySaleUsingGET: { method: 'get', url: `/api/v1/guider-analysis/today-sale` }, // 今日导购销售

    // ==== 智慧门店 - 引流分析 Drainage Analyse Controller ==== //
    getDrainageAnalyseDataUsingGET: { method: 'get', url: `/api/v1/drainage-analyse/drainage-analyse-data` }, // 游戏互动人数
    exportDrainageAnalyseDataUsingGET: { method: 'get', url: `/api/v1/drainage-analyse/drainage-analyse-data/export-excel` }, // 引流分析数据Excel导出
    getMutCntTrendUsingGET: { method: 'get', url: `/api/v1/drainage-analyse/get-interactiveAmount-trend` }, // 客流人数趋势
    getSaleMoneyAmountTrendUsingGET: { method: 'get', url: `/api/v1/drainage-analyse/get-saleMoneyAmount-trend` }, // 互动人数趋势

    // ==== 智慧门店 - 热力动线 Hot Area Controller ==== //
    queryHotLineUsingPOST: { method: 'post', url: `/api/v1/hotArea/hot-line` }, // 热力动线

    // ==== 智慧门店 - 逛店分析 In Store Analysis Controller ==== //
    queryAgeDistributeUsingGET: { method: 'get', url: `/api/v1/shop/in-shop-analysis/age-distribute` }, // 女性-年龄分布/男性-年龄分布
    exportProductBuyAnalysisUsingGET: { method: 'get', url: `/api/v1/shop/in-shop-analysis/export-product-buy-analysis` }, // 商品购买分析导出
    productBuyAnalysisUsingPOST: { method: 'post', url: `/api/v1/shop/in-shop-analysis/product-buy-analysis` }, // 商品购买分析

    // ==== 智慧门店-门店信息 Store Info Controller ==== //
    getShopInfoUsingGET: { method: 'get', url: `/api/v1/shop-info/shop` }, // getShopInfo

    // ==== 消费者概述 Cust Controller ==== //
    exportUserTagRatioUsingGET: { method: 'get', url: `/api/v1/cust/export-usertag-ratio` }, // 导出用户标签占比数据
    getAreaTreeUsingGET: { method: 'get', url: `/api/v1/cust/get-area-tree` }, // 获取区域树
    getTagClassUsingGET: { method: 'get', url: `/api/v1/cust/get-tags-class` }, // 获取用户标签类别
    getUserTagRatioUsingPOST: { method: 'post', url: `/api/v1/cust/get-usertag-ratio` }, // 获取用户标签占比

    // ==== 用户登录 User Login Controller ==== //
    userLoginUsingPOST: { method: 'post', url: `/api/v1/user/login` }, // 用户登录
    userLoginOutUsingGET: { method: 'get', url: `/api/v1/user/login-out` }, // 用户登出
    getUserInfoUsingGET: { method: 'get', url: `/api/v1/user/user-info` }, // 用户信息

    // ==== 首页看板 Board Controller ==== //
    getBoardDataUsingGET: { method: 'get', url: `/api/v1/board/get-board-data` }, // 获取首页看板核心数据
    getBoardSaleTrendUsingGET: { method: 'get', url: `/api/v1/board/get-board-sale-trend` }, // 获取首页销售流水趋势
    getBoardSSSGTrendUsingGET: { method: 'get', url: `/api/v1/board/get-board-sssg-trend` }, // 获取首页SSSG趋势

}