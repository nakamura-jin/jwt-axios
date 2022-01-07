<template>
  <div>
    <!-- <template v-if="!dialog" >
      <v-row height="100vh" width="100vw">
        <v-col md="4" class="circle">
          <v-card class="ma-0">
            <v-app-bar color="primary" dark flat>
              <v-card-title>Login</v-card-title>
            </v-app-bar>
            <validation-observer ref="obs" v-slot="ObserverProps">
              <v-col class="pa-6">
                <validation-provider v-slot="ProviderProps" rules="required|email" name="メールアドレス">
                  <v-text-field
                    label="Email"
                    v-model="form.email"
                    dense
                    :error-messages="ProviderProps.errors[0]"
                    class="mt-3"
                  ></v-text-field>
                </validation-provider>

                <validation-provider v-slot="ProviderProps" rules="required" name="パスワード">
                  <v-text-field
                    label="Password"
                    v-model="form.password"
                    dense
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show3 ? 'text' : 'password'"
                    @click:append="show3 = !show3"
                    :error-messages="ProviderProps.errors[0]"
                    class="mt-3"
                  ></v-text-field>
                </validation-provider>
              </v-col>

              <v-col class="text-right">
                <v-btn
                  class="mr-6"
                  color="warning"
                  @click="clear"
                >clear</v-btn>

                <v-btn
                  color="primary"
                  @click="submit"
                  :disabled="ObserverProps.invalid || !ObserverProps.validated"
                >Login</v-btn>
              </v-col>
            </validation-observer>
          </v-card>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-container height="100vh" width="100vw" class="circle-wrap">
        <div class="circle text-center">
          <v-progress-circular
            indeterminate
            value="40"
            size="50"
            rotate="-90"
            width="8"
            color="primary"
          >
          </v-progress-circular>
          <p class="text-center mt-4">Loading...</p>
        </div>
      </v-container>
    </template> -->
    <v-col md="4" class="circle">
      <v-card tile >
        <v-tabs>
          <v-tab @click="currentComponent = 'UserLoginForm'">ユーザー</v-tab>
          <v-tab @click="currentComponent = 'OwnerLoginForm'">オーナー</v-tab>
          <v-tab @click="currentComponent = 'AdminLoginForm'">管理者</v-tab>
        </v-tabs>
        <component :is="currentComponent"></component>
      </v-card>
    </v-col>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
// import User from '@/modules/users'
import UserLoginForm from '@/components/UserLoginForm.vue'
import OwnerLoginForm, { LoginFormData } from '@/components/OwnerLoginForm.vue'
import AdminLoginForm from '@/components/AdminLoginForm.vue'


export default defineComponent({
  name: 'Login',
  components: {
    UserLoginForm,
    OwnerLoginForm,
    AdminLoginForm,
  },
  data() {
    return {
      currentComponent: UserLoginForm as LoginFormData | unknown
    }
  }



  // data() {
  //   return {
  //     form: {
  //       email: '',
  //       password: '',
  //     } as User,
  //     show3: false,
  //     error: '' as string,
  //     dialog: false
  //   }
  // },
  // methods: {
  //   submit() {
  //     this.$store.dispatch('login', {
  //       email: this.form.email,
  //       password: this.form.password
  //     })

  //     this.dialog = true
  //     setTimeout(() => {
  //       this.dialog = false
  //       this.$router.push('/about')
  //       // this.$store.dispatch('getUser')
  //     }, 3000)

  //   },
  //   clear() {
  //     this.form.email = '',
  //     this.form.password = '',
  //     (this.$refs.obs as HTMLFormElement).reset();
  //   }
  // }
})
</script>

<style scoped>
  .circle-wrap {
    width: 100vw;
    height: 100vh;
  }
  .circle {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

</style>

