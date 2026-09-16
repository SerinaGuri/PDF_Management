<script>
  let { data } = $props();
</script>

<div class="py-8">
  <h1 class="text-3xl font-semibold text-gray-900 max-w-md">
    Speichere und verwalte deine PDFs an einem Ort
  </h1>
  <p class="mt-3 text-gray-600 max-w-sm">
    Lade Dokumente hoch, ordne sie deinem Konto zu und greife jederzeit wieder darauf zu — einfach und sicher.
  </p>

  {#if !data.user}
    <div class="mt-6 flex gap-4">
      <a href="/login" class="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded no-underline hover:bg-gray-700">
        Einloggen
      </a>
      <a href="/register" class="text-gray-600 text-sm font-medium px-4 py-2 rounded border border-gray-300 no-underline hover:bg-gray-100">
        Registrieren
      </a>
    </div>
  {:else}
    <div class="mt-6">
      <a
        href={data.user.role === 'admin' ? '/admin' : '/dashboard'}
        class="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded no-underline hover:bg-gray-700"
      >
        Zu meinen PDFs
      </a>
    </div>
  {/if}
</div>

<div class="mt-4 pt-10 border-t border-gray-200 grid gap-8">
  <div>
    <h2 class="text-sm font-semibold text-gray-900">Hochladen</h2>
    <p class="text-sm text-gray-600 mt-1">
      Lade deine PDF-Dateien direkt über dein Konto hoch.
    </p>
  </div>

  <div>
    <h2 class="text-sm font-semibold text-gray-900">Zugriff</h2>
    <p class="text-sm text-gray-600 mt-1">
      Lade deine Dateien jederzeit wieder herunter, egal von wo.
    </p>
  </div>

  <div>
    <h2 class="text-sm font-semibold text-gray-900">Sicher</h2>
    <p class="text-sm text-gray-600 mt-1">
      Nur du siehst deine eigenen Dateien — außer du bist Administrator.
    </p>
  </div>
</div>