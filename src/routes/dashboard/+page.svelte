<script>
  let { data, form } = $props();
</script>

<h1>Willkommen, {data.user.username}</h1>

<form method="POST" action="?/upload" enctype="multipart/form-data">
  <input type="file" name="pdf" accept="application/pdf" required />
  <button type="submit">Hochladen</button>
</form>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}
{#if form?.success}
  <p style="color: green;">Upload erfolgreich!</p>
{/if}

<h2>Meine PDFs</h2>
<ul>
  {#each data.pdfs as pdf}
    <li>
      {pdf.filename}
      <a href={pdf.filepath} target="_blank" download>Herunterladen</a>
    </li>
  {/each}
</ul>