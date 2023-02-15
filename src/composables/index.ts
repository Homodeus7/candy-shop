import { useWindowSize } from '@vueuse/core'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { onClickOutside as onClickOutsideCore } from '@vueuse/core'

export const onClickOutside = (
    ...args: Parameters<typeof onClickOutsideCore>
) => {
    onClickOutsideCore(...args)
    const [r, f, o] = args
    onMounted(() =>
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') f(event as any)
        })
    )
    onBeforeUnmount(() => window.removeEventListener('keydown', () => 0))
}

const { height } = useWindowSize()

interface element {
    top: number
    height: number
}

export const useAnimation = (el: element) => {
    const animation = ref(false)
    // console.log(`t:${el.top} h:${el.height} wh:${windowSize.height.value}`)
    if (el.top < height.value && el.top + el.height > 0) {
        animation.value = true
    } else animation.value = false

    return { animation }
}

export const useScroll = (id: string) => {
    document?.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
    })
}
