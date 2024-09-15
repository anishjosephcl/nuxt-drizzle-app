<template>
  <div>
    <h1>Select a User</h1>
    <user-select @input="handleUserSelect" />
    <p v-if="selectedUser">
      You selected: {{ selectedUser.firstName }} {{ selectedUser.lastName }}
    </p>
  </div>
</template>

<script setup>
import UserSelect from '@/components/UserSelect.vue';
import { ref } from 'vue';

const selectedUser = ref(null);

const handleUserSelect = (userId) => {
  selectedUser.value = users.value.find((user) => user.id === userId);
};
</script>