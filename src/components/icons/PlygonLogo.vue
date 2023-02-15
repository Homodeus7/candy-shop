<template>
    <BaseIcon v-bind="props">
        <picture>
            <img src="@/assets/image/mission/polygon.svg" />
        </picture>
    </BaseIcon>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/base/BaseIcon.vue'
import type { IconProps } from '@/components/base/BaseIcon.vue'

export interface IIcon extends IconProps {}

const props = defineProps<IIcon>()
</script>
