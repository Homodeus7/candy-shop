<template>
    <section class="content content-layout" id="Factory">
        <div class="content_block">
            <div v-motion-slide-visible-once-bottom>
                <h2 class="content_block__title big-brown-title">
                    Candy Factory
                </h2>
            </div>
            <div class="content_block__text">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, nam.
                    <span class="ticker">Lorem ipsum dolor</span> sit amet
                    consectetur adipisicing elit. Ullam, sint.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod quis maxime cumque pariatur eos, veritatis repellendus
                    id aut rem odio!
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <a
                v-motion-slide-visible-bottom
                class="content_block__button"
                href=""
                >More</a
            >
        </div>

        <div class="content_bg-factory">
            <div class="block_bg">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcset="@/assets/image/factory/bg.webp"
                        type="image/webp"
                    />
                    <source
                        media="(max-width: 1024px)"
                        srcset="@/assets/image/factory/factory-mobile.webp"
                        type="image/webp"
                    />
                    <source
                        media="(max-width: 1024px)"
                        srcset="@/assets/image/factory/factory-mobile.png"
                        type="image/png"
                    />
                    <img
                        src="@/assets/image/factory/bg.png"
                        alt="factory"
                        class="block_bg__image"
                    />
                </picture>
            </div>

            <div
                class="big-cookie shake"
                :style="{
                    transform: `translateY(${cookieImg.top.value / 30}%)`,
                }"
                ref="bigcookie"
            >
                <img
                    src="@/assets/image/candy/paralax/paralax2.png"
                    class="image"
                />
            </div>

            <img
                class="left-cookie"
                src="@/assets/image/factory/leftcookie.png"
            />
            <img
                class="right-cookie"
                src="@/assets/image/factory/rightcookie.png"
            />

            <img
                class="top-cookie"
                src="@/assets/image/factory/topcookie.png"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useElementBounding } from '@vueuse/core'
const bigcookie = ref<HTMLElement | null>(null)
const cookieImg = useElementBounding(bigcookie)
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
.content {
    padding-top: 160px;
    margin: 0 auto;
    @include for-size(lg) {
        padding-top: 170px;
    }
    @include for-size(xl) {
        padding-top: 210px;
    }

    &_block {
        width: 100%;
        @include for-size(xl) {
            padding-left: 120px;
            max-width: 854px;
        }
        &__title {
            text-align: center;
            @include for-size(lg) {
                text-align: left;
            }
        }
        &__button {
            margin: 56px auto 0;
            max-width: 343px;
            background-color: $main-red;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background-color: #ba3333;
            }
            &:active,
            &:focus {
                background-color: #ef7f7f;
            }
            height: 64px;
            font: {
                weight: 700;
                size: 18px;
            }
            color: #ffffff;
            border-radius: 8px;
            transition: all linear 0.25s;
            @include for-size(lg) {
                max-width: 280px;
                margin: 54px 0 0;
            }
        }
        &__text {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 16px;
            max-width: 100%;
            @include for-size(xl) {
                margin-top: 32px;
                // max-width: 744px;
            }
        }
    }

    &_bg-factory {
        position: relative;
        width: 100%;
        .block_bg {
            margin-top: 96px;
            width: 100%;
            max-width: 375px;
            margin-right: auto;
            margin-left: auto;
            position: relative;
            min-height: 300px;
            @include for-size(md) {
                max-width: 500px;
            }
            @include for-size(lg) {
                max-width: 1024px;
            }
            @include for-size(xl) {
                max-width: 1335px;
                height: 494px;
            }
            &__image {
                position: absolute;
                width: 100%;
                top: -64px;
                left: -16px;
                @media (min-width: 375px) {
                    min-width: 375px;
                }
                @include for-size(lg) {
                    width: 1024px;
                    left: -32px;
                }

                @media (min-width: 1439px) {
                    width: 1439px;
                    left: -120px;
                }
            }
        }
        .big-cookie {
            position: absolute;
            top: -70px;
            left: 40%;
            right: auto;
            @include for-size(lg) {
                top: -20px;
                left: auto;
                right: 154px;
                max-width: 389px;
            }
            @include for-size(xl) {
                top: -220px;
                left: auto;
                right: 154px;
            }
            .image {
                width: 208px;
                @include for-size(lg) {
                    width: 389px;
                }
            }
        }
        .left-cookie {
            position: absolute;
            top: -70px;
            left: 10%;
            width: 83px;
            filter: blur(1px);
            @include for-size(lg) {
                filter: none;
                width: 149px;
                left: 35%;
                top: -15%;
            }
            @include for-size(xl) {
                width: 249px;
                bottom: 50%;
            }
        }
        .right-cookie {
            position: absolute;
            right: 0;
            top: 100px;
            display: none;
            @include for-size(lg) {
                right: -64px;
            }
            @media (min-width: 1439px) {
                display: block;
                right: -96px;
            }
        }
        .top-cookie {
            position: absolute;
            top: -740px;
            right: -14px;
            width: 85px;
            @include for-size(xl) {
                width: 133px;
                top: -700px;
                left: 53%;
            }
        }
    }
}
</style>
