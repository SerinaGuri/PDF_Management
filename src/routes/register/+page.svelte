<script>
  let { form } = $props();
</script>
 
<h1 class="text-2xl font-semibold mb-6 text-slate-900">Registrieren</h1>
 
<form method="POST" class="flex flex-col gap-4 max-w-sm">
  <label class="flex flex-col gap-1 text-sm text-slate-600">
    Username:
    <input
      type="text"
      name="username"
      required
      class="border border-stone-300 rounded px-3 py-2 text-base bg-white text-slate-800"
    />
  </label>
 
  <label class="flex flex-col gap-1 text-sm text-slate-600">
    Passwort:
    <input
      type="password"
      name="password"
      required
      class="border border-stone-300 rounded px-3 py-2 text-base bg-white text-slate-800"
    />
  </label>
 
  <button
    type="submit"
    class="self-start bg-slate-900 text-white font-semibold text-sm px-4 py-2.5 rounded hover:bg-orange-800"
  >
    Registrieren
  </button>
</form>
 
{#if form?.error}
  <p class="text-red-700 text-sm mt-4">{form.error}</p>
{/if}
 
<p class="text-sm text-slate-500 mt-6">
  Schon einen Account? <a href="/login" class="text-orange-800">Hier einloggen</a>
</p>