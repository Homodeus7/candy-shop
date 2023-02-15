<template>
    <section class="tokenomics content-layout" id="Menu">
        <div class="tokenomics_title">
            <h2>Table</h2>
            <p>candy shop table</p>
        </div>
        <div class="tokenomics_table">
            <div class="header">
                <span
                    v-for="header in table.header"
                    :key="header"
                    class="header__item"
                >
                    {{ header }}
                </span>
            </div>
            <div class="rows">
                <div
                    v-for="(tableRow, index) in table.body"
                    :key="tableRow[0]"
                    class="row"
                >
                    <div
                        v-for="(item, i) in tableRow"
                        :key="item"
                        class="row__item"
                    >
                        <div v-if="i === 0" class="row__item-first">
                            <component :is="images[index]" class="cookie" />
                            <span class="">{{ item }}</span>
                        </div>
                        <span v-else>{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="tokenomics_table-mobile">
            <div class="cards">
                <div
                    v-for="(tableRow, index) in table.body"
                    :key="index"
                    class="card"
                >
                    <div
                        v-for="(item, i) in tableRow"
                        :key="item"
                        class="card_body"
                    >
                        <div v-if="i === 0" class="card_body__item-first">
                            <component :is="images[index]" class="cookie" />
                            <span class="">{{ item }}</span>
                        </div>
                        <div v-else class="card_body__item">
                            <span class="card_body__item-header">
                                {{ table.header_mobile[i] }}
                            </span>
                            <span>{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { reactive, shallowRef } from 'vue'
import {
    Menu1,
    Menu2,
    Menu3,
    Menu4,
    Menu5,
    Menu6,
    Menu7,
    Menu8,
} from '@/components/icons/tablemenu'

const images = shallowRef([
    Menu1,
    Menu2,
    Menu3,
    Menu4,
    Menu5,
    Menu6,
    Menu7,
    Menu8,
])

const table = reactive({
    header: ['Menu', 'Price', 'Cooking time'],
    header_mobile: ['Menu', 'Price', 'Cooking time'],
    body: [
        ['Lorem ipsum dolor', '18$', 'five minutes'],
        ['Lorem ipsum dolor', '15$', 'five minutes'],
        ['Lorem ipsum dolor', '15$', 'five minutes'],
        ['Lorem ipsum dolor', '18$', 'five minutes'],
        ['Lorem ipsum dolor', '15$', 'five minutes'],
        ['Lorem ipsum dolor', '15$', 'five minutes'],
        ['Lorem ipsum dolor', '14$', 'five minutes'],
        ['Lorem ipsum dolor', '10$', 'five minutes'],
    ],
})
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.tokenomics {
    padding: 80px 0;

    @include for-size(lg) {
        margin: 0 auto;
    }

    &_title {
        text-align: center;

        h2,
        p {
            font-family: 'Luckiest Guy';

            color: $main-brown;
        }

        h2 {
            font-size: 48px;
            line-height: 56px;
        }

        p {
            font-size: 36px;
            line-height: 48px;
            margin-top: 24px;
        }
    }

    &_table {
        width: 100%;
        max-width: 1065px;
        margin: 64px auto 0;
        display: none;
        flex-direction: column;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.07);

        @include for-size(lg) {
            display: flex;
        }

        &-mobile {
            margin: 40px auto 0;
            width: 343px;
            display: block;

            @include for-size(lg) {
                display: none;
            }

            .cards {
                display: flex;
                flex-direction: column;
                gap: 24px;

                .card {
                    padding: 16px;
                    background: linear-gradient(
                        138.88deg,
                        #f9f8f4 24.33%,
                        #ffffff 41.2%,
                        #f9f8f4 79.81%
                    );
                    border: 8px solid #ffffff;
                    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.07);
                    &_body {
                        &:nth-child(2) {
                            display: inline-block;
                            width: 50%;
                        }
                        &:nth-child(3) {
                            width: 50%;
                            display: inline-block;
                            padding-bottom: 12px;
                        }
                        &__item {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            gap: 8px;

                            &-header {
                                font-weight: 700;
                                font-size: 16px;
                                line-height: 28px;
                                color: #6d6866;
                            }

                            &-first {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 32px;
                                margin-bottom: 24px;

                                .cookie {
                                    margin-right: 20px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .header {
            display: flex;
            align-items: center;
            background-color: #c9d2e7;
            padding: 10px 30px;

            &__item {
                width: 100%;
                font-weight: bold;
                color: #6d6866;
                text-align: center;
            }
        }

        .rows {
            display: flex;
            flex-direction: column;
            background: linear-gradient(
                138.88deg,
                #f9f8f4 24.33%,
                #ffffff 41.2%,
                #f9f8f4 79.81%
            );

            .row {
                display: flex;
                align-items: center;
                padding: 10px 30px;

                &__item {
                    width: 100%;
                    text-align: center;
                    &-first {
                        display: flex;
                        align-items: center;

                        .cookie {
                            margin-right: 24px;
                        }
                    }
                }
            }
        }
    }
}
</style>
