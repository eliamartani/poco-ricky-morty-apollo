<script>
  import client from '../graphql/client.js';
  import { setClient } from 'svelte-apollo';
  import Characters from './Characters.svelte';
  import Header from './Header.svelte';

  setClient(client);
</script>

<div class="app">
  <Header name="Ricky & Morty API + Svelte + Apollo" />
  <Characters />
</div>
