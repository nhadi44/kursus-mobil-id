<template>
  <div v-for="(link, index) in linkName" key="index" class="mb-4 px-11">
    <router-link :to="link.link" class="text-[12px] text-slate-900">
      {{ link.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "DropdownLink",
  props: {
    linkName: {
      type: Array,
      default: () => [
        {
          name: "test",
          link: "test"
        }
      ]
    }
  }
}
</script>
