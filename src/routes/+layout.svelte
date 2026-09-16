svelte
<script>
  import './layout.css';
  let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50">
  <div class="max-w-lg mx-auto px-6 pt-6 pb-3 flex justify-between items-center border-b border-gray-200">
    <a href="/" class="font-semibold text-gray-800 no-underline">PDF Management</a>
  </div>
  <div class="max-w-lg mx-auto px-6 pt-8 pb-20">
    {@render children()}
  </div>
</div>