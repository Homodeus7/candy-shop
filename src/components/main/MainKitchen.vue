<template>
    <section class="content">
        <div class="content_bg">
            <div class="content_bg__picture"></div>
            <picture>
                <img
                    src="@/assets/image/candy/58661b837d90850fc3ce2a6a.png"
                    alt="kitchen"
                    class="content_cookie"
                />
            </picture>
        </div>

        <div class="content_action">
            <div v-motion-roll-bottom class="action-block">
                <h2 class="content_action__title">What is Candy shop?</h2>
                <BaseButton
                    v-motion-slide-visible-bottom
                    primary
                    class="content_action__button"
                >
                    <a class="button-text">More</a>
                </BaseButton>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.content {
    position: relative;
    height: 100%;
    &_bg {
        width: 100%;
        margin-top: -108px;
        &__picture {
            width: 100%;
            height: calc(120vh + 5px);
            @include for-size(3xl) {
                height: calc(140vh + 25px);
            }
            background-image: url('../../assets/image/ellipse-mobile.svg'),
                url('../../assets/image/candy/peachbackground.jpg');

            @include for-size(md) {
                background-image: url('../../assets/image/ellipse.svg'),
                    url('../../assets/image/candy/peachbackground.jpg');
            }
            filter: blur(3px);
            background-repeat: no-repeat, no-repeat;
            background-size: cover, cover;
            background-position: center, center;
        }
    }
    &_cookie {
        margin-top: -60px;
        width: 100%;
        max-width: 400px;
        @include for-size(sm) {
            max-width: 525px;
        }
        @include for-size(lg) {
            margin-top: -80px;
            max-width: 700px;
        }

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    &_action {
        width: 100%;
        position: absolute;
        left: 50%;
        bottom: 40px;
        @include for-size(lg) {
            bottom: 40px;
        }

        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
        .action-block {
            text-align: center;
        }
        &__title {
            max-width: 400px;
            font-size: 40px;
            text-align: center;
            @include for-size(lg) {
                font-size: 56px;
                max-width: 100%;
            }
            font-family: 'Luckiest Guy';
            color: #ffffff;
        }
        &__button {
            z-index: 2;
            margin : {
                top: 24px;
                left: auto;
                right: auto;
            }

            max-width: 343px;
            @include for-size(lg) {
                max-width: 280px;
                margin-top: 34px;
            }
            .button-text {
                padding: 18px 0;
                font-weight: 700;
            }
        }
    }
}
</style>
