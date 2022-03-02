<template>
  <form @submit="handleSubmit">
    <label>Название задачи:</label>
    <input v-model="title" type="text" />
    <label>Описание задачи:</label>
    <textarea v-model="details"> </textarea>
    <button>Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const project = {
          title: this.title,
          details: this.details,
          complete: false,
        }

        await fetch('http://localhost:3000/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(project),
        })

        await this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style>
form {
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
}
label {
  display: block;
  color: #666;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 18px;
}
textarea {
  border: 2px solid #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 110px;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
form button {
  display: block;
  margin: 20px auto 0;
  background-color: #3325b4;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
