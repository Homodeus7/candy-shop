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
                Repellendus, voluptatem.
            </p>
        </div>

        <div class="content_block content-layout">
            <BaseCard class="content_block__card">
                <div class="title">
                    <h3 class="title_text middle-brown-title">Deliver</h3>
                    <Heart size="64px" class="title_image" />
                </div>
                <p class="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat pariatur magnam necessitatibus at sequi aut. Fugiat
                    pariatur magnam necessitatibus at sequi aut. Fugiat pariatur
                    magnam necessitatibus at sequi aut.
                </p>
            </BaseCard>
            <Heart size="64px" class="blurheart-card" />
            <Heart size="100px" class="blurheart-card-desktop" />
            <div class="content_block__image">
                <img
                    src="@/assets/image/donation/cookies.svg"
                    alt="cookies"
                    class="cookies-image"
                    ref="animImg"
                    :style="{
                        transform: `translateY(${animElem.top.value / 20}%)`,
                    }"
                />
                <Heart size="64px" class="blurheart_first" />
                <Heart size="42px" class="blurheart_second" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
import Heart from '@/components/icons/Heart.vue'
import { useElementBounding } from '@vueuse/core'

const doitCards = reactive([
    {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit fugiat pariatur magnam necessitatibus at sequi.',
        class: 'first',
    },
    {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit fugiat pariatur magnam necessitatibus at sequi.',
        class: 'second',
    },
    {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit fugiat pariatur magnam necessitatibus at sequi.',
        class: 'third',
    },
    {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit fugiat pariatur magnam necessitatibus at sequi.',
        class: 'fourth',
    },
])

const animImg = ref<HTMLElement | null>(null)
const animElem = useElementBounding(animImg)
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
.content {
    padding-top: 160px;
    margin: 0 auto;
    @include for-size(xl) {
        padding-top: 190px;
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
        .cards {
            margin-top: 32px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            @include for-size(xl) {
                margin-top: 64px;
                flex-direction: row;
                justify-content: space-between;
            }
            .card {
                display: flex;
                height: 136px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                margin-top: 32px;
                @include for-size(xl) {
                    margin-top: 0;
                }
                text-align: center;
                &_image {
                    margin-bottom: 24px;
                }
                &_text {
                    color: #6d6866;
                    font-weight: 700;
                }
                &:last-child {
                    .card_text {
                        font-weight: 400;
                    }
                }
            }
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
            bottom: 80px;
        }
        @include for-size(xl) {
            padding: {
                top: 160px;
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
            filter: blur(1px);
            transform: rotate(-50.38deg);
            @include for-size(md) {
                left: 20%;
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
                transform: rotate(-50.38deg);
                position: absolute;
                left: 110px;
                top: 480px;
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
            margin-top: 84px;
            @include for-size(xl) {
                margin-top: 0;
            }
            .cookies-image {
                width: 343px;
                @include for-size(xl) {
                    width: 504px;
                }
            }
            .blurheart {
                &_first {
                    position: absolute;
                    bottom: 200px;
                    right: 180px;
                    @include for-size(xl) {
                        bottom: 320px;
                        right: 260px;
                    }
                    filter: blur(2px);
                    transform: rotate(-35.19deg);
                }
                &_second {
                    position: absolute;
                    top: -60px;
                    right: 210px;
                    @include for-size(xl) {
                        top: 60px;
                        right: 260px;
                    }
                    filter: blur(3px);
                    transform: rotate(-7.27deg);
                }
            }
        }
    }

    &_doit {
        text-align: center;
        padding: {
            top: 90px;
            bottom: 80px;
        }
        @include for-size(xl) {
            padding: {
                bottom: 120px;
            }
        }
        position: relative;
        &__title {
            text-align: center;
            padding-bottom: 32px;
            @include for-size(xl) {
                padding-bottom: 0;
            }
        }
        &__rope {
            z-index: 2;
            width: 100vw;
            position: absolute;
            top: 140px;
            display: none;
            @include for-size(xl) {
                display: block;
            }
        }
        &__rope-mobile {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            @include for-size(xl) {
                display: none;
            }
            .rope-1 {
                position: absolute;
                top: -25px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 2;
            }
            .rope-2 {
                z-index: 2;
                position: absolute;
                top: 215px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        &__cards {
            display: none;
            @include for-size(xl) {
                display: flex;
            }
            width: 100%;
            justify-content: space-between;
            padding: 0 84px;
            margin-top: 82px;

            .first {
                margin-top: -2px;
                margin-left: 50px;
                transform: rotate(4.19deg);
            }

            .second {
                margin-top: 12px;
                transform: rotate(1.4deg);
            }

            .third {
                margin-top: 12px;
                transform: rotate(-0.31deg);
            }

            .fourth {
                margin-top: -12px;
                margin-right: 50px;
                transform: rotate(-3.41deg);
            }

            .card {
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                width: 282px;
                height: 160px;

                background: linear-gradient(
                    138.88deg,
                    #f9f8f4 24.33%,
                    #ffffff 41.2%,
                    #f9f8f4 79.81%
                );
                border: 8px solid #fefefd;
                box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);

                &_text {
                    padding: 0 16px;
                    font-size: 16px;
                    line-height: 28px;
                }
            }
        }
        &__cards-moblie {
            width: 100%;
            padding-top: 32px;
            display: block;
            @include for-size(xl) {
                display: none;
            }
            .cards-group {
                &:nth-child(2) {
                    margin-top: 64px;
                }
                margin: 0 auto;
                width: 100%;
                max-width: 345px;
                display: flex;
                justify-content: space-between;

                .first {
                    height: 122px;
                    margin-top: 18px;
                    transform: rotate(2.69deg);
                }

                .second {
                    height: 140px;
                    margin-top: 28px;
                    transform: rotate(-1.41deg);
                }

                .third {
                    margin-top: 35px;
                    height: 122px;
                    transform: rotate(-1.56deg);
                }

                .fourth {
                    margin-top: 25px;
                    height: 122px;
                    transform: rotate(0.4deg);
                }
                .card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1;
                    width: 162px;
                    padding: 8px;

                    background: linear-gradient(
                        138.88deg,
                        #f9f8f4 24.33%,
                        #ffffff 41.2%,
                        #f9f8f4 79.81%
                    );
                    border: 8px solid #fefefd;
                    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);

                    &_text {
                        font-size: 12px;
                        line-height: 18px;
                    }
                }
            }
        }
    }
}
</style>
