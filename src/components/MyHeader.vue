<template>
    <header class="header" :class="{ 'bg-color': isColor }">
        <RouterLink :to="{ name: 'home' }">
            <div class="header_logo">
                <Logo size="80px" class="header_logo__image" />
                <h1 class="header_logo__title">Candy shop</h1>
            </div>
            <Logo size="80px" class="header_logo-mobile" />
        </RouterLink>
        <nav class="header_nav">
            <ul class="header_nav__list relative">
                <li
                    v-for="item in links"
                    :key="item.link"
                    @click="scroll(item.link)"
                >
                    <div class="links-block">
                        <div class="with-chevron">
                            <span class="link">{{ item.link }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <button @click="menu = true">
            <Menu class="header_menu" />
        </button>
        <div v-auto-animate class="header_block-mobile">
            <nav v-if="menu" class="header_block-mobile__nav" ref="navmenu">
                <button @click="menu = false" class="header_menu-close">
                    <MenuClose />
                </button>
                <ul class="header_block-mobile__list">
                    <li
                        v-for="item in links"
                        :key="item.link"
                        @click="scroll(item.link)"
                        class="link"
                        style="padding-top: 32px"
                    >
                        {{ item.link }}
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Menu from '@/components/icons/Menu.vue'
import MenuClose from '@/components/icons/MenuClose.vue'
import Logo from '@/components/icons/Logo.vue'

import { onClickOutside, useScroll } from '@/composables'

import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const isColor = ref(false)

watch(
    () => y.value,
    (value) => {
        if (value > 100) {
            isColor.value = true
        } else isColor.value = false
    }
)

const links = reactive([
    { link: 'Menu' },
    { link: 'Blog' },
    { link: 'Shop' },
    { link: 'Chapter' },
])

const menu = ref(false)
const navmenu = ref<HTMLElement | null>(null)

onClickOutside(navmenu, () => (menu.value = false))

const route = useRoute()
const router = useRouter()
const scroll = async (link: string) => {
    if (link === 'Token') {
        router.push('/token')
    } else {
        if (route.name !== 'home') {
            await router.push('/')
        }
        useScroll(link)
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.links-block {
    position: relative;
}
.nested-links {
    width: 200px;
    padding: 16px;
    position: absolute;
    top: 45px;
    background: linear-gradient(
        138.88deg,
        #f9f8f4 24.33%,
        #ffffff 41.2%,
        #f9f8f4 79.81%
    );
    box-shadow: 0px 1px 40px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    display: block;
}
.with-chevron {
    display: flex;
    align-items: center;
    .chevron {
        margin-left: 14px;
    }
    .chevron_rotate {
        margin-left: 14px;
        transform: rotate(180deg);
    }
}

.audit-links {
    position: relative;
}
.report {
    position: absolute;
    width: 200px;
    padding: 16px;
    top: -10px;
    right: -180px;
    background: linear-gradient(
        138.88deg,
        #f9f8f4 24.33%,
        #ffffff 41.2%,
        #f9f8f4 79.81%
    );
    box-shadow: 0px 1px 40px rgba(0, 0, 0, 0.12);
    border-radius: 8px;

    &_mobile {
        position: absolute;
        top: 200px;
        background: linear-gradient(153.83deg, #f9f7f3 12%, #e6edff 90.43%);
        padding: 5px 10px;
        border-radius: 12px;
        color: black;
    }
}

.bg-color {
    background-color: #c9e2b9 !important;
}
.header {
    transition-duration: 500ms;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
    background-color: transparent;
    position: fixed;
    z-index: 10;
    @include py(12px);
    @include for-size(lg) {
        @include py(20px);
    }
    @include px(24px);
    @include for-size(md) {
        @include px(32px);
    }
    @include for-size(xl) {
        @include px(98px);
    }
    // .header_logo
    &_logo {
        display: none;
        align-items: center;
        @include for-size(lg) {
            display: flex;
        }
        // .header_logo__image
        &__image {
            width: 46px;
            @include for-size(lg) {
                width: 65px;
                margin-right: 16px;
            }
        }

        // .header_logo__title
        &__title {
            margin-top: 15px;
            font-family: 'Luckiest Guy';
            font-size: 28px;
            color: $main-black;
            display: none;
            @include for-size(lg) {
                display: inline-block;
            }
        }

        &-mobile {
            margin-top: 10px;
            display: block;
            @include for-size(lg) {
                display: none;
            }
        }
    }

    // .header_nav
    &_nav {
        width: 100%;
        max-width: 660px;
        display: none;
        margin-left: auto;
        @include for-size(lg) {
            display: inline-block;
        }

        // .header_nav__list
        &__list {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .link {
                cursor: pointer;
                font-weight: 600;
                font: {
                    size: 20px;
                }
                color: $main-black;

                &:hover {
                    color: $main-red;
                }
            }
        }
    }
    // .header_menu
    &_menu {
        display: block;
        @include for-size(lg) {
            display: none;
        }
    }
    &_menu-close {
        margin-left: auto;
    }
    // .header_nav-mobile
    &_block-mobile {
        display: block;
        @include for-size(lg) {
            display: none;
        }
        position: fixed;
        top: 0;
        right: 0;

        .nested-link {
            color: $main-black;
            font-size: 16px;
            font-weight: 600;
        }

        &__nav {
            width: 187px;
            height: 100vh;
            padding: 24px 32px 0;
            background: linear-gradient(153.83deg, #f9f7f3 12%, #e6edff 90.43%);
        }

        &__list {
            margin-top: 96px;
            display: flex;
            flex-direction: column;

            .link {
                cursor: pointer;
                font-weight: 600;
                color: $main-black;
                &:last-child {
                    margin-bottom: 0;
                }
                font-size: 18px;
                &:hover {
                    color: $main-red;
                }
            }
        }
    }
}
</style>
