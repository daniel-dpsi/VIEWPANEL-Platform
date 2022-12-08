
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        children: [
          { path: '', component: () => import('pages/RoutePage.vue') },
          { path: 'list', component: () => import('pages/ListsPage.vue') },
          { path: 'region', component: () => import('pages/RoutePage.vue') },
          { path: 'user', component: () => import('pages/UserPage.vue') },
          { path: 'services', component: () => import('pages/ServicesPage.vue') },
          { path: 'network', component: () => import('pages/NetworkPage.vue') },
          { path: 'support', component: () => import('pages/SupportPage.vue') },
          { path: 'account', component: () => import('pages/AccountPage.vue') }

        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
