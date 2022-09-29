<script lang="ts">
  import { Card, Avatar, Badge } from 'flowbite-svelte';

  export let name: string;
</script>

<Card class="px-5 py-8 flex w-72 mx-auto shadow-lg">
  <div class="flex flex-col items-center pb-4">
    <Avatar size="lg" src="http://placekitten.com/200/200" />
    <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
      <a href="#" class="hover:underline cursor-pointer">{name}</a>
    </h5>
    <span class="text-sm text-gray-500 dark:text-gray-400 my-3">Amare i gattini sempre e ovunque!</span>
    <div>
      <Badge large={true}>Default</Badge>
      <Badge large={true}>Default</Badge>
      <Badge large={true}>Default</Badge>
    </div>
  </div>
</Card>
