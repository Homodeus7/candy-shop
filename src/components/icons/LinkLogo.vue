<template>
    <BaseIcon v-bind="props">
        <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.8434 9.31986L12.9511 13.3184C12.9606 13.6719 12.8293 14.0147 12.5861 14.2714C12.3429 14.5281 12.0076 14.6776 11.6542 14.6871L4.32348 14.8846C3.96998 14.8941 3.62719 14.7628 3.3705 14.5196C3.11381 14.2763 2.96426 13.9411 2.95474 13.5876L2.75733 6.25692C2.74781 5.90343 2.8791 5.56063 3.12233 5.30394C3.36556 5.04725 3.70079 4.8977 4.05429 4.88818L8.05284 4.7805"
                stroke="#6D6866"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.6648 2.70923L14.6633 2.60155L14.771 6.6001"
                stroke="#6D6866"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M7.52993 10.1297L14.6632 2.60166"
                stroke="#6D6866"
                stroke-width="1.2"
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
