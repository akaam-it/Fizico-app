import { reactive } from 'vue';

export const cart = reactive({
  items: [],

  addItem(course) {
    this.items.push(course);
  },

  getTotalPrice() {
    return this.items.reduce((total, item) => total + parseFloat(item.price.replace(/,/g, '')), 0);
  }
});

export function useCartStore() {
  return cart;
}