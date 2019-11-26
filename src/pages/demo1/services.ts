import Request from '../../utils/request'
import Api from '../../utils/api'
const { demo1 } = Api

async function listGetRole(params?: any) {
    const res= await Request({
        url: demo1,
        method: "GET",
        data: params
    });
    return res
}
export { listGetRole }