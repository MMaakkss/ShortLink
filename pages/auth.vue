<template>
  <div class="h-screen grid place-content-center">
    <div class="container">
      <div class="card">
        <div
          class="flex mx-auto justify-center items-center w-20 h-20 rounded-full border border-white/30 shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
        <button class="py-2 text-2xl px-6 rounded-full mt-6 btn" @click="loginWithGitHub">
          Continue with GitHub
        </button>
        <hr class="border-white/10 my-8" />
        <form>
          <div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                class="w-full py-1 px-2 rounded-lg mt-1"
                type="email"
                name="email"
                id="email"
                placeholder="email@gmail.com"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                class="w-full py-1 px-2 rounded-lg mt-1"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </div>
          <button type="submit" class="py-2 rounded-full mt-5 text-2xl px-6 w-full btn">
            Login
          </button>
        </form>
        <div class="text-white/70 text-center mt-3 text-xm">
          Don't have an account?
          <nuxt-link class="underline" to="/auth">Register</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const supabaseAuth = useSupabaseAuthClient();

const loginWithGitHub = () => {
	supabaseAuth.auth.signInWithOAuth({ provider: "github" })
}
</script>

<style scoped></style>
