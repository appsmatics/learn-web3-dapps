<script lang="ts">
  import {link} from 'svelte-routing'

  import type {ChainType} from 'src/utils/types'
  import {getChainColors} from 'src/utils/colors'
  export let chain: ChainType
  
  const chainColors = getChainColors(chain.id)
  const colorCSS = `--primary-color: ${chainColors.primaryColor};
    --secondary-color: ${chainColors.secondaryColor}`
  // $: console.log(colorCSS)

  // export let label = "Solana"
  // export let logoUrl = "https://cryptologos.cc/logos/solana-sol-logo.svg?v=010"

</script>

<div class="protocol-box" style="{colorCSS}">
  <a href="/{chain.id}" use:link>
      <img src="{chain.logoUrl}" alt="" class="protocol-logo">
      <div class="protocol-label">
        {chain.label}
      </div>  
    </a>  
  </div>

  
<style>
  .protocol-box a {
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

  a:hover {
    background: var(--primary-color);
    color: var(--secondary-color)
  }
  a {
    text-decoration: none;
    color: black;
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