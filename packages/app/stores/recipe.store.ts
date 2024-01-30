import Fuse from "fuse.js";

export const useRecipeStore = defineStore("search", () => {
  const { find } = useStrapi();

  const search = ref("");
  const { data: recipes, pending } = useAsyncData("allRecipes", () =>
    find("recipes", { populate: "*" })
  );
  console.log(recipes.value?.data, pending.value);
  const elements = computed<any[]>(() => recipes.value?.data || []);
  const keys = ["Title", "Description", "Tags"];

  const fuse = computed(
    () =>
      new Fuse(unref(elements), {
        keys,
        threshold: 0.2,
      })
  );

  const results = computed(() => {
    if (!search.value) return unref(elements);
    return [...fuse.value.search(search.value).map((r) => r.item)];
  });

  return { search, results, pending };
});
