<script>
  let { form } = $props();
</script>

<h1 class="text-xl font-semibold text-gray-900 mb-6">Login</h1>

<form method="POST" class="flex flex-col gap-4 max-w-xs">
  <label class="flex flex-col gap-1 text-sm text-gray-600">
    Username
    <input type="text" name="username" required class="border border-gray-300 rounded px-3 py-2 text-gray-900" />
  </label>
  <label class="flex flex-col gap-1 text-sm text-gray-600">
    Passwort
    <input type="password" name="password" required class="border border-gray-300 rounded px-3 py-2 text-gray-900" />
  </label>
  <button type="submit" class="self-start bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-700">
    Einloggen
  </button>
</form>

{#if form?.error}
  <p class="text-red-600 text-sm mt-3">{form.error}</p>
{/if}

<p class="text-sm text-gray-500 mt-6">
  Noch kein Konto? <a href="/register" class="text-gray-800 underline">Registrieren</a>
</p>