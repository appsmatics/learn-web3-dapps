<script lang="ts">
  //TODO: Need abds path here. Why?
  import {colors} from '../../../utils/colors.ts'

  const PROTOCOL_BOX_LENGTH = 100
  const PROTOCOL_ICON_LENGTH = 30;

</script>

<div class="wrapper" style="background: {colors.darkBackground}">
  <div style="padding: 60px">
    <div class="container">
      <h1 class="title">Learn the Web 3 stack{' '}
        <span class="brand" style="color: {colors.figmentYellow}">by{' '}
          <a style="color: {colors.figmentYellow}"
            href="https://learn.figment.io/"
            target="_blank"
            rel="noreferrer"
          >
            Figment
          </a>
        </span>
      </h1>
      <div class="row">
        <div class="col">
          
        </div>
      </div>

    </div>
  </div>
</div>


<style>
  .wrapper  {
    width: 100vw;
    height: 100vh;
  }
  .title {
    font-size: 3.5em;
    margin-bottom: 60px;
    color: white;
  }
  .brand { 
    font-size: 0.6em;
  }

  span a:hover {
    text-decoration: underline;
  }
</style>