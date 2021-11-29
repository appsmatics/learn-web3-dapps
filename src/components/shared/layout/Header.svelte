<script lang="ts">
  import {HEADER_HEIGHT} from '../../../utils/constants';
  import {getChainColors} from '../../../utils/colors'
  import {CHAINS} from '../../../utils/types'

  const colors = getChainColors(CHAINS.SOLANA)

  //let primary_color = 'linear-gradient(253deg, #00FFA3, #DC1FFF)'
  // import logoSVG from 'public/figment-learn-compact.svg';

  export let chain = 'Solana'
</script>


<!-- <nav class="navbar navbar-custom">
  <a class="navbar-brand" href={"#"}>
    Light color background
  </a>
</nav> -->

<nav class="navbar navbar-custom" style="height: {HEADER_HEIGHT}px; background: {colors.primaryColor}">
  <img src="figment-learn-compact.svg" alt="Figment Learn" height={47} width={100}>
  <div class="container-fluid">
    <h3>Pathways > {chain}</h3>
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
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-left: 240px;
  }
</style>