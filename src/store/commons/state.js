import Cookies from 'vue-cookies'

const state = {

    user_state: getUserStateFromCookies(),
    user_info:null,
    nav_data: null,

}

function getUserStateFromCookies() {
    
    
    let user_state = {
        // id : "",
        // isMainAccount : "",
        phone : "",
        // username : "",
        // sessionKey : ""    
    }
    
    for (const key in user_state) {
        let value = Cookies.get(key)
        
        if ( !value ) {
            user_state = null;
            break;
        }else {
            user_state[key] = value
        }
    }
    // console.log(user_state);

    return user_state
    
}

export default state