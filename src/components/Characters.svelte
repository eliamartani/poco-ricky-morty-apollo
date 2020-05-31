<script>
  import { getClient, query } from 'svelte-apollo';
  import characters from '../graphql/queries/characters.gql';

  const client = getClient();
  const charactersList = query(client, { query: characters });
</script>

<style>
  .characters .characters__item {
    box-sizing: border-box;
    font-size: 0;
  }

  .characters .characters__item img {
    max-width: 100%;
  }

  .characters .characters__item-name {
    font-size: 1rem;
    font-weight: bold;
  }

  .characters .characters__item-location {
    font-size: 0.8rem;
  }

  .characters .characters__items {
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 1fr;
  }
</style>

<div class="characters">
  <div class="wrapper">
    {#await $charactersList}
      <div>Loading...</div>
    {:then data}
      <div class="characters__items">
        {#each data.data['characters']['results'] as character, i}
          <div class="characters__item">
            <img src={character.image} alt={character.name} loading="lazy" />
            <p class="characters__item-name">{character.name}</p>
            <p class="characters__item-location">{character.location.name}</p>
          </div>
        {/each}
      </div>
    {:catch e}
      {e}
    {/await}
  </div>
</div>
