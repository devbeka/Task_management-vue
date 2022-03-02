<template>
  <form @submit="handleSubmit">
    <label>Название задачи:</label>
    <input v-model="title" type="text" />
    <label>Описание задачи:</label>
    <textarea v-model="details"> </textarea>
    <button>Редактировать</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title:"",
      details: "",
    }
  },
  methods:{
     async handleSubmit() {
      try {
        await fetch('http://localhost:3000/projects/' + this.id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: this.title,
            details: this.details
          }),
        })
        await this.$router.push('/')
      }
      catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    fetch('http://localhost:3000/projects/' + this.id)
      .then(response => response.json())
      .then(json => {
        this.title = json.title
        this.details = json.details
      })
  },
}
</script>

<style></style>
