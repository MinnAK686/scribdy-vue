<template>
  <header>
    <div class="fixed-top topbar-controller">
      <div class="container-lg">
        <div class="topbar-container">
          <div class="logo">
            <div class="d-flex align-items-center">
              <div class="d-sm-none">
                <a
                  class="btn"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <i class="bi bi-list fs-2"></i>
                </a>
              </div>
              <a href="#">
                <img src="../assets/img/logo.svg" alt="" />
              </a>
            </div>
          </div>
          <div
            class="wrapper__search_input_container search_input_container logged_in"
            role="search"
          >
            <form class="search_form">
              <div class="input_wrapper">
                <button type="button" class="close_related_search_button">
                  <span class="SvgIcon-module_wrapper__1fPqw icon">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-hidden="true"
                      class="SvgIcon-module_icon__sUHUn"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.414 7l3.293-3.293-1.414-1.414-5 5L.586 8l.707.707 5 5 1.414-1.414L4.414 9H15V7H4.414z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span
                      style="
                        border: 0;
                        clip: rect(0 0 0 0);
                        height: 1px;
                        margin: -1px;
                        overflow: hidden;
                        padding: 0;
                        position: absolute;
                        width: 1px;
                        white-space: nowrap;
                        word-wrap: normal;
                      "
                      >Close suggestions</span
                    ></span
                  ></button
                ><label
                  ><span class="visually_hidden">Search</span
                  ><input
                    type="search"
                    autocapitalize="off"
                    autocomplete="off"
                    autocorrect="off"
                    class="search_input"
                    data-e2e="megamenu-top-bar-search-input"
                    id="header_search_input"
                    name="query"
                    placeholder="Search"
                    value="" /></label
                ><button
                  aria-disabled="false"
                  class="TextButton-module_wrapper__ZwW-w TextButton-module_default__ekglb search_button no_spinner"
                  data-e2e="megamenu-top-bar-search-button"
                  type="submit"
                >
                  <span class="TextButton-module_content__6x-Ra"
                    ><span class="TextButton-module_children__HwxUl"
                      ><span class="SvgIcon-module_wrapper__1fPqw icon"
                        ><svg
                          width="24"
                          height="24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-hidden="true"
                          class="SvgIcon-module_icon__sUHUn"
                        >
                          <path
                            d="M20.71 20.29l-4.4-4.4A7.874 7.874 0 0018 11c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l4.4 4.4 1.41-1.42zM10 17c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
                            fill="currentColor"
                          ></path></svg></span
                      ><span class="visually_hidden">Search</span></span
                    ></span
                  >
                </button>
              </div>
            </form>
          </div>
          <div class="user">
            <div class="d-none d-lg-block">
              <div class="d-flex align-items-center">
                <div class="dropdown" style="margin-right: 1rem">
                  <p
                    class="dropdown-toggle m-0 text-muted"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EN
                  </p>
                  <ul class="dropdown-menu text-center">
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-globe"></i
                      ></a>
                      <hr />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">EN</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">UK</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Espanol</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Arbic</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Ducth</a>
                    </li>
                  </ul>
                </div>
                <a href="#" class="text-secondary text-decoration-none fw-bold">
                  <i class="bi bi-upload px-2"></i>
                  <span>Upload</span>
                </a>
              </div>
            </div>
            <div class="d-none d-sm-block">
              <div class="d-flex align-items-center">
                <div>
                  <button class="btn-cus">Read free for 30 days</button>
                </div>
                <div class="profile">
                  <span class="user-profile">
                    <img
                      src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                      alt=""
                      @click="showProfileInfo=!showProfileInfo"
                    />
                  </span>
                  <div v-if="showProfileInfo">
                    <div class="profile-info-container">
                      <div>
                        <h4>Hi User!</h4>
                        <ul class="profile-save">
                          <li>
                            <a href="#">
                              <i class="bi bi-bookmark"></i>
                              Saved
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="bi bi-upload"></i>
                              Uploads
                            </a>
                          </li>
                          <li>
                            <a href="#">Language(EN)</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="#">Scribe Perks</a>
                          </li>
                          <li>
                            <a href="#">Read for free</a>
                          </li>
                        </ul>
                        <ul class="user-account">
                          <li>
                            <a href="#">Your Account</a>
                          </li>
                          <li>
                            <a href="#">Public profile</a>
                          </li>
                          <li>
                            <a href="#">Document uploads</a>
                          </li>
                          <li>
                            <a href="#">FAQ and support</a>
                          </li>
                          <li>
                            <a href="#">Sign out</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="offcanvas offcanvas-start for-mobile"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <a href="#" class="offcanvas-title">
                <img
                  src="../assets/img/logo.svg"
                  style="width: 5.5rem; height: auto"
                  alt=""
                />
              </a>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="">
                <div class="greeting">
                  <a
                    href="#"
                    class="text-decoration-none text-secondary toggleOffcanvas"
                  >
                    <span class="profile-picture">
                      <img
                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                        alt=""
                      />
                    </span>
                    <span class="user-name"> Hi User! </span>
                  </a>
                  <div class="back-user"></div>
                </div>
                <div class="mobile-profile-info-container">
                  <ul class="profile-save">
                    <li>
                      <a href="#">
                        <i class="bi bi-bookmark"></i>
                        Saved
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-upload"></i>
                        Uploads
                      </a>
                    </li>
                    <li>
                      <a href="#">Language(EN)</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Scribe Perks</a>
                    </li>
                    <li>
                      <a href="#">Read for free</a>
                    </li>
                  </ul>
                  <ul class="user-account">
                    <li>
                      <a href="#">Your Account</a>
                    </li>
                    <li>
                      <a href="#">Public profile</a>
                    </li>
                    <li>
                      <a href="#">Document uploads</a>
                    </li>
                    <li>
                      <a href="#">FAQ and support</a>
                    </li>
                    <li>
                      <a href="#">Sign out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let showProfileInfo = ref(false);

    return {
      showProfileInfo,
    };
  },
};
</script>

<style></style>
