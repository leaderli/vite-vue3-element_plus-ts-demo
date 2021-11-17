console.log("permission");
import router from "./router";

router.beforeEach(async (to, from, next) => {
	// if (to.path === "/login") {
	// 	next();
	// } else {
	// 	next(`/login?redirect=${to.path}`);
	// }
	next()
});

router.afterEach(() => {
	console.log("router after");
});
