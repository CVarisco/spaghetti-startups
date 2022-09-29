<script>
  import '../app.postcss';
  import { Search, Heading, P, Label, Select } from 'flowbite-svelte';
  let selected;
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
</script>

<div class="container max-w-2xl mx-auto p-5">
  <div class="text-center">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
      >Spaghetti Startups 🍝
    </Heading>
    <P class="mb-3 text-center" color="text-gray-500 dark:text-gray-400" opacity={1} space="normal"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi amet cupiditate. Qui nisi reprehenderit,
      incidunt placeat eos molestias officiis nobis odit commodi nam quae expedita debitis hic temporibus optio!</P>
  </div>

  <div class="my-10">
    <div />
    <Search />
    <div id="filters" class="flex items-center mt-3">
      <Label
        >Seleziona industry
        <Select class="mt-2" items={countries} bind:value={selected} placeholder="Industry" />
      </Label>
      <Label class="mx-4">
        Seleziona età
        <Select class="mt-2" items={countries} bind:value={selected} placeholder="Età" />
      </Label>
    </div>
  </div>
</div>

<slot />
