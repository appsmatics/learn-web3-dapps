<script lang="ts">
  //TODO: Need to specify the non aliased path here and the .ts extension
  // else it does not work. Need to investigate the aliases plugin config.
  // Sti
  import {getDataIndexingItems, getIdentityItems} from 'src/utils/constants'
  import {getStorageItems, getChainsList} from 'src/utils/constants'

  import ChainRow from './ChainRow.svelte';

  export let brand = "Appsmatics"
</script>


<div class="wrapper">
    <div class="container" style="padding: 100px">
      <h1 class="title">Web 3 stack{' '}
        <span>
          <a class="brand"
            href="https://learn.figment.io/"
            target="_blank"
            rel="noreferrer"
          >
            by {brand}
          </a>
        </span>
      </h1>
      <div class="row">
        <div class="col">
          <ChainRow title="Data Indexing" chains={getDataIndexingItems()}></ChainRow>
        </div>
        <div class="col">
          <ChainRow title="Identity" chains={getIdentityItems()}></ChainRow>
        </div>
        <div class="col">
          <ChainRow title="Storage" chains={getStorageItems()}></ChainRow>
        </div>
      </div>
      <div class="row">
        <ChainRow title="Chains" chains={getChainsList()}></ChainRow>
      </div>
    </div>
</div>


<style>
  .wrapper  {
    width: 100vw;
    height: 100vh;
    background: var(--dark-background);
  }
  .title {
    font-size: 3.0em;
    margin-bottom: 60px;
    color: white;
  }
  .brand { 
    font-size: 0.6em;
    color: var(--discord-background)
  }

  h1 span {
    color: var(--discord-background)
  }

  span a {
    text-decoration: none;
  }
  span a:hover {
    text-decoration: underline;
  }
  
</style>