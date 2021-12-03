<script lang="ts">
  import {HEADER_HEIGHT} from 'src/utils/constants';

  //let primary_color = 'linear-gradient(253deg, #00FFA3, #DC1FFF)'
  // import logoSVG from 'public/figment-learn-compact.svg';

  export let chain
  export let chainColors
  export let themeColors
</script>


<!-- <nav class="navbar navbar-custom">
  <a class="navbar-brand" href={"#"}>
    Light color background
  </a>
</nav> -->

<nav class="navbar navbar-custom" style="height: {HEADER_HEIGHT}px; background: {chainColors.primaryColor}">
  <div class="col">
  <div class="row justify-content-start align-items-center">
    <div class="col col1">
      <img src="figment-learn-compact.svg" alt="Figment Learn" height={47} width={100}>
    </div>
    <div class="col col2 chain-title">
      <a href ="/">Pathways > </a>
      <span>{chain}</span>
    </div>
    <div class="col col3">
      <div class="row align-items-center">
        <a
          href="https://discord.com/invite/fszyM7K"
          target="_blank"
          rel="noreferrer"
        >
          <div class="discord" style="background: {themeColors.discordBackground}">
            Need help? Find us on
            <img src='discord.svg' alt="Discord" height={22} width={100}>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
</nav>

<style>
  .navbar-custom {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    /* height: ${HEADER_HEIGHT}px; */
    /* height: 30px; */
    z-index: 10;
    padding: 0 40px;
    /* background: ${({primary_color}) => primary_color}; */
    border-bottom: solid 2px black;  
  }
  .col1 {
    max-width: 10%;
  }

  .col2 {
    /* width: 80%; */
  }
  .col3  {
    max-width: 30%;
  }

  a {
    text-decoration: none;
  }

  .chain-title {
    color: black;
    font-size: 24px;
    font-weight: 600;
    margin-left: 24px;
  }
  .chain-title a {
    color: black;
  }

  .discord {
    font-weight: 600;
    padding: 8px 10px;
    border-radius: 3px;
    background: yellow;
    color: black !important;
    box-shadow: #9b9b9b 0px 0px 5px 1px;
  }
</style>