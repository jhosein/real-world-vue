<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard></EventCard>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
export default {
  //Import nested components
  components: {
    //Shorthand for EventCard: EventCard
    EventCard
  }
};
</script>
