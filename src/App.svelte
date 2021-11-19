<script lang="ts">
	
	import {Router, Route, Link} from 'svelte-routing'
	import Home from 'components/shared/home/Home.svelte'
	// import Header from 'components/shared/layout/Header.svelte'
	import Solana from './components/protocols/solana/Solana.svelte'
	import Test from './Test.svelte'
</script>

<Router url="">
  <div>
    <Route path="/test" component="{Test}"/>
    <Route path="solana" component="{Solana}"/>
    <Route path="/" component="{Home}" />
  </div>
	<!-- <Home></Home> -->
</Router>
<!-- <Header></Header> -->