<template>
    <div class="app-mine">
        <div class="header">
            <div class="top">
                <a @click="$router.go(-1)" >
                    <i class="fa fa-long-arrow-left ">
                        
                    </i>
                </a>
               <span class="title">
                   个人中心
               </span>
               <span class="logout" @click="exit" v-if="user_state">退出</span>
            </div>
            <div v-if= "!user_state" class="bottom">
                <router-link :to="{ name: 'register' }">注册</router-link>
                <i class="line">|</i>
                <router-link :to="{ name: 'login' }">登陆</router-link>
                <div>
                </div>
            </div>
            <div v-else class="logined">
                <div class="userImg">
                    <img src="" alt="">
                </div>
                <div  class="userInfo">
                    <p class="username" >{{user_name.nickname}}</p>
                    <a>我的账户</a>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="order">
                <span><a>我的订单</a></span>
                <span class="all"><a>全部订单</a></span>
            </div>

            <div class="userItem">
                <ul>
                    <router-link  v-for="item in lists" :key="item.id" :to="{ name: 'login' }" tag="li">
                        <i :class="item.icon"></i>
                        <span>{{item.text}}</span>
                    </router-link>
                </ul>
            </div>

            <div class="userMain">
                <ul>
                    <router-link v-for="i in items" :key="i.id" :to="{ name: 'login' }" tag="li">
                        <a>{{i.text}}</a>
                        <span v-if="i.tip">{{i.tip}}</span>
                        <span v-if="i.juan">{{i.count}}张</span>
                    </router-link>
                </ul>
            </div>

            <div class="foot">

            </div>
        </div>
        <app-home-nav-list></app-home-nav-list>
    </div>
</template>

<script>
    import { mapState } from 'vuex'  

    export default {
        name: 'AppMine',
        data(){
            return{ 
                lists:[ 
                    {id: 1, icon: 'fa fa-address-book-o', text: '待付款'} ,
                    {id: 2, icon: 'fa fa-user-o', text: '待成团'} ,
                    {id: 3, icon: 'fa fa-truck', text: '待收获'} ,
                    {id: 4, icon: 'fa fa-jpy', text: '退款/售后'} ,
                ],
                items: [
                    {id: 1, text: '我的优惠券'},
                    {id: 2, text: '我的收藏'},
                    {id: 3, text: '我的拼团'},
                    {id: 4, text: '我的免单卷', juan: true, count: 0},
                    {id: 5, text: '借钱', tip: '新用户免费领1000元'},
                    {id: 6, text: '客服中心'},
                    {id: 7, text: '关于卷皮'},
                ]
            }
        },
        computed: mapState({
            user_state: state => state.commons.user_state,
            user_name: state => state.commons.user_info
        }),
       
        methods: {
            exit () {
            this.$store.commit({
                type: 'CHANGE_USER_STATE', user_state: null
            })
          
            this.$cookies.clear()
            // this.$router.replace('/login')
            }
        },
        created () {
            // console.log(this.$router);
            
            this.$store.dispatch('getUserInfo')
            // let phone = this.$store.state.commons.user_state
            // console.log(phone);   
            // this.$store.dispatch('getUserState', phone)
            // console.log(this.user_state);
        },
        mounted() {
        }
    }
</script>

<style scoped lang = "scss">
    html, body {
        overflow-x: hidden;
        background: #f5f5f5;
    }
    .header{
        background-image: url('https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png');
        background-origin: padding-box;
        background-position-x: 50%;
        background-position-y: 100%;
        background-size: 100%;
        .top{
            /* text-align: center; */
            i{
                /* display: inline-block; */
                width: 1.04rem;
                height: 0.88rem;
                line-height: 0.88rem;
                text-align: center;
                font-size: 0.48rem;
                color: #fff;
                /* font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif; */
            }
            .title{
                display: inline-block;
                width: 70%;
                height: 0.88rem;
                line-height: 0.88rem;
                font-size: 0.36rem;
                text-align: center;
                color: #fff;
                font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif;
            }
            .logout{
                color: #fff;
                cursor: pointer;
            }
           
        }
        .bottom{
            padding-left: 1.04rem;
            a{
                padding: 0 0.96rem;
                color: #fff;
                display: inline-block;
                height: 2rem;
                line-height: 2rem;
                text-align: center;
                font-size: 0.4rem;
                font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif;
            }
            .line{
                display: inline-block;
                text-align: center;
                color: #fff;
                font-size: 0.4rem;
            }
        }
        .logined{
            height: 1.12rem;
            width: 100%;
            height: 2rem;
            padding-top: 0.46rem;
            padding-bottom: 0.5rem;
            overflow: hidden;
            display: block;
            color: #fff;
            position: relative;
            color: #fff;
            overflow: hidden;
            .userInfo{
                height: 1.06rem;
            }
            .userImg{
                width: auto;
                float: left;
                margin-left: .24rem;
                width: 1.08rem;
                height: 1.08rem;
                border-radius: 50%;
                float: left;
                margin-left: 0.36rem;
                border: 2px solid #fff;
                overflow: hidden;
                background: url('https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg') no-repeat center center
            }
            .userInfo{
                width: auto;
                float: left;
                margin-left: .24rem;
                color: #fff;
                p{
                    font-family: PingFangSC-Regular;
                    font-size: .28rem;
                    color: #fff;
                    height: .42rem;
                    line-height: .42rem;
                }
                a{
                    font-size: .12rem;
                    color: #fff;
                    width: 100%;
                    height: .88rem;
                    margin-top: .22rem;
                    padding-right: .5rem;
                }
            }
        }
    }
    .content{
        .order{
            height: 0.96rem;
            margin: 0 0.36rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            a{
                font-size: 0.3rem;
                line-height: 0.96rem;
                color: #333;
                /* align-items: center; */
            }
            .all a{
                color: #999;
            }

        }
        .userItem{
            padding-top: .24rem;
            padding-bottom: .3rem;;
            ul{
                display: flex;
                li{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    i{
                        font-size: .48rem;
                        color: #666;
                    }
                    span{
                        margin-top: 0.14rem;
                    }
                }
            }
        }
        .userMain{
            width: 100%;
            padding: 0 .28rem 0 .36rem;
            border-top: 0.2rem solid #f5f5f5;
            ul{
                border-bottom: 0.2rem solid #f5f5f5;
                li{
                    display: flex;
                    justify-content: space-between;
                    height: 0.96rem;
                    line-height: 0.96rem;
                    border-bottom: 1px solid #f5f5f5;
                    a{  
                        text-align: left;
                        font-size: 0.3rem;
                        color: #333;
                    }
                    span{
                        text-align: right;
                        color: #999;
                    }
                }
            }   
            
        }
    }
</style>