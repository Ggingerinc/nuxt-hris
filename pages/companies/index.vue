<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
    <form class="w-full card">
      <div class="form-group">
        <label for="companies" class="text-grey">
          Companies
        </label>
        <select v-if="companies.data" v-model="selectedCompany" name="companies" id="companies"
                class="appearance-none input-field form-icon-chevron_down">
          <option value="" disabled>Select Company</option>
          <option v-for="company in companies.data.result.data" :key="company.id" :value="company.id">{{ company.name }}
          </option>
        </select>
        <p v-else>Loading...</p>
      </div>
      <button @click="create" type="button" class="w-full btn btn-primary mt-[14px]"></button>
      <NuxtLink :to="{name: 'companies-id', params: {id: this.selectedCompany}}"
                class="w-full btn btn-primary mt-[14px]">Continue
      </NuxtLink>
    </form>
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      companies: [],
      selectedCompany: ''
    }
  },
  async fetch () {
    this.companies = await this.$axios.get('/company?limit=100')
  },
  async createCompany() {
    return ""
  }
}
</script>
