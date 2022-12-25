<template>
  <section id="saved-books">
    <div class="d-flex justify-content-between align-items-center mt-4 mb-3">
      <h2>Titles You've Saved</h2>
      <p class="fw-bold text-info d-none d-sm-block">View More</p>
    </div>
    <div class="sect-container">
      <div class="saved-slider owl-carousel owl-theme">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="book in books" :key="book.id">
            <div class="carousel__item">
              <div class="item">
                <div class="card-item">
                  <a href="#" class="card-item-title">
                    <span>Book Title</span>
                  </a>
                  <div class="card-item-header">
                    <span>
                      <div class="card-item-img-controller">
                        <div class="card-item-img">
                          <img :src="book.image" alt="" />
                        </div>
                      </div>
                    </span>
                  </div>
                  <div class="card-item-body">
                    <span class="text-muted">Ebook</span>
                    <!-- <p class="m-0 fw-bold">The Subtle Art Of Not Giving A F**k</p> -->
                    <p class="m-0 fw-bold">{{ book.titile }}</p>
                    <a
                      href="#"
                      class="link-info text-decoration-none fw-bold"
                      >{{ book.author }}</a
                    >
                  </div>
                  <div class="card-item-footer">
                    <div class="card-item-rating">
                      <div class="d-flex text-warning">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-regular fa-star"></i></span>
                      </div>
                      <div class="text-muted mt-1">4/5</div>
                    </div>
                    <div class="save-to-bookmark">
                      <div>
                        <i class="fa-regular fa-bookmark"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <navigation>
              <template #next>
                <i class="fa-solid fa-circle-arrow-right"></i>
              </template>
              <template #prev>
                <i class="fa-solid fa-circle-arrow-left"></i>
              </template>
            </navigation>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <p class="fw-bold text-info d-block mt-3 mb-4 d-sm-none">View More</p>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data: () => ({
    books: [
      {
        id: 1,
        title: "The Subtle Art Of Not Giving A F**k",
        author: "Mark Manson",
        rating: 4.5,
        image:
          "https://imgv2-2-f.scribdassets.com/img/word_document/322011391/original/432x574/248a446bed/1670975927?v=1",
      },
      {
        id: 2,
        title: "Tools of Titans",
        author: "Timothy Ferriss",
        rating: 4.8,
        image:
          "https://imgv2-2-f.scribdassets.com/img/word_document/333734978/original/432x574/402f087e26/1652204099?v=1",
      },
      {
        id: 3,
        title: "Tribe of Mentors",
        author: "Timothy Ferriss",
        rating: 4.5,
        image:
          "https://imgv2-2-f.scribdassets.com/img/word_document/364999910/original/432x574/aeef3dc27b/1664145838?v=1",
      },
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      300: {
        itemsToShow: 1.7,
        snapAlign: "start",
      },
      // 350: {
      //   itemsToShow: 2.3,
      // },
      400: {
        itemsToShow: 1.7,
        snapAlign: "start",
      },
      450: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      500: {
        itemsToShow: 2.5,
        snapAlign: "start",
      },
      600: {
        itemsToShow: 3,
        snapAlign: "start",
      },
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "start",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
});
</script>

<style></style>
