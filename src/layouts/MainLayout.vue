<template>
    <div class="page">
        <MyHeader class="page_header" />

        <main class="page_main">
            <slot />
        </main>

        <MyFooter class="page_footer" />
    </div>
</template>

<script setup lang="ts">
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
.page {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    width: 100%;
    min-height: 100vh;

    &_main {
        max-width: 100vw;
        width: 100%;
    }
}
</style>
