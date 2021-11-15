
<script lang="ts">
  import type {ChainType} from '../../../utils/types.ts'
  import {getChainColors} from '../../../utils/colors.ts'
  export let chain: ChainType = {}
  
  const colors = getChainColors(chain.id)
  const colorCSS = `--primary-color: ${colors.primaryColor};
    --secondary-color: ${colors.secondaryColor}`
  $: console.log(colorCSS)

  // export let label = "Solana"
  // export let logoUrl = "https://cryptologos.cc/logos/solana-sol-logo.svg?v=010"

</script>

<div class="protocol-box" style="{colorCSS}">
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

</style>