<template>
    <!-- <img src="../assets/campo.jpg" alt="campo" class="campo"> -->
    <div class="flex-center row" style="height: 90vh">
        <div class="col-12 flex flex-center">
            <q-card style="border-radius: 5%;" v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '50%' }">
                <q-card-section>
                    <q-avatar size="103px" class="absolute-center">
                        <img src="../assets/users.png" alt="avatar">
                    </q-avatar>
                </q-card-section>
                <q-card-section>
                    <div class="q-pt-xl">
                        <div class="col text-h4 ellipsis flex justify-center">
                            <h2 class="text-h4 text-uppercase q-my-md text-weight-regular">inicio de sesión</h2>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <form @submit.prevent.stop="onSubmit" class="q-ma-md">
                        <q-input type="email" v-model="email" label="Digite el correo *" lazy-rules :rules="emailRules" />
                        <q-input :type="isPwd ? 'password' : 'text'" type="password" v-model="password"
                            label="Digite la contraseña *" lazy-rules :rules="passwordRules">
                            <template v-slot:append>
                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                    @click="isPwd = !isPwd" />
                            </template>
                        </q-input>
                        <div>
                            <q-btn class="full-width rounded q-mt-md" label="Iniciar" type="submit" color="primary" />
                        </div>
                    </form>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'
import {useStore} from '../stores/store.js'
const store = useStore()

const router = useRouter()
const showLoading = () => {
    $q.loading.show({
        message: 'Doing something. Please wait...',
        spinnerColor: 'primary'
    })
}
const $q = useQuasar()
const email = ref("")
const password = ref("")
const onSubmit = () => {
    showLoading();
    axios.post('https://backend-farm-manager.vercel.app/api/usuario/login', {
        correo: email.value,
        password: password.value
    })
        .then((response) => {
            console.log(response.data);
            router.push('/inicio')
            $q.notify({
                icon: 'done',
                color: 'positive',
                message: 'Inicio de sesión correcto'
            });
            $q.loading.hide()
            const usuario = {
                id:response.data.usuario._id,
                nombre:response.data.usuario.nombre,
                documento:response.data.usuario.documento,
                correo:response.data.usuario.correo,
                password:response.data.usuario.password,
                jornal:response.data.usuario.jornal,
                rol:response.data.usuario.rol,
                telefono:response.data.usuario.telefono,
                estado:response.data.usuario.estado,
                ip:response.data.ipAdd,
                navegador:response.data.navegador
            }
            store.setToken(response.data.token)
            store.setUsuario(usuario)
        })
        .catch((err) => {
            console.log(err);
            $q.notify({
                color: 'negative',
                message: 'Correo/Password incorrectos'
            })

            $q.loading.hide()
        })
}
const emailRules = [
    val => (val && val.length > 0) || 'Por favor escriba su correo'
]
const passwordRules = [
    val => (val !== null && val !== '') || 'Por favor escriba su contraseña',
    val => (val.length > 7) || 'Debe tener 8 o mas dígitos '
]
const isPwd = ref(true)
</script>

<style lang="scss" scoped></style>