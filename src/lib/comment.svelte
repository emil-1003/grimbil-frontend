<script>
	export let name = "No Name"
	export let date = "No Date"
	export let comment = "No Comment"
</script>

<div class="mt-4 mb-4 bg-white shadow overflow-hidden sm:rounded-md">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {name}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {date}
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Comment:
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {comment}
          </dd>
        </div>
      </dl>
    </div>
</div>

<style>
    
</style>