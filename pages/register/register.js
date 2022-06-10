// pages/register/register.js
Page({
  data: {
    year: ["2020年", "2021年", "2022年"],
    month: ["6月", "7月", "8月"],
    day: ["12日", "13日", "14日"],
    value: [0, 0, 0], //设置默认的每个选项的数组下标
    date: [],
    setMessagename: '',
    setMessagepswd: '',
    setMessagephone: '',
    setMessageaddress: '',
    check: false
  },

  resetall: function(){
    this.setData({
      setMessagename: '',
      setMessagepswd: '',
      setMessagephone: '',
      setMessageaddress: '',
      date: [],
      check: false
    })
  },

  pickerviewChange: function(e) {
    var v = e.detail.value; //获得数组的下标
    var date = []; //声明一个空数组，用于存放用户选择的值
    date.push(this.data.year[v[0]]); //追加用户选择第一个数组的元素
    date.push(this.data.month[v[1]]); //追加用户选择第二个数组的元素
    date.push(this.data.day[v[2]]); //追加用户选择第三个数组的元素
    this.setData({
      date: date //将用户选择的值更新赋给date
    });
  },


  bindinputname: function(e){
    this.setData({
      setMessagename: e.detail.value
    })
  },

  bindinputpswd: function(e){
    this.setData({
      setMessagepswd: e.detail.value
    })
  },

  bindinputphone: function(e){
    this.setData({
      setMessagephone: e.detail.value
    })
  },

  bindinputaddress: function(e){
    this.setData({
      setMessageaddress: e.detail.value
    })
  },

  check: function(){
    var name=this.data.setMessagename;
    var password=this.data.setMessagepswd;
    var phone=this.data.setMessagephone;
    var address=this.data.setMessageaddress;

    if (name=='') {
      wx.showToast({
        title: '请输入姓名',
        icon: 'error'
      })
    }
    else if (password=='') {
      wx.showToast({
        title: '请输入密码',
        icon: 'error'
      })
    }
    else if (phone=='') {
      wx.showToast({
        title: '请输入手机号',
        icon: 'error'
      })
    }
    else if (address=='') {
      wx.showToast({
        title: '请输入常用地址',
        icon: 'error'
      })
    }
    else{
      this.setData({
        check: true
      })
      wx.showToast({
        title: '检查通过'
      })
    }
  },

  onSubmit(e) {
    console.log("form发生了submit事件，携带数据为：")
    if(this.data.check==true){
      this.resetall();
      wx.navigateTo({
        url: '../success/success?t=成功注册'+'&last=../register/register',
      })
    }
    else{
      wx.showToast({
        title: '请先点击检查',
        icon: 'error'
      })
    }
  },

  onReset() {
    this.setData({
      date: [],
      setMessagename: '',
      setMessagepswd: '',
      setMessagephone: '',
      setMessageaddress: '',
      check: false
    });
    console.log("form发生了reset事件，表单已被重置")
  }
})