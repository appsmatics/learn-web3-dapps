<script lang="ts">
  //TODO: Need to specify the non aliased path here and the .ts extension
  // else it does not work. Need to investigate the aliases plugin config.
  // Sti
  import {colors} from '../../../utils/colors.ts'
  import {getDataIndexingItems, getIdentityItems} from '../../../utils/constants.ts'
  import {getStorageItems, getChainsList} from '../../../utils/constants.ts'

  import ChainRow from './ChainRow.svelte';

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