//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    toView:"",
    motto: 'MiHome_Store',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    newgoods:[
      { 
        "hg_pic":"http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
      },{
        "hg_pic":"http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg"
      },{
        "hg_pic":"http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
      }
    ],
    articles:[
      {
        "title":"钢铁是怎样炼成的？", date:'2015-03-12', "content":"怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的"
      },{
        "title":"钢铁是怎样炼成的？", date:'2015-03-12', "content":"怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的"
      },{
        "title":"钢铁是怎样炼成的？", date:'2015-03-12', "content":"怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的"
      },{
        "title":"钢铁是怎样炼成的？", date:'2015-03-12', "content":"怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的"
      },{
        "title":"钢铁是怎样炼成的？", date:'2015-03-12', "content":"怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的"
      },{
        "title":"钢铁是怎样炼成的？", date:'2015-03-12', "content":"怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的怎么炼成的炼成的"
      }
    ],
    banner_list:[
      {
        "banner": [
          {
            "pic_url": "http://ac-00QDJJp8.clouddn.com/f6f41ed0c870eb21728e.jpg",
          },
          {
            "pic_url": "http://yn-img-bucket.oss-cn-shanghai.aliyuncs.com/banner3.jpg",
          },
          {
            "pic_url": "http://ac-00QDJJp8.clouddn.com/5a699b14ff9ad96f8b16.jpg",
          },
          {
            "pic_url": "http://ac-00QDJJp8.clouddn.com/3ea1bb55f84a35103df8.jpg",
          }
        ]
      },
    ]},
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  scroll: function(e){
    if(this.data.toView=="top"){
      this.setData({
        toView:""
      })
    }
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tap:function(){
    this.setData({
      toView:"top"
    })
  },
  onLoad: function () {
    //var that = this;
    // wx.request({
    //         url: 'http://m.htmlk.cn/json-test/list.json',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         success: function(res) {
    //           that.setData({
    //                hotgoods:res.data
    //            });  
    //         }
    //     })
        
    //调用应用实例的方法获取全局数据
   
  }
})
