console.log("permission");
import router from "./router";
import cookies from "@/util/cookie"
router.beforeEach(async (to, from, next) => {
	const role = cookies.get("ms_username");
	if (role||to.path === "/login") {
		next();
	} else if(!role){
		next(`/login?redirect=${to.path}`);
	}
	
    // if (role===null && to.path === '/login') {
    //     next();
    // }else {
    //     next(`/login?redirect=${to.path}`);
    // }
});

router.afterEach((e) => {
	
	console.log("router after");
});
