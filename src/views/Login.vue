<template>
    <div class="login">
        <div class="header"><h3>后台登录11</h3></div>
         <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登入</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
export default {
    name:'login',
    data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码.', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码有误', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('成功!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }

}
</script>
<style scope>
    .header{
        display: flex;
        font-size: 26px;
        width: 100%;
        flex-direction: row;
        justify-content: center;
    }
    .login{
        border: solid 1px #c5dffb;
        margin: 0 auto;
        height: 200px;
        width: 500px;
        display: flex;
        flex-direction: column;
    }
   .login form{
       display: flex;
       flex-direction: row;
       align-items: center;
       margin: 0 auto;
       height: 100%;
    
    }
</style>
