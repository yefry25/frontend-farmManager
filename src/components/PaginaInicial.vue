<template>
    <div class="row" style="height: 90vh">
        <article v-bind:style="$q.screen.lt.sm ? { width: '100%', height: '50%'} : { height: '50%' }" class="flex flex-center col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <q-card class="card" v-bind:style="$q.screen.lt.sm ? { width: '90%', height: '70%'} : { width: '80%' }">
                <q-card-section class="text-center">
                    <h5 class="q-my-lg">RECURSOS HUMANOS</h5>
                    <q-icon class="q-mb-lg" name="mdi-account-group" style="font-size: 44px"></q-icon>
                    <br>
                    <q-btn class="q-mb-lg bg-primary">INGRESAR</q-btn>
                </q-card-section>
            </q-card>
        </article>
        <article v-bind:style="$q.screen.lt.sm ? { width: '100%', height: '50%'} : { height: '50%' }" class="flex flex-center col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <q-card class="card" v-bind:style="$q.screen.lt.sm ? { width: '90%', height: '70%' } : { width: '80%' }">
                <q-card-section class="text-center">
                    <h5 class="q-my-lg">LOTES</h5>
                    <q-icon class="q-mb-lg" name="mdi-sprout" style="font-size: 44px"></q-icon>
                    <br>
                    <q-btn class="q-mb-lg bg-primary" @click="router.push('/Lote')">INGRESAR</q-btn>
                </q-card-section>
            </q-card>
        </article>
        <article v-bind:style="$q.screen.lt.sm ? { width: '100%', height: '50%'} : { height: '50%' }" class="flex flex-center col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <q-card class="card" v-bind:style="$q.screen.lt.sm ? { width: '90%', height: '70%' } : { width: '80%' }">
                <q-card-section class="text-center">
                    <h5 class="q-my-lg">INVENTARIO ANIMAL</h5>
                    <q-icon class="q-mb-lg" name="mdi-account-cowboy-hat" style="font-size: 44px"></q-icon>
                    <br>
                    <q-btn class="q-mb-lg bg-primary">INGRESAR</q-btn>
                </q-card-section>
            </q-card>
        </article>
        <article v-bind:style="$q.screen.lt.sm ? { width: '100%', height: '50%'} : { height: '50%' }" class="flex flex-center col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <q-card class="card" v-bind:style="$q.screen.lt.sm ? { width: '90%', height: '70%'} : { width: '80%' }">
                <q-card-section class="text-center">
                    <h5 class="q-my-lg">RECURSOS HUMANOS</h5>
                    <q-icon class="q-mb-lg" name="mdi-account-group" style="font-size: 44px"></q-icon>
                    <br>
                    <q-btn class="q-mb-lg bg-primary">INGRESAR</q-btn>
                </q-card-section>
            </q-card>
        </article>
        <article v-bind:style="$q.screen.lt.sm ? { width: '100%', height: '50%'} : { height: '50%' }" class="flex flex-center col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <q-card class="card" v-bind:style="$q.screen.lt.sm ? { width: '90%', height: '70%'} : { width: '80%' }">
                <q-card-section class="text-center">
                    <h5 class="q-my-lg">RECURSOS HUMANOS</h5>
                    <q-icon class="q-mb-lg" name="mdi-account-group" style="font-size: 44px"></q-icon>
                    <br>
                    <q-btn class="q-mb-lg bg-primary">INGRESAR</q-btn>
                </q-card-section>
            </q-card>
        </article>
        <article v-bind:style="$q.screen.lt.sm ? { width: '100%', height: '50%'} : { height: '50%' }" class="flex flex-center col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <q-card class="card" v-bind:style="$q.screen.lt.sm ? { width: '90%', height: '70%'} : { width: '80%' }">
                <q-card-section class="text-center">
                    <h5 class="q-my-lg">RECURSOS HUMANOS</h5>
                    <q-icon class="q-mb-lg" name="mdi-account-group" style="font-size: 44px"></q-icon>
                    <br>
                    <q-btn class="q-mb-lg bg-primary">INGRESAR</q-btn>
                </q-card-section>
            </q-card>
        </article>
    </div>
</template>

<script setup>
import { Screen } from 'quasar'
import { useRouter } from 'vue-router';
const router = useRouter()
Screen.setSizes({ sm: 600, md: 900, lg: 1200, xl: 1600 })

</script>

<style lang="scss" scoped>
.card {
    
    border-radius: 50% 20% / 10% 40%;
    /* background: linear-gradient(181deg,
            rgb(126, 9, 161) 6%,
            rgb(12, 190, 35) 100%);
    background-blend-mode: normal; */
    background-color: rgb(247, 243, 239);
}
</style>