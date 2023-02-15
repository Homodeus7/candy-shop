<template>
    <footer class="footer">
        <div class="footer_logo">
            <Logo size="68px" class="footer_logo__image" />
            <h1 class="footer_logo__title">Candy shop</h1>
        </div>
        <nav class="footer_nav">
            <ul class="footer_nav__list">
                <a
                    v-for="(item, i) in links"
                    :key="item.link"
                    class="link"
                    :href="item.href"
                    target="_blank"
                >
                    <component :is="images[i]" class="link_image" />
                    <span>{{ isMobile ? item.link : item.link_mobile }}</span>
                </a>
            </ul>
        </nav>
    </footer>
</template>

<script lang="ts" setup>
import { computed, reactive, shallowRef } from 'vue'
import { useWindowSize } from '@vueuse/core'

import Telegram from '@/components/icons/Telegram.vue'
import Twitter from '@/components/icons/Twitter.vue'
import OpenSea from '@/components/icons/OpenSea.vue'
import Logo from '@/components/icons/Logo.vue'

const images = shallowRef([OpenSea, Twitter, Telegram])

const links = reactive([
    {
        link: 'Twitter',
        link_mobile: 'Twitter',
        image: 'twitter',
        href: '#',
    },
    {
        link: 'Telegram',
        link_mobile: 'Chat',
        image: 'telegram',
        href: '#',
    },
])

const { width } = useWindowSize()

const isMobile = computed(() => (width.value < 768 ? false : true))
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
.footer {
    width: 100%;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $main-black;
    @include py(20px);
    @include px(24px);
    @include for-size(md) {
        @include px(32px);
    }
    @include for-size(xl) {
        @include px(98px);
    }

    // .footer_logo
    &_logo {
        align-items: center;
        display: none;
        @include for-size(md) {
            display: flex;
        }

        // .footer_logo__image
        &__image {
            margin-right: 16px;
        }

        // .footer_logo__title
        &__title {
            font-family: 'Luckiest Guy';
            font-size: 28px;
            color: #ffffff;
        }
    }

    // .footer_nav
    &_nav {
        width: 100%;

        @include for-size(md) {
            max-width: 280px;
        }

        // .footer_nav__list
        &__list {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 32px;

            @include for-size(md) {
                justify-content: flex-end;
                white-space: nowrap;
            }
            .link {
                display: flex;
                align-items: center;
                font: {
                    size: 18px;
                    weight: 500;
                }
                color: #ffffff;
                &_image {
                    margin-right: 8px;
                }
            }
        }
    }
}
</style>
