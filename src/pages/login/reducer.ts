interface IState{
    token:string
}
let initState:IState = {
	token: ''
};

const loginStore = (state = initState || {}, action:any = {}) => {
	switch (action.type) {
		case 'login':
			return { ...state, token: action.token };
		default:
			return state;
	}
};

export default loginStore;
