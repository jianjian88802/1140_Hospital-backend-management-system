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

     import users from '@/views/modules/users/list'
    import bingfang from '@/views/modules/bingfang/list'
    import bingli from '@/views/modules/bingli/list'
    import chufang from '@/views/modules/chufang/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import huanzhe from '@/views/modules/huanzhe/list'
    import yaopin from '@/views/modules/yaopin/list'
    import yisheng from '@/views/modules/yisheng/list'
    import yuyueyisheng from '@/views/modules/yuyueyisheng/list'
    import zhuyuanguanli from '@/views/modules/zhuyuanguanli/list'
    import dictionaryChuangwei from '@/views/modules/dictionaryChuangwei/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryKeshi from '@/views/modules/dictionaryKeshi/list'
    import dictionaryRuyuantujing from '@/views/modules/dictionaryRuyuantujing/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShijidian from '@/views/modules/dictionaryShijidian/list'
    import dictionaryYaopin from '@/views/modules/dictionaryYaopin/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'
    import dictionaryZhuyuantujing from '@/views/modules/dictionaryZhuyuantujing/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
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
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryChuangwei',
        name: '床位',
        component: dictionaryChuangwei
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryKeshi',
        name: '科室',
        component: dictionaryKeshi
    }
    ,{
        path: '/dictionaryRuyuantujing',
        name: '入院途径',
        component: dictionaryRuyuantujing
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShijidian',
        name: '时间段',
        component: dictionaryShijidian
    }
    ,{
        path: '/dictionaryYaopin',
        name: '药品类型',
        component: dictionaryYaopin
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位',
        component: dictionaryZhiwei
    }
    ,{
        path: '/dictionaryZhuyuantujing',
        name: '住院途径',
        component: dictionaryZhuyuantujing
    }


    ,{
        path: '/bingfang',
        name: '病房',
        component: bingfang
      }
    ,{
        path: '/bingli',
        name: '病例',
        component: bingli
      }
    ,{
        path: '/chufang',
        name: '处方',
        component: chufang
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/huanzhe',
        name: '患者',
        component: huanzhe
      }
    ,{
        path: '/yaopin',
        name: '药品',
        component: yaopin
      }
    ,{
        path: '/yisheng',
        name: '医生',
        component: yisheng
      }
    ,{
        path: '/yuyueyisheng',
        name: '预约医生',
        component: yuyueyisheng
      }
    ,{
        path: '/zhuyuanguanli',
        name: '住院',
        component: zhuyuanguanli
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
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
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

export default router;
