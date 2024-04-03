<script setup>
import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();

const currentUser = authStore.getCurrentUser;
</script>
<template>
    <div>
        <div>
            <nav>
                <ul>
                    <li>anasayfa</li>
                </ul>
            </nav>
            <div>
                <p >merhaba, <span>@{{ currentUser?.username ||
                        "null"
                }}</span></p>
                <p @click="authStore.handleLogout">çıkış
                    yap</p>
            </div>
        </div>
    </div>
</template>