<template>
    <section class="section content-layout" id="Blog">
        <div class="content">
            <div class="content_cards">
                <img
                    src="@/assets/image/swap/cookies.svg"
                    alt="cookie"
                    class="image"
                />
            </div>

            <div class="content_block">
                <div v-motion-slide-visible-once-bottom>
                    <h2 class="content_block__title big-brown-title">
                        Candy Blog
                    </h2>
                </div>
                <div class="content_block__text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem nobis, tempore doloribus harum minima inventore
                        error
                        <span class="ticker">temporibus </span> officiis
                        pariatur? Sunt animi illo aliquam exercitationem quos!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem recusandae necessitatibus perferendis
                        amet, veritatis voluptatem voluptas laborum itaque iure
                        <span class="ticker">blanditiis ut</span>, illum impedit
                        ipsam nulla nesciunt a repellendus unde minus odit
                        officia, corrupti voluptates. Sit omnis veniam
                        exercitationem laboriosam suscipit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem, error.
                    </p>
                </div>
                <div class="content_block__button">
                    <BaseButton primary>
                        <a class="button-text">Opening soon</a>
                    </BaseButton>
                </div>
            </div>
        </div>

        <div class="content_roadmap">
            <h3
                v-motion-fade-visible
                class="content_roadmap__title middle-brown-title"
            >
                candy blog
            </h3>
            <div class="content_roadmap__cards">
                <BaseCard
                    v-for="card in roadmapCards"
                    :key="card.title"
                    class="card"
                    :class="`${card.class}`"
                    beige-gradient
                >
                    <p class="card_title">{{ card.title }}</p>
                    <p class="card_text">{{ card.text }}</p>
                </BaseCard>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const roadmapCards = reactive([
    {
        title: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        class: 'second',
    },
    {
        title: '2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        class: 'third',
    },
    {
        title: '3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        class: 'fourth',
    },
])
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.section {
    padding-top: 120px;

    @include for-size(xl) {
        padding-bottom: 120px;
    }

    margin: 0 auto;

    .content {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;

        @include for-size(xl) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 0;
        }

        &_cards {
            position: relative;
            padding-top: 90px;

            .image {
                max-width: 353px;

                @include for-size(md) {
                    max-width: 580px;
                }
            }
        }

        &_block {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            @include for-size(xl) {
                max-width: 640px;
                align-items: flex-start;
            }

            &__title {
                text-align: center;

                @include for-size(xl) {
                    text-align: left;
                }
            }

            &__text {
                margin-top: 32px;
                display: flex;
                flex-direction: column;
                gap: 16px;
                width: 100%;
            }

            &__button {
                width: 343px;
                margin-top: 56px;
                position: relative;

                @include for-size(xl) {
                    width: 260px;
                }

                .chain {
                    position: absolute;
                    top: -115px;
                    left: -10px;

                    @include for-size(xl) {
                        top: -88px;
                        left: -10px;
                    }
                }
            }
        }

        &_roadmap {
            padding-top: 100px;

            @include for-size(xl) {
                padding-top: 150px;
            }

            &__title {
                text-align: center;
            }

            &__cards {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: auto;
                margin-left: auto;
                width: 100%;
                max-width: 1000px;

                @include for-size(xl) {
                    flex-direction: row;
                    justify-content: space-between;
                }

                .first {
                    transform: rotate(3.43deg);
                    margin-top: 40px;
                    margin-right: 52px;

                    @include for-size(xl) {
                        max-height: 184px;
                        margin-right: 0;
                        margin-top: 56px;
                        transform: rotate(-4.22deg);
                    }
                }

                .second {
                    transform: rotate(-1.06deg);
                    margin-top: 34px;
                    margin-left: 54px;

                    @include for-size(xl) {
                        max-height: 184px;
                        margin-left: 10px;
                        margin-top: 85px;
                        transform: rotate(2.83deg);
                    }
                }

                .third {
                    transform: rotate(0.44deg);
                    margin-top: 28px;
                    margin-right: 53px;

                    @include for-size(xl) {
                        max-height: 184px;
                        margin-right: 10px;
                        margin-top: 65px;
                        transform: rotate(-1deg);
                    }
                }

                .fourth {
                    transform: rotate(-4.73deg);
                    margin-top: 31px;
                    margin-left: 47px;

                    @include for-size(xl) {
                        max-height: 184px;
                        margin-left: 0;
                        margin-top: 92px;
                        transform: rotate(3.75deg);
                    }
                }

                .card {
                    padding: 0;
                    width: 281px;
                    height: 116px;
                    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.07);

                    @include for-size(xl) {
                        width: 282px;
                        height: 184px;
                    }

                    text-align: center;

                    &_title {
                        font-family: 'Luckiest Guy';
                        font-size: 20px;
                        color: $main-red;
                        margin-bottom: 4px;
                        padding-top: 16px;

                        @include for-size(xl) {
                            margin-bottom: 16px;
                            padding-top: 24px;
                            font-size: 24px;
                        }
                    }

                    &_text {
                        padding: 0 16px;

                        font-weight: 400;
                        font-size: 16px;
                        line-height: 28px;

                        @include for-size(xl) {
                            padding: 0 24px;

                            font-size: 20px;
                            line-height: 32px;
                        }
                    }
                }
            }
        }
        .button-text {
            padding: 18px 0;
            margin: 0 auto;
            font-weight: 700;
        }
    }
}
</style>
