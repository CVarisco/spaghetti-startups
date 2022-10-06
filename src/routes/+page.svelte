<script>
  import { Heading } from 'flowbite-svelte';
  import CompanyCard from '$components/CompanyCard.svelte';

  export let data;

  const { startups } = data;
</script>

<div id="startups-list" class="container mx-auto pb-5">
  <Heading tag="h2" class="text-center md:text-left">Last added</Heading>
  <hr class="my-2" />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-10">
    {#each startups as startup}
      <CompanyCard name={startup.name} description={startup.description} />
    {/each}
  </div>
</div>
