<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="make" class="block mb-2 text-sm font-medium text-gray-900">Car Make</label>
            <input type="text" id="make" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter car make" required>
        </div>
        <div>
            <label for="model" class="block mb-2 text-sm font-medium text-gray-900">Car Model</label>
            <input type="text" id="model" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter car model" required>
        </div>
        <div>
            <label for="year" class="block mb-2 text-sm font-medium text-gray-900">Car Year</label>
            <input type="number" min="1900" max="2024" step="1" id="year" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter car year" required>
        </div>
        <div>
            <label for="mileage" class="block mb-2 text-sm font-medium text-gray-900">Car Mileage</label>
            <input type="number" min="0" step="1" id="mileage" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter car mileage" required>
        </div>
        <div>
            <label for="hp" class="block mb-2 text-sm font-medium text-gray-900">Car Hoursepower</label>
            <input type="number" min="0" max="2000" step="1" id="hp" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter car hoursepower" required>
        </div>
        <div>
            <label for="plate" class="block mb-2 text-sm font-medium text-gray-900">License plate</label>
            <input type="text" id="plate" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter car hoursepower" required>
        </div>
    </div>
    <div class="mb-6">
        <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
        <textarea class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your text here"></textarea>
    </div>
    <div class="mb-6">
        <label for="images" class="block mb-2 text-sm font-medium text-gray-900">Upload Images</label>
        <input class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none" id="multiple_files" type="file" multiple>
    </div>
    <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md bg-blue-700 py-2 px-3 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 inline-block align-middle mr-2">
                    <path fill-rule="evenodd" d="M11 9V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"/>
                </svg>
            </span>
            Post
        </button>
    </div>
</form>