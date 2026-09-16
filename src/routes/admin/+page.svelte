<script>
  let { data } = $props();
</script>

<div class="flex justify-between items-center mb-6">
  <div>
    <h1 class="text-xl font-semibold text-gray-900">Admin-Bereich</h1>
    <p class="text-sm text-gray-500">{data.user.username}</p>
  </div>
  <a href="/logout" class="text-sm text-gray-500 hover:text-gray-800 no-underline">Ausloggen</a>
</div>

<table class="w-full text-sm border-collapse">
  <thead>
    <tr>
      <th class="text-left text-xs font-semibold text-gray-500 pb-2 border-b border-gray-300">Dateiname</th>
      <th class="text-left text-xs font-semibold text-gray-500 pb-2 border-b border-gray-300">Von</th>
      <th class="text-left text-xs font-semibold text-gray-500 pb-2 border-b border-gray-300">Aktion</th>
    </tr>
  </thead>
  <tbody>
    {#each data.pdfs as pdf}
      <tr>
        <td class="py-3 border-b border-gray-200 text-gray-800">{pdf.filename}</td>
        <td class="py-3 border-b border-gray-200 text-gray-600">{pdf.username}</td>
        <td class="py-3 border-b border-gray-200">
          <a href={pdf.filepath} target="_blank" download class="text-gray-700 border border-gray-300 rounded px-3 py-1 text-xs no-underline hover:bg-gray-100 mr-2">
            Herunterladen
          </a>
          <form method="POST" action="?/delete" class="inline">
            <input type="hidden" name="id" value={pdf.id} />
            <button type="submit" class="text-red-700 border border-red-300 rounded px-3 py-1 text-xs hover:bg-red-50">
              Löschen
            </button>
          </form>
        </td>
      </tr>
    {/each}
  </tbody>
</table>