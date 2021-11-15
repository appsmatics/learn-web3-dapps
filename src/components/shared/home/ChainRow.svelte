<script lang="ts">
  import type {ChainType} from '../../../utils/types.ts'
  import {colors} from '../../../utils/colors.ts'

  import Protocol from './Protocol.svelte'
  export let title;
  export let chains : ChainType[];
  $: console.log(chains)
</script>

<div class="section-container" style="--title-color: {colors.figmentYellow};">
  <div class="section-title">
    {title}
  </div>
  <div class="space-right">
    {#each chains as  chain}
    <Protocol chain={chain}></Protocol>
    {/each}
  </div>
</div>

<style>
  
  .section-container {
    margin-bottom: 40px;
    padding-right: 30px;
  }

  .section-title {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: white;
    font-weight: 500;
    color: var(--title-color, white) ;
    border-bottom: solid 1px rgb(255 242 155 / 35%);
  }  

  .space-right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: space-between; */
  }
</style>