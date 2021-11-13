<script>
  import {HEADER_HEIGHT, PRIMARY_COLOR_SOLANA} from 'lib/constants.ts';
  // let HEADER_HEIGHT = 20
  let primary_color = 'linear-gradient(253deg, #00FFA3, #DC1FFF)'
  // import logoSVG from 'public/figment-learn-compact.svg';


</script>


<!-- <nav class="navbar navbar-custom">
  <a class="navbar-brand" href={"#"}>
    Light color background
  </a>
</nav> -->

<nav class="navbar navbar-custom" style="height: {HEADER_HEIGHT}px; background:   {PRIMARY_COLOR_SOLANA}">
  <img src="figment-learn-compact.svg" alt="Figment Learn" height={47} width={100}>

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
</style>