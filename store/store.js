import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import article from './modules/article';
import userData from './modules/userData';

export default new Vuex.Store({
	modules: {
		article,
		userData
	}
})
	

