<script lang="ts" setup>
const supabase = useSupabaseClient()
const loading = ref<boolean>(false)
const email = ref<string>('')

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    }
  })
  if (error) console.log(error)
}
</script>

<template>
  <div class="text-center">
    <h1>Connexion</h1>
    <h2 class="mt-6 font-medium">Connectez-vous grâce à un lien magique, directement dans votre adresse mail ✨</h2>
  </div>

  <div
    class="flex items-stretch gap-2 flex-col mx-auto w-[500px] p-6 rounded-lg border border-light bg-white/1 backdrop-blur-lg mt-10">
    <input class="p-2 rounded bg-slate-100 text-dark font-medium" type="email" placeholder="Your email"
      v-model="email" />
    <div>
      <button @click="signInWithOtp" type="button" class="block py-2 px-4 rounded border border-light w-full"
        :disabled="loading">{{ loading ? 'Chargement...' : 'Recevoir mon lien magique →' }}</button>
    </div>
  </div>
</template>