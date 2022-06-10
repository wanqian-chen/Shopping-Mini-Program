// pages/mer/mer.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    title: null,
    titleTwo: null,
    price: null,
    detail: null,
    img: null
  },

  addmer: function(e){
    var id=e.currentTarget.dataset.id;
    app.globalData.mer[id]["number"]++;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = parseInt(options.id);
    var mer=app.globalData.mer[id]
    this.setData({
      id: mer.id,
      title: mer.title,
      titleTwo: mer.titleTwo,
      price: mer.price,
      detail: mer.detail,
      img: mer.image
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