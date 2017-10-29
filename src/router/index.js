import Vue from 'vue';
import Router from 'vue-router';
import Trying from 'components/trying/trying';
import Tryend from 'components/tryend/tryend';
import TryingDetail from 'components/trying-detail/trying-detail';
import TryendDetail from 'components/tryend-detail/tryend-detail';
import ApplyList from 'components/applys-list/applys-list';
import WinnerList from 'components/winner-list/winner-list';

Vue.use(Router);

const routes = [
    {
      path: '/',
      redirect: '/trying'
    },
    {
      path: '/trying',
      component: Trying,
      children: [
        {
          path: ':id',
          component: TryingDetail
        }
      ]
    },
    {
      path: '/tryend',
      component: Tryend,
      children: [
        {
          path: ':id',
          component: TryendDetail
        }
      ]
    },
    {
      path: '/applys-list/:id',
      name: 'applys-list',
      component: ApplyList
    },
    {
      path: '/winner-list/:id',
      name: 'winner-list',
      component: WinnerList
    }
];
export default new Router({
    linkActiveClass: 'active',
    routes: routes
});
