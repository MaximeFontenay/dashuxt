<script lang="ts" setup>
const supabase = useSupabaseClient()
const loading = ref<boolean>(false)
const email = ref<string>('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value })
    if (error) throw error
    //TODO Add a toast message
    console.log('Check your email for the login link!')
  } catch (error) {
    //TODO Add a toast message
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="text-center">
    <h1>Connexion</h1>
    <h2 class="mt-6 font-medium">Connectez-vous grâce à un lien magique, directement dans votre adresse mail ✨</h2>
  </div>

  <form
    class="flex items-stretch gap-2 flex-col mx-auto w-[500px] p-6 rounded-lg border border-light bg-white/1 backdrop-blur-lg mt-10"
    @submit.prevent="handleLogin">
    <input class="p-2 rounded bg-slate-100 text-dark font-medium" type="email" placeholder="Your email"
      v-model="email" />
    <div>
      <input type="submit" class="block py-2 px-4 rounded border border-light w-full"
        :value="loading ? 'Chargement...' : 'Recevoir mon lien magique →'" :disabled="loading" />
    </div>
  </form>
</template>