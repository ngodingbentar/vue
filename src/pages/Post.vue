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

<script>
  import PostDetails from '@/components/PostDetails.vue';

export default {
  name: 'PostsPage',
  components: { PostDetails }
}
</script>
