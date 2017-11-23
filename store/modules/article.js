const state = {
	article: [],
	page: 1,
	img: []
};

const mutations = {
	article: (state, that) => {
		that.axios.get('http://127.0.0.1:3000/articlePost')
		.then((res) => {
			for(var i = 0; i < res.data.length; i++){
				state.article.push(res.data[i]);
			}
		});
	},
	page: (state, num) => {
		state.page = num;
	},
	pre: (state) => {
		if(state.page > 1) {
			state.page --;
		}
	},
	next: (state) => {
		if(state.page < Math.ceil(state.article.length/5)){
			state.page ++;
		}
	}
};

const actions = {
	article: ({commit}, that) => {
		commit('article', that);
	},
	page: ({commit}, num) => {
		commit('page', num);
	},
	pre: ({commit}) => {
		commit('pre');
	},
	next: ({commit}) => {
		commit('next');
	}
};

const getters = {
	article: (state) => {
		return state.article;
	},
	page: (state) => {
		return state.page;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}
