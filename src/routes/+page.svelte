<script>
	import { Search, Heading, P, Card, ToolbarButton, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
</script>

<div class="container max-w-2xl mx-auto p-5">
	<div class="text-center">
		<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
			>Spaghetti Startups 🍝
		</Heading>
		<P class="mb-3 text-center" color="text-gray-500 dark:text-gray-400" opacity={1} space="normal"
			>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi amet cupiditate. Qui nisi reprehenderit,
			incidunt placeat eos molestias officiis nobis odit commodi nam quae expedita debitis hic temporibus optio!</P
		>
	</div>

	<div class="my-10">
		<Search />
	</div>
</div>

<div id="startups-list" class="container mx-auto">
	<Heading tag="h2">Last added</Heading>
	<hr class="my-2" />

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-10">
		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					<a class="underline cursor-pointer">zerocento.studio</a>
				</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>
		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">
					<a class="underline cursor-pointer">zerocento.studio</a>
				</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>
		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">
					<a class="underline cursor-pointer">zerocento.studio</a>
				</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>
		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>

		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>

		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>
		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>

		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>
		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>

		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>
		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>

		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>
		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>

		<Card padding="sm">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="http://placekitten.com/200/200" />
				<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white underline">zerocento.studio</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">Settore: Gattini</span>
				<span class="text-sm text-gray-500 dark:text-gray-400">Descrizione: Amare i gattini sempre e ovunque!</span>
			</div>
		</Card>
	</div>
</div>
