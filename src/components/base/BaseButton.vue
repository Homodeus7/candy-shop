<template>
    <button
        v-bind="props"
        :class="[
            {
                ...props,
            },
        ]"
        @click="emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
export interface ButtonProps {
    disabled?: boolean
    primary?: boolean
    secondary?: boolean
    outline?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {})

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
$timeout: 0.25s;
button {
    width: 100%;
    height: 64px;
    font: {
        weight: 700;
        size: 18px;
    }
    color: #ffffff;
    border-radius: 8px;
    transition: all linear $timeout;
    &.primary {
        background-color: $main-red;
        &:hover {
            background-color: #ba3333;
        }
        &:active,
        &:focus {
            background-color: #ef7f7f;
        }
    }
    &.disabled {
        // opacity: 0.85;
        cursor: not-allowed;
        background-color: $main-disabled;
    }
}
</style>
