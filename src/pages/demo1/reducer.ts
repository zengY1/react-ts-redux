let initState = {
	count: 0
};

const demo1Store = (state = initState || {}, action:any = {}) => {
	switch (action.type) {
		case 'change_count':
			return { ...state, count: action.count };
		default:
			return state;
	}
};

export default demo1Store;
