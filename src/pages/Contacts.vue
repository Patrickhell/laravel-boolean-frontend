<template>
  <h3 class="text-center">
    Contact us
  </h3>
    <form class="g-3 m-3">
      <div class=" mb-3">
        <label for="validationDefault01" class="form-label">First name</label>
        <input type="text" class="form-control" id="validationDefault01" value="" required>
      </div>
      <div class="mb-3">
        <label for="validationDefault02" class="form-label">Last name</label>
        <input type="text" class="form-control" id="validationDefault02" value="" required>
      </div>
      
      <div class="mb-3">
        <label for="validationDefault03" class="form-label">City</label>
        <input type="text" class="form-control" id="validationDefault03" required>
      </div>
      <div class="mb-3">
        <label for="validationDefault04" class="form-label">State</label>
        <select class="form-select" id="validationDefault04" required>
          <option selected disabled value="">Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="validationDefault05" class="form-label">Zip</label>
        <input type="text" class="form-control" id="validationDefault05" required>
      </div>
      
      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
          <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" type="submit">Send</button>
      </div>
    </form>

  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>