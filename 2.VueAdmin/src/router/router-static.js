import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import qicaiyuyue from '@/views/modules/qicaiyuyue/list'
    import news from '@/views/modules/news/list'
    import shouyinyuan from '@/views/modules/shouyinyuan/list'
    import aboutus from '@/views/modules/aboutus/list'
    import huiyuandengji from '@/views/modules/huiyuandengji/list'
    import yuyuejiaolian from '@/views/modules/yuyuejiaolian/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import discussjiaolian from '@/views/modules/discussjiaolian/list'
    import changguanxinxi from '@/views/modules/changguanxinxi/list'
    import qiuguanqicai from '@/views/modules/qiuguanqicai/list'
    import forum from '@/views/modules/forum/list'
    import changdileixing from '@/views/modules/changdileixing/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import changguanyuyue from '@/views/modules/changguanyuyue/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/qicaiyuyue',
        name: '器材预约',
        component: qicaiyuyue
      }
      ,{
	path: '/news',
        name: '通知公告',
        component: news
      }
      ,{
	path: '/shouyinyuan',
        name: '收银员',
        component: shouyinyuan
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/huiyuandengji',
        name: '会员等级',
        component: huiyuandengji
      }
      ,{
	path: '/yuyuejiaolian',
        name: '预约教练',
        component: yuyuejiaolian
      }
      ,{
	path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
      ,{
	path: '/discussjiaolian',
        name: '教练评论',
        component: discussjiaolian
      }
      ,{
	path: '/changguanxinxi',
        name: '场馆信息',
        component: changguanxinxi
      }
      ,{
	path: '/qiuguanqicai',
        name: '球馆器材',
        component: qiuguanqicai
      }
      ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
      ,{
	path: '/changdileixing',
        name: '场地类型',
        component: changdileixing
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/chat',
        name: '意见反馈',
        component: chat
      }
      ,{
	path: '/changguanyuyue',
        name: '场馆预约',
        component: changguanyuyue
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '通知公告分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
