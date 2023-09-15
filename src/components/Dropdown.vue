<template>
  <div class="flex items-center justify-between" @click="toggleDropdown">
    <div class="flex items-center gap-3">
      <img :src="dropdownIcon" :alt="dropdownName" class="max-w-[1.3rem]">
      <span class="ml-2 text-[14px] font-semibold">{{ dropdownName }}</span>
    </div>

    <div :class="isOpen ? 'rotate-180' : 'rotate-0'" class="transition-all duration-100 ease-in">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>

  </div>

  <div v-if="isOpen" class="mt-4 overflow-hidden transition-all duration-100 ease-in"
       :class="isOpen ? 'translate-y-0' : '-translate-y-5'">
    <slot name="dropdownMenu"></slot>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "DropdownComponent",
  props: {
    dropdownName: {
      type: String,
      default: "test"
    },
    dropdownIcon: {
      type: String,
      default: "/assets/icons/car.png"
    }
  },
  setup() {
    const isOpen = ref(false);
    const store = useStore()
    const isOpenOffCanvas = computed(() => store.getters.isOpen)

    watch(() => isOpenOffCanvas.value,
      async () => {
        isOpen.value = false
      }
    )

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleDropdown,
    }
  }
}
</script>
