import { Router } from './router.js';

const router = new Router();
router.add("/", "/pages/home.html", "page1"); 
router.add("/universe", "/pages/universe.html", "page2");
router.add("/explorer", "/pages/explorer.html", "page3");
router.add(404, "/pages/404.html", "error");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();