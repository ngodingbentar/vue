<template>
  <div>
    <p>Post details</p>
    <Suspense>
      <template #default>
        <PostDetails />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script setup>
  import PostDetails from '@/components/PostDetails.vue';
</script>
