<template>
  <main class="main">
    <BestSellingBooks></BestSellingBooks>
    <SavedBooks></SavedBooks>
    <PsychologyBooks></PsychologyBooks>
  </main>
</template>

<script>
import PsychologyBooks from "./Books/PsychologyBooks";
import SavedBooks from "./Books/SavedBooks";
import BestSellingBooks from "./Books/BestSellingBooks";
export default {
  components: {
    PsychologyBooks,
    SavedBooks,
    BestSellingBooks,
  },
};
</script>

<style>
.card-item-img img {
  width: 100%;
}
</style>
