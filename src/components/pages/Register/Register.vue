<template>
    <div class="register">
      <div class="header">
          <a @click = "$router.go(-1)" class="r-nav">
              <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&sv=449ce9ee" alt="">
          </a>
         <span class="title">注册</span>
      </div>
      <div class="login">
            <p class="descript">请确保你的手机畅通，用于接受验证码短信</p>
            <form @submit.prevent="submit">
                <ui-input type="text" v-model="phone" placeholder="请输入手机号">
                </ui-input>
                <ui-input type="text" placeholder="请输入验证码" v-model="code">
                    <button type="button" v-if ="isPhone" :class="[ 'isphone' ? 'isred' :  '', 'get-code' ]"  @click="sendCode">获取验证码</button>
                </ui-input>
                <button type="submit" :class="['submit', classname ]">下一步</button>
            </form>
      </div>
    </div>
</template>
<script>
export default {
    name: 'app-register',
    data() {
        return {
            phone: '',
            code: '',
            classname: '',            
        }
    },
    watch: {
        code: function (val) {
            if( this.code == '' ) {
                this.classname = ''
            }else{
                this.classname = 'isBgred'
            }
        }
    },
    computed: {
        isPhone() {
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.phone)) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        sendCode() { //发送验证码了
            this.$http.post('/c/v4/api/code?__t=' + Date.now(), {
                mobile: this.phone,
                type: "2"
            }).then(res => {
                if (res.data.status === 0) {
                    console.log('验证码发送成功')
                }
            })
        },
        submit() {
            if (!this.code) return false;
            this.$store.dispatch('Register', {
                code: this.code, 
                phone: this.phone,
                success: (user_state) => {
                    
                    console.log('登陆成功')
                    // 存cookie

                    for (const key in user_state) {
                        if (user_state.hasOwnProperty(key)) {
                            const element = user_state[key];
                            this.$cookies.set(key,element,"7d","/"); 
                        }
                    }
                    if(this.$store.state.commons.user_state){
                        console.log(this.$store.state.commons.user_state);
                        
                        this.$router.push('/mine')
                    }
                   
                },
                fail: () => {
                   console.log('短信验证码错误')
                }
            })
        },
    }
}
</script>
<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 0.88rem;
        // overflow: inherit;
        position: relative;
        z-index: 199;
        border-bottom: 1px solid #dedede;
        .r-nav{
            display: inline-block;
            padding: 0.2rem;
            // height: 0.5rem;
            // width: 0.5rem;
            color: #666;
            img{
                width: 0.5rem;
                height: 0.5rem;
            }        
        }
        .title{
            display: inline-block;
            font-size: 0.36rem;
            line-height: 0.88rem;
            height: 0.88rem;
            text-align: center;
            cursor: default;
            width: 5rem;
            text-indent: 5%;
            z-index: -1;
            box-sizing: border-box;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    .login{
        padding: 0 0.24rem;
        .descript{
            height: 0.3rem;
            line-height: 0.3rem;
            margin-top: 0.56rem;
            margin-bottom: 0.24rem;
            font-size: 0.24rem;
            text-align: center;
            color: #999;
        }
        form {
        text-align: center;
        label {
            margin-top: 0.15rem;
            display: block;
            text-align: left;
        }
        .submit {
            display: block;
            text-align: center;
            width: 7.02rem;
            background: #dbdbdb;
            color: #fff;
            border: none;
            font-size: 0.36rem;
            font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif;
            line-height: 0.96rem;
            height: 0.96rem;
            margin-top: 0.5rem;
            outline: none;
            
        }
        .get-code {
            background: none;
            border: none;
            color: #999;
            height: 0.48rem;
            position: absolute;
            border: none;
            right: 5px;
            top: 15px;
            line-height: 0.48rem;
            text-align: center;
            cursor: pointer;
        }
    }
    .isBgred{
        background: #ff464e !important;
        color: #fff !important;
    } 
    .isred{
        
        color: red !important;    
    } 
    }
</style>


