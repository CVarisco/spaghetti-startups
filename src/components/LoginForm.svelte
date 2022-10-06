<script>
  import { Button, Label, Input, Heading } from 'flowbite-svelte';
</script>

<Heading tag="h4">Loggati per aggiungere nuove Startup 😎</Heading>
<form class="flex flex-col space-y-6" action="/">
  <Label class="space-y-2">
    <span>Email</span>
    <Input type="email" name="email" placeholder="name@company.com" required />
  </Label>
  <Label class="space-y-2">
    <span>Password</span>
    <Input type="password" name="password" placeholder="•••••" required />
  </Label>

  <Button type="submit" class="w-full">Log in</Button>
</form>
