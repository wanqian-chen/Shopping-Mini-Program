// pages/success/success.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: null,
    last: ''
  },

  menu: function(){
    wx.switchTab({
      url: '../index/index',
    })
  },

  last: function(){
    wx.switchTab({
      url: this.data.last,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var text=options.t;
    var last=options.last;
    this.setData({
      text: text,
      last: last
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