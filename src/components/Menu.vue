<template>
    <div v-if="isMobile" v-for="(link, index) in menuLink" key="index" class="mb-8">
        <router-link :to="link.link" class="flex items-center gap-5">
            <img :src="link.icon" :alt="link.name" class="max-w-[1.4rem]">
            <span class="text-[14px] text-slate-900 font-semibold capitalize">
                {{ link.name }}
            </span>
        </router-link>
    </div>
    <div v-else v-for="(link, index) in menuLink" :key="index">
        <router-link :to="link.link">
            <span class="text-[14px] text-slate-900 font-semibold capitalize">
                {{ link.name }}
            </span>
        </router-link>
    </div>
</template>
<script>
import { watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
    name: "Menu",
    props: {
        isMobile: {
            type: Boolean,
            default: false
        },
        menuLink: {
            type: Array,
            default: () => [
                {
                    name: "test",
                    link: "test",
                    icon: "/assets/icons/home.png"
                }
            ]
        }
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        // const isOpen = computed(() => store.getters.isOpen)

        watch(() => route.fullPath,
            async () => {
                store.dispatch('setOffCanvasClose')
            }
        )

        return {
        }
    }
}
</script>