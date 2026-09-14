<script>
  // form-Daten (z.B. Fehlermeldung) von der Server-Action
  let { form } = $props();
</script>

<h1>Login</h1>

<form method="POST">
  <label>
    Username:
    <input type="text" name="username" required />
  </label>

  <label>
    Passwort:
    <input type="password" name="password" required />
  </label>

  <button type="submit">Einloggen</button>
</form>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}