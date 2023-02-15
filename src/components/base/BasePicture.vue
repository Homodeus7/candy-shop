<template>
    <picture class="picture">
        <source :srcset="`${props.src}.webp`" type="image/webp" />
        <img :src="`${props.src}.png`" :alt="props.alt" class="picture_webp" />
    </picture>

    <picture data-v-f8853af8="">
        <source
            media="(min-width: 2601px)"
            srcset="/_nuxt/img/iPhone_13_Pro_4k.a71e4ee.webp"
            type="image/webp"
            data-v-f8853af8=""
        />
        <source
            media="(max-width: 2600px)"
            srcset="/_nuxt/img/iPhone_13_Pro.0fac1ed.webp"
            type="image/webp"
            data-v-f8853af8=""
        />
        <source
            media="(min-width: 2601px)"
            srcset="/_nuxt/img/iPhone_13_Pro_4k.536d2a3.png"
            type="image/png"
            data-v-f8853af8=""
        />
        <source
            media="(max-width: 2600px)"
            srcset="/_nuxt/img/iPhone_13_Pro.eb04281.png"
            type="image/png"
            data-v-f8853af8=""
        />
        <img
            src="/_nuxt/img/iPhone_13_Pro_4k.536d2a3.png"
            alt="iPhone_13_Pro"
            class="platform__content__item__picture"
            data-v-f8853af8=""
        />
    </picture>
</template>

<script lang="ts" setup>
export interface PictureProps {
    src: string
    alt?: string
    size?: string
}

const props = defineProps<PictureProps>()
</script>

<style lang="scss" scoped>
.picture {
    width: 100%;
    &_webp {
        width: 100%;
    }
}
</style>
