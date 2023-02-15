<template>
    <BaseIcon v-bind="props">
        <img src="/src/assets/image/cake_icon.svg" alt="cake icon" />
    </BaseIcon>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/base/BaseIcon.vue'
import type { IconProps } from '@/components/base/BaseIcon.vue'

export interface IIcon extends IconProps {}

const props = defineProps<IIcon>()
</script>
