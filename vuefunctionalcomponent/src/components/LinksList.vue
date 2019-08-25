<template>
  <ul>
    <li v-for="(link,index) in links" :key="index">
      <slot
        name="link"
        :link="link"
        :bookmark="bookmark"
        :toggleButtonAttrs="{style:[link.canToggle?{display:'none'}:{}]}"
        :toggleButtonEvents="{click:()=>bookmark(link)}"
      ></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "links-list",
  data() {
    return {
      links: [
        {
          href: "http://www.baidu.com",
          title: "baidu",
          bookmarked: false,
          canToggle: true
        },
        {
          href: "http://www.bing.com",
          title: "bing",
          bookmarked: true,
          canToggle: false
        }
      ]
    };
  },
  methods: {
    bookmark(link) {
      link.bookmarked = !link.bookmarked;
    }
  }
};
</script>

<style>
</style>