<script>
  import { Button, Label, Input, Radio, Heading } from 'flowbite-svelte';

  let userType = 'agency';
</script>

<Heading tag="h4">Registrati per poter aggiungere nuove Startup 😏</Heading>
<form class="flex flex-col space-y-6" action="/">
  <Label class="space-y-2">
    <span>Nome</span>
    <Input type="email" name="email" placeholder="name@company.com" required />
  </Label>
  <Label class="space-y-2">
    <span>Email</span>
    <Input type="email" name="email" placeholder="name@company.com" required />
  </Label>
  <Label class="space-y-2">
    <span>Password</span>
    <Input type="password" name="password" placeholder="•••••" required />
  </Label>

  <Label class="space-y-2">
    <span>Tipologia di utente:</span>
    <Radio name="userType" bind:group={userType} value="agency">Agenzia</Radio>
    <Radio name="userType" bind:group={userType} value="startup">Startup</Radio>
    <Radio name="userType" bind:group={userType} value="investor">Investitore</Radio>
  </Label>

  <Button type="submit" class="w-full">Registrati</Button>
</form>
