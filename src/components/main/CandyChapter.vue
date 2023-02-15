<template>
    <section class="content content-layout" id="Chapter">
        <div class="content_bg-sdk">
            <picture>
                <source
                    media="(min-width: 640px)"
                    srcset="@/assets/image/sdk/lefthouse.webp"
                    type="image/webp"
                />
                <source
                    srcset="@/assets/image/sdk/lefthouse-mobile.webp"
                    type="image/webp"
                />
                <source
                    srcset="@/assets/image/sdk/lefthouse-mobile.png"
                    type="image/png"
                />
                <img
                    src="@/assets/image/sdk/lefthouse.png"
                    alt="house"
                    class="left-house"
                />
            </picture>
            <picture>
                <source
                    media="(min-width: 640px)"
                    srcset="@/assets/image/sdk/backhouse.webp"
                    type="image/webp"
                />
                <source
                    srcset="@/assets/image/sdk/backhouse-mobile.webp"
                    type="image/webp"
                />
                <source
                    srcset="@/assets/image/sdk/backhouse-mobile.png"
                    type="image/png"
                />
                <img
                    src="@/assets/image/sdk/backhouse.png"
                    alt="house"
                    class="back-house"
                />
            </picture>
            <picture>
                <source
                    media="(min-width: 640px)"
                    srcset="@/assets/image/sdk/righthouse.webp"
                    type="image/webp"
                />
                <source
                    srcset="@/assets/image/sdk/righthouse-mobile.webp"
                    type="image/webp"
                />
                <source
                    srcset="@/assets/image/sdk/righthouse-mobile.png"
                    type="image/png"
                />
                <img
                    src="@/assets/image/sdk/righthouse.png"
                    alt="house"
                    class="right-house"
                />
            </picture>
            <picture>
                <source
                    media="(min-width: 640px)"
                    srcset="@/assets/image/sdk/road.webp"
                    type="image/webp"
                />
                <source
                    srcset="@/assets/image/sdk/road-mobile.webp"
                    type="image/webp"
                />
                <source
                    srcset="@/assets/image/sdk/road-mobile.png"
                    type="image/png"
                />
                <img
                    src="@/assets/image/sdk/road.png"
                    alt="road"
                    class="road"
                />
            </picture>

            <img
                src="@/assets/image/sdk/leftcookie.svg"
                alt="factory"
                class="left-cookie"
            />
            <picture>
                <source
                    srcset="@/assets/image/sdk/backcookie.webp"
                    type="image/webp"
                />
                <img
                    src="@/assets/image/sdk/backcookie.png"
                    alt="cookie"
                    class="back-cookie"
                />
            </picture>
        </div>

        <div class="content_sdk" v-motion-slide-visible-once-bottom>
            <div class="content_sdk-card">
                <picture>
                    <source
                        srcset="@/assets/image/sdk/rightcookie.webp"
                        type="image/webp"
                    />
                    <img
                        src="@/assets/image/sdk/rightcookie.png"
                        alt="cookie"
                        class="right-cookie"
                    />
                </picture>
                <picture>
                    <source
                        srcset="@/assets/image/sdk/topcookie.webp"
                        type="image/webp"
                    />
                    <img
                        src="@/assets/image/sdk/topcookie.png"
                        alt="cookie"
                        class="top-cookie"
                    />
                </picture>

                <h3 class="big-brown-title">Candy Chapter</h3>
                <div class="content_sdk-card-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, quidem!
                </div>
                <div class="content_sdk-card-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    animi <span>culpa iusto labore</span>, officiis consequatur
                    nihil, facilis ipsa minus est, temporibus atque aliquam? a
                    toolkit for application development, much like when you buy
                    a piece includes a bag of tools to put it together.
                </div>
                <div>
                    Lorem ipsum dolor sit amet. Ut animi
                    <span>culpa iusto labore</span>, officiis consequatur nihil,
                    facilis ipsa minus est
                </div>
            </div>

            <div class="content_sdk-button">
                <BaseButton primary>
                    <a class="button-text">Opening soon</a>
                </BaseButton>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import BaseButton from '@/components/base/BaseButton.vue'

const { width } = useWindowSize()
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.content {
    padding-top: 123px;
    padding-bottom: 500px;
    padding-left: 0 !important;
    padding-right: 0 !important;

    position: relative;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;

    @include for-size(md) {
        padding-bottom: 600px;
    }

    @include for-size(xl) {
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 200px;
    }

    &_bg-sdk {
        position: relative;

        .left-house {
            position: absolute;
        }

        .back-house {
            position: absolute;
            left: 24px;

            z-index: -1;

            @include for-size(md) {
                left: 120px;
                top: -5px;
            }
        }

        .right-house {
            position: absolute;
            right: 0;
            top: -50px;

            @include for-size(md) {
                left: 400px;
                top: -70px;
            }
        }

        .road {
            position: absolute;
            top: 165px;
            z-index: -2;
            max-width: 100%;
            @include for-size(md) {
                top: 255px;
                left: 0;
                max-width: 751px;
            }
        }

        .left-cookie {
            position: absolute;
            top: 180px;
            left: 120px;
            width: 129px;
            @include for-size(md) {
                top: 280px;
                left: 262px;
                width: 195px;
            }
        }

        .back-cookie {
            position: absolute;
            display: none;

            @include for-size(xl) {
                display: block;
                top: 440px;
                left: 860px;
                z-index: -1;
            }
        }
    }

    &_sdk {
        display: flex;
        flex-direction: column;
        align-items: center;

        @include for-size(xl) {
            align-items: flex-end;
            padding-right: 120px;
        }

        &-button {
            position: relative;
            margin-top: 56px;
            width: 343px;
            margin-bottom: 100px;

            @include for-size(xl) {
                width: 260px;
                margin-right: 5px;
                margin-top: 50px;
                margin-bottom: 0;
            }

            .chain {
                position: absolute;
                top: -115px;
                left: -11px;

                @include for-size(xl) {
                    top: -88px;
                    left: -10px;
                }
            }
        }
        .button-text {
            padding: 18px 0;
            margin: 0 auto;
            font-weight: 700;
        }

        &-card {
            position: relative;

            font-size: 16px;
            line-height: 28px;
            letter-spacing: 0.01em;

            z-index: 100;

            @include px(16px);

            @include for-size(md) {
                @include px(32px);
            }

            @include for-size(xl) {
                margin-top: 55px;
                width: 693px;
                height: 448px;
                background: linear-gradient(
                    138.88deg,
                    #f9f8f4 24.33%,
                    #ffffff 41.2%,
                    #f9f8f4 79.81%
                );
                box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.07);
                transform: rotate(3.15deg);
                padding: 40px;

                font-size: 20px;
                line-height: 32px;
                letter-spacing: 0.01em;
            }

            h3 {
                margin-bottom: 16px;
                text-align: center;

                @include for-size(xl) {
                    text-align: left;
                    margin-bottom: 24px;
                }
            }

            span {
                font-weight: 700;
                color: $main-red;
            }

            &-paragraph {
                margin-bottom: 10px;
            }

            .right-cookie {
                position: absolute;
                display: none;

                @include for-size(xl) {
                    display: block;
                    right: -65px;
                    top: -100px;
                }
            }

            .top-cookie {
                position: absolute;
                display: none;

                @include for-size(xl) {
                    display: block;
                    top: -210px;
                    right: 200px;
                }
            }
        }
    }
}
</style>
