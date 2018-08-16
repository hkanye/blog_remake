import {Home,ShortMessageCheck,problemFeedback, TicketInformation,JudgeRecord, RefundRecord, SuccessRate, EvaluationQuery} from './containers/index';
import BlogNav from 'components/blogNav/index.js';

const createRoutes = {
    path: '/',
    component: Lovecrmnav,//这个组件是导航栏
    indexRoute: {component: Frontpage},
    childRoutes: [
        {
            path: 'artical',
            component: artical//文章
        },
    ]
}
export default createRoutes;
