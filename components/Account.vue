<script lang="ts" setup>
type Profile = {
  username: string;
  website: string;
  avatar_url: string;
};

const supabase = useSupabaseClient();
const loading = ref<boolean>(true);
const username = ref<string>('');
const website = ref<string>('');
const avatar_path = ref<string>('');

const user = useSupabaseUser();

loading.value = true;

if (user.value) {
  const { data, error } = await supabase
    .from('profiles')
    .select('username, website, avatar_url')
    .eq('id', user.value.id)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
  } else if (data) {
    username.value = data.username;
    website.value = data.website;
    avatar_path.value = data.avatar_url;
  }
}

loading.value = false;

async function updateProfile() {
  try {
    loading.value = true;

    if (!user.value) throw new Error('User is not logged in');

    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    };

    const { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    });
    if (error) throw error;
  } catch (error: any) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

async function signOut() {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    user.value = null;
  } catch (error: any) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="user?.email ?? ''" disabled />
    </div>
    <div>
      <label for="username">Username</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="url" v-model="website" />
    </div>

    <div>
      <input type="submit" class="button primary block" :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading" />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>



<style scoped>
/* Ajoutez vos styles ici */
</style>
