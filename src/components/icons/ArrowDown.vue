<template>
    <BaseIcon v-bind="props">
        <svg
            width="26"
            height="14"
            viewBox="0 0 26 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 1.5L13 12.5L24 1.5"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </BaseIcon>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/base/BaseIcon.vue'
import type { IconProps } from '@/components/base/BaseIcon.vue'

export interface IIcon extends IconProps {}

const props = defineProps<IIcon>()
</script>
