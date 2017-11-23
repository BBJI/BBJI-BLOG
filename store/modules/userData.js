const state = {
	userData: [],
};

const mutations = {
	userData: (state, that) => {
		that.axios.get('http://127.0.0.1:3000/userData')
		.then((res) => {
			state.userData.push(res.data);
		});
	},
	
	logout: (state) => {
		state.userData[0].userName = '';
	}
};


const actions = {
	userData: ({commit}, that) => {
		commit('userData', that);
	},
	
	logout: ({commit}) => {
		commit('logout');
	}
};

const getters = {
	userData: (state) => {
		return state.userData;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}
