<template>
    <section class="content content-layout">
        <div class="content_block">
            <div v-motion-slide-visible-once-bottom>
                <h2 class="content_block__title big-brown-title">Candy info</h2>
            </div>

            <div class="content_block__text">
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    <span class="primary">adipisicing elit</span>. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Nobis, sunt!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, tenetur!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nobis, sunt! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                    <span class="primary">Consequuntur, tenetur!</span>
                </p>
            </div>

            <div class="content_block__links">
                <BaseButton primary>
                    <a class="button-text">Buy</a>
                </BaseButton>
                <BaseButton primary>
                    <a class="button-text">More</a>
                </BaseButton>
            </div>
        </div>

        <div
            class="content_bg shake"
            ref="candy"
            :style="{
                transform: `translateY(${candyElem.top.value / 40}%)`,
            }"
        >
            <picture>
                <source
                    srcset="@/assets/image/candy/paralax/paralax1.png"
                    type="image/webp"
                />
                <img
                    src="@/assets/image/candy/paralax/paralax1.png"
                    alt="candy"
                    class="content_bg__picture"
                />
            </picture>
        </div>
        <div class="content__links">
            <BaseButton primary>
                <a class="button-text">Buy</a>
            </BaseButton>
            <BaseButton primary class="content_action__button">
                <a class="button-text">More</a>
            </BaseButton>
        </div>
    </section>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/base/BaseButton.vue'
import { ref, watch } from 'vue'
import { useAnimation } from '@/composables/'
import { useElementBounding } from '@vueuse/core'

const web4 = ref<HTMLElement | null>(null)
const { top, height } = useElementBounding(web4)

const candy = ref<HTMLElement | null>(null)
const candyElem = useElementBounding(candy)

const animation = ref(false)
watch(
    () => top.value,
    (value) => {
        animation.value = useAnimation({
            top: value,
            height: height.value,
        }).animation.value
    }
)
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.content {
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include for-size(xl) {
        flex-direction: row;
        justify-content: space-between;
        padding-top: 120px;
        margin: 0 auto;
    }

    &__links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 17px;
        margin-top: 60px;

        @include for-size(lg) {
            display: none;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            width: 343px;
            height: 56px;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.01em;

            @include for-size(lg) {
                width: 260px;
                height: 64px;
                font-size: 18px;
                line-height: 32px;
            }
        }
    }

    &_block {
        @include for-size(xl) {
            width: 745px;
        }

        &__title {
            text-align: center;

            @include for-size(xl) {
                text-align: left;
            }
        }

        &__text {
            font-size: 16px;
            line-height: 28px;
            margin-top: 16px;

            @include for-size(lg) {
                font-size: 20px;
                line-height: 32px;
            }

            p {
                margin-top: 16px;
                .primary {
                    font-weight: 700;
                    color: $main-red;
                }
            }
        }

        &__links {
            display: none;

            @include for-size(lg) {
                display: flex;
                flex-direction: row;
                gap: 21px;
                margin-top: 60px;
                text-align: center;
            }

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                width: 343px;
                height: 56px;
                font-weight: 700;
                font-size: 18px;
                text-align: center;
                line-height: 24px;
                letter-spacing: 0.01em;

                @include for-size(lg) {
                    width: 260px;
                    height: 64px;
                    font-size: 18px;
                    line-height: 32px;
                }
            }
        }
    }
    .button-text {
        padding: 18px 0;
        margin: 0 auto;
        font-weight: 700;
    }

    &_bg {
        &__picture {
            width: 297px;
            @include for-size(md) {
                width: 470px;
            }
        }
    }
}
</style>
