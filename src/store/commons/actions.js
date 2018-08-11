
import axios from 'axios'
import md5 from 'js-md5'
import { SAVE_NAV_DATA, CHANGE_USER_STATE, CHANGE_USER_INFO } from './const'

const actions = {
    Register (context, { code, phone, success, fail }) {
        axios.post('/c/v4/api/login?__t=' + Date.now, {
            code: "",
            codeKey: "",
            loginType: 1,
            password: md5(code),
            username: phone
        }).then(res => {
            // console.log(res);
            
            // if (res.data.status === -23104) {
            //     fail()
            // }else {
                //更改state的数据，所以要调用mutations的方法
                context.commit({
                    type: CHANGE_USER_STATE,
                    user_state: phone
                })
                //获取了用户名等信息
                // this.dispatch('getUserInfo')
                success({
                    phone:phone
                })            
            // }
        })
    },

    getUserInfo (context ) {
        // axios.get('/c/v4/api/me?__t=' + Date.now()).then(res =>{
            let user_info = { nickname: '剑皇濮' }
            context.commit({
                type: CHANGE_USER_INFO,
                user_info
            })
        // })
    },
    getUserState (context, payload) {
            let user_state = payload
            context.commit({
                type: CHANGE_USER_STATE,
                user_state
            })
        
    },


}


export default actions