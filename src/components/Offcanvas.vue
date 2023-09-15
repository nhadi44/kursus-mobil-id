<template>
  <button @click="openOffCanvasMenu">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>
  </button>

  <div :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }" @click="closeOffCanvasMenu"
       class="fixed bg-slate-300 w-full left-0 top-0 h-screen opacity-50 transition-all ease-in duration-150 z-10">
  </div>

  <div :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
       class="fixed bg-white w-3/4 md:w-2/4 left-0 top-0 h-screen px-12 py-6 transition-all ease-in duration-150 z-20">

    <div class="flex items-center justify-between mb-12">
      <h1 class="font-semibold text-xl text-slate-900">Kursus Mobil ID</h1>
      <button class="text-slate-950 p-3 w-14 h-14" @click="closeOffCanvasMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="pr-4">
      <Menu :is-mobile="true" :menu-link="menuLink" />

      <div class="mb-8">
        <Dropdown dropdown-name="Jenis Kursus" dropdown-icon="/assets/icons/car.png">
          <template #dropdownMenu>
            <Link :link-name="courseType" />
          </template>
        </Dropdown>
      </div>
      <div class="mb-8">
        <Dropdown dropdown-name="Tentang Kursus Mobil ID" dropdown-icon="/assets/icons/about.png">
          <template #dropdownMenu>
            <Link :link-name="aboutUs" />
          </template>
        </Dropdown>
      </div>

      <div class="mb-8">
        <Dropdown dropdown-name="Layanan Lainnya" dropdown-icon="/assets/icons/service.png">
          <template #dropdownMenu>
            <Link :link-name="otherService" />
          </template>
        </Dropdown>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 -translate-y-10 translate-x-8 w-[80%]">
      <button class="bg-yellow-400 py-3 px-4 rounded-md w-full text-slate-900 font-semibold">
        Mulai Kursus Bersama Kami
      </button>
    </div>

  </div>
</template>
<script>
import { ref, computed } from "vue";
import Dropdown from "./Dropdown.vue";
import Link from "./DropdownLink.vue"
import Menu from "./Menu.vue";
import { useStore } from "vuex";

export default {
  name: "OffcanvasComponent",
  components: {
    Dropdown,
    Link,
    Menu
  },

  setup() {
    const store = useStore()
    const isOpen = computed(() => store.getters.isOpen)
    const courseType = computed(() => store.getters.courseType)
    const aboutUs = computed(() => store.getters.aboutUs)
    const otherService = computed(() => store.getters.otherService)

    const openOffCanvasMenu = () => {
      store.dispatch('setOffcanvasOpen')
    }

    const closeOffCanvasMenu = () => {
      store.dispatch('setOffCanvasClose')
    }

    const menuLink = ref([
      {
        name: "Halaman Utama",
        link: "/",
        icon: "/assets/icons/home.png"
      },
    ])

    return {
      isOpen,
      openOffCanvasMenu,
      closeOffCanvasMenu,
      courseType: courseType.value,
      aboutUs: aboutUs.value,
      otherService: otherService.value,
      menuLink
    };
  },
}
</script>
