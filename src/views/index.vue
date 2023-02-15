<template>
    <MainLayout>
        <div class="main">
            <MainKitchen />
            <CandyInfo />
            <CandyMenu />
            <CandyTagline />
            <div class="beige-bg">
                <CandyFactory />
                <!-- <HowToBake class="howtostake" /> -->
            </div>
            <CandyBlog />
            <div class="beige-bg">
                <CandyShop class="shop" />

                <CandyGallery />
            </div>
            <CandyChapter />
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainKitchen from '@/components/main/MainKitchen.vue'
import CandyShop from '@/components/main/CandyShop.vue'
import CandyMenu from '@/components/main/CandyMenu.vue'
import CandyFactory from '@/components/main/CandyFactory.vue'
import CandyChapter from '@/components/main/CandyChapter.vue'
import CandyTagline from '@/components/main/CandyTagline.vue'
import CandyBlog from '@/components/main/CandyBlog.vue'
import CandyInfo from '@/components/main/CandyInfo.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import CandyGallery from '@/components/main/CandyGallery.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
.main {
    width: 100%;
}

.beige-bg {
    width: 100%;
    height: 100%;
    background-image: url('../assets/image/bg-beige-mobile.svg');
    @include for-size(md) {
        background-image: url('../assets/image/bg-beige.svg');
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.beige-bg-2 {
    width: 100%;
    background-image: url('../assets/image/bg-beige-2-mobile.svg');
    @include for-size(md) {
        background-image: url('../assets/image/bg-beige-2.svg');
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.shop {
    margin: 0 auto;
}
</style>
