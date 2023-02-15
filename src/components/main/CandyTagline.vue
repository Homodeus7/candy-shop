<template>
    <section class="content content-layout">
        <div
            class="content_bg shake"
            ref="candy"
            :style="{
                transform: `translateY(${candyElem.top.value / 40}%)`,
            }"
        >
            <picture>
                <img
                    src="@/assets/image/candy/paralax/paralax3.png"
                    alt="candy"
                    class="content_bg__picture"
                />
            </picture>
        </div>

        <div class="content_block">
            <div v-motion-slide-visible-once-bottom>
                <h2 class="content_block__title big-brown-title">
                    Candy tagline
                </h2>
            </div>

            <div class="content_block__text">
                <p>
                    We aim to
                    <span class="primary">create a substantial connection</span>
                    that envisions everything from web applications to household
                    items.
                </p>
                <p>
                    This already transcends Web 3.0 thinking and is a symbiosis
                    with <span class="primary">Web 4.0 machines</span> and all
                    self-operating systems.
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

const candy = ref<HTMLElement | null>(null)
const candyElem = useElementBounding(candy)
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.cards {
    padding-top: 60px;
    max-width: 780px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @include for-size(lg) {
        flex-direction: row;
        align-items: flex-start;
    }
    &_item {
        text-align: center;
        height: 197px;
        position: relative;
        max-width: 330px;
        @include for-size(lg) {
            max-width: 364px;
        }
        &:last-child {
            margin-top: 32px;
            @include for-size(lg) {
                margin-top: 0;
            }
        }
    }
}

.chain_link {
    position: absolute;
    bottom: 12px;
    color: $black-color;
    font-size: 12px;
    display: flex;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    &:hover {
        text-decoration: underline;
    }
}
.chain_icon {
    position: absolute;
    top: 30%;
    left: 25%;
}

.link_logo {
    margin-left: 4px;
    margin-bottom: 3px;
}
.content {
    padding-top: 120px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @include for-size(xl) {
        flex-direction: row;
        justify-content: space-between;
        padding-top: 50px;
        margin: 0 auto;
    }
    &_bg {
        &__picture {
            width: 313px;
            @include for-size(md) {
                width: 460px;
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
    }
}
</style>
