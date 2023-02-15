<template>
    <div class="card" :class="{ shadow: props.shadow }">
        <div
            class="card_body"
            :class="{
                gradient: props.gradient,
                'beige-gradient': props.beigeGradient,
            }"
        >
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
export interface CardProps {
    gradient?: boolean
    shadow?: boolean
    beigeGradient?: boolean
}
const props = withDefaults(defineProps<CardProps>(), {})
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
.card {
    width: 100%;
    background-color: #ffffff;
    padding: 5px;
    @include for-size(lg) {
        padding: 10px;
    }
    &_body {
        width: 100%;
        height: 100%;
    }
}
.gradient {
    background: linear-gradient(153.83deg, #f9f7f3 12%, #e6edff 90.43%);
}
.shadow {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
}
.beige-gradient {
    background: linear-gradient(
        138.88deg,
        #f9f8f4 24.33%,
        #ffffff 41.2%,
        #f9f8f4 79.81%
    );
}
</style>
