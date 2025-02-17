<template>
      <div   v-for="post in relatedPosts"
        :key="post.id" 
              class="flex items-center gap-x-4 dark:bg-gray-900 bg-white p-3.5 rounded-2xl ">
              <img
              @click="goToPost(post.id)"
                src="/images/BlogImg.jpg"
                class="h-20 rounded-xl cursor-pointer"
                :alt="post.title"
                :title="post.title"
              />
              <div>
                <h3
                @click="goToPost(post.id)"
                :title="post.title"

                  class="font-DanaBlack line-clamp-1 cursor-pointer"
                  >{{post.title}}</h3>
                
                <div class="flex flex-col md:flex-row md:items-center gap-x-5  gap-y-2 text-slate-500 mt-3
">
                <div class="flex items-end gap-x-1">
                  <svg class="size-5">
                    <use href="#user"></use>
                  </svg>
                  <span class="font-DanaBlack text-sm">{{post.author}}</span>
                </div>
                <div class="flex items-end gap-x-1">
                  <svg class="size-5">
                    <use href="#calendar"></use>
                  </svg>
                  <span class="font-DanaBlack text-sm">{{post.date}}</span>
                </div></div>
              </div>
            </div>
</template>

<script>

export default {
  props: ["posts", "currentId"],
  computed: {
    relatedPosts() {
      let filteredPosts = this.posts.filter((post) => post.id != this.currentId);
     return filteredPosts.sort(() => 0.5 - Math.random()).slice(0, 4);
    },
  },
  methods: {
    goToPost(id) {
      this.$router.push(`/blog/${id}`);
    },
  },
};
</script>