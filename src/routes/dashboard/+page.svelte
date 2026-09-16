<script>
  let { data, form } = $props();
</script>

<div class="flex justify-between items-center mb-6">
  <h1 class="text-xl font-semibold text-gray-900">Willkommen, {data.user.username}</h1>
  <a href="/logout" class="text-sm text-gray-500 hover:text-gray-800 no-underline">Ausloggen</a>
</div>

<form method="POST" action="?/upload" enctype="multipart/form-data" class="flex items-center gap-3 max-w-sm pb-6 border-b border-gray-200">
  <input type="file" name="pdf" accept="application/pdf" required class="text-sm text-gray-600" />
  <button type="submit" class="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-700 shrink-0">
    Hochladen
  </button>
</form>

{#if form?.error}
  <p class="text-red-600 text-sm mt-3">{form.error}</p>
{/if}
{#if form?.success}
  <p class="text-green-700 text-sm mt-3">Upload erfolgreich!</p>
{/if}

<h2 class="text-sm font-semibold text-gray-500 mt-8 mb-2">Meine PDFs</h2>
<ul>
  {#each data.pdfs as pdf}
    <li class="flex justify-between items-center py-3 border-b border-gray-200 text-sm">
      <span class="text-gray-800">{pdf.filename}</span>
      <a href={pdf.filepath} target="_blank" download class="text-gray-700 border border-gray-300 rounded px-3 py-1 text-xs no-underline hover:bg-gray-100">
        Herunterladen
      </a>
    </li>
  {:else}
    <p class="text-gray-400 text-sm py-3">Noch keine Dateien hochgeladen.</p>
  {/each}
</ul>