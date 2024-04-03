<script setup>
import { reactive } from 'vue';
import Spinner from "../components/Spinner.vue"

const loginForm = reactive({
    username: undefined,
    password: undefined,
})

import { useAuthStore } from "../store/auth"
const authStore = useAuthStore();

</script>
<template>
    <div >
        <form
            @submit.prevent="authStore.handleLogin(loginForm)">
            <h2 class="font-bold text-3xl text-white">Giriş Yap.</h2>
            <div >
                <input type="text"
                    placeholder="kullanıcı adı" v-model="loginForm.username">
            </div>

            <div>
                <input type="password"
                    placeholder="parola" v-model="loginForm.password">
            </div>

            <div>
                <button type="submit"
                    :disabled="authStore.loading">
                    <Spinner v-if="authStore.loading" />
                    giriş yap
                </button>
            </div>

        </form>

    </div>
</template>
<style scoped>

</style>