import router from './router';
import cookies from '@/util/cookie';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({
    showSpinner:false
});

router.beforeEach(async(to, from, next) => {
    NProgress.start();
    const role = cookies.get('ms_username');
    if (role || to.path === '/login') {
        next();
    } else if (!role) {
        next(`/login?redirect=${to.path}`);
    }
});

router.afterEach(() => {
    NProgress.done(); 
});
