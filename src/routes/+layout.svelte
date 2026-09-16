<script>
  import './layout.css';
  let { children } = $props();
</script>

<div class="min-h-screen bg-stone-50 text-slate-800">
  <div class="flex justify-between items-center max-w-2xl mx-auto px-6 pt-5 text-sm">
    <a href="/" class="font-semibold text-slate-700 hover:text-orange-700 no-underline">PDF Management</a>
  </div>

  <div class="max-w-2xl mx-auto px-6 pt-12 pb-20">
    {@render children()}
  </div>
</div>