<script>
  import './layout.css';
  let { children, data } = $props();
</script>

<header class="border-b border-gray-200 bg-white">
  <div class="max-w-lg mx-auto px-6 py-4 flex justify-between items-center">
    <a href="/" class="font-semibold text-gray-900 no-underline">PDF Management</a>

    <nav class="flex items-center gap-3 text-sm">
      <a href="/" class="text-gray-600 hover:text-gray-900 no-underline">Home</a>

      {#if data.user}
        {#if data.user.role === 'admin'}
          <a href="/admin" class="text-gray-600 hover:text-gray-900 no-underline">Admin</a>
        {:else}
          <a href="/dashboard" class="text-gray-600 hover:text-gray-900 no-underline">Dashboard</a>
        {/if}
        <span class="text-gray-400">·</span>
        <span class="text-gray-500">{data.user.username}</span>
        <a
          href="/logout"
          class="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded no-underline hover:bg-gray-700"
        >
        
          Ausloggen
        </a>
      {:else}
        <a
          href="/login"
          class="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded no-underline hover:bg-gray-700"
        >
          Login
        </a>
      {/if}
    </nav>
  </div>
</header>

<div class="min-h-screen bg-gray-50">
  <div class="max-w-lg mx-auto px-6 py-10">
    {@render children()}
  </div>
</div>