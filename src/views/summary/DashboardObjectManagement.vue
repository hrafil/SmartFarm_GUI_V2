<template>

<b-row>
        <b-col md="12">
          <b-card
            header-tag="header"
            footer-tag="footer">

            <b-row>
          <b-col sm="12">
            <h4 class="card-title mb-0">Důležité objekty</h4>
          </b-col>
        </b-row>
        <br>
            <b-list-group>
              
              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex flex-row">
                <!-- <div class="align-self-start"> -->
                    <div class="d-flex flex-column align-items-center justify-content-center mr-3">
                      <!-- <div class="d-flex align-items-center"> -->
                        <div>0</div>
                        <div><small class="text-muted">BOOL</small></div>
                    </div>
                <!-- </div> -->
                <div class="d-flex flex-column justify-content-center">
                  <h5 class="mb-1">List group item heading</h5>

                <span>
                  Donec id elit non mi porta gravida at eget metus. Maecenas
                  sed diam eget risus varius blandit.
                </span>
                </div>
                <div class="d-flex flex-column justify-content-center ml-auto">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button">Button</button>
                  </div>
                </div>
                </div>
                </div>
              </b-list-group-item>
          
              <b-list-group-item href="#" class="flex-column align-items-start">

                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas
                  sed diam eget risus varius blandit.
                </p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </b-list-group-item>
              <b-list-group-item href="#" disabled class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Disabled List group item</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas
                  sed diam eget risus varius blandit.
                </p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
</template>

<script>
export default {
  name: "dashboard-object-management",
  data: function() {
    return {
      showForm: false
    };
  },
};
</script>
