const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['@/components/Home'], resolve)
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {
      title: '我的'
    },
    component: (resolve) => require(['@/components/mine/Mine'], resolve)
  },
  {
    path: '/survey',
    name: 'survey',
    meta: {
      title: '答题'
    },
    component: (resolve) => require(['@/components/survey/Survey'], resolve),
  },
  {
    path: '/survey/answer',
    name: 'answer',
    meta: {
      title: '答题ing'
    },
    component: (resolve) => require(['@/components/survey/Answer'], resolve)
  },
  {
    path: '/survey/result',
    name: 'result',
    meta: {
      title: '答题结果'
    },
    component: (resolve) => require(['@/components/survey/Result'], resolve)
  },
  {
    path: '/help',
    name: 'help',
    meta: {
      title: '帮助中心'
    },
    component: (resolve) => require(['@/components/help/Help'], resolve)
  }
];

export default routes;
