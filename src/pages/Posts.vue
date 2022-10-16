<template>
  <div>
    <Suspense>
      <template #default>
        <PostsList :text="text" @changeProps="changeProps" />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import PostsList from '@/components/PostsList.vue';
import {ref} from 'vue';
const text = ref("hah apa")
const changeProps = value => {
  console.log('change props', value);
  text.value = value;
}
</script>
