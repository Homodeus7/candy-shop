<template>
    <BaseIcon v-bind="props">
        <img src="@/assets/image/candy/candycookie.png" />
    </BaseIcon>
</template>

<script lang="ts" setup>
import BaseIcon from '@/components/base/BaseIcon.vue'
import type { IconProps } from '@/components/base/BaseIcon.vue'

export interface IIcon extends IconProps {}

const props = defineProps<IIcon>()
</script>
