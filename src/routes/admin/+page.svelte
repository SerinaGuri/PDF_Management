<script>
  let { data } = $props();
</script>
 
<h1>Admin-Bereich</h1>
<p>Eingeloggt als: {data.user.username}</p>
 
<h2>Alle PDFs</h2>
<table>
<thead>
<tr>
<th>Dateiname</th>
<th>Hochgeladen von</th>
<th>Aktion</th>
</tr>
</thead>
<tbody>
    {#each data.pdfs as pdf}
<tr>
<td>{pdf.filename}</td>
<td>{pdf.username}</td>
<td>
<a href={pdf.filepath} target="_blank" download>Herunterladen</a>
<form method="POST" action="?/delete" style="display:inline">
<input type="hidden" name="id" value={pdf.id} />
<button type="submit">Löschen</button>
</form>
</td>
</tr>
    {/each}
</tbody>
</table>