<template>
    <picture>
        <img v-bind="props" src="/src/assets/image/candy/menu/menu7.png" />
    </picture>
</template>

<script lang="ts" setup>
export interface IIcon {}

const props = defineProps<IIcon>()
</script>
