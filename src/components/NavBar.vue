<template>
     <div class="items-center mx-auto max-w-md shadow-md bg-gray-100 rounded-md py-12 p-10 bg-white rounded-md" >
        <h1>Novo Usuario</h1>
        <form  >
            <div >
               
                <input type="text" class="border bg-gray-100 py-2 px-4 mt-4 mb-4 w-80 outline-none focus:ring-2 focus:ring-indigo-400 rounded"  placeholder="Username" >
            </div>
            <div >
                
                <input type="email" class="border bg-gray-100 py-2 px-4 mb-4 w-80 outline-none focus:ring-2 focus:ring-indigo-400 rounded"   placeholder="Email">
            </div>
            <div >
                
                <input type="password" class="border bg-gray-100 py-2 px-4 mb-4 w-80 outline-none focus:ring-2 focus:ring-indigo-400 rounded"   placeholder="Password" >
            </div>
            <button type="submit" class="w-80 mt-6 text-indigo-50 font-bold bg-purple-700 py-3 rounded-md hover:bg-indigo-500 transition duration-300 ">CADASTRAR</button>
        
        </form>
    </div>
</template>


<script>

export default {
  name: 'HelloWorld',

}
</script>
