<template lang="">
    <div>
    <header>
        <Header/>
    </header>
    <main>
        <Aside/>
        <router-view></router-view>
    </main>
    </div>
</template>
<script>
import Aside from './components/Aside';
import Header from './components/Header';

export default {
    name: 'Layout',
    components: { Aside, Header }
}
</script>
<style>
main {
    display: flex;
}
</style>