// pages/cart/cart.js
var app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsdata: null,
    total: 0.0,
    totalnum: 0
  },

  buy: function(){
    if (app.globalData.balance >= this.data.total){
      app.globalData.balance -= this.data.total;
      for(var j=0; j<4; j++){
        app.globalData.mer[j]["number"]=0;
      }
      wx.navigateTo({
        url: '../success/success?t=成功支付￥'+String(this.data.total)+'&last=../cart/cart'
      })
    }
    else{
      wx.navigateTo({
        url: '../failure/failure'+"?t=余额不足，请先充值"
      })
    }
  },

  zero: function(){
    app.globalData.total = 0;
    for(var i=0; i<4; i++){
      app.globalData.mer[i]["number"]=parseInt(0);
    }
    this.onShow()
  },

  detail: function(e){
    var id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../mer/mer?id='+String(id),
    })
  },

  addmer: function(e){
    var id=e.currentTarget.dataset.id;
    app.globalData.mer[id]["number"]++;
    this.onShow();
  },

  minmer: function(e){
    var id=e.currentTarget.dataset.id;
    app.globalData.mer[id]["number"]--;
    this.onShow();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goodsdata=app.globalData.mer
    this.setData({
      goodsdata: goodsdata
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var goodsdata=app.globalData.mer
    var total=0;
    var n=0;
    var p=0;
    var allnum=0;
    for(var j=0; j<4; j++){
      n=parseInt(app.globalData.mer[j]["number"]);
      p=parseFloat(app.globalData.mer[j]["price"]);
      allnum+=n;
      total+=n*p
    }
    app.globalData.total=total;
    app.globalData.allnum=allnum;
    this.setData({
      goodsdata: goodsdata,
      total: total,
      allnum: allnum
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})