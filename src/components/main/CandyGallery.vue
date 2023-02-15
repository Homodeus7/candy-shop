<template>
    <section class="section content-layout" id="Gallery">
        <div class="content">
            <h3 v-motion-fade-visible class="content__title big-brown-title">
                Candy Gallery
            </h3>
            <div class="content_text">
                <p>
                    Lorem ipsum dolor <span>sit amet consectetur</span>
                    adipisicing elit. Facere inventore magni voluptatum. Iure ab
                    tempore quae numquam eaque eius ad sunt quisquam. Ipsum,
                    animi atque?
                </p>
                <p class="content_text_icon">
                    <span>Lorem ipsum dolor sit amet.</span>
                    <GalleryHeart :size="iconSize" />
                </p>
            </div>
            <div class="content__images">
                <button class="arrow-left-icon" @click="sliderLeft">
                    <ArrowLeftCircle />
                </button>
                <button class="arrow-right-icon" @click="sliderRight">
                    <ArrowRightCircleVue />
                </button>
                <div v-auto-animate class="container" ref="slider">
                    <div
                        v-for="art in arts"
                        :key="art.id"
                        :style="{
                            transform: `rotate(${sliderRef.top.value / 80}deg)`,
                        }"
                    >
                        <component
                            :is="iconArts[art.id]"
                            class="image-gallery"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, ref, shallowRef, reactive } from 'vue'
import { useElementBounding, useWindowSize, useDebounceFn } from '@vueuse/core'
import GalleryHeart from '@/components/icons/GalleryHeart.vue'
import ArrowLeftCircle from '@/components/icons/ArrowLeftCircle.vue'
import ArrowRightCircleVue from '@/components/icons/ArrowRightCircle.vue'

import {
    Art1,
    Art2,
    Art3,
    Art4,
    Art5,
    Art6,
    Art7,
    Art8,
} from '@/components/icons/arts'

const iconArts = shallowRef([Art1, Art2, Art3, Art4, Art5, Art6, Art7, Art8])

let arts = reactive([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
])

const { width } = useWindowSize()
const iconSize = computed(() => (width.value < 1280 ? '24' : '32'))

const slider = ref<HTMLElement | null>(null)
const sliderRef = useElementBounding(slider)

const sliderRight = useDebounceFn(() => {
    const item = arts.shift()
    if (item) arts.push(item)
}, 200)

const sliderLeft = useDebounceFn(() => {
    const item = arts.pop()
    if (item) arts.unshift(item)
}, 200)
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.section {
    padding-top: 120px;

    @include for-size(xl) {
        padding-bottom: 120px;
    }

    margin: 0 auto;

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__title {
            text-align: center;
        }

        &_text {
            margin-top: 16px;
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            text-align: center;

            @include for-size(xl) {
                margin-top: 32px;
                margin-bottom: 70px;
                max-width: 937px;
                font-size: 20px;
                line-height: 32px;
            }

            span {
                font-weight: 700;
                color: $main-red;
            }

            &_icon {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
        }

        &__images {
            margin: 0 auto;
            width: 100%;
            max-width: 1080px;
            position: relative;

            .container {
                width: 100%;
                max-width: 1080px;
                padding-top: 30px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 12px;
                overflow: hidden;
                @include for-size(xl) {
                    flex-wrap: nowrap;
                    justify-content: start;
                }
            }

            .arrow-right-icon {
                position: absolute;
                right: -38px;
                top: 50%;
                transform: translateY(-60%);
                border-radius: 24px;
                display: none;
                z-index: 10;
                @include for-size(xl) {
                    display: block;
                }
            }
            .arrow-left-icon {
                position: absolute;
                left: -38px;
                top: 50%;
                transform: translateY(-60%);
                border-radius: 24px;
                display: none;
                @include for-size(xl) {
                    display: block;
                }
            }
        }
    }
}
</style>
