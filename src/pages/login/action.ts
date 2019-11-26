import { login } from './services'
import { message } from 'antd'
export interface ResData {
    code?: string;
    msg?: string;
    data: User;
}

export interface User {
    userId: number;
    accessToken: string;
    refreshToken: string;
    scope: string;
    expire: string;
    level: null;
    levelName: null;
    tokenType: string;
}
export let getLogin = (data: any) => async (dispatch: any) => {
    // const loginData: ResData = await login(data)
    // const userInfo: User = loginData.data

    window.location.pathname = '/home'
    // if (loginData.code === '00000') {
    //     window.localStorage.username = data.username;
    //     window.localStorage.userInfo = userInfo;
    //     window.localStorage.accessToken = userInfo.accessToken;
    //     window.localStorage.refreshToken = userInfo.refreshToken;
    //     window.localStorage.userId = userInfo.userId;
    //     if (userInfo.accessToken.length > 1) {
    //         window.location.pathname = '/home'
    //     }
    // } else {
    //     message.error(loginData.msg)
    // }
}