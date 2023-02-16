<template>
    <section class="content" id="Shop">
        <div
            v-motion-slide-visible-once-bottom
            class="content_title content-layout"
        >
            <h2 class="big-brown-title">Candy Shop</h2>
        </div>
        <div class="content_cards content-layout">
            <p class="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, voluptatem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, voluptatem.
            </p>
        </div>

        <div class="content_block content-layout">
            <BaseCard class="content_block__card">
                <div class="title">
                    <h3 class="title_text middle-brown-title">Deliver</h3>
                    <CandyCookie size="64px" class="title_image" />
                </div>
                <p class="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat pariatur magnam necessitatibus at sequi aut. Fugiat
                    pariatur magnam necessitatibus at sequi aut. Fugiat pariatur
                    magnam necessitatibus at sequi aut.
                </p>
            </BaseCard>
            <CandyCookie size="64px" class="blurheart-card" />
            <CandyCookie size="100px" class="blurheart-card-desktop" />
            <div class="content_block__image">
                <img
                    src="@/assets/image/candy/candybakery.png"
                    alt="cookies"
                    class="cookies-image"
                    ref="animImg"
                    :style="{
                        transform: `translateY(${animElem.top.value / 20}%)`,
                    }"
                />
                <CandyCookie size="64px" class="blurheart_first" />
                <CandyCookie size="42px" class="blurheart_second" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
import { useElementBounding } from '@vueuse/core'
import CandyCookie from '@/components/icons/CandyCookie.vue'

const animImg = ref<HTMLElement | null>(null)
const animElem = useElementBounding(animImg)
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
.content {
    padding-top: 150px;
    margin: 0 auto;
    @include for-size(xl) {
        padding-top: 160px;
    }

    &_title {
        text-align: center;
        margin: 0 auto;
    }
    &_cards {
        max-width: 750px;
        margin: 0 auto;
        .title {
            margin-top: 32px;
            text-align: center;
        }
    }

    &_block {
        margin: 0 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: {
            top: 80px;
            bottom: 90px;
        }
        @include for-size(xl) {
            padding: {
                top: 10px;
                bottom: 90px;
            }
            flex-direction: row;
            justify-content: space-between;
        }

        .blurheart-card {
            position: absolute;
            top: 340px;
            left: 0;
            z-index: 1;
            filter: blur(0px);
            transform: rotate(10deg);
            @include for-size(md) {
                left: 10%;
            }
            @include for-size(lg) {
                z-index: -1;
            }
        }
        .blurheart-card-desktop {
            z-index: -1;
            @include for-size(lg) {
                z-index: 3;
                filter: blur(1px);
                transform: rotate(50deg);
                position: absolute;
                left: 110px;
                top: 500px;
            }
        }

        &__card {
            z-index: 2;
            max-width: 332px;
            padding: 10px;
            transform: rotate(2.22deg);
            @include for-size(xl) {
                max-width: 662px;
                padding: 32px;
                transform: rotate(3.41deg);
            }

            .title {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                &_text {
                    max-width: 450px;
                    font-size: 28px;
                }
            }
            .text {
                margin-top: 12px;
            }
        }
        &__image {
            position: relative;
            margin-top: 54px;
            filter: blur(1px);
            @include for-size(xl) {
                margin-top: 0;
            }
            .cookies-image {
                width: 343px;
                @include for-size(xl) {
                    width: 604px;
                }
            }
            .blurheart {
                &_first {
                    position: absolute;
                    bottom: 180px;
                    right: 180px;
                    @include for-size(xl) {
                        bottom: 320px;
                        right: 260px;
                    }
                    filter: blur(1px);
                    transform: rotate(35deg);
                }
                &_second {
                    position: absolute;
                    top: -60px;
                    right: 210px;
                    @include for-size(xl) {
                        top: 70px;
                        right: 260px;
                    }
                    filter: blur(2px);
                    transform: rotate(7deg);
                }
            }
        }
    }
}
</style>
