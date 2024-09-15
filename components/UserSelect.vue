<template>
  <div>
    <label for="user-select">Select a User:</label>
    <select id="user-select" v-model="selectedUserId">
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.id }} {{ user.id }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';


// Reactive references for selected user and user list
const selectedUserId = ref<number | null>(null);
const users = ref([]); // Initialize users as a reactive reference

// Fetch users from the API when the component is mounted

  const { data, error } = await useFetch('/api/hello');
  
  if (error.value) {
    console.error('Error fetching users:', error.value);
  } else {
    users.value = data.value.result; // Assign fetched data to users
    console.log("Logging users",users,users.value); // Log the users for debugging
  
};
</script>

<style scoped>
.user-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  color: #333;
}

.user-list {
  list-style-type: none;
  padding: 0;
}

.user-list li {
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.user-list li:hover {
  background-color: #e0e0e0;
}

.selected {
  background-color: #a0d8e0; /* Highlight selected user */
  font-weight: bold;
}

.user-details {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 4px;
}
</style>

