import Request from '../../utils/request'
import Api from '../../utils/api'
const { loginApi } = Api

async function login(params?: any) {
    return Request({
        url: loginApi,
        method: "Post",
        data: params
    });
}
export { login }