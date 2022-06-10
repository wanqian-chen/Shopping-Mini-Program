// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    Info: "加法",
    total: 0,
    allnum: 0,
    balance: 0.0,
    mer:[ {
      id: 0,
      title: "【天猫V榜推荐】Dell/戴尔27英寸4K显示器U2720QM台式电脑护眼显示屏HDR办公设计专业修图IPS屏幕升降",
      titleTwo: "95%DCI-P3 Type-C 90W反向充电 定制类产品",
      price: "4299.00",
      detail:  "证书编号：2019010903237942\n证书状态：有效\n产品名称：液晶显示器3C\n规格型号：U2720Q, U2720Qt, U2720QM：100-240V ~ 50/60Hz 2.5A (...\n产品名称：Dell/戴尔 U2720Q\n型号: U2720QM\n品牌: Dell/戴尔\n成色: 全新\n售后服务: 全国联保\n产地: 中国大陆\n屏幕尺寸: 27英寸\n屏幕比例: 16:9\n接口类型: HDMI DP USB 3.0 TYPE-C\n垂直可视角度: 178°\n面板类型: IPS\n平均亮度: 350cd/m^2\n分辨率: 3840*2160\n水平可视角度: 178°灰阶\n响应时间: 5毫秒",
      image: [ "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/379092568/O1CN0159eS0W1UqBn04yx0W_!!2-item_pic.png_360x360Q90.jpg_.webp",
      "https://img.alicdn.com/imgextra/i3/379092568/O1CN01HA6MT11UqBllKMGMs_!!379092568.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i2/379092568/O1CN01sn2WOu1UqBk7F85tW_!!379092568.jpg_430x430q90.jpg"],
      number: parseInt(0)
    },
    {
      id: 1,
      title: "AOC 27英寸4K显示器IPS高清10Bit屏幕U2790PQU/U273C设计办公绘图摄影2K升降32液晶电脑PS4外接显示屏幕壁挂",
      titleTwo: "4K高清★IPS面板★升降旋转",
      detail: "证书编号：2018010903049555\n证书状态：有效\n产品名称：液晶显示器3C\n规格型号：**27E1********、**27P1********、*Q27P1******** ...\n产品名称：AOC U2790PQU\n型号: U2790PQU\n品牌: AOC冠捷\n型号: U2790PQU\n成色: 全新\n产地: 中国大陆\n屏幕尺寸: 27英寸\n屏幕比例: 16:9\n接口类型: HDMI DP USB 3.0 \n音频面板类型: IPS\n分辨率: 3840*2160（4K）\n颜色分类: AOC U2790PQU (4K高清/IPS炫彩屏/可旋转升降） AOC U27N3C（4K高清/IPS炫彩屏/Type-c/接口/HDR技术）\n套餐类型: 官方标配\n生产企业: 福建捷联电子有限公司\n能效等级: 一级\n刷新率: 60Hz\n是否自带音箱: 是\n屏幕类型: LED\n上市时间: 2018-01-09\n能效备案号: 201710-14-1847-2457643120060\n保修期: 36个月",
      price: "2099.00",
      image: ["https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/1652528654/O1CN01M9qLNc2DnaExCVGly_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
      "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/1652528654/O1CN01eKaUzR2DnaD7TE5XH_!!1652528654.jpg_430x430q90.jpg"],
      number: parseInt(0)
    },
    {
      id: 2,
      title: "明基BL2480T显示器24英寸IPS屏幕莱茵认证爱护眼竖屏程序员电脑家用办公内置音箱台式旋转升降1080p高清",
      titleTwo: "竖屏编程更省心 莱茵认证爱眼 升降内置音箱",
      detail: "证书编号：2017010903020031\n证书状态：有效\n产品名称：彩色液晶显示器3C\n规格型号：GW2480**\n产品名称：明基 BL2480T\n型号: BL2480T\n品牌: 明基\n型号: BL2480T\n成色: 全新\n售后服务: 全国联保\n产地: 中国大陆屏幕\n尺寸: 23.8英寸\n屏幕比例: 16:9\n接口类型: HDMI VGA DP\n垂直可视角度: 178°\n面板类型: IPS\n平均亮度: 250cd/m^2\n分辨率: 1920*1080（全高清）\n水平可视角度: 178°\n灰阶响应时间: 5毫秒\n颜色分类: 黑色\n套餐类型: 官方标配\n生产企业: 明基\n是否触摸屏: 非触摸屏\n能效等级: 一级\n附加功能: 旋转升降 \n内置音箱刷新率: 60Hz\n是否自带音箱: 是\n屏幕类型: LCD\n保修期: 36个月\n曲率: 非曲面",
      price: "1249.00",
      image: ["https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/672165860/O1CN01sLyPsm1t9vdYG1owg_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
      "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/672165860/O1CN01Mc7CjP1t9vYdmq8Di_!!672165860.jpg_430x430q90.jpg"],
      number: parseInt(0)
    },
    {
      id: 3,
      title: "Redmi显示器27吋家用办公IPS全面屏电脑液晶屏幕电脑高清1080P",
      titleTwo: "天猫电器城 正快省新 闪电到家 超值包邮",
      price: "1049.00",
      detail: "证书编号：2020010903356994\n证书状态：有效产品\n名称：液晶显示器3C\n规格型号：RMMNT27NF：12VDC 2A (电源适配器：AD-0241200200CN-1)\n产品名称：Xiaomi/小米 Redmi 显示器...\n型号: Redmi 显示器 27英寸\n品牌: MIUI/小米\n型号: Redmi 显示器 27吋\n成色: 全新\n产地: 中国大陆\n屏幕尺寸: 27吋屏幕比例: 16:9\n接口类型: HDMI\n面板类型: IPS\n分辨率: 1920*1080（全高清）\n颜色分类: Redmi显示器27吋\n套餐类型: 官方标配\n生产企业: 小米\n能效等级: 无\n刷新率: 60Hz\n屏幕类型: LCD\n能效备案号: 无\n保修期: 12个月",
      image: ["https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/1714128138/O1CN01XACF0H29zFsGnC0yL_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
      "https://img.alicdn.com/imgextra/i4/1714128138/O1CN01AGGK6p29zFqRjcWgB_!!1714128138.jpg_430x430q90.jpg"],
      number: parseInt(0)
  }]
  },
  add:function(a,b){
    return a+b
  }
})
