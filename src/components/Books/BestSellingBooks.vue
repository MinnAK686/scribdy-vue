<template>
  <!-- Best Selling Section -->
  <section id="best-selling">
    <div class="d-flex justify-content-between align-items-center mt-4 mb-3">
      <h2>Bestselling in Psychology</h2>
      <p class="fw-bold text-info d-none d-sm-block">View More</p>
    </div>
    <div class="sect-container">
      <div class="best-slider">
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
                    <p class="m-0 fw-bold">{{ book.title }}</p>
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
                      <div class="text-muted mt-1">{{ book.rating }}</div>
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
        title: "Book Title One",
        author: "Anonymous",
        rating: 4.5,
        image:
          "https://imgv2-1-f.scribdassets.com/img/word_document/313226952/original/432x574/4c7f263767/1654049033?v=1",
      },
      {
        id: 2,
        title: "Book Title Two",
        author: "Anonymous",
        rating: 4.8,
        image:
          "https://imgv2-1-f.scribdassets.com/img/word_document/313226952/original/432x574/4c7f263767/1654049033?v=1",
      },
      {
        id: 3,
        title: "Book Title Three",
        author: "Anonymous",
        rating: 4.5,
        image:
          "https://imgv2-1-f.scribdassets.com/img/word_document/313226952/original/432x574/4c7f263767/1654049033?v=1",
      },
      {
        id: 4,
        title: "Book Title Four",
        author: "Anonymous",
        rating: 4.5,
        image:
          "https://imgv2-1-f.scribdassets.com/img/word_document/313226952/original/432x574/4c7f263767/1654049033?v=1",
      },
      {
        id: 5,
        title: "Book Title Five",
        author: "Anonymous",
        rating: 4.6,
        image:
          "https://imgv2-1-f.scribdassets.com/img/word_document/313226952/original/432x574/4c7f263767/1654049033?v=1",
      },
      {
        id: 6,
        title: "Book Title Six",
        author: "Anonymous",
        rating: 4.3,
        image:
          "https://imgv2-1-f.scribdassets.com/img/word_document/313226952/original/432x574/4c7f263767/1654049033?v=1",
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
        snapAlign: "center",
      },
      // 350: {
      //   itemsToShow: 2.3,
      // },
      400: {
        itemsToShow: 1.7,
        snapAlign: "center",
      },
      450: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      500: {
        itemsToShow: 2.5,
        snapAlign: "center",
      },
      600: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
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
