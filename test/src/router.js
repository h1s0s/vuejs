import {createWebHistory} from 'vue-router';
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";

const router = new createWebHistory({//eslint-disable-line no-unused-vars
    history: createWebHistory(),
    mode: "history",//여러가지 모드가 있음
    routes: [
        {path:"/", name:"HomePage", component: HomePage}, //기본 패스 "/"면 Home을 로딩,
        {path:"/about", name:"AboutPage", component: AboutPage}
    ]
})

export default router;