
<script lang="ts">
  import type {ChainType} from '../../../utils/types.ts'
  import {getChainColors, colors} from '../../../utils/colors.ts'
  export let chain: ChainType = {}
  
  const chainColors = getChainColors(chain.id)
  const colorCSS = `--primary-color: ${chainColors.primaryColor};
    --secondary-color: ${chainColors.secondaryColor}`
  $: console.log(colorCSS)

  // export let label = "Solana"
  // export let logoUrl = "https://cryptologos.cc/logos/solana-sol-logo.svg?v=010"

</script>

<div class="protocol-box" style="{colorCSS}">
  {#if !chain.active}
    <div class="coming-soon" style="background-color: {colors.figmentYellow}">
      Soon!
    </div>
  {/if}
    <img src="{chain.logoUrl}" alt="" class="protocol-logo">
    <div class="protocol-label">
      {chain.label}
    </div>    
</div>

<style>
  .protocol-box {
    position: relative;

    height: 100px;
    width: 100px;
    border: solid 1px #eee;
    background-color: #f8f8f8;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .protocol-box:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color)
  }

  .protocol-logo {
    height: 30px;
    margin-bottom: 10px;
  }
  .protocol-label {
    font-size: 16px;
    font-weight: 500;
  }
  .coming-soon {
    position: absolute;
    align-items: center;
    justify-content: center;
    height: 42px;
    width: 42px;
    top: -12px;
    right: -12px;
    text-align: center;
    border-radius: 10%;
    font-size: 0.8em;
    color: #555;
    font-weight: 500;
  }

</style>