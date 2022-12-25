<template>
  <!-- Sign up -->
  <form>
    <h5 class="mb-4 mt-2 text-center">Sign up</h5>
    <div class="mb-3">
      <label for="regEmail" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="regEmail"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="pass" class="form-label">Password</label>
      <input type="password" class="form-control" id="pass" />
    </div>
    <div class="mb-3">
      <label for="repPassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="repPassword" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="checkAccept" />
      <label class="form-check-label" for="checkAccept"
        >Accept term and condition</label
      >
    </div>
    <button type="submit" class="btn btn-primary">Sign up</button>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
