<template>
  <div ref="commentForm" class="hidden transition-all space-y-3">
    <div class="flex gap-x-3.5 mb-4.5 sm:mb-5">
      <div
        class="flex items-center justify-center ml-[1px] border border-gray-100 dark:border-dark rounded-full"
      >
        <div
          class="flex items-center justify-center ml-[1px] w-11 sm:w-12 h-11 sm:h-12 bg-gray-100 dark:bg-Fizico-bg/40 rounded-full"
        >
          <svg class="w-full h-full text-slate-400">
            <use href="#user-mini"></use>
          </svg>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <span class="font-DanaBlack text-zinc-800 dark:text-slate-100">
         {{username}}
        </span>
        <span
          class="font-DanaLight text-sm opacity-70 text-zinc-800 dark:text-slate-300"
        >
          ثبت نظر جدید
        </span>
      </div>
    </div>

    <textarea
      v-model="newComment"
      rows="6"
      ref="commentForm"
      class="w-full block p-5 md:p-4 ring-1 ring-gray-400 focus:ring-gray-500 outline-none bg-gray-100 dark:bg-Fizico-bg/70 text-gray-900 dark:text-white placeholder:text-slate-500/70 font-DanaBlackMedium text-sm rounded-xl"
      placeholder="نظر خود را بنویسید ..."
    ></textarea>

    <div class="flex gap-x-3 justify-end my-2">
      <button
        @click="toggleCommentForm"
        class="flex-grow sm:grow-0 hover:scale-105 hover:bg-Fizico-color4 hover:text-slate-100 px-5 py-2 rounded-xl border border-Fizico-color4 text-Fizico-color4 transition-all"
      >
        لغو
      </button>
      <button
        @click="sendComment"
        class="flex-grow sm:grow-0 hover:scale-105 px-5 py-2 rounded-xl text-slate-100 bg-green-500 transition-all"
      >
        ارسال
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCommentFormOpen: false,
      newComment: "", 
      username:'مهدی مروتی'
    };
  },
  methods: {
      toggleCommentForm() {
      if(!this.isCommentFormOpen){
      this.$refs.commentForm.classList.remove("hidden");
      this.$refs.commentForm.classList.add("block");
      this.isCommentFormOpen = true
      this.$refs.commentForm.focus();
      }else{
         this.$refs.commentForm.classList.add("hidden");
      this.$refs.commentForm.classList.remove("block");
      this.isCommentFormOpen = false
      }
     
    },
    sendComment() {
      if (this.newComment.trim()) {
        this.$emit("addComment", this.newComment); 
        this.newComment = ""; 
        this.toggleCommentForm();
      }
    },
  },
};
</script>
