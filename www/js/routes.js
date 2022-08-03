const routes = [
  {
    path: '/',
    url: './index.html',
  },
  // チャット画面
  {
    path: '/chat/',
    componentUrl: './pages/chat.html',
    beforeEnter: ({ resolve, reject, router }) => {
      // ログインユーザー情報の取得
      const user = ncmb.User.getCurrentUser();
      if (!user) {
        // 認証していない場合（user === null）
        // エラー判定
        reject();
        // ログイン画面に遷移
        router.navigate('/login/');
      } else {
        // 認証している場合
        resolve();
      }
    }
  },
  // ログイン画面
  {
    path: '/login/',
    componentUrl: './pages/login.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
