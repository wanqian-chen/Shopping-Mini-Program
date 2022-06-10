// pages/topup/topup.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    balance: 0.0,
    addbalance: 0,
    setMessage: ''
  },

  onSubmit: function(e){
    var addbalance=parseFloat(e.detail.value.addbalance);
    if(addbalance>=0){
      app.globalData.balance += addbalance;
      this.show();
    }
    else{
      this.setData({
        setMessage: ''
      })
      wx.navigateTo({
        url: '../failure/failure?t=请填写正确金额',
      })
    }
  },

  show: function(){
    var balance=app.globalData.balance;
    this.setData({
      balance: balance,
      setMessage: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.show()
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
    this.show()
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