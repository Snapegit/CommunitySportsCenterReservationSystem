import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shouyinyuanList from '../pages/shouyinyuan/list'
import shouyinyuanDetail from '../pages/shouyinyuan/detail'
import shouyinyuanAdd from '../pages/shouyinyuan/add'
import jiaolianList from '../pages/jiaolian/list'
import jiaolianDetail from '../pages/jiaolian/detail'
import jiaolianAdd from '../pages/jiaolian/add'
import changdileixingList from '../pages/changdileixing/list'
import changdileixingDetail from '../pages/changdileixing/detail'
import changdileixingAdd from '../pages/changdileixing/add'
import changguanxinxiList from '../pages/changguanxinxi/list'
import changguanxinxiDetail from '../pages/changguanxinxi/detail'
import changguanxinxiAdd from '../pages/changguanxinxi/add'
import changguanyuyueList from '../pages/changguanyuyue/list'
import changguanyuyueDetail from '../pages/changguanyuyue/detail'
import changguanyuyueAdd from '../pages/changguanyuyue/add'
import yuyuejiaolianList from '../pages/yuyuejiaolian/list'
import yuyuejiaolianDetail from '../pages/yuyuejiaolian/detail'
import yuyuejiaolianAdd from '../pages/yuyuejiaolian/add'
import qiuguanqicaiList from '../pages/qiuguanqicai/list'
import qiuguanqicaiDetail from '../pages/qiuguanqicai/detail'
import qiuguanqicaiAdd from '../pages/qiuguanqicai/add'
import qicaiyuyueList from '../pages/qicaiyuyue/list'
import qicaiyuyueDetail from '../pages/qicaiyuyue/detail'
import qicaiyuyueAdd from '../pages/qicaiyuyue/add'
import huiyuandengjiList from '../pages/huiyuandengji/list'
import huiyuandengjiDetail from '../pages/huiyuandengji/detail'
import huiyuandengjiAdd from '../pages/huiyuandengji/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussjiaolianList from '../pages/discussjiaolian/list'
import discussjiaolianDetail from '../pages/discussjiaolian/detail'
import discussjiaolianAdd from '../pages/discussjiaolian/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shouyinyuan',
					component: shouyinyuanList
				},
				{
					path: 'shouyinyuanDetail',
					component: shouyinyuanDetail
				},
				{
					path: 'shouyinyuanAdd',
					component: shouyinyuanAdd
				},
				{
					path: 'jiaolian',
					component: jiaolianList
				},
				{
					path: 'jiaolianDetail',
					component: jiaolianDetail
				},
				{
					path: 'jiaolianAdd',
					component: jiaolianAdd
				},
				{
					path: 'changdileixing',
					component: changdileixingList
				},
				{
					path: 'changdileixingDetail',
					component: changdileixingDetail
				},
				{
					path: 'changdileixingAdd',
					component: changdileixingAdd
				},
				{
					path: 'changguanxinxi',
					component: changguanxinxiList
				},
				{
					path: 'changguanxinxiDetail',
					component: changguanxinxiDetail
				},
				{
					path: 'changguanxinxiAdd',
					component: changguanxinxiAdd
				},
				{
					path: 'changguanyuyue',
					component: changguanyuyueList
				},
				{
					path: 'changguanyuyueDetail',
					component: changguanyuyueDetail
				},
				{
					path: 'changguanyuyueAdd',
					component: changguanyuyueAdd
				},
				{
					path: 'yuyuejiaolian',
					component: yuyuejiaolianList
				},
				{
					path: 'yuyuejiaolianDetail',
					component: yuyuejiaolianDetail
				},
				{
					path: 'yuyuejiaolianAdd',
					component: yuyuejiaolianAdd
				},
				{
					path: 'qiuguanqicai',
					component: qiuguanqicaiList
				},
				{
					path: 'qiuguanqicaiDetail',
					component: qiuguanqicaiDetail
				},
				{
					path: 'qiuguanqicaiAdd',
					component: qiuguanqicaiAdd
				},
				{
					path: 'qicaiyuyue',
					component: qicaiyuyueList
				},
				{
					path: 'qicaiyuyueDetail',
					component: qicaiyuyueDetail
				},
				{
					path: 'qicaiyuyueAdd',
					component: qicaiyuyueAdd
				},
				{
					path: 'huiyuandengji',
					component: huiyuandengjiList
				},
				{
					path: 'huiyuandengjiDetail',
					component: huiyuandengjiDetail
				},
				{
					path: 'huiyuandengjiAdd',
					component: huiyuandengjiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussjiaolian',
					component: discussjiaolianList
				},
				{
					path: 'discussjiaolianDetail',
					component: discussjiaolianDetail
				},
				{
					path: 'discussjiaolianAdd',
					component: discussjiaolianAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
