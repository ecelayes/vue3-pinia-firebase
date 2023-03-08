<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
//import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');

const userStore = useUserStore();
//const router = useRouter();

const handleSubmit = async() => {
  if(!email.value || password.value.length < 6) {
    return alert("Complete todos los campos");
  }
  await userStore.registerUser(email.value, password.value);
  //router.push('/');
}
</script>

<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Ingrese email" v-model.trim="email">
      <input type="password" placeholder="ingrese contraseña" v-model.trim="password">
      <button type="submit" :disabled="userStore.loadingUser">Crear usuario</button>
    </form>
  </div>
</template>