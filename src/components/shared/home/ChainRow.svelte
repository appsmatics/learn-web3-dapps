<script lang="ts">
  import type {ChainType} from 'src/utils/types'

  import Protocol from './Protocol.svelte'
  export let title;
  export let chains : ChainType[];
  // $: console.log(chains)
</script>

<div class="section-container">
  <div class="section-title">
    {title}
  </div>
  <div class="space-right">
    {#each chains as  chain}
      <Protocol chain={chain}></Protocol>
      {#if !chain.active}
      <span class="coming-soon">
        Soon!
      </span>
    {/if}
    {/each}
  </div>
</div>

<style>
  
  .section-container {
    margin-bottom: 40px;
    padding-right: 30px;
  }

  .section-title {
    font-size: 1.3em;
    margin-bottom: 20px;
    color: white;
    font-weight: 500;
    color: var(--discord-background);
    border-bottom: solid 1px rgb(255 242 155 / 35%);
  }  

  .space-right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: space-between; */
  }
  .coming-soon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    width: 42px;
    top: -10px;
    right: 40px;
    text-align: center;
    border-radius: 10%;
    font-size: 0.8em;
    background: var(--discord-background);
    font-weight: 5  00;
  }
</style>