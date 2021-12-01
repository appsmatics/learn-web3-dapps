<script lang="ts">	
	import {Router, Route} from 'svelte-routing'
	import Home from 'src/components/shared/home/Home.svelte'
	import Solana from 'src/components/protocols/solana/Solana.svelte'
</script>

<Router url="">
  <div>
    <Route path="solana" component="{Solana}"/>
    <Route path="/" component="{Home}" />
  </div>
</Router>

<!-- 
	https://www.npmjs.com/package/svelte-routing
	Example of how to use the routing
	https://github.com/EmilTholin/svelte-routing/tree/master/example 
-->